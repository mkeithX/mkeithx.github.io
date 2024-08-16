"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1849],{61:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var t=r(4848),a=r(8453),s=r(9489),i=r(7227),l=(r(9195),r(4724),r(9215));const o={title:"Algolia",description:"Adding Algolia DocSearch."},c=void 0,u={id:"algolia",title:"Algolia",description:"Adding Algolia DocSearch.",source:"@site/docs/algolia.mdx",sourceDirName:".",slug:"/algolia",permalink:"/docs/algolia",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/tree/main/website/docs/algolia.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1723774368e3,frontMatter:{title:"Algolia",description:"Adding Algolia DocSearch."},sidebar:"mySidebar",previous:{title:"Deployment",permalink:"/docs/deployment"}},d={},h=[{value:"Configuration",id:"configuration",level:2},{value:"Default",id:"default",level:3},{value:"Custom",id:"custom",level:3},{value:"Crawlers",id:"crawlers",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,a.R)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["This article guides you through adding Algolia Search to Docusaurus ",(0,t.jsx)(n.code,{children:"v3"}),", assuming you already have an active  ",(0,t.jsx)(n.a,{href:"https://www.algolia.com/",children:"Algolia account"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,t.jsx)(n.h3,{id:"default",children:"Default"}),"\n",(0,t.jsx)(n.p,{children:"Add the following Algolia search configuration:"}),"\n",(0,t.jsx)(l.A,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="docusaurus.config.js" showLineNumbers',children:"module.exports = {\n  ...\n  algolia: {\n    apiKey: 'YOUR_API_KEY',\n    indexName: 'YOUR_INDEX_NAME',\n    appId: 'YOUR_APP_ID',\n  },\n  ...\n};\n"})})}),"\n",(0,t.jsx)(n.h3,{id:"custom",children:"Custom"}),"\n",(0,t.jsxs)(n.p,{children:["In this method, we will extend Algolia search React component by utilizing the ",(0,t.jsx)(n.a,{href:"https://docusaurus.io/docs/swizzling",children:"Swizzle"})," method:"]}),"\n",(0,t.jsx)(n.p,{children:"Add the following on your site configuration:"}),"\n",(0,t.jsx)(l.A,{children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="docusaurus.config.ts" {8-14} showLineNumbers',children:'import type { Config } from "@docusaurus/types";\nimport type * as Preset from "@docusaurus/preset-classic";\n\nconst config: Config = {\n  title: "My Site",\n  favicon: "img/favicon.ico",\n\n\n  scripts: [\n    {\n      src: "https://YOUR_APP_ID-dsn.algolia.net",\n      rel: "preconnect",\n      crossorigin: true,\n    },\n  ],\n\n\n  /* Your site config here */\n};\n\nexport default config;\n'})})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"JavaScript"})}),"\n",(0,t.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic SearchBar\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-classic SearchBar\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-classic SearchBar\n"})})})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Typescript"})}),"\n",(0,t.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,t.jsx)(i.A,{value:"npm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm run swizzle @docusaurus/theme-classic SearchBar --typescript\n"})})}),(0,t.jsx)(i.A,{value:"yarn",label:"Yarn",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"yarn swizzle @docusaurus/theme-classic SearchBar --typescript\n"})})}),(0,t.jsx)(i.A,{value:"pnpm",label:"pnpm",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"pnpm run swizzle @docusaurus/theme-classic SearchBar --typescript\n"})})})]}),"\n",(0,t.jsxs)(n.p,{children:["Choose the ",(0,t.jsx)(n.code,{children:"--wrap"})," option and add the following configuration in your ",(0,t.jsx)(n.code,{children:"src/theme/SearchBar"}),":"]}),"\n",(0,t.jsx)(l.A,{children:(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"js",label:"JavaScript",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:'title="src/theme/SearchBar.js" showLineNumbers',children:'import React from "react";\nimport SearchBar from "@theme-original/SearchBar";\nimport type SearchBarType from "@theme/SearchBar";\nimport type { WrapperProps } from "@docusaurus/types";\nimport { DocSearch } from "@docsearch/react";\n\n\nexport default function SearchBarWrapper(props) {\n  return (\n    <div>\n      <DocSearch\n        appId="YOUR_APP_ID"\n        indexName="YOUR_INDEX_NAME"\n        apiKey="YOUR_API_KEY"\n      />\n    </div>\n  );\n}\n'})})}),(0,t.jsx)(i.A,{value:"tsx",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tsx",metastring:'title="src/theme/SearchBar.tsx" showLineNumbers',children:'import React from "react";\nimport SearchBar from "@theme-original/SearchBar";\nimport type SearchBarType from "@theme/SearchBar";\nimport type { WrapperProps } from "@docusaurus/types";\nimport { DocSearch } from "@docsearch/react";\n\ntype Props = WrapperProps<typeof SearchBarType>;\n\nexport default function SearchBarWrapper(props: Props): JSX.Element {\nreturn (\n  <>\n    <DocSearch\n      appId="YOUR_APP_ID"\n      indexName="YOUR_INDEX_NAME"\n      apiKey="YOUR_API_KEY"\n  />\n    <SearchBar {...props} />\n  </>\n);\n}\n'})})})]})}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsxs)(n.p,{children:["Visit ",(0,t.jsx)(n.a,{href:"https://docsearch.algolia.com/",children:"documentation"})," to learn more."]})}),"\n",(0,t.jsx)(n.h2,{id:"crawlers",children:"Crawlers"}),"\n",(0,t.jsx)(n.p,{children:"Docusaurus highly recommends to use the official v3 crawler configuration."}),"\n",(0,t.jsxs)(r,{children:[(0,t.jsx)("summary",{children:"Crawlers template"}),(0,t.jsxs)(s.A,{children:[(0,t.jsx)(i.A,{value:"default",label:"Default",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"showLineNumbers",children:"new Crawler({\n  appId: 'YOUR_APP_ID',\n  apiKey: 'YOUR_API_KEY',\n  rateLimit: 8,\n  maxDepth: 10,\n  startUrls: ['https://YOUR_WEBSITE_URL/'],\n  sitemaps: ['https://YOUR_WEBSITE_URL/sitemap.xml'],\n  ignoreCanonicalTo: true,\n  discoveryPatterns: ['https://YOUR_WEBSITE_URL/**'],\n  actions: [\n    {\n      indexName: 'YOUR_INDEX_NAME',\n      pathsToMatch: ['https://YOUR_WEBSITE_URL/**'],\n      recordExtractor: ({ $, helpers }) => {\n        // priority order: deepest active sub list header -> navbar active item -> 'Documentation'\n        const lvl0 =\n          $(\n            '.menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active'\n          )\n            .last()\n            .text() || 'Documentation';\n\n        return helpers.docsearch({\n          recordProps: {\n            lvl0: {\n              selectors: '',\n              defaultValue: lvl0,\n            },\n            lvl1: ['header h1', 'article h1'],\n            lvl2: 'article h2',\n            lvl3: 'article h3',\n            lvl4: 'article h4',\n            lvl5: 'article h5, article td:first-child',\n            lvl6: 'article h6',\n            content: 'article p, article li, article td:last-child',\n          },\n          indexHeadings: true,\n          aggregateContent: true,\n          recordVersion: 'v3',\n        });\n      },\n    },\n  ],\n  initialIndexSettings: {\n    YOUR_INDEX_NAME: {\n      attributesForFaceting: [\n        'type',\n        'lang',\n        'language',\n        'version',\n        'docusaurus_tag',\n      ],\n      attributesToRetrieve: [\n        'hierarchy',\n        'content',\n        'anchor',\n        'url',\n        'url_without_anchor',\n        'type',\n      ],\n      attributesToHighlight: ['hierarchy', 'content'],\n      attributesToSnippet: ['content:10'],\n      camelCaseAttributes: ['hierarchy', 'content'],\n      searchableAttributes: [\n        'unordered(hierarchy.lvl0)',\n        'unordered(hierarchy.lvl1)',\n        'unordered(hierarchy.lvl2)',\n        'unordered(hierarchy.lvl3)',\n        'unordered(hierarchy.lvl4)',\n        'unordered(hierarchy.lvl5)',\n        'unordered(hierarchy.lvl6)',\n        'content',\n      ],\n      distinct: true,\n      attributeForDistinct: 'url',\n      customRanking: [\n        'desc(weight.pageRank)',\n        'desc(weight.level)',\n        'asc(weight.position)',\n      ],\n      ranking: [\n        'words',\n        'filters',\n        'typo',\n        'attribute',\n        'proximity',\n        'exact',\n        'custom',\n      ],\n      highlightPreTag: '<span class=\"algolia-docsearch-suggestion--highlight\">',\n      highlightPostTag: '</span>',\n      minWordSizefor1Typo: 3,\n      minWordSizefor2Typos: 7,\n      allowTyposOnNumericTokens: false,\n      minProximity: 1,\n      ignorePlurals: true,\n      advancedSyntax: true,\n      attributeCriteriaComputedByMinProximity: true,\n      removeWordsIfNoResults: 'allOptional',\n      separatorsToIndex: '_',\n    },\n  },\n});\n"})})}),(0,t.jsx)(i.A,{value:"custom",label:"Custom",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",metastring:"{2-3} showLineNumbers",children:'new Crawler({\n  appId: "<YOUR-APP-ID>",\n  apiKey: "<YOU-API-KEY>",\n  rateLimit: 8,\n  maxDepth: 10,\n  maxUrls: 5000,\n  renderJavaScript: false,\n  startUrls: ["https://YOUR_WEBSITE_URL"],\n  sitemaps: ["https://YOUR_WEBSITE_URL/sitemap.xml"],\n  ignoreCanonicalTo: true,\n  discoveryPatterns: ["https://YOUR_WEBSITE_URL/**"],\n# Optional\n      // highlight-start\n  exclusionPatterns: [\n    "https://YOUR_WEBSITE_URL/FOO",\n    "https://YOUR_WEBSITE_URL/BAR",\n  ],\n      // highlight-end\n  schedule: "every 2 day at 6:00 am",\n  actions: [\n    {\n      indexName: "<YOUR_INDEX_NAME>",\n      pathsToMatch: ["https://YOUR_WEBSITE_URL/**"],\n      recordExtractor: ({ $, helpers }) => {\n        // priority order: deepest active sub list header -> navbar active item -> \'Documentation\'\n        const lvl0 =\n          $(\n            ".menu__link.menu__link--sublist.menu__link--active, .navbar__item.navbar__link--active",\n          )\n            .last()\n            .text() || "Documentation";\n\n        return helpers.docsearch({\n          recordProps: {\n            lvl0: {\n              selectors: "",\n              defaultValue: lvl0,\n            },\n            lvl1: ["header h1", "article h1"],\n            lvl2: "article h2",\n            lvl3: "article h3",\n            lvl4: "article h4",\n            lvl5: "article h5, article td:first-child",\n            lvl6: "article h6",\n            content: "article p, article li, article td:last-child",\n          },\n          indexHeadings: true,\n          aggregateContent: true,\n          recordVersion: "v3",\n        });\n      },\n    },\n  ],\n  safetyChecks: { beforeIndexPublishing: { maxLostRecordsPercentage: 30 } },\n  initialIndexSettings: {\n    YOUR_INDEX_NAME: {\n      attributesForFaceting: ["type", "lang"],\n      attributesToRetrieve: [\n        "hierarchy",\n        "content",\n        "anchor",\n        "url",\n        "url_without_anchor",\n        "type",\n      ],\n      attributesToHighlight: ["hierarchy", "content"],\n      attributesToSnippet: ["content:10"],\n      camelCaseAttributes: ["hierarchy", "content"],\n      searchableAttributes: [\n        "unordered(hierarchy.lvl0)",\n        "unordered(hierarchy.lvl1)",\n        "unordered(hierarchy.lvl2)",\n        "unordered(hierarchy.lvl3)",\n        "unordered(hierarchy.lvl4)",\n        "unordered(hierarchy.lvl5)",\n        "unordered(hierarchy.lvl6)",\n        "content",\n      ],\n      distinct: true,\n      attributeForDistinct: "url",\n      customRanking: [\n        "desc(weight.pageRank)",\n        "desc(weight.level)",\n        "asc(weight.position)",\n      ],\n      ranking: [\n        "words",\n        "filters",\n        "typo",\n        "attribute",\n        "proximity",\n        "exact",\n        "custom",\n      ],\n      highlightPreTag: \'<span class="algolia-docsearch-suggestion--highlight">\',\n      highlightPostTag: "</span>",\n      minWordSizefor1Typo: 3,\n      minWordSizefor2Typos: 7,\n      allowTyposOnNumericTokens: false,\n      minProximity: 1,\n      ignorePlurals: true,\n      advancedSyntax: true,\n      attributeCriteriaComputedByMinProximity: true,\n      removeWordsIfNoResults: "allOptional",\n      separatorsToIndex: "_",\n    },\n  },\n});\n'})})})]})]})]})}function m(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},7227:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const a={tabItem:"tabItem_Ymn6"};var s=r(4848);function i(e){let{children:n,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.A)(a.tabItem,i),hidden:r,children:n})}},9489:(e,n,r)=>{r.d(n,{A:()=>j});var t=r(6540),a=r(4164),s=r(4245),i=r(6347),l=r(6494),o=r(2814),c=r(5167),u=r(9900);function d(e){return t.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:r}=e;return(0,t.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:r,attributes:t,default:a}}=e;return{value:n,label:r,attributes:t,default:a}}))}(r);return function(e){const n=(0,c.XI)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,r])}function p(e){let{value:n,tabValues:r}=e;return r.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:r}=e;const a=(0,i.W6)(),s=function(e){let{queryString:n=!1,groupId:r}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:n,groupId:r});return[(0,o.aZ)(s),(0,t.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(a.location.search);n.set(s,e),a.replace({...a.location,search:n.toString()})}),[s,a])]}function g(e){const{defaultValue:n,queryString:r=!1,groupId:a}=e,s=h(e),[i,o]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=r.find((e=>e.default))??r[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:s}))),[c,d]=m({queryString:r,groupId:a}),[g,b]=function(e){let{groupId:n}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,s]=(0,u.Dv)(r);return[a,(0,t.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:a}),x=(()=>{const e=c??g;return p({value:e,tabValues:s})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:i,selectValue:(0,t.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=r(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(4848);function y(e){let{className:n,block:r,selectedValue:t,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const n=e.currentTarget,r=o.indexOf(n),a=l[r].value;a!==t&&(c(n),i(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;n=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;n=o[r]??o[o.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},n),children:l.map((e=>{let{value:n,label:r,attributes:s}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",x.tabItem,s?.className,{"tabs__item--active":t===n}),children:r??n},n)}))})}function f(e){let{lazy:n,children:r,selectedValue:s}=e;const i=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===s));return e?(0,t.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==s})))})}function w(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,a.A)("tabs-container",x.tabList),children:[(0,v.jsx)(y,{...n,...e}),(0,v.jsx)(f,{...n,...e})]})}function j(e){const n=(0,b.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(n))}},4724:(e,n,r)=>{r.d(n,{A:()=>s});r(6540);var t=r(9215),a=r(4848);function s(e){let{url:n}=e;return(0,a.jsx)("div",{style:{padding:10},children:(0,a.jsx)(t.A,{url:n,style:{minWidth:"min(100%,45vw)",width:996,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,a.jsx)("iframe",{src:n,title:n,style:{display:"block",width:"100%",height:300}})})})}},9215:(e,n,r)=>{r.d(n,{A:()=>i});r(6540);var t=r(4164);const a={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var s=r(4848);function i(e){let{children:n,minHeight:r,url:i="https://mkeithx.pages.dev",style:l,bodyStyle:o}=e;return(0,s.jsxs)("div",{className:a.browserWindow,style:{...l,minHeight:r},children:[(0,s.jsxs)("div",{className:a.browserWindowHeader,children:[(0,s.jsxs)("div",{className:a.buttons,children:[(0,s.jsx)("span",{className:a.dot,style:{background:"#f25f58"}}),(0,s.jsx)("span",{className:a.dot,style:{background:"#fbbe3c"}}),(0,s.jsx)("span",{className:a.dot,style:{background:"#58cb42"}})]}),(0,s.jsx)("div",{className:(0,t.A)(a.browserWindowAddressBar,"text--truncate"),children:i}),(0,s.jsx)("div",{className:a.browserWindowMenuIcon,children:(0,s.jsxs)("div",{children:[(0,s.jsx)("span",{className:a.bar}),(0,s.jsx)("span",{className:a.bar}),(0,s.jsx)("span",{className:a.bar})]})})]}),(0,s.jsx)("div",{className:a.browserWindowBody,style:o,children:n})]})}},9195:(e,n,r)=>{r.d(n,{A:()=>a});var t=r(4848);const a=e=>{let{src:n,type:r,maxWidth:a,alt:s}=e;return"youtube"===r?(0,t.jsx)("iframe",{width:"100%",style:{aspectRatio:"16 / 9",maxWidth:a||"100%"},src:n.youtube,title:s,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):"local"===r?(0,t.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,width:"100%",style:{borderRadius:"8px",maxWidth:a||"100%"},children:[(0,t.jsx)("source",{src:n.webm,title:s,type:"video/webm"}),(0,t.jsx)("source",{src:n.mp4,title:s,type:"video/mp4"}),(0,t.jsx)("source",{src:n.ogg,title:s,type:"video/ogg"})]}):null}},8453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>l});var t=r(6540);const a={},s=t.createContext(a);function i(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);