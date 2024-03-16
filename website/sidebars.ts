import type { SidebarsConfig } from '@docusaurus/plugin-content-docs';

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  // By default, Docusaurus generates a sidebar from the docs folder structure

  docSidebar: [{type: 'autogenerated', dirName: '.'}],

  // mkeithxSidebar: [

  //   "introduction",

  //   {
  //     type: "category",
  //     label: "Explore",
  //     collapsed: true,
  //     collapsible: true,
  //     link: {
  //       type: 'generated-index',
  //       description: "Some cool stuff to get to know more about me."
  //     },
  //     items: [
  //       "motivation",
  //       "curriculum-vitae",  
  //       'adhocs/principia-in-simple-terms',
  //       'adhocs/calculus-in-simple-terms',
  //     ]
  //   },

  //   // 'guides/index',

  //   {
  //     label: 'Guides',
  //     type: 'category',
  //     collapsed: true,
  //     collapsible: true,
      
  //     link: {
  //       type: 'generated-index',
  //       description: "Snippets, canned responses and other stuff created for testing purposes, aiming to enhance workflow efficiency."

  //     },

  //     items: [
  //       // 

  //       {
  //         label: 'Docusaurus',
  //         type: 'category',
  //         collapsed: true,
  //         collapsible: true,
  //         link: {
  //           type: 'generated-index',
  //           // id:   "guides/docusaurus/basics/index",
  //           // id: "guides/docusaurus/index"
  //         },

  //         items: [
  //           "guides/docusaurus/index",
  //           "guides/docusaurus/basics/create-a-blog-post",
  //           "guides/docusaurus/basics/deploy-your-site",
  //           "guides/docusaurus/basics/markdown-features",
  //           "guides/docusaurus/basics/congratulations",
            
  //         ],
          
  //       },
  //       {
  //         type: 'category',
  //         label: 'Extended',
  //         collapsed: true,
  //         collapsible: true,
  //         link: {
  //           type: 'doc',
  //           id: 'guides/docusaurus/extended/index',
  //         },
          
  //         items: [
  //           "guides/docusaurus/extended/manage-docs-versions",
  //           "guides/docusaurus/extended/translate-your-site",
  //           "guides/docusaurus/extended/custom-config",
  //           "guides/docusaurus/extended/classic-preset",
  //         ],
  //       },
  //     ],


  //   },
  // ],



  // But you can create a sidebar manually
  /*
  tutorialSidebar: [
    'intro',
    'hello',
    {
      type: 'category',
      label: 'Tutorial',
      items: ['tutorial-basics/create-a-document'],
    },
  ],
   */
};

export default sidebars;
