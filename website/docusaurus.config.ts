import { Config } from "@docusaurus/types";
import * as Preset from "@docusaurus/preset-classic";
import { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import { Options as BlogOptions } from "@docusaurus/plugin-content-blog";
import type { Options as PageOptions } from "@docusaurus/plugin-content-pages";
import { Options as IdealImageOptions } from "@docusaurus/plugin-ideal-image";
import type { Options as ClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import PrismLight from "./src/utils/prismLight";
import PrismDark from "./src/utils/prismDark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import { socialProfiles } from "./social.json";

// require("dotenv").config();

// console.log(process.env)
// const deploymentBranch = process.env.DEPLOYMENT_BRANCH;

const copyright = ` © ${new Date().getFullYear()} Keith Tan • All rights reserved `;

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
      "release",
    ],
  },
};

const commonExlusion = {
  exclude: [
    "**/_*.{js,jsx,ts,tsx,md,mdx}",
    "**/_*/**",
    "**/*.test.{js,jsx,ts,tsx}",
    "**/__tests__/**",
  ],
};

const commonRemarkConfig = {
  remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
  rehypePlugins: [rehypeKatex],
};

const commonDocsConfig = {
  // breadcrumbs: true,
  ...admonitionsConfig,
  ...commonRemarkConfig,
  ...commonExlusion,
};

