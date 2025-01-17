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
import redirects from "./redirects";
import { admonitionsConfig } from "./admonitionsConfig";
import socialProfiles from './social';

const copyright = `Copyright © ${new Date().getFullYear()} <br> Developed & Designed by Keith Tan`;

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
  tagline: "A Cosmic-Flavored Website for Software Development, Documentation and Beyond",
  favicon: "icons/favicon/slash-dark.ico",
  url: "https://mkeithx.pages.dev",
  baseUrl: "/",
  organizationName: "mkeithX",
  projectName: "mkeithx.github.io",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  future: {
    experimental_faster: true,
  },

  staticDirectories: [
    'static',
    path.join(__dirname, 'non-existent'),
  ],
  customFields: {
    description: "Representing humanity from Dimension C-137 and beyond.",
    hero_header: "Guides and Code Samples",
    hero_tagline: "For Software Development & Beyond...",
    custom_header: "The SpaceHub Project",
    custom_tagline: "Guides and Code Samples from mkeith",
    GIT_USER: process.env.GIT_USER,
    USE_SSH: process.env.USE_SSH,
    GIT_USER_NAME: process.env.GIT_USER_NAME,
    GIT_USER_EMAIL: process.env.GIT_USER_EMAIL,
  },
  stylesheets: [
    { href: "/katex/katex.min.css", type: "text/css", rel: "stylesheet", crossorigin: "anonymous" },
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
          showLastUpdateAuthor: false,
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


        gtag: {

          trackingID: 'G-YYZ6V070LQ',
          anonymizeIP: true,

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
        showLastUpdateAuthor: false,
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
        redirects: redirects,
      } satisfies ClientRedirectsOptions,
    ],
  ],

  themeConfig: {
    playgroundPosition: 'bottom',
    colorMode: {
      defaultMode: "dark",
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    // announcementBar: {
    //   id: `announcementBar_`,
    //   content:
    //     `HELLO, WORLD...<a href="#">WELCOME 2025!</a> 🎉`,
    //   isCloseable: false,
    // },
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
      title: "SpaceHub",
      logo: {
        alt: "SpaceHub",
        src: "img/rocket.svg",
        target: "_self",
        width: "32",
        height: "32",
      },
      items: [
        {
          type: "dropdown",
          label: "Development",
          position: "left",
          items: [
            { type: "doc", docId: "introduction", label: "Guides", },
            { type: "docSidebar", sidebarId: "exampleSidebar", label: "Examples" },
          ]
        },
        { to: "/cosmos", label: "Cosmos" },
        { to: "/community", label: "Community" },
        { to: "/blog", label: "Blog" },
        // {
        //   type: "html",
        //   value: '<span class="badge badge--lg badge--secondary">Beta</span>',
        //   position: 'right'
        // },
        {
          type: "dropdown",
          label: "More",
          position: "right",
          items: [
            { to: "/feature-requests", label: "Feedback" },
            {
              label: "Issue tracker",
              href: "https://github.com/mkeithX/mkeithx.github.io/issues",
            },
            { to: "/feeling-lucky", label: "Feeling Lucky 👍" },
            { type: "html", value: '<hr class="dropdown-separator">' },
            { label: "RSS", href: "https://mkeithx.pages.dev/blog/rss.xml" },
  
          ],
        },
        {
          href: "https://github.com/mkeithX/mkeithx.github.io",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },


        { type: "search", position: "right"},
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "footerLogo",
        src: "img/logo/spacehub-x-logo-light-test.png",
        href: "/",
        width: "330",
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
          title: "Community",
          items: [
            { label: "Updates", to: "/blog" },
            { label: "Contributing", href: "/community" },
            socialProfiles.kitiplex,
          ],
        },
        {
          title: "Connect",
          items: [socialProfiles.facebook, socialProfiles.linkedin,],
        },
        {
          title: "Developers",
          items: [
            socialProfiles.m365dev,
            socialProfiles.cloudflare,
            socialProfiles.metadev,
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
    metadata: [
      { name: 'og:title', content: 'mkeithx' },
      {
        name: 'og:description',
        content: 'A Cosmic-Flavored Website for Software Development, Documentation and Beyond'
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
