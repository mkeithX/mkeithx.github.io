"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1561],{1787:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>o,metadata:()=>u,toc:()=>d});var t=a(4848),s=a(8453),r=a(1470),i=a(9365);const o={title:"Configuration",sidebar_label:"Configuration"},l=void 0,u={id:"guides/docusaurus/extras/custom-config",title:"Configuration",description:"Custom configuration",source:"@site/docs/guides/docusaurus/extras/custom-config.mdx",sourceDirName:"guides/docusaurus/extras",slug:"/guides/docusaurus/extras/custom-config",permalink:"/docs/guides/docusaurus/extras/custom-config",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",frontMatter:{title:"Configuration",sidebar_label:"Configuration"},sidebar:"mySidebar",previous:{title:"Classic preset",permalink:"/docs/guides/docusaurus/extras/classic-preset"},next:{title:"Manage Docs Versions",permalink:"/docs/guides/docusaurus/extras/manage-docs-versions"}},c={},d=[{value:"Custom configuration",id:"custom-configuration",level:3},{value:"Sidebars",id:"sidebars",level:3},{value:"Installation",id:"installation",level:3},{value:"Local Development",id:"local-development",level:3},{value:"Build",id:"build",level:3},{value:"Deployment",id:"deployment",level:3}];function p(e){const n={a:"a",code:"code",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h3,{id:"custom-configuration",children:"Custom configuration"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/docusaurus.config.js"',children:"\n// @ts-check\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  tagline: 'Your cool website.',\n  favicon: 'img/favicon.ico',\n\n  /* Your site config here */\n\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      (\n        {\n          /* Your preset config here */\n        }\n      ),\n    ],\n  ],\n  themeConfig:\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    (\n      {\n        /* Your theme config here */\n      }\n    ),\n};\n\nexport default config;\n\n"})}),"\n",(0,t.jsx)(n.h3,{id:"sidebars",children:"Sidebars"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-jsx",metastring:'title="src/sidebars.js"',children:"import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';\nconst sidebars: SidebarsConfig = {\n  docs: [\n    'introduction',\n    {\n      type: 'category',\n      label: 'Getting Started',\n      link: {\n        type: 'generated-index',\n      },\n      collapsed: false,\n      items: [\n        'installation',\n        'configuration',\n        'playground',\n        'typescript-support',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Guides',\n      link: {\n        type: 'generated-index',\n        title: 'Docusaurus Guides',\n        description:\n          \"Let's learn about the most important Docusaurus concepts!\",\n        keywords: ['guides'],\n        image: '/img/docusaurus.png',\n      },\n      items: [\n        'guides/creating-pages',\n        {\n          type: 'category',\n          label: 'Docs',\n          link: {\n            type: 'doc',\n            id: 'guides/docs/introduction',\n          },\n          items: [\n            'guides/docs/create-doc',\n            {\n              type: 'category',\n              label: 'Sidebar',\n              link: {\n                type: 'doc',\n                id: 'guides/docs/sidebar/index',\n              },\n              items: [\n                'guides/docs/sidebar/items',\n                'guides/docs/sidebar/autogenerated',\n                'guides/docs/sidebar/multiple-sidebars',\n              ],\n            },\n            'guides/docs/versioning',\n            'guides/docs/multi-instance',\n          ],\n        },\n        'blog',\n        {\n          type: 'category',\n          label: 'Markdown Features',\n          link: {\n            type: 'doc',\n            id: 'guides/markdown-features/introduction',\n          },\n          items: [\n            'guides/markdown-features/react',\n            'guides/markdown-features/tabs',\n            'guides/markdown-features/code-blocks',\n            'guides/markdown-features/admonitions',\n            'guides/markdown-features/toc',\n            'guides/markdown-features/assets',\n            'guides/markdown-features/links',\n            'guides/markdown-features/plugins',\n            'guides/markdown-features/math-equations',\n            'guides/markdown-features/diagrams',\n            'guides/markdown-features/head-metadata',\n          ],\n        },\n        'styling-layout',\n        'swizzling',\n        'static-assets',\n        'search',\n        'browser-support',\n        'seo',\n        'using-plugins',\n        'deployment',\n        {\n          type: 'category',\n          label: 'Internationalization',\n          link: {type: 'doc', id: 'i18n/introduction'},\n          items: [\n            {\n              type: 'doc',\n              id: 'i18n/tutorial',\n              label: 'Tutorial',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/git',\n              label: 'Using Git',\n            },\n            {\n              type: 'doc',\n              id: 'i18n/crowdin',\n              label: 'Using Crowdin',\n            },\n          ],\n        },\n        'guides/whats-next',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Advanced Guides',\n      link: {type: 'doc', id: 'advanced/index'},\n      items: [\n        'advanced/architecture',\n        'advanced/plugins',\n        'advanced/routing',\n        'advanced/ssg',\n        'advanced/client',\n      ],\n    },\n    {\n      type: 'category',\n      label: 'Upgrading',\n      link: {\n        type: 'doc',\n        id: 'migration/index',\n      },\n      items: [\n        'migration/v3',\n        {\n          type: 'category',\n          label: 'To Docusaurus v2',\n          items: [\n            'migration/v2/migration-overview',\n            'migration/v2/migration-automated',\n            'migration/v2/migration-manual',\n            'migration/v2/migration-versioned-sites',\n            'migration/v2/migration-translated-sites',\n          ],\n        },\n      ],\n    },\n  ],\n  api: [\n    'cli',\n    'docusaurus-core',\n    {\n      type: 'autogenerated',\n      dirName: 'api',\n    },\n  ],\n};\nexport default sidebars;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["This website is built using ",(0,t.jsx)(n.a,{href:"https://docusaurus.io/",children:"Docusaurus"}),", a modern static website generator."]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ npm install\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ yarn install\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ pnpm install\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"local-development",children:"Local Development"}),"\n",(0,t.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ npm start\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ yarn start\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ pnpm start\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:"This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server."}),"\n",(0,t.jsx)(n.h3,{id:"build",children:"Build"}),"\n",(0,t.jsxs)(r.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ npm run build\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ yarn build\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"$ pnpm run build\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["This command generates static content into the ",(0,t.jsx)(n.code,{children:"build"})," directory and can be served using any static contents hosting service."]}),"\n",(0,t.jsx)(n.h3,{id:"deployment",children:"Deployment"}),"\n",(0,t.jsx)(n.p,{children:"Using SSH:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ USE_SSH=true yarn deploy\n"})}),"\n",(0,t.jsx)(n.p,{children:"Not using SSH:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-sh",children:"$ GIT_USER=<Your GitHub username> yarn deploy\n"})}),"\n",(0,t.jsxs)(n.p,{children:["If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the ",(0,t.jsx)(n.code,{children:"gh-pages"})," branch."]})]})}function g(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},9365:(e,n,a)=>{a.d(n,{A:()=>i});a(6540);var t=a(4164);const s={tabItem:"tabItem_Ymn6"};var r=a(4848);function i(e){let{children:n,hidden:a,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,t.A)(s.tabItem,i),hidden:a,children:n})}},1470:(e,n,a)=>{a.d(n,{A:()=>w});var t=a(6540),s=a(4164),r=a(3104),i=a(6347),o=a(205),l=a(7485),u=a(1682),c=a(9466);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:a}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:s}}=e;return{value:n,label:a,attributes:t,default:s}}))}(a);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function g(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const s=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,l.aZ)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(s.location.search);n.set(r,e),s.replace({...s.location,search:n.toString()})}),[r,s])]}function h(e){const{defaultValue:n,queryString:a=!1,groupId:s}=e,r=p(e),[i,l]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[u,d]=m({queryString:a,groupId:s}),[h,b]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[s,r]=(0,c.Dv)(a);return[s,(0,t.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:s}),f=(()=>{const e=u??h;return g({value:e,tabValues:r})?e:null})();(0,o.A)((()=>{f&&l(f)}),[f]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!g({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,r]),tabValues:r}}var b=a(2303);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=a(4848);function x(e){let{className:n,block:a,selectedValue:t,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,a=l.indexOf(n),s=o[a].value;s!==t&&(u(n),i(s))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const a=l.indexOf(e.currentTarget)+1;n=l[a]??l[0];break}case"ArrowLeft":{const a=l.indexOf(e.currentTarget)-1;n=l[a]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...r,className:(0,s.A)("tabs__item",f.tabItem,r?.className,{"tabs__item--active":t===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:s}=e;const r=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function j(e){const n=h(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",f.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function w(e){const n=(0,b.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,a)=>{a.d(n,{R:()=>i,x:()=>o});var t=a(6540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);