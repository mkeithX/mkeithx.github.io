import { ProjectData } from "@site/src/components/ProjectCards/Projects";

export const dataDir: string = 'img/projects';

export const projects: ProjectData[] = [
    {
        title: "Python for Starters",
        description: "Various python mini apps for starters.",
        url: "/docs/examples/python",
        image: `${dataDir}/default.png`,
    },
    {
        title: "django-crud-demo",
        description: "Demonstrating simple crud application built with Django.",
        url: "https://github.com/mkeithX/django-crud-demo",
        image: `${dataDir}/django-crud-demo.png`,
    },
    {
        title: "Flask Tutorial - Demo",
        description: "Building web applications with Python.",
        url: "https://github.com/mkeithX/flask-tutorial-demo",
        image: `${dataDir}/default.png`,
    },
    {
        title: "MKX Website",
        description: "A unified docs for IT Developers and Astronomers.",
        url: "https://mkeithx.pages.dev",
        image: `${dataDir}/default.png`,
    },
    {
        title: "Kitimi Platforms",
        description: "Hub for contributors, authors and maintainers within the platform.",
        url: "https://github.com/kitiplex",
        image: `${dataDir}/ms-banner-kitiplex.png`,
    },
    // {
    //     title: "IUIU",
    //     description: "Knowledge Base for awesome people by awesome people.",
    //     url: "https://kitiplex.github.io/iuiu",
    //     image: `${dataDir}/sc-iuiu.png`,
    // },
    {
        title: "Kitiplex Website",
        description: "Building Innovative Solutions",
        url: "https://kitiplex.pages.dev",
        image: `${dataDir}/default.png`
    },

];
