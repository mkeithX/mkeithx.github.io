import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

const copyright = `Copyright © ${new Date().getFullYear()} • Keith Tan • Built with Docusaurus.`;

const internetProfiles = {
  linkedin: {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mkeithtan",
  },

  github: {
    label: "GitHub",
    href: "https://github.com/mkeithx"
  },

  twitter: {
    label: "Twitter",
    href: "https://twitter.com/mkeithtan"
  }
}

const config: Config = {
  title: "MKX",
  tagline:"I'm a web developer and fascinated by the mysteries of the Cosmos.",
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
    description: "Keith's Galactic Gazette."

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
          routeBasePath: 'docs',
          include: ['**/*.md', '**/*.mdx'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
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
          blogSidebarTitle: 'Recent',
          blogSidebarCount: 5,
          include: ['**/*.{md,mdx}'],
          
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 'ALL',
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',

          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],

          feedOptions: {
            type: "all",
            copyright,
            createFeedItems: async (params) => {
              const {blogPosts, defaultCreateFeedItems, ...rest} = params;
              return defaultCreateFeedItems({
                // keep only the 10 most recent blog posts in the feed
                blogPosts: blogPosts.filter((item, index) => index < 10),
                ...rest,
              });
            },
          },
        },


        pages: {
          path: 'src/pages',
          routeBasePath: '',
          include: ['**/*.{js,jsx,ts,tsx,md,mdx}'],
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],

          beforeDefaultRemarkPlugins: [],
          beforeDefaultRehypePlugins: [],
        },
        

        theme: {
          customCss: ['./src/css/custom.css'],
        },
      } satisfies Preset.Options,
    ],
  ],





  themeConfig: {

    colorMode: {
      defaultMode: "dark",
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

    image: "img/social-react-x-banner.png",

    navbar: {
      style: "dark",
      hideOnScroll: true,
      // title: "MKEITHX",
      logo: {
        alt: "mkjs Logo",
        src: "img/logo/mkx_demo_new.png",
        target: "_self",
        // width: 100,
        height: 20,
      },
      items: [

        {
          type: "docSidebar",
          position: "left",
          sidebarId: "mySidebar",
          label: "Docs"
        },
        {
          type: 'docSidebar',
          position: "left",
          sidebarId: "cosmosSidebar",
          label: "The Cosmos"
        },


      
        { to: "/blog", label: "Blog", position: "left" },

        {to: "/projects", label: "Showcase", position: "right"},

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
        alt: 'mkeithX',
        src: "img/logo/mkx_demo_new.png",
        href: '/',
        height: '50',
        // width: '60'
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides',
              to: 'docs/guides/',
            },

            {
              label: 'ConTweaks',
              to: 'docs/contweaks',
            },

          ],
        },
        {
          title: 'Connect',
          items: [
            internetProfiles.linkedin,
            internetProfiles.twitter
          ],
        },
        
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog/',
            },
            {
              label: 'Projects',
              to: 'projects/',
            },
            {
              label: 'Nutshell',
              to: "me/"
            },
          ],
        }, 
      ],
      
      copyright,
    },
    prism: {
      // theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["powershell", "python", "java", "bash", "json"],
    },
  } satisfies Preset.ThemeConfig,
  
  plugins: [
    async function tailwindPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          postcssOptions.plugins.push(tailwind);
          postcssOptions.plugins.push(autoprefixer);
          return postcssOptions;
        },
      };
    },
  ],

};

export default config;
