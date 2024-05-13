import React from "react";

const projects = [
    {
        category: "Project",
        title: "Kitiplex Website",
        subtitle: "The quick brown fox",
        imageUrl: 'img/projects/kitiplex-web.png',
        slug: "#kitiplex",
        description: (
            <>
            <p>Central hub for contributors, authors, and maintainers within the Kitimi ecosystem, where we strive to articulate the documentation for all open-source projects and demos hosted on this website.</p>
            
            </>
        ),
        links: [
            {
                name: "GitHub Repo",
                link: "https://github.com/kitiplex/kitiplex.github.io"
            },
            {
                name: "website",
                link: "https://kitiplex.github.io/",
            }
        ]
    },
    {
        category: "Website",
        title: "This website",
        slug: "#me",
        imageUrl: 'img/ms-banner.png',
        subtitle: "The quick brown fox",
        tech: "Docusaurus, TypeScript",
        description: (
            <>
            <p>Description of this project.</p>

            </>
        ),
        links: [
            {
                name: "Website",
                link: 'https://mkeithx.github.io/'
            }
        ]
    },
    {
        category: "Website",
        title: "This website",
        slug: "#me",
        imageUrl: 'img/ms-banner.png',
        subtitle: "The quick brown fox",
        description: (
            <>
            Description of this project.
            </>
        ),
        period: "October 2020 to Present",
        tech: "Docusaurus 3.0, ReactJS",
    },
    {
        category: "Website",
        title: "This website",
        slug: "#me",
        imageUrl: 'img/ms-banner.png',
        subtitle: "The quick brown fox",
        description: (
            <>
            Description of this project.
            </>
        ),
        period: "October 2020 to Present",
        tech: "Docusaurus 3.0, ReactJS",
    },
]

export default projects;