"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4989],{3271:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(4848),a=n(8453),s=(n(7319),n(9489),n(7227),n(3935));const i={title:"Solar System",description:"A star and everything that orbits around it due to gravity.",image:"https://imgur.com/vWsE4iu.png"},o="Solar System",l={id:"solar-system/index",title:"Solar System",description:"A star and everything that orbits around it due to gravity.",source:"@site/cosmos/solar-system/index.mdx",sourceDirName:"solar-system",slug:"/solar-system/",permalink:"/cosmos/solar-system/",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/cosmos/solar-system/index.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1721558642e3,frontMatter:{title:"Solar System",description:"A star and everything that orbits around it due to gravity.",image:"https://imgur.com/vWsE4iu.png"},sidebar:"cosmicSidebar",previous:{title:"Forces the Mysteries",permalink:"/cosmos/forces-and-mysteries"},next:{title:"The Sun",permalink:"/cosmos/solar-system/sun"}},c={},u=[];function d(e){const t={blockquote:"blockquote",em:"em",h1:"h1",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"solar-system",children:"Solar System"}),"\n",(0,r.jsxs)(t.blockquote,{children:["\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"A big star and everything that goes around it because of gravity."})}),"\n"]}),"\n",(0,r.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3935:(e,t,n)=>{n.d(t,{A:()=>x});n(6540);var r=n(4164),a=n(5215),s=n(4783),i=n(7824),o=n(877),l=n(3230),c=n(5225);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(4848);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.A,{href:t,className:(0,r.A)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:a,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(c.A,{as:"h2",className:(0,r.A)("text--truncate",u.cardTitle),title:a,children:[n," ",a]}),s&&(0,d.jsx)("p",{className:(0,r.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function f(e){let{item:t}=e;const n=(0,a.Nr)(t),r=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function p(e){let{item:t}=e;const n=(0,o.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,a.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(p,{item:t});case"category":return(0,d.jsx)(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,a.$S)();return(0,d.jsx)(x,{items:n.items,className:t})}function x(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const s=(0,a.d1)(t);return(0,d.jsx)("section",{className:(0,r.A)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(b,{item:e})},t)))})}},7227:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var r=n(4164);const a={tabItem:"tabItem_Ymn6"};var s=n(4848);function i(e){let{children:t,hidden:n,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.A)(a.tabItem,i),hidden:n,children:t})}},9489:(e,t,n)=>{n.d(t,{A:()=>A});var r=n(6540),a=n(4164),s=n(4245),i=n(6347),o=n(6494),l=n(2814),c=n(5167),u=n(9900);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,c.X)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.W6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l.aZ)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function p(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=m(e),[i,l]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[c,d]=f({queryString:n,groupId:a}),[p,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,u.Dv)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),g=(()=>{const e=c??p;return h({value:e,tabValues:s})?e:null})();(0,o.A)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(1062);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=n(4848);function y(e){let{className:t,block:n,selectedValue:r,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.a_)(),u=e=>{const t=e.currentTarget,n=l.indexOf(t),a=o[n].value;a!==r&&(c(t),i(a))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.A)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function j(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,x.jsx)(y,{...t,...e}),(0,x.jsx)(v,{...t,...e})]})}function A(e){const t=(0,b.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(t))}},7824:(e,t,n)=>{n.d(t,{W:()=>c});var r=n(6540),a=n(7639);const s=["zero","one","two","few","many","other"];function i(e){return s.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,a.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const a=n.select(t),s=n.pluralForms.indexOf(a);return r[Math.min(s,r.length-1)]}(n,t,e)}}},7319:(e,t,n)=>{n.d(t,{A:()=>C});n(6540);var r=n(1348),a=n(4164),s=n(3230),i=n(9204),o=n(9059),l=n(4848);const c={icon:(0,l.jsx)(o.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function u(e){return(0,l.jsx)(i.A,{...c,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}var d=n(7950);const m={icon:(0,l.jsx)(d.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function h(e){return(0,l.jsx)(i.A,{...m,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}var f=n(6699);const p={icon:(0,l.jsx)(f.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function b(e){return(0,l.jsx)(i.A,{...p,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}var g=n(667);const x={icon:(0,l.jsx)(g.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var y=n(6616);const v={icon:(0,l.jsx)(y.A,{}),title:(0,l.jsx)(s.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function j(e){return(0,l.jsx)(i.A,{...v,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}var A=n(6784),N=n(7875);const w={icon:(0,l.jsx)(A.g,{icon:N._2G}),title:(0,l.jsx)(s.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var T=n(6188);const k={icon:(0,l.jsx)(A.g,{icon:T.fLc}),title:(0,l.jsx)(s.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const S={icon:(0,l.jsx)(A.g,{icon:T.Lb_}),title:(0,l.jsx)(s.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const I={icon:(0,l.jsx)(A.g,{icon:T.Wcv}),title:(0,l.jsx)(s.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const V={icon:(0,l.jsx)(A.g,{icon:T.rC2}),title:(0,l.jsx)(s.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const D={...{note:u,tip:h,info:b,caution:function(e){return(0,l.jsx)(i.A,{...x,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:j,security:function(e){return(0,l.jsx)(i.A,{...k,...e,className:(0,a.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,l.jsx)(i.A,{...S,...e,className:(0,a.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,l.jsx)(i.A,{...I,...e,className:(0,a.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,l.jsx)(i.A,{...V,...e,className:(0,a.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,l.jsx)(i.A,{...w,...e,className:(0,a.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(u,{title:"secondary",...e}),important:e=>(0,l.jsx)(b,{title:"important",...e}),success:e=>(0,l.jsx)(h,{title:"success",...e}),warning:e=>(0,l.jsx)(j,{title:"warning",...e})}};function C(e){const t=(0,r.c)(e),n=(a=t.type,D[a]||(console.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`),D.info));var a;return(0,l.jsx)(n,{...t})}}}]);