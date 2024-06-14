"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7278],{633:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var a=t(4848),r=t(8453),i=(t(7319),t(9489)),s=t(7227);const l={title:"Initialization",description:"Website Initialization."},o=void 0,c={id:"initialization",title:"Initialization",description:"Website Initialization.",source:"@site/docs/initialization.mdx",sourceDirName:".",slug:"/initialization",permalink:"/docs/initialization",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171838444e4,frontMatter:{title:"Initialization",description:"Website Initialization."},sidebar:"mySidebar",previous:{title:"Getting started",permalink:"/docs/getting-started"},next:{title:"Configuration",permalink:"/docs/configuration"}},u={},d=[{value:"Installation",id:"installation",level:2},{value:"Build",id:"build",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.admonition,{title:"important",type:"tip",children:(0,a.jsxs)(n.p,{children:["This website is built using ",(0,a.jsx)(n.a,{href:"https://docusaurus.io/docs/typescript-support#initialization",children:(0,a.jsx)(n.strong,{children:"Docusaurus TypeScript"})})," variant for various reasons including code consistency and capturing obvious mistakes early."]})}),"\n",(0,a.jsx)(n.h2,{id:"installation",children:"Installation"}),"\n",(0,a.jsxs)(n.p,{children:["passing the ",(0,a.jsx)(n.code,{children:"--typescript"})," flag."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npx create-docusaurus@latest my-website classic --typescript\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Go to directory ",(0,a.jsx)(n.code,{children:"cd my-website"})," the run the ff. command to start a local development server"]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(s.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run start\n"})})}),(0,a.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn run start\n"})})}),(0,a.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm run start\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"build",children:"Build"}),"\n",(0,a.jsxs)(n.p,{children:["This command generates static content into the ",(0,a.jsx)(n.code,{children:"build"})," directory and can be served using any static contents hosting service"]}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(s.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"npm run build\n"})})}),(0,a.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"yarn build\n"})})}),(0,a.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"pnpm run build\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Alternatively, you can also run the following:"}),"\n",(0,a.jsxs)(i.A,{groupId:"npm2yarn",children:[(0,a.jsx)(s.A,{value:"npm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"npm run build && npm run serve\n"})})}),(0,a.jsx)(s.A,{value:"yarn",label:"Yarn",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"yarn build&& yarn serve\n"})})}),(0,a.jsx)(s.A,{value:"pnpm",label:"pnpm",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"pnpm run build&& pnpm run serve\n"})})})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var i=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>y});var a=t(6540),r=t(4164),i=t(4245),s=t(6347),l=t(6494),o=t(2814),c=t(5167),u=t(9900);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:t,groupId:r}),[f,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,u.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),x=(()=>{const e=c??f;return m({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{x&&o(x)}),[x]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,i]),tabValues:i}}var b=t(1062);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(4848);function g(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.a_)(),u=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(c(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:u,...i,className:(0,r.A)("tabs__item",x.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function A(e){const n=f(e);return(0,j.jsxs)("div",{className:(0,r.A)("tabs-container",x.tabList),children:[(0,j.jsx)(g,{...n,...e}),(0,j.jsx)(v,{...n,...e})]})}function y(e){const n=(0,b.A)();return(0,j.jsx)(A,{...e,children:d(e.children)},String(n))}},7319:(e,n,t)=>{t.d(n,{A:()=>z});t(6540);var a=t(1348),r=t(4164),i=t(3230),s=t(9204),l=t(9059),o=t(4848);const c={icon:(0,o.jsx)(l.A,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function u(e){return(0,o.jsx)(s.A,{...c,...e,className:(0,r.A)("alert alert--secondary",e.className),children:e.children})}var d=t(7950);const h={icon:(0,o.jsx)(d.A,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function m(e){return(0,o.jsx)(s.A,{...h,...e,className:(0,r.A)("alert alert--success",e.className),children:e.children})}var p=t(6699);const f={icon:(0,o.jsx)(p.A,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,o.jsx)(s.A,{...f,...e,className:(0,r.A)("alert alert--info",e.className),children:e.children})}var x=t(667);const j={icon:(0,o.jsx)(x.A,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var g=t(6616);const v={icon:(0,o.jsx)(g.A,{}),title:(0,o.jsx)(i.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function A(e){return(0,o.jsx)(s.A,{...v,...e,className:(0,r.A)("alert alert--danger",e.className),children:e.children})}var y=t(6784),N=t(7875);const w={icon:(0,o.jsx)(y.g,{icon:N._2G}),title:(0,o.jsx)(i.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var I=t(6188);const T={icon:(0,o.jsx)(y.g,{icon:I.fLc}),title:(0,o.jsx)(i.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const k={icon:(0,o.jsx)(y.g,{icon:I.KMJ}),title:(0,o.jsx)(i.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const V={icon:(0,o.jsx)(y.g,{icon:I.Wcv}),title:(0,o.jsx)(i.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const S={icon:(0,o.jsx)(y.g,{icon:I.rC2}),title:(0,o.jsx)(i.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const D={...{note:u,tip:m,info:b,caution:function(e){return(0,o.jsx)(s.A,{...j,...e,className:(0,r.A)("alert alert--warning",e.className),children:e.children})},danger:A,security:function(e){return(0,o.jsx)(s.A,{...T,...e,className:(0,r.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,o.jsx)(s.A,{...k,...e,className:(0,r.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,o.jsx)(s.A,{...V,...e,className:(0,r.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,o.jsx)(s.A,{...S,...e,className:(0,r.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,o.jsx)(s.A,{...w,...e,className:(0,r.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,o.jsx)(u,{title:"secondary",...e}),important:e=>(0,o.jsx)(b,{title:"important",...e}),success:e=>(0,o.jsx)(m,{title:"success",...e}),warning:e=>(0,o.jsx)(A,{title:"warning",...e})}};function z(e){const n=(0,a.c)(e),t=(r=n.type,D[r]||(console.warn(`No admonition component found for admonition type "${r}". Using Info as fallback.`),D.info));var r;return(0,o.jsx)(t,{...n})}}}]);