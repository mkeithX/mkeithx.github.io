import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import npm2yarn from "@docusaurus/remark-plugin-npm2yarn";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";

const config: Config = {
  title: "mkeithX",
  tagline:
    "I'm a software developer with a facination for understanding the comple of the universe.",
  favicon: "icons/favicon.ico",
  titleDelimiter: "·",
  url: "https://mkeithx.github.io",
  baseUrl: "/",
  organizationName: "mkeithX", // Usually your GitHub org/user name.
  projectName: "mkeithx.github.io",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "throw",
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
          showLastUpdateAuthor: false,
          breadcrumbs: true,
          sidebarPath: "./sidebars.ts",
          showLastUpdateTime: false,
          disableVersioning: false,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: "docs",
          remarkPlugins: [[npm2yarn, { sync: true }], remarkMath],
          rehypePlugins: [rehypeKatex],
          docItemComponent: "@theme/DocItem",
        },

        blog: {
          path: "blog",
          blogTitle: 'Blog',
          blogDescription: 'A powered blog!',
          routeBasePath: "blog",

          blogSidebarTitle: 'Recents',
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
            copyright: `Copyright © ${new Date().getFullYear()} mkeithX`,
          },
        },

        theme: {
          customCss: "./src/css/custom.css",
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

    image: "img/social-banner.png",

    navbar: {
      style: "dark",
      hideOnScroll: true,
      logo: {
        alt: "mkjs Logo",
        src: "img/mkjs.svg",
        target: "_self",
        width: 80,
        height: 80,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "docSidebar",
          position: "right",
          label: "Docs",
        },
        // {
        //   type: "docSidebar",
        //   sidebarId: "guideSidebar",
        //   position: "right",
        //   label: "Guides",
        // },

        { to: "/blog", label: "Blog", position: "right" },
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
        src: 'img/mkjs.svg',
        href: '/',
        height: '30'
      },

      copyright: `Copyright © ${new Date().getFullYear()}`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["powershell", "python", "java","bash","json"],
    },
  } satisfies Preset.ThemeConfig,



};

export default config;
