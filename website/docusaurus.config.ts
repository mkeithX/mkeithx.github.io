import path from 'path';
import type { Config } from '@docusaurus/types';
import * as Preset from "@docusaurus/preset-classic";
import type { Options as PluginDocs } from "@docusaurus/plugin-content-docs";
import type { Options as PluginIdealImage } from "@docusaurus/plugin-ideal-image";
import type { Options as PluginClientRedirects } from "@docusaurus/plugin-client-redirects";
import PrismLight from "./src/utils/prismLight";
import PrismDark from "./src/utils/prismDark";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import redirects from "./redirects";
import { admonitionsConfig } from "./admonitionsConfig";
import socialProfiles from './social.json';

const isDev = process.env.NODE_ENV === 'development';

const copyright = `Copyright © ${new Date().getFullYear()} Keith Tan and Contributors`;

const commonStylesheets = [
  {
    href: "/katex/katex.min.css",
    type: "text/css",
    rel: "stylesheet",
    crossorigin: "anonymous",
  },
  {
    href: "https://XVSOLYZXNV-dsn.algolia.net",
    rel: "preconnect",
    crossorigin: "anonymous",
  }
]
const commonScripts = [
  {
    src: "https://cdn.jsdelivr.net/npm/@docsearch/react@",
    async: true,
  },
  {
    src: "https://static.cloudflareinsights.com/beacon.min.js?token=69d41ca9ce4d4388887ff7048c49c607&spa=false", // &spa=false
    defer: true,
  }
]

const commonDocsConfig = {
  showLastUpdateAuthor: true,
  showLastUpdateTime: true,
  remarkPlugins: [
    [npm2yarn, { sync: true }],
    remarkMath,
  ],
  rehypePlugins: [rehypeKatex],
  ...admonitionsConfig,
};

