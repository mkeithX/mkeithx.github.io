"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5235],{5794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var a=t(4848),s=t(8453),r=(t(7319),t(9489)),o=t(7227);const i={title:"Configuration",description:"MKX SpaceHub website configuration."},l=void 0,c={id:"configuration",title:"Configuration",description:"MKX SpaceHub website configuration.",source:"@site/docs/configuration.mdx",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1718361357e3,frontMatter:{title:"Configuration",description:"MKX SpaceHub website configuration."},sidebar:"mySidebar",previous:{title:"Initialization",permalink:"/docs/initialization"},next:{title:"Deployment",permalink:"/docs/deployment"}},u={},d=[{value:"<code>docusaurus.config</code>",id:"docusaurusconfig",level:2},{value:"<code>sidebars</code>",id:"sidebars",level:2},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Step one",id:"step-one",level:3},{value:"Step two",id:"step-two",level:3},{value:"Step three",id:"step-three",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h2,{id:"docusaurusconfig",children:(0,a.jsx)(n.code,{children:"docusaurus.config"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Default configuration"}),(0,a.jsxs)(r.A,{children:[(0,a.jsx)(o.A,{value:"js",label:"JavaScript",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js"',children:"// @ts-check\n// `@type` JSDoc annotations allow editor autocompletion and type checking\n// (when paired with `@ts-check`).\n// There are various equivalent ways to declare your Docusaurus config.\n// See: https://docusaurus.io/docs/api/docusaurus-config\n\nimport {themes as prismThemes} from 'prism-react-renderer';\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  title: 'My Site',\n  tagline: 'Dinosaurs are cool',\n  favicon: 'img/favicon.ico',\n\n  // Set the production url of your site here\n  url: 'https://your-docusaurus-site.example.com',\n  // Set the /<baseUrl>/ pathname under which your site is served\n  // For GitHub pages deployment, it is often '/<projectName>/'\n  baseUrl: '/',\n\n  // GitHub pages deployment config.\n  // If you aren't using GitHub pages, you don't need these.\n  organizationName: 'facebook', // Usually your GitHub org/user name.\n  projectName: 'docusaurus', // Usually your repo name.\n\n  onBrokenLinks: 'throw',\n  onBrokenMarkdownLinks: 'warn',\n\n  // Even if you don't use internationalization, you can use this field to set\n  // useful metadata like html lang. For example, if your site is Chinese, you\n  // may want to replace \"en\" with \"zh-Hans\".\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en'],\n  },\n\n  presets: [\n    [\n      'classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      ({\n        docs: {\n          sidebarPath: './sidebars.js',\n          // Please change this to your repo.\n          // Remove this to remove the \"edit this page\" links.\n          editUrl:\n            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',\n        },\n        blog: {\n          showReadingTime: true,\n          // Please change this to your repo.\n          // Remove this to remove the \"edit this page\" links.\n          editUrl:\n            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',\n        },\n        theme: {\n          customCss: './src/css/custom.css',\n        },\n      }),\n    ],\n  ],\n\n  themeConfig:\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    ({\n      // Replace with your project's social card\n      image: 'img/docusaurus-social-card.jpg',\n      navbar: {\n        title: 'My Site',\n        logo: {\n          alt: 'My Site Logo',\n          src: 'img/logo.svg',\n        },\n        items: [\n          {\n            type: 'docSidebar',\n            sidebarId: 'tutorialSidebar',\n            position: 'left',\n            label: 'Tutorial',\n          },\n          {to: '/blog', label: 'Blog', position: 'left'},\n          {\n            href: 'https://github.com/facebook/docusaurus',\n            label: 'GitHub',\n            position: 'right',\n          },\n        ],\n      },\n      footer: {\n        style: 'dark',\n        links: [\n          {\n            title: 'Docs',\n            items: [\n              {\n                label: 'Tutorial',\n                to: '/docs/intro',\n              },\n            ],\n          },\n          {\n            title: 'Community',\n            items: [\n              {\n                label: 'Stack Overflow',\n                href: 'https://stackoverflow.com/questions/tagged/docusaurus',\n              },\n              {\n                label: 'Discord',\n                href: 'https://discordapp.com/invite/docusaurus',\n              },\n              {\n                label: 'Twitter',\n                href: 'https://twitter.com/docusaurus',\n              },\n            ],\n          },\n          {\n            title: 'More',\n            items: [\n              {\n                label: 'Blog',\n                to: '/blog',\n              },\n              {\n                label: 'GitHub',\n                href: 'https://github.com/facebook/docusaurus',\n              },\n            ],\n          },\n        ],\n        copyright: `Copyright \xa9 ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,\n      },\n      prism: {\n        theme: prismThemes.github,\n        darkTheme: prismThemes.dracula,\n      },\n    }),\n};\n\nexport default config;\n"})})}),(0,a.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"import {themes as prismThemes} from 'prism-react-renderer';\nimport type {Config} from '@docusaurus/types';\nimport type * as Preset from '@docusaurus/preset-classic';\n\nconst config: Config = {\n  title: 'My Site',\n  tagline: 'Dinosaurs are cool',\n  favicon: 'img/favicon.ico',\n\n  // Set the production url of your site here\n  url: 'https://your-docusaurus-site.example.com',\n  // Set the /<baseUrl>/ pathname under which your site is served\n  // For GitHub pages deployment, it is often '/<projectName>/'\n  baseUrl: '/',\n\n  // GitHub pages deployment config.\n  // If you aren't using GitHub pages, you don't need these.\n  organizationName: 'facebook', // Usually your GitHub org/user name.\n  projectName: 'docusaurus', // Usually your repo name.\n\n  onBrokenLinks: 'throw',\n  onBrokenMarkdownLinks: 'warn',\n\n  // Even if you don't use internationalization, you can use this field to set\n  // useful metadata like html lang. For example, if your site is Chinese, you\n  // may want to replace \"en\" with \"zh-Hans\".\n  i18n: {\n    defaultLocale: 'en',\n    locales: ['en'],\n  },\n\n  presets: [\n    [\n      'classic',\n      {\n        docs: {\n          sidebarPath: './sidebars.ts',\n          // Please change this to your repo.\n          // Remove this to remove the \"edit this page\" links.\n          editUrl:\n            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',\n        },\n        blog: {\n          showReadingTime: true,\n          // Please change this to your repo.\n          // Remove this to remove the \"edit this page\" links.\n          editUrl:\n            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',\n        },\n        theme: {\n          customCss: './src/css/custom.css',\n        },\n      } satisfies Preset.Options,\n    ],\n  ],\n\n  themeConfig: {\n    // Replace with your project's social card\n    image: 'img/docusaurus-social-card.jpg',\n    navbar: {\n      title: 'My Site',\n      logo: {\n        alt: 'My Site Logo',\n        src: 'img/logo.svg',\n      },\n      items: [\n        {\n          type: 'docSidebar',\n          sidebarId: 'tutorialSidebar',\n          position: 'left',\n          label: 'Tutorial',\n        },\n        {to: '/blog', label: 'Blog', position: 'left'},\n        {\n          href: 'https://github.com/facebook/docusaurus',\n          label: 'GitHub',\n          position: 'right',\n        },\n      ],\n    },\n    footer: {\n      style: 'dark',\n      links: [\n        {\n          title: 'Docs',\n          items: [\n            {\n              label: 'Tutorial',\n              to: '/docs/intro',\n            },\n          ],\n        },\n        {\n          title: 'Community',\n          items: [\n            {\n              label: 'Stack Overflow',\n              href: 'https://stackoverflow.com/questions/tagged/docusaurus',\n            },\n            {\n              label: 'Discord',\n              href: 'https://discordapp.com/invite/docusaurus',\n            },\n            {\n              label: 'Twitter',\n              href: 'https://twitter.com/docusaurus',\n            },\n          ],\n        },\n        {\n          title: 'More',\n          items: [\n            {\n              label: 'Blog',\n              to: '/blog',\n            },\n            {\n              label: 'GitHub',\n              href: 'https://github.com/facebook/docusaurus',\n            },\n          ],\n        },\n      ],\n      copyright: `Copyright \xa9 ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,\n    },\n    prism: {\n      theme: prismThemes.github,\n      darkTheme: prismThemes.dracula,\n    },\n  } satisfies Preset.ThemeConfig,\n};\n\nexport default config;\n"})})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"sidebars",children:(0,a.jsx)(n.code,{children:"sidebars"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Default sidebars"}),(0,a.jsxs)(r.A,{children:[(0,a.jsx)(o.A,{value:"js",label:"JavaScript",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"/**\n * Creating a sidebar enables you to:\n - create an ordered group of docs\n - render a sidebar for each doc of that group\n - provide next/previous navigation\n\n The sidebars can be generated from the filesystem, or explicitly defined here.\n\n Create as many sidebars as you want.\n */\n\n// @ts-check\n\n/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */\nconst sidebars = {\n  // By default, Docusaurus generates a sidebar from the docs folder structure\n  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],\n\n  // But you can create a sidebar manually\n  /*\n  tutorialSidebar: [\n    'intro',\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n   */\n};\n\nexport default sidebars;\n"})})}),(0,a.jsx)(o.A,{value:"ts",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",children:"import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';\n\n/**\n * Creating a sidebar enables you to:\n - create an ordered group of docs\n - render a sidebar for each doc of that group\n - provide next/previous navigation\n\n The sidebars can be generated from the filesystem, or explicitly defined here.\n\n Create as many sidebars as you want.\n */\nconst sidebars: SidebarsConfig = {\n  // By default, Docusaurus generates a sidebar from the docs folder structure\n  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],\n\n  // But you can create a sidebar manually\n  /*\n  tutorialSidebar: [\n    'intro',\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n   */\n};\n\nexport default sidebars;\n"})})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,a.jsx)(n.p,{children:"Resolve issues caused by mismatching cached dependencies - especially during upgrades."}),"\n",(0,a.jsx)(n.h3,{id:"step-one",children:"Step one"}),"\n",(0,a.jsx)(n.p,{children:"Clear all generated assets, caches and build artifacts:"}),"\n",(0,a.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,a.jsx)(o.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run clear\n"})})}),(0,a.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn clear\n"})})}),(0,a.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm run clear\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"step-two",children:"Step two"}),"\n",(0,a.jsxs)(n.p,{children:["Remove ",(0,a.jsx)(n.code,{children:"node_modules"})," and the lock file(s):"]}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(o.A,{value:"bash",label:"Bash",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm -rf node_modules yarn.lock package-lock.json\n"})})}),(0,a.jsx)(o.A,{value:"pwsh",label:"PowerShell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"@('node_modules','yarn.lock','package-lock.json') | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"step-three",children:"Step three"}),"\n",(0,a.jsx)(n.p,{children:"Reinstall packages:"}),"\n",(0,a.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,a.jsx)(o.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install\n"})})}),(0,a.jsx)(o.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})})}),(0,a.jsx)(o.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm install\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>o});t(6540);var a=t(4164);const s={tabItem:"tabItem_Ymn6"};var r=t(4848);function o(e){let{children:n,hidden:t,className:o}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(s.tabItem,o),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),s=t(4164),r=t(4245),o=t(6347),i=t(6494),l=t(2814),c=t(5167),u=t(9900);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:s}}=e;return{value:n,label:t,attributes:a,default:s}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:t}=e;const s=(0,o.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:s}=e,r=h(e),[o,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[c,d]=m({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,u.Dv)(t);return[s,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:s}),g=(()=>{const e=c??f;return p({value:e,tabValues:r})?e:null})();(0,i.A)((()=>{g&&l(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=t(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,r.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),s=i[t].value;s!==a&&(c(n),o(s))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...r,className:(0,s.A)("tabs__item",g.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:s}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function v(e){const n=f(e);return(0,y.jsxs)("div",{className:(0,s.A)("tabs-container",g.tabList),children:[(0,y.jsx)(j,{...n,...e}),(0,y.jsx)(x,{...n,...e})]})}function w(e){const n=(0,b.A)();return(0,y.jsx)(v,{...e,children:d(e.children)},String(n))}},7319:(e,n,t)=>{t.d(n,{A:()=>V});t(6540);var a=t(1348),s=t(4164),r=t(3230),o=t(9204),i=t(9059),l=t(4848);const c={icon:(0,l.jsx)(i.A,{}),title:(0,l.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function u(e){return(0,l.jsx)(o.A,{...c,...e,className:(0,s.A)("alert alert--secondary",e.className),children:e.children})}var d=t(7950);const h={icon:(0,l.jsx)(d.A,{}),title:(0,l.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function p(e){return(0,l.jsx)(o.A,{...h,...e,className:(0,s.A)("alert alert--success",e.className),children:e.children})}var m=t(6699);const f={icon:(0,l.jsx)(m.A,{}),title:(0,l.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,l.jsx)(o.A,{...f,...e,className:(0,s.A)("alert alert--info",e.className),children:e.children})}var g=t(667);const y={icon:(0,l.jsx)(g.A,{}),title:(0,l.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var j=t(6616);const x={icon:(0,l.jsx)(j.A,{}),title:(0,l.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function v(e){return(0,l.jsx)(o.A,{...x,...e,className:(0,s.A)("alert alert--danger",e.className),children:e.children})}var w=t(6784),k=t(7875);const A={icon:(0,l.jsx)(w.g,{icon:k._2G}),title:(0,l.jsx)(r.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var N=t(6188);const S={icon:(0,l.jsx)(w.g,{icon:N.fLc}),title:(0,l.jsx)(r.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const T={icon:(0,l.jsx)(w.g,{icon:N.KMJ}),title:(0,l.jsx)(r.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const C={icon:(0,l.jsx)(w.g,{icon:N.Wcv}),title:(0,l.jsx)(r.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const D={icon:(0,l.jsx)(w.g,{icon:N.rC2}),title:(0,l.jsx)(r.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const I={...{note:u,tip:p,info:b,caution:function(e){return(0,l.jsx)(o.A,{...y,...e,className:(0,s.A)("alert alert--warning",e.className),children:e.children})},danger:v,security:function(e){return(0,l.jsx)(o.A,{...S,...e,className:(0,s.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,l.jsx)(o.A,{...T,...e,className:(0,s.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,l.jsx)(o.A,{...C,...e,className:(0,s.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,l.jsx)(o.A,{...D,...e,className:(0,s.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,l.jsx)(o.A,{...A,...e,className:(0,s.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(u,{title:"secondary",...e}),important:e=>(0,l.jsx)(b,{title:"important",...e}),success:e=>(0,l.jsx)(p,{title:"success",...e}),warning:e=>(0,l.jsx)(v,{title:"warning",...e})}};function V(e){const n=(0,a.c)(e),t=(s=n.type,I[s]||(console.warn(`No admonition component found for admonition type "${s}". Using Info as fallback.`),I.info));var s;return(0,l.jsx)(t,{...n})}}}]);