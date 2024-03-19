import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

const config: Config = {
  title: "mkeithx",
  tagline:
    "I'm a software developer with a fascination for understanding the complex of the Cosmos.",
  favicon: "icons/favicon.ico",
  titleDelimiter: '•',
  url: "https://mkeithx.github.io",
  baseUrl: "/",
  organizationName: "mkeithX", 
  projectName: "mkeithx.github.io",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,

  customFields: {
    description: "Keith's Webspace with random stuff."

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
          breadcrumbs: true,
          sidebarPath: "./sidebars.ts",
          showLastUpdateTime: false,
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
          blogTitle: 'Updates',
          blogDescription: 'Blog and updates from mkeithX.',
          routeBasePath: "blog",
          blogSidebarTitle: 'Recent updates',
          blogSidebarCount: 5,
          include: ['**/*.{md,mdx}'],
          
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
          ],
          postsPerPage: 10,
          blogListComponent: '@theme/BlogListPage',
          blogPostComponent: '@theme/BlogPostPage',
          blogTagsListComponent: '@theme/BlogTagsListPage',
          blogTagsPostsComponent: '@theme/BlogTagsPostsPage',

          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],

          feedOptions: {
            type: "all",
            copyright: `Copyright © ${new Date().getFullYear()} Keith WT`,
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

  stylesheets: [
    {
      href: "https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV",
      crossorigin: "anonymous",
    },
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

    image: "img/social-banner-main.png",

    navbar: {
      // style: "dark",
      hideOnScroll: true,
      // title: "MKEITHX",
      logo: {
        alt: "mkjs Logo",
        src: "img/logo/mkx_demo_new.png",
        target: "_self",
        width: 100,
        height: 28,
      },
      items: [

        { to: "/blog", label: "Blog", position: "left" },

        {
          type: "docSidebar",
          sidebarId: "mySidebar",
          position: "left",
          label: "Docs",
        },

        {to: "showcase/", label: "Showcase", position: "right"},

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
        height: '80',
        // width: ''
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting started',
              to: 'docs/',
            },
            {
              label: 'Guides',
              to: 'docs/guides/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/mkeithtan',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/mkeithtan',
            },

          ],
        },
        
        {
          title: 'More',
          items: [
            {
              label: 'Updates',
              to: '/blog',
            },
          ],
        }, 
      ],

      copyright: `Copyright © ${new Date().getFullYear()} Keith WT`,
    },
    prism: {
      theme: prismThemes.github,
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
