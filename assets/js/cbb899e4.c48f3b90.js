"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5235],{5794:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var a=t(4848),r=t(8453),s=(t(7319),t(9489)),i=t(7227);const o={title:"Configuration",description:"Default and custom configuration."},l=void 0,c={id:"configuration",title:"Configuration",description:"Default and custom configuration.",source:"@site/docs/configuration.mdx",sourceDirName:".",slug:"/configuration",permalink:"/docs/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/docs/configuration.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:172233645e4,frontMatter:{title:"Configuration",description:"Default and custom configuration."},sidebar:"mySidebar",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Deployment",permalink:"/docs/deployment"}},u={},d=[{value:"Default",id:"default",level:2},{value:"<code>docusaurus.config</code>",id:"docusaurusconfig",level:3},{value:"<code>sidebars</code>",id:"sidebars",level:3},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Step one",id:"step-one",level:3},{value:"Step two",id:"step-two",level:3},{value:"Step three",id:"step-three",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In a TypeScript Docusaurus codebase, the configuration file is named ",(0,a.jsx)(n.code,{children:"docusaurus.config.ts"}),". You can see the ",(0,a.jsx)(n.a,{href:"https://github.com/mkeithX/mkeithx.github.io/blob/main/website/docusaurus.config.ts",children:"custom configuration"})," of this website."]}),"\n",(0,a.jsx)(n.h2,{id:"default",children:"Default"}),"\n",(0,a.jsx)(n.h3,{id:"docusaurusconfig",children:(0,a.jsx)(n.code,{children:"docusaurus.config"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Default configuration"}),(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"js",label:"JavaScript",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js" showLineNumbers',children:"// @ts-check\n\n/** @type {import('@docusaurus/types').Config} */\nconst config = {\n  tagline: 'Dinosaurs are cool',\n  favicon: 'img/favicon.ico',\n\n  /* Your site config here */\n\n  presets: [\n    [\n      '@docusaurus/preset-classic',\n      /** @type {import('@docusaurus/preset-classic').Options} */\n      (\n        {\n          /* Your preset config here */\n        }\n      ),\n    ],\n  ],\n  themeConfig:\n    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */\n    (\n      {\n        /* Your theme config here */\n      }\n    ),\n};\n\nexport default config;\n"})})}),(0,a.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="docusaurus.config.ts"',children:"import type {Config} from '@docusaurus/types';\nimport type * as Preset from '@docusaurus/preset-classic';\n\nconst config: Config = {\n  title: 'My Site',\n  favicon: 'img/favicon.ico',\n\n  /* Your site config here */\n\n  presets: [\n    [\n      'classic',\n      {\n        /* Your preset config here */\n      } satisfies Preset.Options,\n    ],\n  ],\n\n  themeConfig: {\n    /* Your theme config here */\n  } satisfies Preset.ThemeConfig,\n};\n\nexport default config;\n"})})})]})]}),"\n",(0,a.jsx)(n.h3,{id:"sidebars",children:(0,a.jsx)(n.code,{children:"sidebars"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Default sidebars"}),(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"js",label:"JavaScript",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:'title="sidebars.js" showLineNumbers',children:"/**\n * Creating a sidebar enables you to:\n - create an ordered group of docs\n - render a sidebar for each doc of that group\n - provide next/previous navigation\n\n The sidebars can be generated from the filesystem, or explicitly defined here.\n\n Create as many sidebars as you want.\n */\n\n// @ts-check\n\n/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */\nconst sidebars = {\n  // By default, Docusaurus generates a sidebar from the docs folder structure\n  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],\n\n  // But you can create a sidebar manually\n  /*\n  tutorialSidebar: [\n    'intro',\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n   */\n};\n\nexport default sidebars;\n"})})}),(0,a.jsx)(i.A,{value:"ts",label:"TypeScript",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ts",metastring:'title="sidebars.ts" showLineNumbers',children:"import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';\n\n/**\n * Creating a sidebar enables you to:\n - create an ordered group of docs\n - render a sidebar for each doc of that group\n - provide next/previous navigation\n\n The sidebars can be generated from the filesystem, or explicitly defined here.\n\n Create as many sidebars as you want.\n */\nconst sidebars: SidebarsConfig = {\n  // By default, Docusaurus generates a sidebar from the docs folder structure\n  tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],\n\n  // But you can create a sidebar manually\n  /*\n  tutorialSidebar: [\n    'intro',\n    'hello',\n    {\n      type: 'category',\n      label: 'Tutorial',\n      items: ['tutorial-basics/create-a-document'],\n    },\n  ],\n   */\n};\n\nexport default sidebars;\n"})})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,a.jsx)(n.p,{children:"Resolve issues caused by mismatching cached dependencies - especially during upgrades."}),"\n",(0,a.jsx)(n.h3,{id:"step-one",children:"Step one"}),"\n",(0,a.jsx)(n.p,{children:"Clear all generated assets, caches and build artifacts:"}),"\n",(0,a.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,a.jsx)(i.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run clear\n"})})}),(0,a.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn clear\n"})})}),(0,a.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm run clear\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"step-two",children:"Step two"}),"\n",(0,a.jsxs)(n.p,{children:["Remove ",(0,a.jsx)(n.code,{children:"node_modules"})," and the lock file(s):"]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(i.A,{value:"bash",label:"Bash",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm -rf node_modules yarn.lock package-lock.json\n"})})}),(0,a.jsx)(i.A,{value:"pwsh",label:"PowerShell",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"@('node_modules','yarn.lock','package-lock.json') | Remove-Item -Force -Recurse -ErrorAction SilentlyContinue\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"step-three",children:"Step three"}),"\n",(0,a.jsx)(n.p,{children:"Reinstall packages:"}),"\n",(0,a.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,a.jsx)(i.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm install\n"})})}),(0,a.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})})}),(0,a.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm install\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var s=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,i),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>A});var a=t(6540),r=t(4164),s=t(4245),i=t(6347),o=t(6494),l=t(2814),c=t(5167),u=t(9900);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(s),(0,a.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:s}))),[c,d]=p({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),g=(()=>{const e=c??f;return m({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=t(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function j(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),i(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,r.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,r.A)("tabs-container",g.tabList),children:[(0,x.jsx)(j,{...n,...e}),(0,x.jsx)(v,{...n,...e})]})}function A(e){const n=(0,b.A)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},7319:(e,n,t)=>{t.d(n,{A:()=>V});t(6540);var a=t(1348),r=t(4164),s=t(3230),i=t(9204),o=t(9059),l=t(4848);const c={icon:(0,l.jsx)(o.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function u(e){return(0,l.jsx)(i.A,{...c,...e,className:(0,r.A)("alert alert--secondary",e.className),children:e.children})}var d=t(7950);const h={icon:(0,l.jsx)(d.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function m(e){return(0,l.jsx)(i.A,{...h,...e,className:(0,r.A)("alert alert--success",e.className),children:e.children})}var p=t(6699);const f={icon:(0,l.jsx)(p.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,l.jsx)(i.A,{...f,...e,className:(0,r.A)("alert alert--info",e.className),children:e.children})}var g=t(667);const x={icon:(0,l.jsx)(g.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var j=t(6616);const v={icon:(0,l.jsx)(j.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function y(e){return(0,l.jsx)(i.A,{...v,...e,className:(0,r.A)("alert alert--danger",e.className),children:e.children})}var A=t(6784),N=t(7875);const w={icon:(0,l.jsx)(A.g,{icon:N._2G}),title:(0,l.jsx)(s.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var T=t(6188);const k={icon:(0,l.jsx)(A.g,{icon:T.fLc}),title:(0,l.jsx)(s.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const S={icon:(0,l.jsx)(A.g,{icon:T.Lb_}),title:(0,l.jsx)(s.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const C={icon:(0,l.jsx)(A.g,{icon:T.Wcv}),title:(0,l.jsx)(s.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const D={icon:(0,l.jsx)(A.g,{icon:T.rC2}),title:(0,l.jsx)(s.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const I={...{note:u,tip:m,info:b,caution:function(e){return(0,l.jsx)(i.A,{...x,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})},danger:y,security:function(e){return(0,l.jsx)(i.A,{...k,...e,className:(0,r.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,l.jsx)(i.A,{...S,...e,className:(0,r.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,l.jsx)(i.A,{...C,...e,className:(0,r.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,l.jsx)(i.A,{...D,...e,className:(0,r.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,l.jsx)(i.A,{...w,...e,className:(0,r.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(u,{title:"secondary",...e}),important:e=>(0,l.jsx)(b,{title:"important",...e}),success:e=>(0,l.jsx)(m,{title:"success",...e}),warning:e=>(0,l.jsx)(y,{title:"warning",...e})}};function V(e){const n=(0,a.c)(e),t=(r=n.type,I[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),I.info));var r;return(0,l.jsx)(t,{...n})}}}]);