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
  title: "SpaceHub",
  tagline:
    "A simple documentation website for web developers and physics enthusiasts.",
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

  // scripts: [
  //   {
  //     src: "https://X2M5FPT6G9-dsn.algolia.net",
  //     rel: "preconnect",
  //     crossorigin: true,
  //   },
  // ],

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
    custom_tagline: "Building the Web",
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
            // createFeedItems: async (params) => {
            //   const { blogPosts, defaultCreateFeedItems, ...rest } = params;
            //   return defaultCreateFeedItems({
            //     // keep only the 10 most recent blog posts in the feed
            //     blogPosts: blogPosts.filter((_item, index) => index < 10),
            //     ...rest,
            //   });
            // },
          },
        } satisfies BlogOptions,

        pages: {
          path: "src/pages",
          routeBasePath: "",
          ...commonDocsPluginConfig,
          // mdxPageComponent: "@theme/MDXPage",
        },

        theme: {
          customCss: ["./src/css/custom.css"],
        },

        sitemap: {
          lastmod: "date",
          changefreq: null,
          priority: null,
          // ignorePatterns: ["/tags/**"],
          ignorePatterns: ['/tests/{blog,pages}/**','/tags/**'],
          // filename: "sitemap.xml",
          // createSitemapItems: async (params) => {
          //   const { defaultCreateSitemapItems, ...rest } = params;
          //   const items = await defaultCreateSitemapItems(rest);
          //   return items.filter((item) => !item.url.includes("/page/"));
          // },
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
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
  ],

  themeConfig: {
    // announcementBar: {
    //   id: 'announcementBar_',
    //   content:
    //     'Test Announcement with icons & emojis. Learn <a target="_blank" rel="noopener noreferrer" href="#">more</a> ⭐',
    //   backgroundColor: '#fafbfc',
    //   textColor: '#091E42',
    //   isCloseable: true,
    // },

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

    image: "/img/banner/social-x.png",

    navbar: {
      // style: "primary",
      hideOnScroll: true,
      // title: "SpaceHub",
      logo: {
        alt: "SpaceHub Logo",
        src: "img/logo/logo-x-light.png",
        srcDark: "img/logo/logo-x-dark.png",
        target: "_self",
        // width: 200,
        height: 50,
      },
      items: [
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "mySidebar",
          label: "Documentation",
        },
        { to: "cosmos", label: "Universe", position: "left" },
        { to: "msp", label: "MSP", position: "left" },
        {
          to: "projects",
          label: "Showcase",
          position: "right",
        },
        { to: "blog", label: "What's new", position: "right" },
        {
          href: "https://github.com/mkeithX/mkeithx.github.io",
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
        alt: "mkeithX",
        src: "img/logo/spacehub-x-logo-light.png",
        href: "/",
        // height: "32",
        width: "250",
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
              label: "Projects",
              to: "projects",
            },
            {
              label: "Cosmos",
              to: "cosmos",
            },
          ],
        },
        {
          title: "Connect",
          items: [
            socialProfiles.twitter,
            socialProfiles.facebook,
            socialProfiles.linkedin,
            socialProfiles.github,
          ],
        },

        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog/",
            },
            {
              label: "Contribute",
              to: "docs/contributing",
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
