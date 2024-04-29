import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";

import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as BlogOptions } from "@docusaurus/plugin-content-blog";

const copyright = `Copyright © ${new Date().getFullYear()} • Developed by  <a href='https://github.com/mkeithX' target='_blank'><b>Keith Tan</b></a>`;

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mkeithtan",
  },

  github: {
    label: "GitHub",
    href: "https://github.com/mkeithx",
  },

  twitter: {
    label: "X",
    href: "https://twitter.com/mkeithtan",
  },

  kitiplex: {
    label: "Kitiplex",
    href: "https://kitiplex.github.io/",
  },

  iuiu: {
    label: "IUIU",
    href: "https://kitiplex.github.io/iuiu",
  },

  discussion: {
    label: "Discussion",
    href: "https://github.com/kitiplex/iuiu/issues/new/choose",
  },
};


const config: Config = {

  title: "MKX SpaceHub",
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
    description: "SpaceHub For All Mankind",
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
  ],

  themeConfig: {

    // announcementBar: {
    //   id: 'announcementBar_',
    //   content:
    //     ' 🇵🇭 Test Announcement with icons & emojis. Learn <a target="_blank" rel="noopener noreferrer" href="#">more</a> ⭐',
    //   // backgroundColor: '#fafbfc',
    //   // textColor: '#091E42',
    //   isCloseable: true,
    // },

    colorMode: {
      disableSwitch: false,
      respectPrefersColorScheme: true,
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
    // metadata: [
    //   {
    //     name: "og:image",
    //     content: "img/banner/social-x.png",
    //   },
    // ],

    navbar: {
      // style: "primary",
      hideOnScroll: true,
      // title: "SpaceHub",
      logo: {
        alt: "SpaceHub Logo",
        src: "img/logo/logo-x-light.png",
        srcDark: "img/logo/logo-x-dark.png",
        target: "_self",
        width: 180,
        height: 32,
      },
      items: [
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "mySidebar",
          label: "Docs",
        },
        { to: "cosmos/overview", label: "Cosmos", position: "left" },
        { to: "blog", label: "What's new", position: "right" },
        {
          type: 'dropdown',
          label: 'Demo',
          position: 'left',
          items: [
            {
              type: 'doc',
              docId: 'msp',
              label: 'MSP'
            },

            {
              type: 'doc',
              docId: 'demo-overview',
              label: 'Examples'
            },

            {
              to: 'projects',
              label: 'Showcase'
            },

          ]
        },


        {
          type: "dropdown",
          label: "External",
          position: "right",
          items: [
            internetProfiles.kitiplex,
            internetProfiles.iuiu,
            internetProfiles.discussion,

            // {
            //   type: 'doc',
            //   label: 'Social',
            //   docId: 'the-keyword',
            // },
            // ... more items
          ],
        },
        {
          href: "https://github.com/mkeithx",
          "aria-label": "GitHub",
          position: "right",
          className: "header-github-link",
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
      searchPagePath: 'search',
      // insights: true,
      // placeholder: 'MKX',
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
          title: "Documentation",
          items: [
            {
              label: "Keyword",
              to: "docs",
            },
            {
              label: "Project Docs",
              to: "docs/demo-overview",
            },
            {
              label: "Cosmos",
              to: "cosmos/overview",
            },
          ],
        },
        {
          title: "Connect",
          items: [internetProfiles.twitter, internetProfiles.linkedin,internetProfiles.github],
        },

        {
          title: "More",
          items: [
            {
              label: "Latest",
              to: "blog/",
            },
            {
              label: "Nutshell",
              to: "me/",
            },
          ],
        },
      ],

      copyright,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["powershell", "python", "java", "bash", "json", "batch"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
