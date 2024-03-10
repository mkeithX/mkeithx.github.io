import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import npm2yarn from '@docusaurus/remark-plugin-npm2yarn';


const config: Config = {
  title: 'mkeithX',
  tagline: "I'm a software developer with a facination for understanding the complex of the universe.",
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
      {
        docs: {
          path: 'docs',
          showLastUpdateAuthor: false,
          breadcrumbs: true,
          sidebarPath: 'sidebars.ts',
          showLastUpdateTime: false,
          disableVersioning: false,
          editLocalizedFiles: false,
          editCurrentVersion: false,
          routeBasePath: 'docs',
          remarkPlugins: [[npm2yarn, {sync: true}],remarkMath],
          rehypePlugins: [rehypeKatex],
          docItemComponent: '@theme/DocItem',

        },


        blog: {
          path: "blog",
          blogTitle: 'Blog title',
          showReadingTime: true,
          blogSidebarTitle: 'Recents',
          blogDescription: 'Blog',
          remarkPlugins: [[npm2yarn, {sync: true}],remarkMath],
          rehypePlugins: [rehypeKatex],
          routeBasePath: 'blog',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} mkeithX`,
          },
        },

        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.16.9/dist/katex.min.css',
      type: 'text/css',
      integrity:
      "sha384-n8MVd4RsNIU0tAv4ct0nTaAbDJwPJzDEaqSD1odI+WdtXRGWt2kTvGFasHpSy3SV",crossorigin: "anonymous"
    },
  ],

  themeConfig: {
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
      // title: 'My Site',
      style: 'dark',
      hideOnScroll: true,
      logo: {
        alt: 'mkjs Logo',
        src: 'img/mkjs.svg',
        target: '_self',
        width: 80,
        height: 80,
   
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'mkeithxSidebar',
          position: 'right',
          label: 'Doc',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'right',
          label: 'Guides',
        },

        {to: '/blog', label: 'Blog', position: 'right'},
        {
          href: 'https://github.com/mkeithx',
          'aria-label': 'GitHub',
          position: 'right',
          className: 'header-github-link'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides',
              to: '/docs/guides',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com',
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
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/mkeithx',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} mkeithX`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages:["powershell", "python", "java"]
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