const config: Config = {
  title: "Kitimi Universe",
  tagline: "The official docs website for the SpaceHub Project, featuring Guides, Code samples for IT admins and software developers.",
  favicon: "icons/favicon/round-dark.ico",
  url: "https://mkeithx.pages.dev",
  baseUrl: "/",
  organizationName: "mkeithX",
  projectName: "mkeithx.github.io",
  trailingSlash: false,
  titleDelimiter: "•",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  onBrokenAnchors: "throw",

  future: {
    v4: true,
    experimental_faster: true,
    experimental_storage: {
      type: 'localStorage',
      namespace: true,
    }
  },

  staticDirectories: [
    "static", "public",
    path.join(__dirname, "non-existent"),
  ],

  customFields: {
    description: "Representing humanity from Dimension C-137 and beyond.",
    custom_header: "The SpaceHub Project @Kitiplex",
    custom_tagline: "Guides and Code Samples from mkeith",
    GIT_USER: process.env.GIT_USER,
    USE_SSH: process.env.USE_SSH,
    GIT_USER_NAME: process.env.GIT_USER_NAME,
    GIT_USER_EMAIL: process.env.GIT_USER_EMAIL,
  },

  stylesheets: commonStylesheets,
  scripts: commonScripts,

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
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
        },

        blog: {
          path: "blog",
          blogTitle: "Updates",
          blogDescription: "Keep up to date with what's going on with The SpaceHub Project!",
          routeBasePath: "blog",
          blogSidebarTitle: "Updates",
          blogSidebarCount: "ALL",
          postsPerPage: 3,
          onInlineTags: "throw",
          onInlineAuthors: "throw",
          onUntruncatedBlogPosts: "ignore",
          feedOptions: {
            type: "all",
            title: "The SpaceHub Project",
            description: "Stay tuned with upcoming updates releases and articles by following our feed!",
            xslt: true,
            copyright,
          },
          ...admonitionsConfig,
        },

        pages: {
          path: "src/pages",
          routeBasePath: "",
          showLastUpdateTime: false,
          showLastUpdateAuthor: false,
          remarkPlugins: [
            remarkMath,
            [npm2yarn, { sync: true }],
          ],
          rehypePlugins: [rehypeKatex],
        },

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
          trackingID: "G-YYZ6V070LQ",
          anonymizeIP: true,
        },
        svgr: {
          svgrConfig: {
            svgoConfig: undefined,
          },
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: ['@docusaurus/theme-live-codeblock'],

  plugins: [
    "@docusaurus/theme-mermaid",
    "./src/plugins/featureRequests/FeatureRequestsPlugin.js",
    [
      "content-docs",
      {
        id: "cosmos",
        path: "cosmos",
        routeBasePath: "cosmos",
        sidebarPath: "./sidebarsCosmos.ts",
        ...commonDocsConfig,
      } as PluginDocs,
    ],
    [
      "content-docs",
      {
        id: "community",
        path: "community",
        routeBasePath: "community",
        sidebarPath: "./sidebarsCommunity.ts",
        ...commonDocsConfig,
      } as PluginDocs,
    ],

    [
      "ideal-image",
      {
        quality: 70,
        max: 1030,
        min: 640,
        steps: 2,
        disableInDev: false,
      } as PluginIdealImage,
    ],

    [
      "client-redirects",
      {
        redirects,
      } as PluginClientRedirects,
    ],
  ],

  themeConfig: {
    liveCodeBlock: {
      playgroundPosition: 'bottom',
    },
    colorMode: {
      respectPrefersColorScheme: true,
      disableSwitch: false,
    },

    announcementBar: {
      id: `announcementBar_`,
      content:
        `<a href="https://creativecommons.org/licenses/by/4.0/" target="_blank" rel="noopener noreferrer">Articles published on this site are licensed under CC BY 4.0</a>`,
      isCloseable: false,
      backgroundColor: '#001127ff', // #051737ff
    },

    docs: {
      versionPersistence: "localStorage",

      sidebar: {
        hideable: true,
        autoCollapseCategories: true,
      },
    },

    blog: {
      sidebar: {
        groupByYear: true,
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
      title: "Kitimi Universe",
      logo: {
        alt: "SpaceHub",
        src: "img/logo/kitimi-icon-new.svg",
        target: "_self",
        // height: "40",
        // width: "85"
      },
      items: [
        {
          type: "dropdown",
          label: "Development",
          position: "left",
          items: [
            { type: "doc", docId: "introduction", label: "Docs" },
            { type: "docSidebar", sidebarId: "learnSidebar", label: "Learn" },
            { to: "/cosmos/timeline", label: "Cosmos" },
            { type: "html", value: '<hr class="dropdown-separator">' },
            { to: "/help", label: "Support" },
            ...(isDev ? [{ to: '/examples', label: 'Examples ⚠️' }] : []),
            ...(isDev ? [{ to: '/__docusaurus/debug', label: 'Debug ⚠️' }] : []),
            ...(isDev ? [{ to: '/tests', label: 'Test ⚠️' }] : []),
          ],
        },
        { to: "/community", label: "Community", position: "left" },        
        { to: "/blog", label: "Updates", position: 'left' },
        {
          type: "dropdown",
          label: "More",
          position: "right",
          items: [
            { to: "/feature-requests", label: "Feedback" },
            { label: "Issue tracker", href: "https://github.com/mkeithX/mkeithx.github.io/issues" },
            { to: "/feeling-lucky", label: "Feeling Lucky 👍" },
            { type: "html", value: '<hr class="dropdown-separator">' },
            { to: "/coming-soon", label: "Examples" },
            { label: "RSS", href: "https://mkeithx.pages.dev/blog/rss.xml" },
          ],
        },
        {
          href: "https://github.com/mkeithX",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
        {
          href: "https://X.com/mkeithtan",
          position: "right",
          className: "header-x-link",
          "aria-label": "X",
        },
        { type: "search", position: "right", className: "DocSearch" },
      ],
    },
    footer: {
      style: "dark",
      logo: {
        alt: "footerLogo",
        src: "img/logo/kitimi-platforms.png",
        href: "/",
        height: "55",
      },
      links: [
        {
          title: "Docs",
          items: [
            { label: "Introduction", to: "/docs" },
            { label: "IT Admins", to: "/docs/system-administration" },
            { label: "Author's Note", to: "/me" },
          ],
        },
        {
          title: "Community",
          items: [
            { label: "Support", to: "/help" },
            { label: "Contribute", href: "/community" },
            { label: "Feedback", to: "/feature-requests" },
          ],
        },
        {
          title: "Kitiplex",
          items: [
            socialProfiles.xdotcom,
            socialProfiles.github,
            socialProfiles.facebook,            
          ],
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
      defaultLanguage: "tsx",
      additionalLanguages: [
        "powershell",
        "python",
        "bash",
        "json",
        "batch",
        "yaml",
      ],
    },
    metadata: [
      { name: "og:title", content: "Kitimi Universe" },
      {
        name: "og:description",
        content: "The official docs website for the SpaceHub Project, featuring Guides, Code samples for IT admins and software developers.",
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
