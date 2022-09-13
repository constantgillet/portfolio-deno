import { Project } from "../global.ts";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <article class="group col-span-12 sm:col-span-4 bg-white  border border-black  p-3 ">
            <a title="Project" href={`/projects/${project.id}`}>
                <div class="border border-black  overflow-hidden">
                    <img
                        src={`/images/projects/${project.previewImage}`}
                        width="100%"
                        height={140}
                        alt="Project image"
                        class="group-hover:scale-110 transition-transform"
                    />
                </div>

                <h3 class="my-2">{project.title}</h3>
            </a>

            <a title="Projet" href={`/projects/${project.id}`} class="font-bold underline text-sm">
                Read more
            </a>
        </article>
    );
}
