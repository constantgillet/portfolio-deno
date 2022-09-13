import { Article, Articles } from "../global.ts";
import * as mod from "https://deno.land/std@0.155.0/encoding/front_matter.ts";

const articlesLocation = "./content/posts";
const decoder = new TextDecoder("utf-8");

export async function getLastArticles(limit: number = 3) {
    //Get files list
    let articles: Articles = [];

    for (const dirEntry of Deno.readDirSync(articlesLocation)) {
        const fileContent = await Deno.readFile(`${articlesLocation}/${dirEntry.name}`);

        const data = decoder.decode(fileContent);

        const { body, attrs }: mod.Extract<any> = mod.extract(data);

        const article: Article = {
            id: dirEntry.name.slice(0, dirEntry.name.length - 3),
            title: attrs?.title,
            description: attrs?.description,
            date: new Date(attrs?.date),
            image: attrs?.image,
            content: body,
        };

        articles.push(article);

        //Sort results by the older to newer
        articles = articles.sort((a, b) => b.date.getTime() - a.date.getTime());
    }

    return articles;
}

/**
 *
 * @param id slug id of the article
 */
export async function getArticle(id: string): Promise<Article> {
    //throw new Error("Article not found");

    try {
        const fileContent = await Deno.readFile(`./content/posts/${id}.md`);
        const data = decoder.decode(fileContent);

        const { body, attrs }: mod.Extract<any> = mod.extract(data);

        const article: Article = {
            id: id,
            title: attrs?.title,
            description: attrs?.description,
            date: new Date(attrs?.date),
            image: attrs?.image,
            content: body,
        };

        return article;
    } catch (error) {
        throw new Error(error);
    }
}
