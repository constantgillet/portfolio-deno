import { Project, Projects } from "../global.ts";
import * as mod from "https://deno.land/std@0.155.0/encoding/front_matter.ts";

const projectsLocation = "./content/projects";
const decoder = new TextDecoder("utf-8");

export async function getLastProjects(limit: number = 3) {
    //Get files list
    const projects: Projects = [];

    for (const dirEntry of Deno.readDirSync(projectsLocation)) {
        const fileContent = await Deno.readFile(`${projectsLocation}/${dirEntry.name}`);

        const data = decoder.decode(fileContent);

        const { body, attrs }: mod.Extract<any> = mod.extract(data);

        const project: Project = {
            id: dirEntry.name.slice(0, dirEntry.name.length - 3),
            title: attrs?.title,
            previewImage: attrs?.preview_image,
            date: new Date(attrs?.date),
            image: attrs?.image,
            content: body,
        };

        projects.push(project);
    }

    return projects;
}

/**
 *
 * @param id slug id of the project
 */
export async function getProject(id: string): Promise<Project> {
    try {
        const fileContent = await Deno.readFile(`${projectsLocation}/${id}.md`);
        const data = decoder.decode(fileContent);

        const { body, attrs }: mod.Extract<any> = mod.extract(data);

        const Project: Project = {
            id: id,
            title: attrs?.title,
            previewImage: attrs?.preview_image,
            date: new Date(attrs?.date),
            image: attrs?.image,
            content: body,
        };

        return Project;
    } catch (error) {
        throw new Error(error);
    }
}
