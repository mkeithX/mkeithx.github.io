// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import autoprefixer from "autoprefixer";
import {themes as prismThemes} from 'prism-react-renderer';


import tailwind from "tailwindcss";
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mkeithX',
  tagline: "passionate Software Engineer who loves pizza 🍕",
  favicon: 'icons/favicon.ico',
  titleDelimiter: '·',
  url: 'https://mkeithx.github.io',
  baseUrl: '/',
  organizationName: 'mkeithX', // Usually your GitHub org/user name.
  projectName: 'mkeithx.github.io',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: 'docs',
          showLastUpdateAuthor: false,
          breadcrumbs: true,
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          disableVersioning: false,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: 'docs',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],remarkMath],
          rehypePlugins: [rehypeKatex],
        
        },
        pages: {
          path: 'src/pages',
          routeBasePath: '',
          mdxPageComponent: '@theme/MDXPage',
          remarkPlugins: [[require('@docusaurus/remark-plugin-npm2yarn'), {sync: true}],remarkMath,],
          rehypePlugins: [rehypeKatex],
        },

        blog: {
          showReadingTime: true,
         
        },
        theme: {
          customCss: [require.resolve('./src/css/custom.css')],
        },
      }),
    ],
  ],
  stylesheets: [
    { href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',type: 'text/css',integrity:'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',crossorigin: 'anonymous',},
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: false,
        respectPrefersColorScheme: true,
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,
        },
      },
      image: 'img/social-banner.png',
      navbar: {
        // title: 'mkeithX',
        style: 'dark',
        hideOnScroll: true,
        logo: {
          alt: 'mkjs Logo',
          src: 'img/mkjs.svg',
          target: '_self',
          width: 100,
          // height: 100,
     
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "projectSidebar",
            label: "Docs",
            position: "right"
          },
          {
            type: "docSidebar",
            sidebarId: "snippetSidebar",
            label: "Snippets",
            position: "right"
          },
          /* {to: '/come-soon', label: 'Docs', position: 'right'},*/
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Tutorial',
          },

          // {to: '/blog', label: 'Blog', position: 'right'},

          {
            href: 'https://github.com/mkeithX/',
            'aria-label': 'GitHub repository',
            position: 'right',
            className: 'header-github-link',
          },
        ],
      },
      footer: {
        style: 'dark',
        logo: {
          alt: 'mkeithX',
          src: 'img/mkjs.svg',
          href: '/',
          height: '30'
        },
        copyright: `Copyright © ${new Date().getFullYear()} mkeithX.`,
      },
      prism: {
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['powershell','python','bash','json',],
      },
    }),
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
