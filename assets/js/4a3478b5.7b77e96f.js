"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3033],{9990:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=t(4848),o=t(8453);t(1470),t(9365);const r={title:"APIs & Configurations",sidebar_label:"APIs & Configurations",description:"Understanding APIs and Configurations",slug:"/api-vs-config",authors:["mkeithx"],image:"https://imgur.com/OH3qWLN.png",tags:["api","configs","software","development"]},i=void 0,s={permalink:"/blog/api-vs-config",source:"@site/blog/2024-03-17-api-vs-config/index.mdx",title:"APIs & Configurations",description:"Understanding APIs and Configurations",date:"2024-03-17T00:00:00.000Z",tags:[{label:"api",permalink:"/blog/tags/api"},{label:"configs",permalink:"/blog/tags/configs"},{label:"software",permalink:"/blog/tags/software"},{label:"development",permalink:"/blog/tags/development"}],readingTime:2.25,hasTruncateMarker:!0,authors:[{name:"Keith Tan",title:"Author",url:"https://mkeithx.github.io/me",twitter:"mkeithtan",github:"mkeithX",email:"email@kitimi.onmicrosoft.com",imageURL:"https://github.com/mkeithx.png",key:"mkeithx"}],frontMatter:{title:"APIs & Configurations",sidebar_label:"APIs & Configurations",description:"Understanding APIs and Configurations",slug:"/api-vs-config",authors:["mkeithx"],image:"https://imgur.com/OH3qWLN.png",tags:["api","configs","software","development"]},unlisted:!1,prevItem:{title:"About Sitemaps",permalink:"/blog/about-sitemaps"},nextItem:{title:"Welcome",permalink:"/blog/welcome"}},l={authorsImageUrls:[void 0]},u=[{value:"Understanding APIs:",id:"understanding-apis",level:2},{value:"Example API",id:"example-api",level:3},{value:"Understanding Configurations",id:"understanding-configurations",level:2},{value:"Example Configuration",id:"example-configuration",level:3},{value:"Conclusion",id:"conclusion",level:2}];function c(e){const n={code:"code",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,o.R)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Hello there! Let's explore the difference between APIs and configurations and how they can streamline your projects. Whether you're new to development or experienced, understanding these concepts can help you enhance your project's functionality and customization options."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://imgur.com/OH3qWLN.png",alt:"img"})}),"\n","\n",(0,a.jsx)(n.h2,{id:"understanding-apis",children:"Understanding APIs:"}),"\n",(0,a.jsx)(n.p,{children:"Let's start with APIs. An API, or Application Programming Interface, acts as a bridge between different software applications, allowing them to communicate. In simple terms, APIs enable your project to interact with external services or data sources. For example, you might use an API to retrieve weather forecasts or integrate with social media platforms."}),"\n",(0,a.jsx)(n.h3,{id:"example-api",children:"Example API"}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"OpenAI API"}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"Python"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:'import os\nfrom openai import OpenAI\n\nclient = OpenAI(\n    api_key=os.environ.get("OPENAI_API_KEY"),\n)\n\nGPT_MODEL = "gpt-3.5-turbo-1106"\n\ncompletion = client.chat.completions.create(\n    model = GPT_MODEL,\n    response_format={"type": "text"},\n    messages=[\n        {"role": "system", "content": "You are a helpful assistant, skilled in explaining complex programming concepts in simple terms."},\n        {"role": "user", "content": "Explain the difference of class and function based views in python."}\n    ]\n)\n\nprint(completion.choices[0].message.content)\n'})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"understanding-configurations",children:"Understanding Configurations"}),"\n",(0,a.jsx)(n.p,{children:"Now, let's talk about configurations. Configurations, or configs, are settings that define how your project behaves and looks. They let you customize aspects like colors, layouts, and domain names without diving into complex code. Configurations make it easy to tailor your project to your preferences and needs."}),"\n",(0,a.jsx)(n.h3,{id:"example-configuration",children:"Example Configuration"}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Docusaurus Configuration "}),(0,a.jsxs)("div",{children:[(0,a.jsx)("div",{children:"docusaurus.config.js"}),(0,a.jsx)("br",{}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"module.exports = {\n  title: 'My Docusaurus Site',\n  tagline: 'A website for showcasing my projects',\n\n  url: 'https://example.com',\n  baseUrl: '/',\n\n  projectName: 'my-docusaurus-site',\n  organizationName: 'my-org',\n\n  themeConfig: {\n    navbar: {\n      title: 'My Site',\n      logo: {\n        alt: 'My Site Logo',\n        src: 'img/logo.svg',\n      },\n      items: [\n        {\n          href: 'https://github.com/facebook/docusaurus',\n          label: 'GitHub',\n          position: 'right',\n        },\n      ],\n    },\n    footer: {\n      style: 'dark',\n      links: [\n        {\n          title: 'Docs',\n          items: [\n            {\n              label: 'Getting Started',\n              to: '/docs/intro',\n            },\n            {\n              label: 'Guides',\n              to: '/docs/installation',\n            },\n          ],\n        },\n        {\n          title: 'Community',\n          items: [\n            {\n              label: 'Stack Overflow',\n              href: 'https://stackoverflow.com/questions/tagged/docusaurus',\n            },\n            {\n              label: 'Discord',\n              href: 'https://discordapp.com/invite/docusaurus',\n            },\n          ],\n        },\n        {\n          title: 'More',\n          items: [\n            {\n              label: 'GitHub',\n              href: 'https://github.com/facebook/docusaurus',\n            },\n          ],\n        },\n      ],\n    },\n  },\n};\n"})})]})]}),"\n",(0,a.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsx)(n.p,{children:"These examples demonstrate how to integrate the OpenAI API into a Python script to generate text and how to configure a Docusaurus project using its configuration file (docusaurus.config.js). You can adapt and use these examples in your own projects as needed."}),"\n",(0,a.jsx)(n.p,{children:"Thank you"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.em,{children:"\u2014 K"})})]})}function d(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},9365:(e,n,t)=>{t.d(n,{A:()=>i});t(6540);var a=t(4164);const o={tabItem:"tabItem_Ymn6"};var r=t(4848);function i(e){let{children:n,hidden:t,className:i}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.A)(o.tabItem,i),hidden:t,children:n})}},1470:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),o=t(4164),r=t(3104),i=t(6347),s=t(205),l=t(7485),u=t(1682),c=t(9466);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:o}}=e;return{value:n,label:t,attributes:a,default:o}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:t}=e;const o=(0,i.W6)(),r=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l.aZ)(r),(0,a.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(o.location.search);n.set(r,e),o.replace({...o.location,search:n.toString()})}),[r,o])]}function g(e){const{defaultValue:n,queryString:t=!1,groupId:o}=e,r=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:r}))),[u,d]=h({queryString:t,groupId:o}),[g,f]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[o,r]=(0,c.Dv)(t);return[o,(0,a.useCallback)((e=>{t&&r.set(e)}),[t,r])]}({groupId:o}),b=(()=>{const e=u??g;return m({value:e,tabValues:r})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),f(e)}),[d,f,r]),tabValues:r}}var f=t(2303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function x(e){let{className:n,block:t,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,r.a_)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),o=s[t].value;o!==a&&(u(n),i(o))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.A)("tabs",{"tabs--block":t},n),children:s.map((e=>{let{value:n,label:t,attributes:r}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>l.push(e),onKeyDown:d,onClick:c,...r,className:(0,o.A)("tabs__item",b.tabItem,r?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function y(e){let{lazy:n,children:t,selectedValue:o}=e;const r=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:r.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==o})))})}function j(e){const n=g(e);return(0,v.jsxs)("div",{className:(0,o.A)("tabs-container",b.tabList),children:[(0,v.jsx)(x,{...e,...n}),(0,v.jsx)(y,{...e,...n})]})}function w(e){const n=(0,f.A)();return(0,v.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>s});var a=t(6540);const o={},r=a.createContext(o);function i(e){const n=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);