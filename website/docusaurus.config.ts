import type { Config } from "@docusaurus/types";
import * as Preset from "@docusaurus/preset-classic";
import type { Options as DocsOptions } from "@docusaurus/plugin-content-docs";
import type { Options as BlogOptions } from "@docusaurus/plugin-content-blog";
import type { Options as PageOptions } from "@docusaurus/plugin-content-pages";
import type { Options as IdealImageOptions } from "@docusaurus/plugin-ideal-image";
import type { Options as ClientRedirectsOptions } from "@docusaurus/plugin-client-redirects";
import PrismLight from "./src/utils/prismLight";
import PrismDark from "./src/utils/prismDark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import { socialProfiles } from "./social.json";
import redirects from "./redirects";
import { admonitionsConfig } from "./admonitionsConfig";

// Current year for copyright
const copyright = `© ${new Date().getFullYear()} Keith Tan and Contributors <br> • All rights reserved •` ;

const commonExclusions = {
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
  ...admonitionsConfig,
  ...commonRemarkConfig,
  ...commonExclusions,
};

// Docusaurus configuration
const config: Config = {
  title: "mkeithx",
  tagline: "Building Innovative Solutions",
  favicon: "icons/favicon/round-dark.ico",
  url: "https://mkeithx.pages.dev",
  baseUrl: "/",
  organizationName: "mkeithX",
  projectName: "mkeithx.github.io",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  customFields: {
    description:
      "Website representing humanity from Dimension C-137 and beyond.",
    custom_header: "Guides and Samples from mkeith",
    custom_description: "Streamlined Resources for Software Development at Kitiplex",
    custom_title: "mkeithX",
    custom_projectDescription: "Highlighting some projects and demos I've authored and contributed to.",
    GIT_USER: process.env.GIT_USER,
    USE_SSH: process.env.USE_SSH,
    GIT_USER_NAME: process.env.GIT_USER_NAME,
    GIT_USER_EMAIL: process.env.GIT_USER_EMAIL,
  },

  stylesheets: [{ href: "/katex/katex.min.css", type: "text/css" }],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    format: "detect",
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
          blogSidebarCount: "ALL",
          postsPerPage: "ALL",
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
 themes: ['live-codeblock'],

  plugins: [
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
        fromExtensions: ['html'],
        redirects: redirects,
      } satisfies ClientRedirectsOptions,
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    announcementBar: {
      id: `announcementBar_`,
      content:
        // 'New updates are coming. <a target="_blank" rel="noopener noreferrer" href="#">Learn more</a>.',
        'New stuff rolling out soon 🚀 <a target="_blank" rel="noopener noreferrer" href="#"></a>',
      isCloseable: true,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
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
      title: "SpaceHub",
      logo: {
        alt: "SpaceHub",
        src: "img/logo/mkxspacehub-logo-alt.png",
        target: "_self",
      },
      items: [
        { type: "doc", position: "left", docId: "introduction", label: "Docs" },
        { type: "docSidebar", sidebarId: "exampleSidebar", label: "Examples" },
        { to: "/projects", label: "Showcase" },
        { to: "/community", label: "Community" },
        { to: "/blog", label: "Blog" },
        {
          type: "dropdown",
          label: "More",
          position: "right",
          items: [
            { to: "/cosmos", label: "The Universe 🚀" },
            { to: "/feeling-lucky", label: "Feeling Lucky 👍" },
            { to: "/feature-requests", label: "Feature Requests ❓" },
            { type: "html", value: '<hr class="dropdown-separator">' },
            {
              label: "Bugs",
              href: "https://github.com/mkeithX/mkeithx.github.io/issues/new/choose",
            },
            { label: "RSS", href: "https://mkeithx.pages.dev/blog/rss.xml" },
          ],
        },
       
        {
          href: "https://github.com/mkeithX/mkeithx.github.io",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        { type: "search", position: "right" },
        // {
        //   type: "html",
        //   value: '<span class="badge badge--sm badge--primary">Beta</span>',
        // },
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
            { label: "Gists", to: "/docs/gists" },
            { label: "DevOps", to: "/docs/devops/guides-and-workarounds" },
            { label: "Keyword", to: "/docs" },
          ],
        },
        {
          title: "More",
          items: [
            { label: "Updates", to: "/blog" },
            { label: "Contributing", href: "/community" },
          ],
        },
        {
          title: "Connect",
          items: [ socialProfiles.facebook, socialProfiles.linkedin,],
        },
        {
          title: "Developers",
          items: [
            { label: "Cloudflare", href: "https://dash.cloudflare.com/login" },
            { label: "Vercel", href: "https://vercel.com/" },
            { label: "Meta Dev", href: "https://developers.facebook.com/" },
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
