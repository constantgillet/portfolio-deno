export interface Article {
    id: string;
    title: string;
    description: string;
    image: string;
    content: string;
    date: Date;
}

export type Articles = Array<Article>;

export interface Project {
    id: string;
    title: string;
    previewImage: string;
    image: string;
    content: string;
    date: Date;
}

export type Projects = Array<Project>;
