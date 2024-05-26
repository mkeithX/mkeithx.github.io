import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  mySidebar: [
    "the-keyword",
    {
      label: "Getting started",
      type: "category",
      link: {
        type: "generated-index",
        slug: 'getting-started',
        description: 'This section covers the following:'
      },
      collapsed: false,
      items: [
        'configuration',
        {
          type: 'category',
          label: 'API',
          link: {
            type: 'doc',
            id: 'api/index',
          },
          items: [
            
            {
              type: 'category',
              label: 'Deployment',
              collapsed: true,
              link: {
                type: 'generated-index',
                slug: 'api/deployment'
              },
              items: [
                'api/deployment/cli',
                'api/deployment/github-actions'
              ]
            },
            {
              type: 'category',
              label: 'Styling',
              collapsed: true,
              link: {
                type: 'generated-index',
                slug: 'api/styling'
              },
              items: [
                'api/styling/mdx-react',
              ]
            },
            {
              type: 'category',
              label: 'Algolia',
              collapsed: true,
              link: {
                type: 'generated-index',
                slug: 'api/algolia',
              },
              items: [
                'api/algolia/docsearch',
                'api/algolia/crawlers',
              ]
            }
          ],
        }
      ],
    },
    {
      type: "category",
      label: "Guides",
      collapsed: true,
      collapsible: true,
      link: {
        type: 'generated-index',
        title: 'Basic Guides',
        slug: '/guides',
        description:
          "This section covers the following topics:",
        keywords: ['guides'],
      },
      items: [
        {
          type: "autogenerated",
          dirName: "guides",
        },
      ],
    },
// repo
    {
      type: "category",
      label: "Examples",
      collapsed: true,
      collapsible: true,
      items: [
        "repo/python-starters",
        "repo/flask-tutorials",
        "repo/django-custom-user",
      ],
    },
    // {
    //   type: 'link',
    //   href: '/feature-requests',
    //   label: 'Feature Requests',
    // },
    // 'contributing',
  ],



  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