const config: Config = {
  title: "mkeithx",
  tagline: "Building Innovative Solutions",
  favicon: "icons/favicon/round-dark.ico",
  // titleDelimiter: " ⚡️ ·  ",
  url: "https://mkeithx.pages.dev",
  baseUrl: "/",
  organizationName: "mkeithX",
  projectName: "mkeithx.github.io",
  // deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  customFields: {
    description:
      "Website representing humanity from Dimension C-137 and beyond.",
    custom_header: "Your Cookbook with Dev-Friendly Receipes ", // Quick Guides & Code Snippets from mkeith
    custom_description: "Software Development and Infra Management",
    custom_tagline: "",
    custom_footer: "Guides for Software Development @ Kitiple", //Build fast, Optimized Websites and Focus on your Content 
    custom_title: "mkeithX",
    // custom_title: "Unified Docs for Software Developers.",
    hero_header: "Streamlined",
    hero_footer: "Streamlined Resources",
    GIT_USER: process.env.GIT_USER,
    USE_SSH: process.env.USE_SSH,
    GIT_USER_NAME: process.env.GIT_USER_NAME,
    GIT_USER_EMAIL: process.env.GIT_USER_EMAIL,
  },

  stylesheets: [
    {
      href: "/katex/katex.min.css",
      type: "text/css",
    },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  markdown: {
    format: 'detect'
  },

  presets: [
    [
      "classic",

      {
        docs: {
          path: "docs",
          sidebarPath: "./sidebars.ts",
          routeBasePath: "docs",
          ...commonDocsConfig,
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },

        blog: {
          path: "blog",
          blogTitle: "Blog",
          blogDescription:
            "Keep up to date with what's going on with the SpaceHub project.",
          routeBasePath: "blog",
          blogSidebarTitle: "Updates",
          blogSidebarCount: "ALL", // 5
          postsPerPage: "ALL", // 5
          ...admonitionsConfig,
          ...commonRemarkConfig,
          onInlineTags: "throw",
          onInlineAuthors: "throw",
          onUntruncatedBlogPosts: "throw",

          feedOptions: {
            type: "all",
            title: "The MKX SpaceHub Blog",
            description:
              "Stay tuned with upcoming updates releases and articles by following our feed!",
            xslt: true,
            copyright,
          },
        } satisfies BlogOptions,

        pages: {
          path: "src/pages",
          routeBasePath: "",
          showLastUpdateTime: false,
          ...commonDocsConfig,
          mdxPageComponent: "@theme/MDXPage",
        } satisfies PageOptions,

        theme: {
          customCss: "./src/css/custom.css",
        },

        sitemap: {
          changefreq: "hourly",
          priority: 0.5,
          ignorePatterns: ["/tests/{blog,pages}/**", "/tags/**"],
          filename: "sitemap.xml",
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    "@docusaurus/theme-live-codeblock",
    "./src/plugins/featureRequests/FeatureRequestsPlugin.js",

    [
      "content-docs",
      {
        id: "cosmos",
        path: "cosmos",
        routeBasePath: "cosmos",
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
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
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        ...commonDocsConfig,
        sidebarPath: "./sidebarsCommunity.ts",
      } as DocsOptions,
    ],
    [
      "ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: true,
      } satisfies IdealImageOptions,
    ],
    [
      "client-redirects",
      {
        redirects: [
          {
            from: ["/community/resources", "/docs/next/resources"],
            to: "/community/",
          },
          {
            from: ["/feedback", "/docs/next/feedback"],
            to: "/feature-requests",
          },
          {
            from: ["/posts", "/updates"],
            to: "/blog",
          },
          {
            from: ["/home"],
            to: "/",
          },

          {
            from: "/showcase",
            to: "/projects",
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
    navbar: {
      style: "dark",
      hideOnScroll: true,
      title: "Circuit",
      logo: {
        alt: "Circuit",
        src: "img/logo/mkxspacehub-logo-alt.png", //"img/logo/mkxspacehub-logo.
        target: "_self",
        // width: 32,
        // height: 32,
      },
      items: [
        {
          type: "doc",
          position: "left",
          docId: "keyword",
          label: "Core",
        },
        {
          type: "docSidebar",
          sidebarId: "devops",
          label: "DevOps",
        },
        { to: "/blog", label: "Blog" },
        { to: "/community", label: "Community" },
        {
          type: "dropdown",
          label: "More",
          position: "right",
          items: [
            { to: "/feeling-lucky", label: "Feeling Lucky" },
            { to: "/cosmos", label: "The Universe" },
            { to: "/feature-requests", label: "Feature Requests" },
            {
              type: "html",
              value: '<hr class="dropdown-separator">',
            },
            {
              label: "Bugs",
              href: "https://github.com/mkeithX/mkeithx.github.io/issues/new/choose",
            },
            {
              label: "RSS",
              href: "https://mkeithx.pages.dev/blog/rss.xml",
            },
          ],
        },
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
        {
          type: "html",
          // position: "right",
          value: '<span class="badge badge--sm badge--secondary">M87</span>',
        },
      ],
    },

    algolia: {
      apiKey: "17c82a48990cb1a63e048dbd20818637",
      indexName: "mkeithx",
      appId: "XVSOLYZXNV",
      contextualSearch: false,
      searchPagePath: "search",
      insights: true,
    },

    footer: {
      style: "dark",
      logo: {
        alt: "footerLogo",
        src: "img/logo/kitiplex-devops.svg",
        href: "/",
        width: "250",
      },
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Gists",
              to: "/docs/gists",
            },
            {
              label: "DevOps",
              to: "/docs/devops/guides-and-workarounds",
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
              label: "Contributing",
              href: "/community/contributing",
            },
            {
              label: "Feeling Lucky",
              to: "/feeling-lucky",
            },
          ],
        },
        {
          title: "Connect",
          items: [socialProfiles.twitter, socialProfiles.facebook],
        },
        {
          title: "Developers",
          items: [
            {
              label: "Cloudflare",
              href: "https://dash.cloudflare.com/login",
            },
            {
              label: "Vercel",
              href: "https://vercel.com/",
            },
            {
              label: "Facebook Dev",
              href: "https://developers.facebook.com/",
            },
          ],
        },
      ],

      copyright,
    },
    prism: {
      theme: PrismLight,
      darkTheme: PrismDark,
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
    playgroundPosition: "bottom",
  } satisfies Preset.ThemeConfig,
};

export default config;
