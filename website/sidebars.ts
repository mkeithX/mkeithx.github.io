import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { faTemperatureEmpty } from "@fortawesome/free-solid-svg-icons";

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
    "introduction",
    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        'cli',
        'aka-ms',
        'mailbox-archive',
        {
          type: 'category',
          label: 'How tos',
          collapsed: true,
          link: {
            type: 'doc',
            id: "how-tos/index"
          },
          items: [
            // 'how-tos/fix-cloud-pc',
            'how-tos/fix-ms-teams',
            'how-tos/fix-connectivity',
            'how-tos/fix-windows-hardware-issues',

            // 'how-tos/check-pc-performance',
            
          ]
        },
        {
          type: "category",
          label: "Gists",
          collapsed: true,
          link: {
            type: "generated-index",
            slug: "/gists",
            description: "Quick examples, useful utilities and demos.",
          },
          items: [
    
            // "gists/gists-windows",
            "gists/gists-git",
            "gists/gists-powershell",
            {
              type: "category",
              label: "Extras",
              collapsed: true,
              link: {
                type: "generated-index",
                slug: "/extras",
              },
              items: [
                "gists/extras/quick-responses",
                "gists/extras/misc",
                // "gists/extras/live-react",
              ],
            },
          ],
        },
      ]
    },
    
    
    {
      type: "category",
      label: "Tutorials",
      collapsible: true,
      link: {
        type: "generated-index",
        slug: "/tutorials",
        description: "Basic tutorials.",
        keywords: ["tutorials"],
      },
      items: [
        {
          type: "category",
          label: "Version Control",
          link: {
            type: "generated-index",
            description: "Learn Version Control",
          },
          items: [
            "tutorials/version-control/basic-workflow-github",
            "tutorials/version-control/create-a-github-repo",
          ]
        },

        {
          type: "category",
          collapsed: true,
          label: "Python",
          link: {
            type: "generated-index",
            slug: "tutorials/python",
            description: "Python Fundamentals",
          },
          items: [
            "tutorials/python/classes",
            "tutorials/python/functions",
            "tutorials/python/data-structures",
            "tutorials/python/modules",
            {
              label: "Extras",
              type: "category",
              collapsed: true,
              link: {
                type: "generated-index",
                slug: "tutorials/python/extras",
                description: "Learn more",
              },
              items: [
                "tutorials/python/extras/install-python",
                "tutorials/python/extras/virtual-envs",
              ],
            },
          ],
        },
        {
          type: "category",
          collapsed: true,
          label: "HTML",
          link: {
            type: "generated-index",
            slug: "tutorials/html",
            description: "HTML Fundamentals",
          },
          items: [
            "tutorials/html/intro-to-html",
            "tutorials/html/forms-in-html",
            "tutorials/html/advanced-techniques",
            "tutorials/html/accessibility",
          ],
        },
      ],
    },
    // DevOps
    {
      type: "category",
      label: "DevOps",
      collapsed: true,
      link: {
        type: "doc",
        id: "devops/index",
      },
      items: [
        {
          type: "category",
          label: "Microsoft 365",
          collapsed: true,
          link: {
            type: "doc",
            id: "devops/admin-center/index",
          },
          items: [
            // "devops/admin-center/aka-ms",
            "devops/admin-center/emergency-accounts",
            
            {
              type: "category",
              label: "Trainings",
              description: "Training and comprehensive guides for Admin & Users",
              link: {
                type: "generated-index",
                slug: "devops/admin-center/training",
              },
              items: [
                "devops/admin-center/training/email-management",
                "devops/admin-center/training/install-via-intune",
                "devops/admin-center/training/conditional-access",
              ],
            },
          ],
        },
        {
          type: 'category',
          collapsed: true,
          label: 'User Stories',
          link: {
            type: 'doc',
            id: 'devops/user-stories/index',
          },
          items: [
            'devops/user-stories/ticket-refinement',
            'devops/user-stories/ticket-priority',
            'devops/user-stories/service-level-agreement',
          ]
        },
        {
          type: "category",
          label: "Snippets",
          collapsed: true,
          link: {
            type: "doc",
            id: "devops/snippets/index",
          },
          items: ["devops/snippets/tech-notes", "devops/snippets/email-templates"],
        },
        // {
        //   type: "category",
        //   label: "Guides & Workarounds",
        //   collapsed: true,
        //   link: {
        //     type: "generated-index",
        //     slug: "/devops/guides-and-workarounds",
        //     description: "Basic troubleshooting guide and workarounds.",
        //   },
        //   items: [
        //     "devops/troubleshoot/windows-hardware-issues",
        //   ],
        // },
        
        // "devops/troubleshoot-like-a-boss",
        "devops/glossary",
        "devops/sdlc",
      ]
    },
    // {
    //   type: 'link',
    //   label: 'Le Me',
    //   href: '/me'
    // },
    {
      type: "category",
      collapsed: true,
      label: "Configuration",
      link: {
        type: "doc",
        id: "configs/index",
      },
      items: [
        "configs/guides/docs/create-doc",
        "configs/guides/docs/docs-create-page",
        "configs/guides/docs/blog",
        {
          type: "category",
          label: "Deployment",
          collapsed: true,
          link: {
            type: "generated-index",
            slug: "/deployment",
            description:
              "This section outlines the custom deployment configuration of this website for GitHub Pages and Cloudflare Pages deployments and assumes that you have knowledge of package managers, continuous integration, and workflows.",
            keywords: ["deployments"],
          },
          items: [
            "configs/guides/deployment/deploy-cloudflare",
            "configs/guides/deployment/deploy-github",
          ],
        },
        {
          type: "category",
          label: "Plugins",
          collapsed: true,
          link: {
            type: "generated-index",
            slug: "/plugins",
          },
          items: ["configs/guides/plugins/plugins-algolia"],
        },
        {
          type: "category",
          label: "Configs",
          link: {
            type: "generated-index",
            description:
              "This section covers the standard styling and formatting guidelines for creating docs, pages, and blog articles to ensure consistency and clarity",
            slug: "/guides",
            keywords: ["guides"],
          },
          items: [],
        },
      ],
    },
  ],

  exampleSidebar: [
    "examples/index",
    "examples/quick-start-guide",
    {
      type: "category",
      label: "Python",
      collapsed: true,
      link: {
        type: "generated-index",
        slug: "/examples/python",
        description: "Python short examples",
      },
      items: [
        "examples/python/bmi-calculator",
        "examples/python/fibonacci-sequence",
        "examples/python/password-generator",
        {
          type: "category",
          label: "Django",
          collapsed: true,
          items: [
            "examples/python/django/crud-demo",
          ]
        },
      ]
    },
    // {
    //   type: "category",
    //   label: "Django",
    //   collapsed: true,
    //   link: {
    //     type: "generated-index",
    //     slug: "/examples/django",
    //     description: "Django examples",
    //   },
    //   items: [
    //     "examples/django/crud-demo",
    //   ]

    // },
    {
      type: "category",
      label: "READMEs",
      collapsed: true,
      link: {
        type: "generated-index",
        slug: "/examples/setup",
        description: "Project setup guides and more.",
      },
      items: [
        "examples/setup/python-starters",
        "examples/setup/flask-tutorials"
      ]
    },


  ],


  // myHtmlSidebar: [
  //   {
  //     type: 'html',
  //     value: '<img src="sponsor.png" alt="Sponsor" />', // The HTML to be rendered
  //     defaultStyle: true, // Use the default menu item styling
  //   },
  // {
  //   type: 'html',
  //   value: 'Beta',
  //   className: 'sidebar-title',
  // },
  // ],
};

export default sidebars;
