import path from 'path';
import { themes as prismThemes } from "prism-react-renderer";
import { Config } from "@docusaurus/types";
import * as Preset from "@docusaurus/preset-classic";
import { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import { Options as BlogOptions } from "@docusaurus/plugin-content-blog";
import type {Options as PageOptions} from '@docusaurus/plugin-content-pages';
import { Options as IdealImageOptions } from '@docusaurus/plugin-ideal-image';
import type {Options as ClientRedirectsOptions} from '@docusaurus/plugin-client-redirects';
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import { socialProfiles } from "./social.json";

require('dotenv').config()

// console.log(process.env)
const organizationName = process.env.ORGANIZATION_NAME || 'mkeithX';
const projectName = process.env.PROJECT_NAME || 'mkeithx.github.io';
const deploymentBranch = process.env.DEPLOYMENT_BRANCH || 'gh-pages';

const copyright =  `© ${new Date().getFullYear()} · Keith Tan · All rights reserved · <br> Built with Docusaurus `;

const admonitionsConfig = {
  admonitions: {
    keywords: [
      "info", "success", "danger", "note", "tip", "warning",
      "important", "caution", "security", "credit", "discord",
      "docusaurus", "release"
    ],
  },
};

const commonRemarkConfig = {
  remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
  rehypePlugins: [rehypeKatex],
};

const commonDocsConfig = {
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
  ...admonitionsConfig,
  ...commonRemarkConfig,
};

const config: Config = {
  title: "mkeithx",
  tagline: "Unified Docs for Software Developers.",
  favicon: "icons/favicon/slash-dark.ico",
  // titleDelimiter: " ⚡️ ",
  url: "https://mkeithx.github.io",
  baseUrl: "/",
  organizationName,
  projectName,
  deploymentBranch,
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  staticDirectories: [
    'static',
    path.join(__dirname,'../public'),
  ],
  
  customFields: {
    description: "Website representing humanity from Dimension C-137 and beyond.",
    custom_tagline: "Building the web",
    custom_footer: "Built for humans.",
    hero_header: "Open Source",
    hero_footer: "Projects and samples from mkeithx. ",
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
          sidebarPath: "sidebars.ts",
          routeBasePath: "docs",
          ...commonDocsConfig,
        },

        blog: {
          path: "blog",
          blogTitle: "Blog",
          blogDescription: "Recent updates from mkeithx.",
          routeBasePath: "blog",
          blogSidebarTitle: "Recent updates",
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
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          showLastUpdateTime: false,
          ...commonRemarkConfig,
          ...admonitionsConfig,
          mdxPageComponent: '@theme/MDXPage',
        } satisfies PageOptions,

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
        sidebarPath: "sidebarsCosmos.ts",
      } as DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        breadcrumbs: true,
        sidebarPath: "sidebarsCommunity.ts",
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
        sidebarPath: "sidebarsMsp.ts",
        ...commonDocsConfig,
      } as DocsOptions,
    ],

    [
      'ideal-image',
      {
        quality: 70, // 85
        max: 1030, // 1980
        min: 680, // 680
        steps: 2, // 4
        disableInDev: false,
      } satisfies IdealImageOptions,
    ],
    [
      'client-redirects',
      {
        // fromExtensions: ['html'],
        // createRedirects(routePath) {
        //   // Redirect to /docs from /docs/the-keyword (now docs root doc)
        //   if (routePath === '/docs' || routePath === '/docs/') {
        //     return [`${routePath}/the-keyword`];
        //   }
        //   return undefined;
        // },
        redirects: [
          {
            from: ['/community/resources', '/docs/next/resources'],
            to: '/community/',
          },

        ],
        
      } satisfies ClientRedirectsOptions,
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

    image: "img/mkx-social.png",
    metadata: [
      {
        name: 'description',
        description: 'Building the web with mkeithx.'
      },
      {
        name: 'keywords',
        content: 'web-dev,mkeithx,keith,keith tan,python,docusaurus,react'
      },
      {
        name: "twitter:card",
        content: "summary",
      },

    ],
    navbar: {
      style: "dark",
      hideOnScroll: true,
      title: "mkeithx",
      logo: {
        alt: "SiteLogo",
        src: "img/logo/x_code.png",
        target: "_self",
        // width: 32,
        // height: 32,
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          docId: 'keyword',
          label: 'Documentation'
        },
        // {
        //   type: 'docSidebar',
        //   sidebarId: 'helpdesk',
        //   position: 'left',
        //   label: 'Helpdesk'
        // },
        { to: "/cosmos", label: "Spacehub", position: "left" },
        { to: "/msp", label: "MSP", position: "left" },
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
              to: '/blog',
              label: 'Blog'
            },
            {
              to: '/projects',
              label: 'Showcase'
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
              to: "/cosmos",
            },
            {
              label: "Guides",
              to: "/docs/cheat-sheets",
            },
            {
              label: "Keyword",
              to: "/docs",
            },
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "Tags",
              to: "/blog/tags",
            },

            {
              label: "Kitiplex",
              to: "/community/kitiplex",
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
          title: "Dev",
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
