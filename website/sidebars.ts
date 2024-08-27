import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";
import { faL } from "@fortawesome/free-solid-svg-icons";
import { link } from "fs";

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
    // "development",
    // "installation",
    //     "algolia",    

    {
      label: "Getting started",
      type: "category",
      link: {
        type: "generated-index",
        slug: "/getting-started",
        description: "The SpaceHub in-depth. Let's get started!",
      },
      collapsed: false,
      collapsible: true,
      items: [
        //
        // 'installation',

        // 'website-configuration/configuration',
        // 'deployment',
        // 'algolia',

        // {
        //   type: 'html',
        //   value: '<img src="/img/logo/spacehub-x-logo.png" alt="LoGo" />',
        //   defaultStyle: true,
        // },
        
        // {
        //   type: "html",
        //   value: "Core Concept",
        //   className: "sidebar-title",
        // },
    
        {
          type: "category",
          label: "Configuration",
          link: {
            type: "doc",
            id: "website-configuration/index",
          },
          items: [
            "website-configuration/plugins-config",
            "website-configuration/virtual-environment",
          ],
        },
        {
          type: "category",
          label: "Content Creation",
          link: {
            type: "generated-index",
            slug: "/content-creation",
            description:
              "This section covers the standard styling and formatting guidelines for creating docs, pages, and blog articles to ensure consistency and clarity.",
          },
          items: [
            "content-creation/create-docs",
            "content-creation/create-pages",
            "content-creation/create-blog",
          ],
        },
        {
          type: "category",
          label: "Deployment",
          link: {
            type: "generated-index",
            slug: "/custom-deployment",
            description:
              "This section outlines the custom deployment configuration of this website for GitHub Pages and Cloudflare Pages deployments and assumes that you have knowledge of package managers, continuous integration, and workflows.",
          },
          items: [
            "custom-deployment/deploy-locally",
            "custom-deployment/deploy-to-github-pages",
            "custom-deployment/deploy-to-cloudflare-pages",
          ],
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
      label: "Cheat Sheets",
      collapsed: true,
      collapsible: true,
      link: {
        type: "generated-index",
        slug: "/cheat-sheets",
        description: "Gists, references and more.",
      },
      items: [
        "cheat-sheets/windows",
        "cheat-sheets/git",
        "cheat-sheets/conda",
        "cheat-sheets/batch",
        "cheat-sheets/mdx-react",
        // "cheat-sheets/django",
      ],
    },
    // {
    //   type: "link",
    //   label: "Visit", // The link label
    //   href: "https://mkeithx.github.io", // The external URL
    // },
  ],

  devops: [
    "devops/index",
    // 'devops/key-principles',
    "devops/troubleshoot-like-a-boss",
    {
      type: "category",
      label: "Microsoft 365",
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
            // 'devops/admin-center/training/'
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
      items: [
        "devops/snippets/tech-notes",
        "devops/snippets/email-templates",
        // 'devops/snippets/',
      ],
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
        // 'devops/troubleshoot/exhange-archiving',
        "devops/troubleshoot/windows-utilities",
        "devops/troubleshoot/windows-hardware-issues",
        "devops/troubleshoot/windows-network-issues",
        "devops/troubleshoot/ms-teams",
        // 'devops/troubleshoot/'
      ],
    },
    "devops/glossary",
  ],
};

export default sidebars;
