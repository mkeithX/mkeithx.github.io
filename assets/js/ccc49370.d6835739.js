"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3249],{3858:(e,t,n)=>{n.r(t),n.d(t,{default:()=>b});n(6540);var i=n(4164),a=n(5500),o=n(7559),r=n(7131),s=n(6535),l=n(4651),c=n(1312),d=n(9022),u=n(4848);function m(e){const{nextItem:t,prevItem:n}=e;return(0,u.jsxs)("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.T)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"}),children:[n&&(0,u.jsx)(d.A,{...n,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post",children:"Newer Post"})}),t&&(0,u.jsx)(d.A,{...t,subLabel:(0,u.jsx)(c.A,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post",children:"Older Post"}),isNext:!0})]})}function h(){const{assets:e,metadata:t}=(0,r.e)(),{title:n,description:i,date:o,tags:s,authors:l,frontMatter:c}=t,{keywords:d}=c,m=e.image??c.image;return(0,u.jsxs)(a.be,{title:n,description:i,keywords:d,image:m,children:[(0,u.jsx)("meta",{property:"og:type",content:"article"}),(0,u.jsx)("meta",{property:"article:published_time",content:o}),l.some((e=>e.url))&&(0,u.jsx)("meta",{property:"article:author",content:l.map((e=>e.url)).filter(Boolean).join(",")}),s.length>0&&(0,u.jsx)("meta",{property:"article:tag",content:s.map((e=>e.label)).join(",")})]})}var f=n(5260),g=n(6676);function p(){const e=(0,g.J)();return(0,u.jsx)(f.A,{children:(0,u.jsx)("script",{type:"application/ld+json",children:JSON.stringify(e)})})}var x=n(7763),v=n(996);function j(e){let{sidebar:t,children:n}=e;const{metadata:i,toc:a}=(0,r.e)(),{nextItem:o,prevItem:c,frontMatter:d,unlisted:h}=i,{hide_table_of_contents:f,toc_min_heading_level:g,toc_max_heading_level:p}=d;return(0,u.jsxs)(s.A,{sidebar:t,toc:!f&&a.length>0?(0,u.jsx)(x.A,{toc:a,minHeadingLevel:g,maxHeadingLevel:p}):void 0,children:[h&&(0,u.jsx)(v.A,{}),(0,u.jsx)(l.A,{children:n}),(o||c)&&(0,u.jsx)(m,{nextItem:o,prevItem:c})]})}function b(e){const t=e.content;return(0,u.jsx)(r.i,{content:e.content,isBlogPostPage:!0,children:(0,u.jsxs)(a.e3,{className:(0,i.A)(o.G.wrapper.blogPages,o.G.page.blogPostPage),children:[(0,u.jsx)(h,{}),(0,u.jsx)(p,{}),(0,u.jsx)(j,{sidebar:e.sidebar,children:(0,u.jsx)(t,{})})]})})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var i=n(4164),a=n(5195);const o={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var r=n(4848);const s="table-of-contents__link toc-highlight",l="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,r.jsx)("div",{className:(0,i.A)(o.tableOfContents,"thin-scrollbar",t),children:(0,r.jsx)(a.A,{...n,linkClassName:s,linkActiveClassName:l})})}},5195:(e,t,n)=>{n.d(t,{A:()=>g});var i=n(6540),a=n(6342);function o(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const i=n.slice(2,e.level);e.parentIndex=Math.max(...i),n[e.level]=t}));const i=[];return t.forEach((e=>{const{parentIndex:n,...a}=e;n>=0?t[n].children.push(a):i.push(a)})),i}function r(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:i}=e;return t.flatMap((e=>{const t=r({toc:e.children,minHeadingLevel:n,maxHeadingLevel:i});return function(e){return e.level>=n&&e.level<=i}(e)?[{...e,children:t}]:t}))}function s(e){const t=e.getBoundingClientRect();return t.top===t.bottom?s(e.parentNode):t}function l(e,t){let{anchorTopOffset:n}=t;const i=e.find((e=>s(e).top>=n));if(i){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(s(i))?i:e[e.indexOf(i)-1]??null}return e[e.length-1]??null}function c(){const e=(0,i.useRef)(0),{navbar:{hideOnScroll:t}}=(0,a.p)();return(0,i.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function d(e){const t=(0,i.useRef)(void 0),n=c();(0,i.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:i,linkActiveClassName:a,minHeadingLevel:o,maxHeadingLevel:r}=e;function s(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(i),s=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const i=[];for(let a=t;a<=n;a+=1)i.push(`h${a}.anchor`);return Array.from(document.querySelectorAll(i.join()))}({minHeadingLevel:o,maxHeadingLevel:r}),c=l(s,{anchorTopOffset:n.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(a),e.classList.add(a),t.current=e):e.classList.remove(a)}(e,e===d)}))}return document.addEventListener("scroll",s),document.addEventListener("resize",s),s(),()=>{document.removeEventListener("scroll",s),document.removeEventListener("resize",s)}}),[e,n])}var u=n(8774),m=n(4848);function h(e){let{toc:t,className:n,linkClassName:i,isChild:a}=e;return t.length?(0,m.jsx)("ul",{className:a?void 0:n,children:t.map((e=>(0,m.jsxs)("li",{children:[(0,m.jsx)(u.A,{to:`#${e.id}`,className:i??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,m.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:i})]},e.id)))}):null}const f=i.memo(h);function g(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:s="table-of-contents__link",linkActiveClassName:l,minHeadingLevel:c,maxHeadingLevel:u,...h}=e;const g=(0,a.p)(),p=c??g.tableOfContents.minHeadingLevel,x=u??g.tableOfContents.maxHeadingLevel,v=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return(0,i.useMemo)((()=>r({toc:o(t),minHeadingLevel:n,maxHeadingLevel:a})),[t,n,a])}({toc:t,minHeadingLevel:p,maxHeadingLevel:x});return d((0,i.useMemo)((()=>{if(s&&l)return{linkClassName:s,linkActiveClassName:l,minHeadingLevel:p,maxHeadingLevel:x}}),[s,l,p,x])),(0,m.jsx)(f,{toc:v,className:n,linkClassName:s,...h})}},996:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var i=n(4164),a=n(1312),o=n(5260),r=n(4848);function s(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,r.jsx)(a.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,r.jsx)(o.A,{children:(0,r.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var d=n(7559),u=n(988);function m(e){let{className:t}=e;return(0,r.jsx)(u.A,{type:"caution",title:(0,r.jsx)(s,{}),className:(0,i.A)(t,d.G.common.unlistedBanner),children:(0,r.jsx)(l,{})})}function h(e){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(c,{}),(0,r.jsx)(m,{...e})]})}},6676:(e,t,n)=>{n.d(t,{k:()=>d,J:()=>u});var i=n(6025),a=n(4586),o=n(6803);var r=n(7131);const s=e=>new Date(e).toISOString();function l(e){const t=e.map(m);return{author:1===t.length?t[0]:t}}function c(e,t,n){return e?{image:h({imageUrl:t(e,{absolute:!0}),caption:`title image for the blog post: ${n}`})}:{}}function d(e){const{siteConfig:t}=(0,a.A)(),{withBaseUrl:n}=(0,i.hH)(),{metadata:{blogDescription:o,blogTitle:r,permalink:d}}=e,u=`${t.url}${d}`;return{"@context":"https://schema.org","@type":"Blog","@id":u,mainEntityOfPage:u,headline:r,description:o,blogPost:e.items.map((e=>function(e,t,n){const{assets:i,frontMatter:a,metadata:o}=e,{date:r,title:d,description:u,lastUpdatedAt:m}=o,h=i.image??a.image,f=a.keywords??[],g=`${t.url}${o.permalink}`,p=m?s(m):void 0;return{"@type":"BlogPosting","@id":g,mainEntityOfPage:g,url:g,headline:d,name:d,description:u,datePublished:r,...p?{dateModified:p}:{},...l(o.authors),...c(h,n,d),...f?{keywords:f}:{}}}(e.content,t,n)))}}function u(){const e=function(){const e=(0,o.A)(),t=e?.data?.blogMetadata;if(!t)throw new Error("useBlogMetadata() can't be called on the current route because the blog metadata could not be found in route context");return t}(),{assets:t,metadata:n}=(0,r.e)(),{siteConfig:d}=(0,a.A)(),{withBaseUrl:u}=(0,i.hH)(),{date:m,title:h,description:f,frontMatter:g,lastUpdatedAt:p}=n,x=t.image??g.image,v=g.keywords??[],j=p?s(p):void 0,b=`${d.url}${n.permalink}`;return{"@context":"https://schema.org","@type":"BlogPosting","@id":b,mainEntityOfPage:b,url:b,headline:h,name:h,description:f,datePublished:m,...j?{dateModified:j}:{},...l(n.authors),...c(x,u,h),...v?{keywords:v}:{},isPartOf:{"@type":"Blog","@id":`${d.url}${e.blogBasePath}`,name:e.blogTitle}}}function m(e){return{"@type":"Person",...e.name?{name:e.name}:{},...e.title?{description:e.title}:{},...e.url?{url:e.url}:{},...e.email?{email:e.email}:{},...e.imageURL?{image:e.imageURL}:{}}}function h(e){let{imageUrl:t,caption:n}=e;return{"@type":"ImageObject","@id":t,url:t,contentUrl:t,caption:n}}},988:(e,t,n)=>{n.d(t,{A:()=>P});n(6540);var i=n(8473),a=n(4164),o=n(1312),r=n(4882),s=n(3550),l=n(4848);const c={icon:(0,l.jsx)(s.A,{}),title:(0,l.jsx)(o.A,{id:"theme.admonition.note",description:"The default label used for the Note admonition (:::note)",children:"note"})};function d(e){return(0,l.jsx)(r.A,{...c,...e,className:(0,a.A)("alert alert--secondary",e.className),children:e.children})}var u=n(3069);const m={icon:(0,l.jsx)(u.A,{}),title:(0,l.jsx)(o.A,{id:"theme.admonition.tip",description:"The default label used for the Tip admonition (:::tip)",children:"tip"})};function h(e){return(0,l.jsx)(r.A,{...m,...e,className:(0,a.A)("alert alert--success",e.className),children:e.children})}var f=n(2382);const g={icon:(0,l.jsx)(f.A,{}),title:(0,l.jsx)(o.A,{id:"theme.admonition.info",description:"The default label used for the Info admonition (:::info)",children:"info"})};function p(e){return(0,l.jsx)(r.A,{...g,...e,className:(0,a.A)("alert alert--info",e.className),children:e.children})}var x=n(804);const v={icon:(0,l.jsx)(x.A,{}),title:(0,l.jsx)(o.A,{id:"theme.admonition.caution",description:"The default label used for the Caution admonition (:::caution)",children:"caution"})};var j=n(633);const b={icon:(0,l.jsx)(j.A,{}),title:(0,l.jsx)(o.A,{id:"theme.admonition.danger",description:"The default label used for the Danger admonition (:::danger)",children:"danger"})};function A(e){return(0,l.jsx)(r.A,{...b,...e,className:(0,a.A)("alert alert--danger",e.className),children:e.children})}var N=n(6784),y=n(7875);const L={icon:(0,l.jsx)(N.g,{icon:y._2G}),title:(0,l.jsx)(o.A,{id:"theme.admonition.discord",description:"The default label used for the Discord admonition (:::discord)",children:"discord"})};var C=n(6188);const k={icon:(0,l.jsx)(N.g,{icon:C.fLc}),title:(0,l.jsx)(o.A,{id:"theme.admonition.security",description:"The default label used for the Security admonition (:::security)",children:"security"})};const H={icon:(0,l.jsx)(N.g,{icon:C.KMJ}),title:(0,l.jsx)(o.A,{id:"theme.admonition.release",description:"The default label used for the Release admonition (:::release)",children:"release"})};const w={icon:(0,l.jsx)(N.g,{icon:C.Wcv}),title:(0,l.jsx)(o.A,{id:"theme.admonition.credit",description:"The default label used for the Credit admonition (:::credit)",children:"credit"})};const T={icon:(0,l.jsx)(N.g,{icon:C.rC2}),title:(0,l.jsx)(o.A,{id:"theme.admonition.docusaurus",description:"The default label used for the Docusaurus admonition (:::docusaurus)",children:"Did you know..."})};const _={...{note:d,tip:h,info:p,caution:function(e){return(0,l.jsx)(r.A,{...v,...e,className:(0,a.A)("alert alert--warning",e.className),children:e.children})},danger:A,security:function(e){return(0,l.jsx)(r.A,{...k,...e,className:(0,a.A)("alert alert--security",e.className),children:e.children})},release:function(e){return(0,l.jsx)(r.A,{...H,...e,className:(0,a.A)("alert alert--release",e.className),children:e.children})},credit:function(e){return(0,l.jsx)(r.A,{...w,...e,className:(0,a.A)("alert alert--credit",e.className),children:e.children})},docusaurus:function(e){return(0,l.jsx)(r.A,{...T,...e,className:(0,a.A)("alert alert--docusaurus",e.className),children:e.children})},discord:function(e){return(0,l.jsx)(r.A,{...L,...e,className:(0,a.A)("alert alert--discord",e.className),children:e.children})}},...{secondary:e=>(0,l.jsx)(d,{title:"secondary",...e}),important:e=>(0,l.jsx)(p,{title:"important",...e}),success:e=>(0,l.jsx)(h,{title:"success",...e}),warning:e=>(0,l.jsx)(A,{title:"warning",...e})}};function P(e){const t=(0,i.c)(e),n=(a=t.type,_[a]||(console.warn(`No admonition component found for admonition type "${a}". Using Info as fallback.`),_.info));var a;return(0,l.jsx)(n,{...t})}},3498:(e,t,n)=>{n.d(t,{A:()=>d});var i=n(6784),a=n(7107),o=n(7875),r=n(6188),s=n(7654),l=n(542),c=(n(6540),n(4848));a.Yv.add(o.Cvc,r.X7I);const d={...s.A,Highlight:function(e){let{children:t,color:n}=e;return(0,c.jsx)("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#fff",padding:"0.5rem"},children:t})},FAIcon:i.g,Code:l.A}}}]);