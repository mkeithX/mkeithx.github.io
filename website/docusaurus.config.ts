import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";

import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as BlogOptions } from "@docusaurus/plugin-content-blog";

import "dotenv/config";
import { socialProfiles } from "./socialProfiles";

// const isDev = process.env.NODE_ENV === 'development';
// const baseUrl = process.env.BASE_URL ?? '/';

const copyright = `Copyright © ${new Date().getFullYear()} • Developed by  <a href='me' target='_blank'><b>Keith Tan</b></a>`;

const config: Config = {
  title: "SpaceHub",
  tagline:
    "A simple documentation website for web developers and physics enthusiasts.",
  favicon: "icons/favicon.ico",
  // titleDelimiter: '•',
  url: "https://mkeithx.github.io",
  baseUrl: "/",
  organizationName: "mkeithX",
  projectName: "mkeithx.github.io",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,

  scripts: [
    {
      src: "https://X2M5FPT6G9-dsn.algolia.net",
      rel: "preconnect",
      crossorigin: true,
    },
  ],

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
    description: "SpaceHub for all Mankind.",
    customTagline: "Building the Web",
    teamEmail: process.env.GIT_USER_EMAIL,
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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          include: ["**/*.md", "**/*.mdx"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],
        },

        blog: {
          path: "blog",
          blogTitle: "Recents",
          blogDescription: "News and updates from MKX SpaceHub.",
          routeBasePath: "blog",
          blogSidebarTitle: "What's new",
          blogSidebarCount: "ALL",
          include: ["**/*.{md,mdx}"],

          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          postsPerPage: "ALL",

          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],

          feedOptions: {
            type: "all",
            copyright,
            createFeedItems: async (params) => {
              const { blogPosts, defaultCreateFeedItems, ...rest } = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((_item, index) => index < 10),
                ...rest,
              });
            },
          },
        } satisfies BlogOptions,

        pages: {
          path: "src/pages",
          routeBasePath: "",
          include: ["**/*.{js,jsx,ts,tsx,md,mdx}"],
          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          mdxPageComponent: "@theme/MDXPage",
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],
        },

        theme: {
          customCss: ["./src/css/custom.css"],
        },

        sitemap: {
          lastmod: "date",
          changefreq: "weekly",
          priority: 0.5,
          ignorePatterns: ["/tags/**"],
          filename: "sitemap.xml",
          createSitemapItems: async (params) => {
            const { defaultCreateSitemapItems, ...rest } = params;
            const items = await defaultCreateSitemapItems(rest);
            return items.filter((item) => !item.url.includes("/page/"));
          },
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
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
        sidebarPath: "./sidebarsCosmos.ts",
        include: ["**/*.md", "**/*.mdx"],
        exclude: [
          "**/_*.{js,jsx,ts,tsx,md,mdx}",
          "**/_*/**",
          "**/*.test.{js,jsx,ts,tsx}",
          "**/__tests__/**",
        ],
        remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
        rehypePlugins: [rehypeKatex],
        docItemComponent: "@theme/DocItem",
      } as DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
        sidebarPath: "./sidebarsCommunity.ts",
        include: ["**/*.md", "**/*.mdx"],
        exclude: [
          "**/_*.{js,jsx,ts,tsx,md,mdx}",
          "**/_*/**",
          "**/*.test.{js,jsx,ts,tsx}",
          "**/__tests__/**",
        ],
        remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
        rehypePlugins: [rehypeKatex],
        docItemComponent: "@theme/DocItem",
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
      defaultMode: 'light',
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

    image: "img/banner/social-x.png",

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
          label: "Docs",
        },
        {
          type: "doc",
          docId: "msp",
          label: "MSP",
        },
        { to: "cosmos/overview", label: "The Universe", position: "left" },
        {
          to: "projects",
          label: "Showcase",
          position: "right",
        },
        { to: "blog", label: "What's new", position: "right" },
        {
          href: 'https://github.com/mkeithX/mkeithx.github.io',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
        width: "300",
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
              label: "The Universe",
              to: "cosmos/overview",
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
