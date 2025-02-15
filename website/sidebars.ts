import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

/**
 * Sidebar configuration for organized documentation.
 * Includes categories, subcategories, and documents.
 */
const sidebars: SidebarsConfig = {
  mySidebar: [
    // Root-level documents
    "introduction",

    {
      type: "category",
      label: "Getting Started",
      collapsed: false,
      items: [
        "cli",
        "downloads",
        "aka-ms",
        "mailbox-archive",

        {
          type: "category",
          label: "How-Tos",
          collapsed: true,
          link: { type: "doc", id: "how-tos/index" },
          items: [
            "how-tos/fix-ms-teams",
            "how-tos/fix-connectivity",
            "how-tos/fix-windows-hardware-issues",
          ],
        },

        {
          type: "category",
          label: "Gists",
          collapsed: true,
          link: { type: "generated-index", slug: "/gists", description: "Quick examples, utilities, and demos." },
          items: [
            "gists/gists-git",
            "gists/gists-powershell",
            {
              type: "category",
              label: "Extras",
              collapsed: true,
              link: { type: "generated-index", slug: "/extras" },
              items: ["gists/extras/quick-responses", "gists/extras/misc"],
            },
          ],
        },
      ],
    },

    
    {
      type: "category",
      label: "DevOps",
      collapsed: true,
      link: { type: "doc", id: "devops/index" },
      items: [
        {
          type: "category",
          label: "Microsoft 365",
          collapsed: true,
          link: { type: "doc", id: "devops/admin-center/index" },
          items: [
            "devops/admin-center/emergency-accounts",
            {
              type: "category",
              label: "Trainings",
              description: "Admin & User guides",
              link: { type: "generated-index", slug: "devops/admin-center/training" },
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
          label: "User Stories",
          collapsed: true,
          link: { type: "doc", id: "devops/user-stories/index" },
          items: [
            "devops/user-stories/ticket-refinement",
            "devops/user-stories/ticket-priority",
            "devops/user-stories/service-level-agreement",
          ],
        },

        {
          type: "category",
          label: "Snippets",
          collapsed: true,
          link: { type: "doc", id: "devops/snippets/index" },
          items: [
            "devops/snippets/tech-notes",
            "devops/snippets/email-templates",
          ],
        },

        "devops/glossary",
        "devops/sdlc",
      ],
    },

    {
      type: "category",
      label: "Configuration",
      collapsed: true,
      link: { type: "doc", id: "configs/index" },
      items: [
        "configs/guides/docs/create-doc",
        "configs/guides/docs/docs-create-page",
        "configs/guides/docs/blog",
        {
          type: "category",
          label: "Deployment",
          collapsed: true,
          link: { type: "generated-index", slug: "/deployment", description: "Deployment configuration (GitHub & Cloudflare)" },
          items: [
            "configs/guides/deployment/deploy-cloudflare",
            "configs/guides/deployment/deploy-github",
          ],
        },

        {
          type: "category",
          label: "Plugins",
          collapsed: true,
          link: { type: "generated-index", slug: "/plugins" },
          items: ["configs/guides/plugins/plugins-algolia"],
        },

        {
          type: "category",
          label: "Configs",
          collapsed: true,
          link: { type: "generated-index", slug: "/guides", description: "Guidelines for creating docs, pages, and blog articles." },
          items: [],
        },
      ],
    },
  ],

  // Example Sidebar (for demos or specific examples)
  exampleSidebar: [
    "examples/index",
    "examples/quick-start-guide",

    {
      type: "category",
      label: "Python",
      collapsed: true,
      link: { type: "generated-index", slug: "/examples/python", description: "Python short examples" },
      items: [
        "examples/python/bmi-calculator",
        "examples/python/fibonacci-sequence",
        "examples/python/password-generator",
        {
          type: "category",
          label: "Django",
          collapsed: true,
          items: ["examples/python/django/crud-demo"],
        },
      ],
    },

    {
      type: "category",
      label: "READMEs",
      collapsed: true,
      link: { type: "generated-index", slug: "/examples/setup", description: "Project setup guides" },
      items: [
        "examples/setup/python-starters",
        "examples/setup/flask-tutorials",
      ],
    },
  ],

  tutorialSidebar: [
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
          link: { type: "generated-index", description: "Learn Version Control" },
          items: [
            "tutorials/version-control/basic-workflow-github",
            "tutorials/version-control/create-a-github-repo",
          ],
        },

        {
          type: "category",
          label: "Python",
          collapsed: true,
          link: { type: "generated-index", slug: "tutorials/python", description: "Python Fundamentals" },
          items: [
            "tutorials/python/classes",
            "tutorials/python/functions",
            "tutorials/python/data-structures",
            "tutorials/python/modules",
            {
              type: "category",
              label: "Extras",
              collapsed: true,
              link: { type: "generated-index", slug: "tutorials/python/extras", description: "Learn more" },
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
  ],

};

export default sidebars;
