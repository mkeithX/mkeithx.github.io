"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2802],{3610:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var r=a(4848),t=a(8453),s=(a(7319),a(9489)),l=a(7227);const i={title:"Installation",description:"How to install from scratch."},c=void 0,o={id:"installation",title:"Installation",description:"How to install from scratch.",source:"@site/docs/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/docs/installation",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1718875027e3,frontMatter:{title:"Installation",description:"How to install from scratch."},sidebar:"mySidebar",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Configuration",permalink:"/docs/configuration"}},d={},u=[{value:"Initialization",id:"initialization",level:2},{value:"Using <code>Yarn</code>",id:"using-yarn",level:2},{value:"Run locally",id:"run-locally",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This article explains how this website was built from scratch. I chose the ",(0,r.jsx)(n.a,{href:"https://docusaurus.io/docs/typescript-support#initialization",children:"Docusaurus TypeScript variant"})," based on the project's scope."]}),"\n",(0,r.jsx)(n.h2,{id:"initialization",children:"Initialization"}),"\n",(0,r.jsxs)(n.p,{children:["Docusaurus requires ",(0,r.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager",children:"Node.js"})," version 18 or up. I use ",(0,r.jsx)(n.a,{href:"https://docs.npmjs.com/",children:"npm"})," as the package manager."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest website classic --typescript\n"})}),"\n",(0,r.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,r.jsx)(l.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})})}),(0,r.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn run start\n"})})}),(0,r.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run start\n"})})})]}),"\n",(0,r.jsxs)(n.h2,{id:"using-yarn",children:["Using ",(0,r.jsx)(n.code,{children:"Yarn"})]}),"\n",(0,r.jsx)(n.admonition,{title:"important",type:"security",children:(0,r.jsxs)(n.p,{children:["Installing Yarn globally is ",(0,r.jsx)(n.strong,{children:"NOT"})," recommended."]})}),"\n",(0,r.jsxs)(n.p,{children:["Instead, we can use ",(0,r.jsx)(n.a,{href:"https://yarnpkg.com/corepack",children:"Corepack"}),", which enables us to define our preferred package manager and its version in the ",(0,r.jsx)(n.code,{children:"package.json"})," file."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"corepack enable\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn set version stable\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn install\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn start\n"})}),"\n",(0,r.jsxs)(n.admonition,{title:"tip",type:"docusaurus",children:[(0,r.jsxs)(n.p,{children:["If you ran into an error, you can follow the ",(0,r.jsx)(n.a,{href:"/docs/configuration#troubleshoot",children:"troubleshooting guide"})," and create a ",(0,r.jsx)(n.code,{children:"yarn.lock"})," file:"]}),(0,r.jsxs)(s.A,{groupId:"shell",children:[(0,r.jsx)(l.A,{value:"bash",label:"Bash",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"ni yarn.lock\n"})})}),(0,r.jsx)(l.A,{value:"cmd",label:"CMD",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"echo. > yarn.lock\n"})})}),(0,r.jsx)(l.A,{value:"pwsh",label:"PowerShell",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"New-Item yarn.lock -ItemType File\n"})})})]})]}),"\n",(0,r.jsx)(n.h2,{id:"run-locally",children:"Run locally"}),"\n",(0,r.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,r.jsx)(l.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})}),(0,r.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"yarn build\n"})})}),(0,r.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n"})})})]}),"\n",(0,r.jsx)(n.p,{children:"Alternatively, you can also run the following:"}),"\n",(0,r.jsxs)(s.A,{groupId:"npm2yarn",children:[(0,r.jsx)(l.A,{value:"npm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"npm run build && npm run serve\n"})})}),(0,r.jsx)(l.A,{value:"yarn",label:"Yarn",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"yarn build&& yarn serve\n"})})}),(0,r.jsx)(l.A,{value:"pnpm",label:"pnpm",children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-sh",children:"pnpm run build&& pnpm run serve\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},7227:(e,n,a)=>{a.d(n,{A:()=>l});a(6540);var r=a(4164);const t={tabItem:"tabItem_Ymn6"};var s=a(4848);function l(e){let{children:n,hidden:a,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(t.tabItem,l),hidden:a,children:n})}},9489:(e,n,a)=>{a.d(n,{A:()=>A});var r=a(6540),t=a(4164),s=a(4245),l=a(6347),i=a(6494),c=a(2814),o=a(5167),d=a(9900);function u(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:a}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:a,attributes:r,default:t}}=e;return{value:n,label:a,attributes:r,default:t}}))}(a);return function(e){const n=(0,o.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function p(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:a}=e;const t=(0,l.W6)(),s=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(t.location.search);n.set(s,e),t.replace({...t.location,search:n.toString()})}),[s,t])]}function f(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,s=h(e),[l,c]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:s}))),[o,u]=m({queryString:a,groupId:t}),[f,x]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,s]=(0,d.Dv)(a);return[t,(0,r.useCallback)((e=>{a&&s.set(e)}),[a,s])]}({groupId:t}),j=(()=>{const e=o??f;return p({value:e,tabValues:s})?e:null})();(0,i.A)((()=>{j&&c(j)}),[j]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);c(e),u(e),x(e)}),[u,x,s]),tabValues:s}}var x=a(1062);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=a(4848);function g(e){let{className:n,block:a,selectedValue:r,selectValue:l,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:o}=(0,s.a_)(),d=e=>{const n=e.currentTarget,a=c.indexOf(n),t=i[a].value;t!==r&&(o(n),l(t))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;n=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;n=c[a]??c[c.length-1];break}}n?.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":a},n),children:i.map((e=>{let{value:n,label:a,attributes:s}=e;return(0,b.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>c.push(e),onKeyDown:u,onClick:d,...s,className:(0,t.A)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function v(e){let{lazy:n,children:a,selectedValue:t}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===t));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==t})))})}function y(e){const n=f(e);return(0,b.jsxs)("div",{className:(0,t.A)("tabs-container",j.tabList),children:[(0,b.jsx)(g,{...n,...e}),(0,b.jsx)(v,{...n,...e})]})}function A(e){const n=(0,x.A)();return(0,b.jsx)(y,{...e,children:u(e.children)},String(n))}},7319:(e,n,a)=>{a.d(n,{A:()=>C});a(6540);var r=a(1348),t=a(4164),s=a(3230),l=a(9204),i=a(9059),c=a(4848);const o={icon:(0,c.jsx)(i.A,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function d(e){return(0,c.jsx)(l.A,{...o,...e,className:(0,t.A)("alert alert--secondary",e.className),children:e.children})}var u=a(7950);const h={icon:(0,c.jsx)(u.A,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function p(e){return(0,c.jsx)(l.A,{...h,...e,className:(0,t.A)("alert alert--success",e.className),children:e.children})}var m=a(6699);const f={icon:(0,c.jsx)(m.A,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function x(e){return(0,c.jsx)(l.A,{...f,...e,className:(0,t.A)("alert alert--info",e.className),children:e.children})}var j=a(667);const b={icon:(0,c.jsx)(j.A,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var g=a(6616);const v={icon:(0,c.jsx)(g.A,{}),title:(0,c.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function y(e){return(0,c.jsx)(l.A,{...v,...e,className:(0,t.A)("alert alert--danger",e.className),children:e.children})}var A=a(6784),N=a(7875);const w={icon:(0,c.jsx)(A.g,{icon:N._2G}),title:(0,c.jsx)(s.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var I=a(6188);const k={icon:(0,c.jsx)(A.g,{icon:I.fLc}),title:(0,c.jsx)(s.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const T={icon:(0,c.jsx)(A.g,{icon:I.KMJ}),title:(0,c.jsx)(s.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const V={icon:(0,c.jsx)(A.g,{icon:I.Wcv}),title:(0,c.jsx)(s.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const D={icon:(0,c.jsx)(A.g,{icon:I.rC2}),title:(0,c.jsx)(s.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const S={...{note:d,tip:p,info:x,caution:function(e){return(0,c.jsx)(l.A,{...b,...e,className:(0,t.A)("alert alert--warning",e.className),children:e.children})},danger:y,security:function(e){return(0,c.jsx)(l.A,{...k,...e,className:(0,t.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,c.jsx)(l.A,{...T,...e,className:(0,t.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,c.jsx)(l.A,{...V,...e,className:(0,t.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,c.jsx)(l.A,{...D,...e,className:(0,t.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,c.jsx)(l.A,{...w,...e,className:(0,t.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,c.jsx)(d,{title:"secondary",...e}),important:e=>(0,c.jsx)(x,{title:"important",...e}),success:e=>(0,c.jsx)(p,{title:"success",...e}),warning:e=>(0,c.jsx)(y,{title:"warning",...e})}};function C(e){const n=(0,r.c)(e),a=(t=n.type,S[t]||(console.warn(`No admonition component found for admonition type "${t}". Using Info as fallback.`),S.info));var t;return(0,c.jsx)(a,{...n})}}}]);