import Layout from "../components/Layout.tsx";
import HeadMeta from "../components/HeadMeta.tsx";
import Container from "../components/Container.tsx";
import SectionTitle from "../components/SectionTitle.tsx";
import ArticleCard from "../components/ArticleCard.tsx";
import Separator from "../components/Separator.tsx";
import { getLastArticles } from "../utils/articles.ts";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Articles, Projects } from "../global.ts";
import { getLastProjects } from "../utils/projects.ts";
import ProjectCard from "../components/ProjectCard.tsx";

type HomePagePros = {
    articles: Articles;
    projects: Projects;
};

export const handler: Handlers<HomePagePros> = {
    async GET(_, ctx) {
        try {
            const articles = await getLastArticles(3);
            const projects = await getLastProjects(3);

            return ctx.render({ articles, projects });
        } catch (error) {
            return ctx.render();
        }
    },
};

export default function Home({ data }: PageProps<HomePagePros>) {
    const { articles, projects } = data;

    return (
        <>
            <HeadMeta />
            <Layout>
                <div class="min-h-screen">
                    <Container>
                        <div class="grid grid-cols-12 gap-6">
                            <div class="col-span-12 md:col-span-6 flex justify-center items-center flex-col mt-8 md:mt-0">
                                <div class="relative w-fit">
                                    <div class="bg-white  border border-black w-full h-full absolute top-[6px] left-[6px]"></div>
                                    <h1 class="font-bold dark:text-white text-4xl md:text-5xl w-fit py-4 px-6 border border-black dark:border-white bg-white dark:bg-black relative">
                                        Software
                                    </h1>
                                </div>

                                <div class="relative w-fit mt-6 translate-x-[-7px] translate-y-[-7px] rotate-[8deg]">
                                    <div class="bg-black w-full h-full absolute top-[6px] left-[6px]"></div>
                                    <h1 class="font-bold  text-4xl md:text-5xl w-fit py-4 px-6 border border-black  bg-white relative">
                                        Engineer
                                    </h1>
                                </div>
                                <div class="flex w-full justify-center md:justify-start">
                                    <p class="font-medium text-2xl max-w-[337px] mt-12">
                                        This website is about what I have created, what inspires me.
                                    </p>
                                </div>
                            </div>
                            <div class="col-span-12 md:col-span-6 flex justify-center md:justify-end">
                                <img
                                    src="/images/index-background.png"
                                    width={384}
                                    height={485}
                                    alt="illustration"
                                />
                            </div>
                        </div>
                        <SectionTitle>My last articles</SectionTitle>
                        <section class="mt-10 grid grid-cols-12 gap-6" id="articles">
                            {articles.map((article, index) => (
                                <ArticleCard key={index} article={article} />
                            ))}
                        </section>
                        <div class="mt-8 flex justify-center">
                            <a title="Article" class="font-bold underline text-center" href={"/#"}>
                                All my articles
                            </a>
                        </div>
                        <Separator className="my-14" />
                        <SectionTitle>My projects</SectionTitle>
                        <section class="mt-10 grid grid-cols-12 gap-8" id="projects">
                            {projects.map((projet, index) => (
                                <ProjectCard key={index} project={projet} />
                            ))}
                        </section>
                        <div class="mt-8 flex justify-center">
                            <a title="Article" class="font-bold underline text-center" href={"/#"}>
                                All my projects
                            </a>
                        </div>
                    </Container>
                </div>
            </Layout>
        </>
    );
}
