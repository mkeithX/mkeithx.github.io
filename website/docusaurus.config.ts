import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";

import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as BlogOptions } from "@docusaurus/plugin-content-blog";

const copyright = `Copyright © ${new Date().getFullYear()} • Keith Tan • Built with Docusaurus.`;

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
    label: "Twitter",
    href: "https://twitter.com/mkeithtan",
  },

  Kitiplex: {
    label: "Kitiplex",
    href: "https://kitiplex.github.io/",
  },

  IUIU: {
    label: "IUIU",
    href: "https://kitiplex.github.io/iuiu",
  },

  Discussion: {
    label: "Discussion",
    href: "https://github.com/kitiplex/iuiu/issues/new/choose",
  },
};

// export default async function createConfigAsync() {
const config: Config = {
  // return {
  title: "MKX SpaceHub",
  tagline: "A simple documentation website for web developers and physics enthusiasts.",
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

    {
      href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3",
      rel: "stylesheet",
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
          disableVersioning: false,
          editLocalizedFiles: false,
          editCurrentVersion: false,
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
          docItemComponent: "@theme/DocItem",
        },

        blog: {
          path: "blog",
          blogTitle: "Recents",
          blogDescription: "News and updates from Keith's Universe",
          routeBasePath: "blog",
          blogSidebarTitle: "Recent",
          blogSidebarCount: 5,
          include: ["**/*.{md,mdx}"],

          exclude: [
            "**/_*.{js,jsx,ts,tsx,md,mdx}",
            "**/_*/**",
            "**/*.test.{js,jsx,ts,tsx}",
            "**/__tests__/**",
          ],
          postsPerPage: "ALL",
          blogListComponent: "@theme/BlogListPage",
          blogPostComponent: "@theme/BlogPostPage",
          blogTagsListComponent: "@theme/BlogTagsListPage",
          blogTagsPostsComponent: "@theme/BlogTagsPostsPage",

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

          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },

        theme: {
          customCss: ["./src/css/custom.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      'content-docs',
      {
        id: "cosmos",
        path: "cosmos",
        routeBasePath: "cosmos",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
        disableVersioning: false,
        editLocalizedFiles: false,
        editCurrentVersion: false,
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

    image: "img/banner/social-banner-new-x.png",

    navbar: {
      // style: "dark",
      hideOnScroll: true,
      title: "SpaceHub",
      logo: {
        alt: "SpaceHub Logo",
        src: "img/logo/mkx-x-raw.png",
        // srcDark: "img/logo/spacehub-x-logo-light.png",
        target: "_self",
        width: 100,
        height: 40,
      },
      items: [
        {
          type: "docSidebar",
          position: "left",
          sidebarId: "mySidebar",
          label: "Guides",
        },
        { to: "cosmos/overview", label: "Cosmos", position: "left" },
        { to: "/blog", label: "Latest", position: "left" },

        { to: "projects/", label: "Showcase", position: "right" },
        {
          type: "dropdown",
          label: "External",
          position: "right",
          items: [
            internetProfiles.Kitiplex,
            internetProfiles.IUIU,
            internetProfiles.Discussion,
            // {
            //   type: 'doc',
            //   label: 'Social',
            //   docId: 'introduction',
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
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "mkeithX",
        src: "img/logo/spacehub-x-logo-light.png",
        href: "/",
        height: "40",
        // width: '60'
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Guides",
              to: "docs/guides/",
            },

            {
              label: "Cosmos",
              to: "cosmos/overview",
            },
          ],
        },
        {
          title: "Connect",
          items: [internetProfiles.linkedin, internetProfiles.twitter],
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
      additionalLanguages: ["powershell", "python", "java", "bash", "json"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
