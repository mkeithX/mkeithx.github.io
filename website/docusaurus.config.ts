import path from 'path';
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

dotenv.config({
  path: process.env.NODE_ENV === 'production' ? '.env.production.local' : '.env.development.local', 
});

const copyright = `Copyright © ${new Date().getFullYear()} Designed by Keith Tan`;

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
  tagline: "A Cosmic-Flavored Docs Website for Software Development and More",
  favicon: "icons/favicon/slash-dark.ico",
  url: "https://mkeithx.pages.dev",
  baseUrl: "/",
  organizationName: "mkeithX",
  projectName: "mkeithx.github.io",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,

  staticDirectories: [
    'static',
    path.join(__dirname, 'non-existent'),
  ],

  customFields: {
    description: "Representing humanity from Dimension C-137 and beyond.",
    custom_header: "The SpaceHub Project",
    custom_tagline: "Guides and Code Samples from mkeith",
    GIT_USER: process.env.GIT_USER,
    USE_SSH: process.env.USE_SSH,
    GIT_USER_NAME: process.env.GIT_USER_NAME,
    GIT_USER_EMAIL: process.env.GIT_USER_EMAIL,
    CLOUDFLARE_WEB_ANALYTICS: process.env.CLOUDFLARE_WEB_ANALYTICS,
    ENTRA_TENANT_ID: process.env.ENTRA_TENANT_ID,
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
    { src: `https://static.cloudflareinsights.com/beacon.min.js?token=${process.env.CLOUDFLARE_WEB_ANALYTICS}`, defer: true },
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
            "Keep up to date with what's going on with The SpaceHub Project!",
          routeBasePath: "blog",
          blogSidebarTitle: "Updates",
          blogSidebarCount: "ALL",
          postsPerPage: 5,
          ...admonitionsConfig,
          ...commonRemarkConfig,
          onInlineTags: "throw",
          onInlineAuthors: "throw",
          onUntruncatedBlogPosts: "ignore",
          feedOptions: {
            type: "all",
            title: "The SpaceHub Project",
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
          changefreq: "weekly",
          priority: 0.8,
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
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
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
        `HELLO, WORLD...<a href="#">WELCOME 2025!</a> 🎉`,
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
    image: "img/social-banner-astro.png",
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
            {
              label: "Login",
              href: `https://myapps.microsoft.com/?tenantid=${process.env.ENTRA_TENANT_ID || ' '}`,
            },
            { type: "html", value: '<hr class="dropdown-separator">' },

            {
              label: "Bugs",
              href: "https://github.com/mkeithX/mkeithx.github.io/issues",
            },
            { label: "RSS", href: "https://mkeithx.pages.dev/blog/rss.xml" },
          ],
        },

        // {
        //   type: "html",
        //   value: '<span class="badge badge--sm badge--secondary">Beta</span>',
        //   position: 'right'
        // },
        {
          href: "https://github.com/mkeithX/mkeithx.github.io",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },

        { type: "search", position: "right", className: "DocSearch" },
      ],
    },

    footer: {
      style: "dark",
      logo: {
        alt: "footerLogo",
        src: "img/logo/spacehub-x-logo-light-test.png",
        href: "/",
        width: "350",
        // height: "300"
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
            {
              label: "Login",
              href: `https://myapps.microsoft.com/?tenantid=${process.env.ENTRA_TENANT_ID || ' '}`,
            },
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
    metadata: [
      { name: 'og:title', content: 'mkeithx' },
      {
        name: 'og:description',
        content: 'A Cosmic-Flavored Docs Website for Software Development and More'
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
