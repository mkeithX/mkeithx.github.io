"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3768],{4811:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>o,toc:()=>u});var r=s(4848),n=s(8453),i=s(3514);const c={title:"Extras"},a=void 0,o={id:"guides/docusaurus/extras/index",title:"Extras",description:"{/ prettier-ignore /}",source:"@site/docs/guides/docusaurus/extras/index.mdx",sourceDirName:"guides/docusaurus/extras",slug:"/guides/docusaurus/extras/",permalink:"/docs/guides/docusaurus/extras/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"mkeithX",frontMatter:{title:"Extras"},sidebar:"docSidebar",previous:{title:"Markdown Features",permalink:"/docs/guides/docusaurus/basics/markdown-features"},next:{title:"Classic preset",permalink:"/docs/guides/docusaurus/extras/classic-preset"}},d={},u=[];function l(e){return(0,r.jsxs)(r.Fragment,{children:["\n","\n","\n",(0,r.jsx)(i.A,{})]})}function m(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l()}},3514:(e,t,s)=>{s.d(t,{A:()=>g});s(6540);var r=s(4164),n=s(4142),i=s(8774),c=s(6654),a=s(1312),o=s(1107);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=s(4848);function l(e){let{href:t,children:s}=e;return(0,u.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:s})}function m(e){let{href:t,icon:s,title:n,description:i}=e;return(0,u.jsxs)(l,{href:t,children:[(0,u.jsxs)(o.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:n,children:[s," ",n]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const s=(0,n.Nr)(t);return s?(0,u.jsx)(m,{href:s,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.T)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const s=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,n.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:s,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const s=(0,n.$S)();return(0,u.jsx)(g,{items:s.items,className:t})}function g(e){const{items:t,className:s}=e;if(!t)return(0,u.jsx)(h,{...e});const i=(0,n.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",s),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},8453:(e,t,s)=>{s.d(t,{R:()=>c,x:()=>a});var r=s(6540);const n={},i=r.createContext(n);function c(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:c(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);