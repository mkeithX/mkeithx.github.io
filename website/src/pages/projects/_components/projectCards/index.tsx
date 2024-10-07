import { ProjectData } from "@site/src/components/ProjectCards/Projects";

// Explicitly type the dataDir variable
export const dataDir: string = 'img/projects';

// Explicitly type the projects array
export const projects: ProjectData[] = [
    {
        title: "django-crud-demo",
        description: "Demonstrating simple crud application built with Django.",
        url: "https://github.com/mkeithX/django-crud-demo",
        image: `${dataDir}/django-crud-demo.png`,
    },
    {
        title: "Python Starters",
        description: "Basic Python examples for starters.",
        url: "https://github.com/mkeithX/python-starters",
        image: `${dataDir}/ms-banner.png`,
    },
    // {
    //     title: "MKX Website",
    //     description: "A unified docs for IT Developers and Astronomers.",
    //     url: "https://mkeithx.pages.dev",
    //     image: `${dataDir}/ms-banner.png`,
    // },
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
        title: "Flask Tutorial - Demo",
        description: "Building web applications with Python.",
        url: "https://github.com/mkeithX/flask-tutorial-demo",
        image: `${dataDir}/ms-banner.png`,
    },
];
