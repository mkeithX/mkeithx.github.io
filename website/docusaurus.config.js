// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config
import autoprefixer from "autoprefixer";
import {themes as prismThemes} from 'prism-react-renderer';
import tailwind from "tailwindcss";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'mkeithX',
  tagline: "I'm a Software Engineer passionate about solving meaningful problems.",
  favicon: 'img/favicon.ico',
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
          sidebarPath: './sidebars.js',
        
        },
        blog: {
          showReadingTime: true,
         
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        // title: 'mkeithX',
        logo: {
          alt: 'mkjs Logo',
          src: 'img/mkjs.svg',
          target: '_self',
          width: 100,
          height: 100,
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Tutorial',
          },
          
          {to: '/blog', label: 'Blog', position: 'right'},

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
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
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
