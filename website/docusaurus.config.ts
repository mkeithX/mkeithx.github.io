import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";

import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as BlogOptions } from "@docusaurus/plugin-content-blog";


import { socialProfiles } from "./social.json";

require('dotenv').config()

// console.log(process.env)

const copyright = `Copyright © ${new Date().getFullYear()} • <a href='me' target='_blank'><b>Keith Tan</b></a> and <a href='#' target='_blank'><b>Contributors</b></a>. `;


const admonitionsConfig = {
  admonitions: {
    keywords: [
      "info",
      "success",
      "danger",
      "note",
      "tip",
      "warning",
      "important",
      "caution",
      "security",
      "credit",
      "discord",
      "docusaurus",
      "release"
    ],
  },
};

const commonRemarkConfig = {
  remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
  rehypePlugins: [rehypeKatex],
};

const commonDocsConfig = {
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  ...admonitionsConfig,
  ...commonRemarkConfig,
};

const config: Config = {
  title: "mkeithx",
  tagline:
    "Docs for IT Developers, Helpdesk and Astronomers.",
  favicon: "icons/favicon.ico",
  titleDelimiter: "•",
  url: "https://mkeithx.github.io",
  baseUrl: "/",
  organizationName: process.env.ORGANIZATION_NAME,
  projectName: process.env.PROJECT_NAME,
  deploymentBranch: process.env.DEPLOYMENT_BRANCH,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,


  customFields: {
    description: "A documentation website representing humanity from Dimension C-137 and beyond.",
    custom_tagline: "Building the web",
    GIT_USER: process.env.GIT_USER,
    USE_SSH: process.env.USE_SSH,
    GIT_USER_NAME: process.env.GIT_USER_NAME,
    GIT_USER_EMAIL: process.env.GIT_USER_EMAIL,
  },


  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV",
      crossorigin: "anonymous",
    },

  ],

  scripts: [
    {
      src: 'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.11/clipboard.min.js',
      async: true,
    },
    {
      src: "https://X2M5FPT6G9-dsn.algolia.net",
      rel: "preconnect",
      crossorigin: "anonymous",
      async: true,
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",

      {
        docs: {
          path: "docs",
          breadcrumbs: true,
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          ...commonDocsConfig,
        },

        blog: {
          path: "blog",
          blogTitle: "Recents",
          blogDescription: "News and updates from MKX SpaceHub.",
          routeBasePath: "blog",
          blogSidebarTitle: "What's new",
          blogSidebarCount: 'ALL',
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
          ...admonitionsConfig,
          ...commonRemarkConfig,
          postsPerPage: 'ALL',

          feedOptions: {
            type: "all",
            copyright,
          },
        } satisfies BlogOptions,

        pages: {
          path: "src/pages",
          routeBasePath: "",
          showLastUpdateTime: false,
          ...commonRemarkConfig,
          ...admonitionsConfig,
          mdxPageComponent: '@theme/MDXPage',
        },

        theme: {
          customCss: "./src/css/custom.css",
        },

        sitemap: {
          lastmod: "date",
          changefreq: null,
          priority: null,
          ignorePatterns: ['/tests/{blog,pages}/**','/tags/**'],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    './src/plugins/featureRequests/FeatureRequestsPlugin.js',
    [
      "content-docs",

      {
        id: "cosmos",
        path: "cosmos",
        routeBasePath: "cosmos",
        breadcrumbs: true,
        ...commonDocsConfig,
        sidebarPath: "./sidebarsCosmos.ts",
      } as DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        breadcrumbs: true,
        sidebarPath: "./sidebarsCommunity.ts",
        ...commonDocsConfig,
      } as DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "msp",
        path: "msp",
        routeBasePath: "msp",
        breadcrumbs: true,
        sidebarPath: "./sidebarsMsp.ts",
        ...commonDocsConfig,
      } as DocsOptions,
    ],
    
  ],
  

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },

    image: "img/banner/social-card.png",
    navbar: {
      style: "dark",
      hideOnScroll: true,
      title: "mkeithx",
      logo: {
        alt: "SiteLogo",
        src: "img/logo/logo-rnd-x.png",
        target: "_self",
        width: 32,
        height: 32,
      },
      items: [
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "mySidebar",
          label: "Documentation",
        },
        { to: "cosmos", label: "Space", position: "left" },
        { to: "blog", label: "Blog", position: "left" },
        {
          type: 'dropdown',
          label: 'Community',
          position: 'right',
          items: [
            {
              to: '/community',
              label: "Resources"
            },
            {
              to: '/msp',
              label: 'MSP'
            },
            {
              type: 'html',
              value: '<hr class="dropdown-separator">',
            },
            {
              label: 'NASA',
              href: 'https://eyes.nasa.gov/apps/solar-system/#/home'
            },
            {
              label: 'React',
              href: 'https://react.dev/',
            },      

          ],
        },
 
        {
          href: "https://github.com/mkeithX",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          type: "search",
          position: "right",
        },
      ],
    },

    algolia: {
      apiKey: "82fefaa9b089c4e0914d06335b19eb19",
      indexName: "mkeithxio",
      appId: "X2M5FPT6G9",
      contextualSearch: false,
      searchPagePath: "search",
      insights: true,
    },

    footer: {
      style: "dark",
      logo: {
        alt: "footerLogo",
        src: "img/logo/mkx-x-raw.png",
        href: "/",
        height: "50",
        width: "200",
        
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Space",
              to: "cosmos",
            },
            {
              label: "Guides",
              to: "docs/cheat-sheets",
            },
            {
              label: "Keyword",
              to: "docs",
            },
          ],
        },

        {
          title: "Info",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "Tags",
              to: "blog/tags",
            },

            {
              label: "Kitiplex",
              to: "community/kitiplex",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            socialProfiles.twitter,
            socialProfiles.facebook,
            socialProfiles.linkedin,
          ],
        },
        {
          title: "More",
          items: [
            {
              label: 'Cloudflare',
              href: 'https://dash.cloudflare.com/login'
            },
            {
              label: 'Vercel',
              href: 'https://vercel.com/'
            },
            {
              label: 'FB Developers',
              href: 'https://developers.facebook.com/'
            }
          ],
        },
      ],

      copyright,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        "powershell",
        "python",
        "java",
        "bash",
        "json",
        "batch",
        "yaml",
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
