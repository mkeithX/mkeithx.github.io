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

const copyright = `Copyright © ${new Date().getFullYear()} <a href='/me' target='_blank'>Keith Tan </a> and Contributors <br>· The SpaceHub Project · `;

const commonExclusions = {
  exclude: [
    '**/_*.{js,jsx,ts,tsx,md,mdx}',
    '**/_*/**',
    '**/*.test.{js,jsx,ts,tsx}',
    '**/__tests__/**',
  ],
  showLastUpdateAuthor: false,
};

const commonInclusions = {
  include: [
    '**/*.{js,jsx,ts,tsx,md,mdx}',
    '**/*.mdx',
  ],
};

const commonRemarkConfig = {
  remarkPlugins: [
    [npm2yarn, { sync: true }],
    remarkMath,
  ],
  rehypePlugins: [rehypeKatex],
};

const commonDocsConfig = {
  ...admonitionsConfig,
  ...commonRemarkConfig,
  ...commonExclusions,
  ...commonInclusions,
};


const config: Config = {
  title: "Kitimi Universe",
  tagline: "A cosmic-flavored website for Software Development, Documentation and more!",
  favicon: "icons/favicon/round-dark.ico",
  url: "https://mkeithx.pages.dev",
  baseUrl: "/",
  organizationName: "mkeithX",
  projectName: "mkeithx.github.io",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  trailingSlash: false,
  titleDelimiter: '·',

  future: {
    v4: true,
    experimental_faster: true
  },

  staticDirectories: [
    'static', 'public',
    path.join(__dirname, 'non-existent'),
  ],

  customFields: {
    description: "Representing humanity from Dimension C-137 and beyond.",
    hero_header: "Guides and Code Samples",
    hero_tagline: "for Software Development and More",
    custom_header: "The SpaceHub Project @Kitiplex",
    custom_tagline: "Guides and Code Samples from mkeith",
    custom_keyword: " | Author's note",
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
          showLastUpdateTime: true,
          ...commonDocsConfig,
        },
        blog: {
          path: "blog",
          blogTitle: "Updates",
          blogDescription:
            "Keep up to date with what's going on with The SpaceHub Project!",
          routeBasePath: "blog",
          blogSidebarTitle: "Recent updates",
          blogSidebarCount: 10, // "All"
          postsPerPage: 3,
          onInlineTags: "throw",
          onInlineAuthors: "throw",
          onUntruncatedBlogPosts: "ignore",
          ...commonDocsConfig,

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
          mdxPageComponent: "@theme/MDXPage",
          ...commonDocsConfig,
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
        showLastUpdateTime: true,
        sidebarPath: "./sidebarsCosmos.ts",
        ...commonDocsConfig,
      } as DocsOptions,
    ],
    [
      "content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        showLastUpdateTime: false,
        sidebarPath: "./sidebarsCommunity.ts",
        ...commonDocsConfig,
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
      } as IdealImageOptions,
    ],
    [
      "client-redirects",
      {
        redirects: redirects,
      } as ClientRedirectsOptions,
    ],
  ],

  themeConfig: {
    playgroundPosition: 'bottom',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    // announcementBar: {
    //   id: `announcementBar_`,
    //   content:
    //     `<a href="#">CHECK OUT WHAT'S NEW</a> 🎉`,
    //   isCloseable: false,
    // },
    docs: {
      // versionPersistence: 'localStorage',
      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },
    tableOfContents: {
      minHeadingLevel: 2,
      maxHeadingLevel: 5,
    },
    image: "img/banner/social-banner.png",
    navbar: {
      style: "dark",
      hideOnScroll: false,
      title: "",
      logo: {
        alt: "Kitimi Universe",
        src: "img/space-labs.png", //  img/mkx-new-test.svg || img/logo/kitimi-icon-new.svg
        target: "_self",
        // width: 100,
        height: 60
      },

      items: [
        { type: "doc", docId: "introduction", label: "Explore" },
        // { to: "/docs/learn", label: "Learn" },
        // { type: "docSidebar", sidebarId: "learnSidebar", label: "Learn"},
        {to: "/cosmos/timeline", label: "Universe"},
        { to: "/community", label: "Community" },
        { to: "/blog", label: "Blog" },

        // {
        //   type: "html",
        //   value: '<span class="badge badge--primary">Beta</span>',
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
            { href: "https://kitimi.sharepoint.com/sites/Hub", label: "MissionControl" },
          ],
        },
        {
          href: "https://github.com/mkeithX",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        { type: "search", position: "right" },
      ],
    },
    algolia: {
      apiKey: "b63e590c0b5a9ab7c0930991ea785aeb",
      indexName: "mkeithx",
      appId: "XVSOLYZXNV",
      contextualSearch: false
    },
    footer: {
      style: "dark",
      logo: {
        alt: "footerLogo",
        src: "img/logo/developers-a.png",
        href: "/",
        // width: "330",
        height: "60"
      },
      links: [
        {
          title: "Docs",
          items: [
            { label: "System Admin", to: "/docs/system-administration" },
            { label: "Python Examples", to: "/docs/learn/python/examples" },
            { label: "Keyword", to: "/me" },
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
          items: [socialProfiles.xdotcom, socialProfiles.facebook,  socialProfiles.github,],
        },
        {
          title: "Developers",
          items: [
            socialProfiles.m365dev,
            socialProfiles.cloudflare,
            socialProfiles.azSpaceHub,
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
        "bash",
        "json",
        "batch",
        "yaml",
        "tsx"
      ],
    },
    metadata: [
      { name: 'og:title', content: 'Kitimi Universe' },
      {
        name: 'og:description',
        content: 'A cosmic-flavored website for Software Development, Documentation and more!'
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
