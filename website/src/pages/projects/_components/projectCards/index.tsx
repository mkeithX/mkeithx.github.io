import { ProjectData } from "@site/src/components/ProjectCards/Projects";

export const dataDir: string = 'img/projects';

export const projects: ProjectData[] = [
    {
        title: "Python",
        description: "Code samples written in Python.",
        role: "Dev",
        url: "/docs/learn/python",
        image: `${dataDir}/download.png`,
    },
    {
        title: "HTML",
        description: "Explore the fundamental concepts of HTML",
        role: "Dev",
        url: "/docs/learn/html",
        image: `${dataDir}/download.png`,
    },

    {
        title: "React",
        description: "React live code editing",
        role: "Dev",
        url: "/docs/learn/react-live-demo",
        image: `${dataDir}/download.png`,
    }
];
