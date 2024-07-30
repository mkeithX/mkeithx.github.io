"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9169],{6217:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var s=n(4848),r=n(8453),i=n(3935);const o={description:"Frequently used snippets"},c="Snippets",l={id:"devops/snippets/index",title:"Snippets",description:"Frequently used snippets",source:"@site/docs/devops/snippets/index.mdx",sourceDirName:"devops/snippets",slug:"/devops/snippets/",permalink:"/docs/devops/snippets/",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/docs/devops/snippets/index.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:172233645e4,frontMatter:{description:"Frequently used snippets"},sidebar:"devops",previous:{title:"Installing Apps via Intune",permalink:"/docs/devops/admin-center/training/install-via-intune"},next:{title:"Tech Notes",permalink:"/docs/devops/snippets/tech-notes"}},a={},u=[];function d(e){const t={h1:"h1",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"snippets",children:"Snippets"}),"\n",(0,s.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},3935:(e,t,n)=>{n.d(t,{A:()=>v});n(6540);var s=n(4164),r=n(5215),i=n(4783),o=n(7824),c=n(877),l=n(3230),a=n(5225);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function p(e){let{href:t,children:n}=e;return(0,d.jsx)(i.A,{href:t,className:(0,s.A)("card padding--lg",u.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:i}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,s.A)("text--truncate",u.cardTitle),title:r,children:[n," ",r]}),i&&(0,d.jsx)("p",{className:(0,s.A)("text--truncate",u.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,r.Nr)(t),s=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,r.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??s?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,r.$S)();return(0,d.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const i=(0,r.d1)(t);return(0,d.jsx)("section",{className:(0,s.A)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},7824:(e,t,n)=>{n.d(t,{W:()=>a});var s=n(6540),r=n(7639);const i=["zero","one","two","few","many","other"];function o(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const s=e.split("|");if(1===s.length)return s[0];s.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const r=n.select(t),i=n.pluralForms.indexOf(r);return s[Math.min(i,s.length-1)]}(n,t,e)}}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var s=n(6540);const r={},i=s.createContext(r);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);