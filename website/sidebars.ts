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
    "keyword",
    {
      type: "category",
      label: "Gists",
      collapsed: false,
      link: {
        type: "generated-index",
        slug: "/gists",
        description: "Quick examples, useful utilities and demos.",
      },
      items: [
        // "troubleshoot",
        "gists/gists-windows",
        "gists/gists-git",
        // "gists/gists-misc",
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
    {
      type: "category",
      collapsed: true,
      label: "Configuration",
      link: {
        type: "doc",
        id: "configs/index",
      },
      items: [
        // "configs/plugins-config",
        // "configs/api",
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
    {
      type: "category",
      label: "Examples",
      collapsed: true,
      collapsible: true,
      link: {
        type: "doc",
        id: "repo/index",
      },
      items: [
        "repo/python-starters",
        "repo/flask-tutorials",
        "repo/django-custom-user",
      ],
    },
    {
      type: "category",
      label: "Contributing",
      link: {
        type: "doc",
        id: "contributing/index",
      },
      items: [
        // "contributing/development-process",
        "contributing/reporting-issues",
        // "contributing/pull-request",

        {
          type: "link",
          label: "Feature Request",
          href: "/feature-requests",
          description: "Request a feature"
        }
      ]
    },
  ],

  devops: [
    "devops/index",
    // "devops/troubleshoot-like-a-boss",
    {
      type: "category",
      label: "Microsoft 365",
      collapsed: false,
      link: {
        type: "doc",
        id: "devops/admin-center/index",
      },
      items: [
        "devops/admin-center/aka-ms",
        "devops/admin-center/mailbox-archive",
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
      type: "category",
      label: "Snippets",
      collapsed: true,
      link: {
        type: "doc",
        id: "devops/snippets/index",
      },
      items: ["devops/snippets/tech-notes", "devops/snippets/email-templates"],
    },

    {
      type: "category",
      label: "Guides & Workarounds",
      collapsed: true,
      link: {
        type: "generated-index",
        slug: "/devops/guides-and-workarounds",
        description: "Basic troubleshooting guide and workarounds.",
      },
      items: [
        "devops/troubleshoot/cloud-pc",
        "devops/troubleshoot/powershell",
        "devops/troubleshoot/windows-utilities",
        "devops/troubleshoot/windows-hardware-issues",
        "devops/troubleshoot/windows-network-issues",
        "devops/troubleshoot/ms-teams",
      ],
    },
    "devops/glossary",
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
