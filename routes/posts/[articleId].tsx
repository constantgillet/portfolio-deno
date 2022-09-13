import { Handlers, PageProps } from "$fresh/server.ts";
import HeadMeta from "../../components/HeadMeta.tsx";
import Layout from "../../components/Layout.tsx";
import { Article } from "../../global.ts";
import { getArticle } from "../../utils/articles.ts";
import * as gfm from "https://deno.land/x/gfm@0.1.23/mod.ts";
import Container from "../../components/Container.tsx";
import TitleSeparator from "../../components/TitleSeparator.tsx";
import Separator from "../../components/Separator.tsx";

export const handler: Handlers<Article> = {
    async GET(_, ctx) {
        const { articleId } = ctx.params;

        try {
            const article = await getArticle(articleId);
            return ctx.render(article);
        } catch (error) {
            return ctx.renderNotFound();
        }
    },
};

export default function ArticlePage({ data }: PageProps<Article>) {
    const html = gfm.render(data.content);

    return (
        <>
            <HeadMeta title={data.title + " | Constant GILLET"} description={data.description} />
            <Layout>
                <Container>
                    <div class="flex justify-center flex-col">
                        {data?.image ? (
                            <img src={`/images/articles/${data.image}`} width={852} height={425} alt="" />
                        ) : (
                            <div></div>
                        )}

                        <h1 class={"text-center text-2xl font-bold mt-6"}>{data.title}</h1>
                        <TitleSeparator />
                    </div>
                    <div class="max-w-fit mx-auto my-7 px-5 border-black border-t border-b text-center font-light text-sm">
                        {data?.date
                            ? data.date.toLocaleDateString("en-US", {
                                  weekday: "long",
                                  year: "numeric",
                                  month: "long",
                                  day: "numeric",
                              })
                            : ""}
                    </div>
                    <Separator className="mb-6" />
                    <div
                        dangerouslySetInnerHTML={{ __html: html }}
                        class="post-content mx-auto max-w-[682px] px-4"
                    ></div>
                </Container>
            </Layout>
        </>
    );
}
