import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";

import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as BlogOptions } from "@docusaurus/plugin-content-blog";

import { socialProfiles } from "./socialProfiles";


const copyright = `Copyright © ${new Date().getFullYear()} • Designed by  <a href='me' target='_blank'>Keith Tan<b></b></a> `;

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

const commonRemarkPluginsConfig = {
  remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
  rehypePlugins: [rehypeKatex],
};

const commonDocsPluginConfig = {
  showLastUpdateAuthor: false,
  showLastUpdateTime: true,
  ...admonitionsConfig,
  ...commonRemarkPluginsConfig,
};

const config: Config = {
  title: "mkeithx",
  tagline:
    "Handbook for Tech Support and Developers.",
  favicon: "icons/favicon.ico",
  titleDelimiter: "•",
  url: "https://mkeithx.github.io",
  baseUrl: "/",
  organizationName: "mkeithX",
  projectName: "mkeithx.github.io",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,


  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV",
      crossorigin: "anonymous",
    },
  ],

  customFields: {
    description: "A documentation website representing humanity from Dimension C-137 and beyond.",
    custom_tagline: "Building the web",
  },

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
          ...commonDocsPluginConfig,
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
          ...commonRemarkPluginsConfig,
          postsPerPage: 'ALL',

          feedOptions: {
            type: "all",
            copyright,
          },
        } satisfies BlogOptions,

        pages: {
          path: "src/pages",
          routeBasePath: "",
          ...commonDocsPluginConfig,
          mdxPageComponent: "@theme/MDXPage",
        },

        theme: {
          customCss: "./src/css/custom.css",
        },

        sitemap: {
          lastmod: "date",
          changefreq: null,
          priority: null,
          // ignorePatterns: ["/tags/**"],
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
        ...commonDocsPluginConfig,
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
        ...commonDocsPluginConfig,
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
        ...commonDocsPluginConfig,
      } as DocsOptions,
    ],
    [
      'vercel-analytics',
      {
        debug: false,
        mode: 'auto',
      },
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

    image: "img/banner/social-space-new.png",
    // metadata: [
    //   {name: 'twitter:card', content: 'summary_large_image'},
    // ],
    navbar: {
      style: "dark",
      hideOnScroll: true,
      title: "mkeithx",
      logo: {
        alt: "SiteLogo",
        // src: "img/logo/spacehub-x-logo.png",
        src: "img/logo/logo-rnd-x.png",
        // src: "img/logo/logo-x-light.png",
        // srcDark: "img/logo/logo-x-dark.png",
        target: "_self",
        width: 32,
        height: 32,
      },
      items: [
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "mySidebar",
          label: "Docs",
        },
        { to: "cosmos", label: "Space", position: "left" },
        { to: "blog", label: "What's new", position: "left" },
        {
          type: 'dropdown',
          label: 'More',
          position: 'right',
          items: [
            {
              to: '/community',
              label: "Community"
            },
            {
              to: 'blog/tags',
              label: "Tags"
            },
            {
              to: '/projects',
              label: 'Showcase'
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
              label: "Keyword",
              to: "docs",
            },
            {
              label: "Space",
              to: "cosmos",
            },
            {
              label: "Guides",
              to: "docs/cheat-sheets",
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
              label: "Updates",
              to: "blog",
            },
            {
              label: "Community",
              to: "community",
            },
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
