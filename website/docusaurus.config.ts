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

import * as dotenv from 'dotenv';

const environment = process.env.NODE_ENV || 'development';
dotenv.config({
  path: environment === 'production'
    ? '.env.production.local'
    : '.env.development.local',
});

const copyright = `Copyright © ${new Date().getFullYear()} Keith Tan and Contributors`;

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
  titleDelimiter: "•",

  customFields: {
    description: "Representing humanity from Dimension C-137 and beyond.",
    custom_header: "The SpaceHub Project",
    custom_description: "Streamlined Resources for Software Development at Kitiplex",
    custom_title: "mkeithX",
    custom_tagline: "Guides and Samples from Kitiplex",
    custom_projectDescription: "Demos and other good stuff.",
    GIT_USER: process.env.GIT_USER,
    USE_SSH: process.env.USE_SSH,
    GIT_USER_NAME: process.env.GIT_USER_NAME,
    GIT_USER_EMAIL: process.env.GIT_USER_EMAIL,
    LOGIN_URL: process.env.LOGIN_URL || '/login',
  },

  future: {
    experimental_faster: {
      swcJsLoader: true,
      swcJsMinimizer: true,
      swcHtmlMinimizer: true,
      lightningCssMinimizer: true,
      rspackBundler: true,
      mdxCrossCompilerCache: true,
    },
    experimental_storage: {
      type: 'localStorage',
      namespace: true,
    },
    experimental_router: 'browser',
  },

  stylesheets: [
    { href: "/katex/katex.min.css", type: "text/css", rel: "stylesheet", crossorigin: "anonymous" },
  ],

  scripts: [
    { src: "https://XVSOLYZXNV-dsn.algolia.net", rel: "preconnect", crossorigin: "anonymous" },
  ],

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    format: "detect",
    mermaid: true,
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
          postsPerPage: 5,
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
    '@docusaurus/theme-mermaid',
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
        quality: 80,
        max: 1050,
        min: 680,
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
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: `announcementBar_`,
      content:
        `Discover what's new in our <a target="_blank" rel="noopener noreferrer" href="/blog">latest blog updates!</a>`,
      // backgroundColor: '#fafbfc',
      // textColor: '#091E42',
      isCloseable: false,
    },
    docs: {
      versionPersistence: 'localStorage',
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    image: "img/mkx-social-banner.png",
    navbar: {
      style: "dark",
      hideOnScroll: true,
      title: "mkeithx",
      logo: {
        alt: "SpaceHub",
        src: "img/rocket.svg",
        target: "_self",
        // width: "32",
        // height: "32",
      },
      items: [
        {
          type: "dropdown",
          label: "Development",
          position: "left",
          items: [
            { type: "doc", docId: "introduction", label: "Guides", },
            { type: "docSidebar", sidebarId: "exampleSidebar", label: "Examples" },
            { to: "/projects", label: "Showcase" },
          ]
        },
        { to: "/cosmos", label: "Cosmos" },
        { to: "/community", label: "Community" },
        { to: "/blog", label: "Blog" },
        {
          type: "dropdown",
          label: "More",
          position: "right",
          items: [
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

        // {
        //   type: "html",
        //   value: '<span class="badge badge--sm badge--primary">Beta</span>',
        //   position: 'right'
        // },
        {
          href: "https://github.com/mkeithX/mkeithx.github.io",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        { type: "search", position: "right" },

      ],
    },

    footer: {
      style: "dark",
      logo: {
        alt: "footerLogo",
        src: "img/logo/kitiplex-devops.svg",
        href: "/",
        width: "300",
      },
      links: [
        {
          title: "Docs",
          items: [
            { label: "Gists", to: "/docs/gists" },
            { label: "DevOps", to: "/docs/devops" },
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
          items: [socialProfiles.facebook, socialProfiles.linkedin,],
        },
        {
          title: "Developers",
          items: [
            { label: "Meta", href: "https://developers.facebook.com/" },
            { label: "Vercel", href: "https://vercel.com/" },
            { label: "Cloudflare", href: "https://dash.cloudflare.com/login" },
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
