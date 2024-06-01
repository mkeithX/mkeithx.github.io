"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7643],{5124:(e,t,n)=>{n.r(t),n.d(t,{default:()=>x});n(6540);var i=n(4164),a=n(4586),r=n(5500),o=n(7559),s=n(6535),l=n(7713),c=n(1463),d=n(3892),u=n(5260),m=n(6676),h=n(4848);function g(e){const t=(0,m.k)(e);return(0,h.jsx)(u.A,{children:(0,h.jsx)("script",{type:"application/ld+json",children:JSON.stringify(t)})})}function p(e){const{metadata:t}=e,{siteConfig:{title:n}}=(0,a.A)(),{blogDescription:i,blogTitle:o,permalink:s}=t,l="/"===s?n:o;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(r.be,{title:l,description:i}),(0,h.jsx)(c.A,{tag:"blog_posts_list"})]})}function f(e){const{metadata:t,items:n,sidebar:i}=e;return(0,h.jsxs)(s.A,{sidebar:i,children:[(0,h.jsx)(d.A,{items:n}),(0,h.jsx)(l.A,{metadata:t})]})}function x(e){return(0,h.jsxs)(r.e3,{className:(0,i.A)(o.G.wrapper.blogPages,o.G.page.blogListPage),children:[(0,h.jsx)(p,{...e}),(0,h.jsx)(g,{...e}),(0,h.jsx)(f,{...e})]})}},7713:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var i=n(1312),a=n(9022),r=n(4848);function o(e){const{metadata:t}=e,{previousPage:n,nextPage:o}=t;return(0,r.jsxs)("nav",{className:"pagination-nav","aria-label":(0,i.T)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[n&&(0,r.jsx)(a.A,{permalink:n,title:(0,r.jsx)(i.A,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),o&&(0,r.jsx)(a.A,{permalink:o,title:(0,r.jsx)(i.A,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},3892:(e,t,n)=>{n.d(t,{A:()=>o});n(6540);var i=n(7131),a=n(4651),r=n(4848);function o(e){let{items:t,component:n=a.A}=e;return(0,r.jsx)(r.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,r.jsx)(i.i,{content:t,children:(0,r.jsx)(n,{children:(0,r.jsx)(t,{})})},t.metadata.permalink)}))})}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var i=n(6025),a=n(4586),r=n(6803);var o=n(7131);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:h({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,a.A)(),{withBaseUrl:n}=(0,i.hH)(),{metadata:{blogDescription:r,blogTitle:o,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:o,description:r,blogPost:e.items.map((e=>function(e,t,n){const{assets:i,frontMatter:a,metadata:r}=e,{date:o,title:d,description:u,lastUpdatedAt:m}=r,h=i.image??a.image,g=a.keywords??[],p=`${t.url}${r.permalink}`,f=m?s(m):void 0;return{"@type":"BlogPosting","@id":p,mainEntityOfPage:p,url:p,headline:d,name:d,description:u,datePublished:o,...f?{dateModified:f}:{},...l(r.authors),...c(h,n,d),...g?{keywords:g}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,r.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,o.e)(),{siteConfig:d}=(0,a.A)(),{withBaseUrl:u}=(0,i.hH)(),{date:m,title:h,description:g,frontMatter:p,lastUpdatedAt:f}=n,x=t.image??p.image,A=p.keywords??[],j=f?s(f):void 0,b=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":b,mainEntityOfPage:b,url:b,headline:h,name:h,description:g,datePublished:m,...j?{dateModified:j}:{},...l(n.authors),...c(x,u,h),...A?{keywords:A}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function h(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},988:(e,t,n)=>{n.d(t,{A:()=>B});n(6540);var i=n(8473),a=n(4164),r=n(1312),o=n(4882),s=n(3550),l=n(4848);const c={icon:(0,l.jsx)(s.A,{}),title:(0,l.jsx)(r.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function d(e){return(0,l.jsx)(o.A,{...c,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}var u=n(3069);const m={icon:(0,l.jsx)(u.A,{}),title:(0,l.jsx)(r.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function h(e){return(0,l.jsx)(o.A,{...m,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}var g=n(2382);const p={icon:(0,l.jsx)(g.A,{}),title:(0,l.jsx)(r.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function f(e){return(0,l.jsx)(o.A,{...p,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}var x=n(804);const A={icon:(0,l.jsx)(x.A,{}),title:(0,l.jsx)(r.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var j=n(633);const b={icon:(0,l.jsx)(j.A,{}),title:(0,l.jsx)(r.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function y(e){return(0,l.jsx)(o.A,{...b,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}var v=n(6784),N=n(7875);const w={icon:(0,l.jsx)(v.g,{icon:N._2G}),title:(0,l.jsx)(r.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var k=n(6188);const T={icon:(0,l.jsx)(v.g,{icon:k.fLc}),title:(0,l.jsx)(r.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const P={icon:(0,l.jsx)(v.g,{icon:k.KMJ}),title:(0,l.jsx)(r.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const C={icon:(0,l.jsx)(v.g,{icon:k.Wcv}),title:(0,l.jsx)(r.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const U={icon:(0,l.jsx)(v.g,{icon:k.rC2}),title:(0,l.jsx)(r.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const $={...{note:d,tip:h,info:f,caution:function(e){return(0,l.jsx)(o.A,{...A,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:y,security:function(e){return(0,l.jsx)(o.A,{...T,...e,className:(0,a.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,l.jsx)(o.A,{...P,...e,className:(0,a.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,l.jsx)(o.A,{...C,...e,className:(0,a.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,l.jsx)(o.A,{...U,...e,className:(0,a.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,l.jsx)(o.A,{...w,...e,className:(0,a.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(d,{title:"secondary",...e}),important:e=>(0,l.jsx)(f,{title:"important",...e}),success:e=>(0,l.jsx)(h,{title:"success",...e}),warning:e=>(0,l.jsx)(y,{title:"warning",...e})}};function B(e){const t=(0,i.c)(e),n=(a=t.type,$[a]||(console.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`),$.info));var a;return(0,l.jsx)(n,{...t})}},3498:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(6784),a=n(7107),r=n(7875),o=n(6188),s=n(7654),l=n(542),c=(n(6540),n(4848));a.Yv.add(r.Cvc,o.X7I);const d={...s.A,Highlight:function(e){let{children:t,color:n}=e;return(0,c.jsx)("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#fff",padding:"0.5rem"},children:t})},FAIcon:i.g,Code:l.A}}}]);