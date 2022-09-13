import { Article } from "../global.ts";

export interface ArticleCardProps {
    article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
    return (
        <article className="col-span-12 sm:col-span-4 my-4 sm:my-0">
            <a title="Article" href={`/posts/${article.id}`}>
                <h3 className="font-bold uppercase mb-4 text-lg">{article.title}</h3>
            </a>
            <div className="border-black border-t border-b text-center font-light text-sm py-1">
                {article.date.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </div>
            <p className="mt-3">{article.description}</p>
            <div className="mt-3">
                <a title="Article" className="font-bold underline" href={`/posts/${article.id}`}>
                    Read more
                </a>
            </div>
        </article>
    );
}
