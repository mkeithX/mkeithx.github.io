"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4571],{9623:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var a=i(4848),t=i(8453);const s={description:"Archive mailbox and auto-expanding"},o="Mailbox Archive",r={id:"devops/admin-center/mailbox-archive",title:"Mailbox Archive",description:"Archive mailbox and auto-expanding",source:"@site/docs/devops/admin-center/mailbox-archive.mdx",sourceDirName:"devops/admin-center",slug:"/devops/admin-center/mailbox-archive",permalink:"/docs/devops/admin-center/mailbox-archive",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/docs/devops/admin-center/mailbox-archive.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:172271555e4,frontMatter:{description:"Archive mailbox and auto-expanding"},sidebar:"devops",previous:{title:"MS Portals",permalink:"/docs/devops/admin-center/aka-ms"},next:{title:"Trainings",permalink:"/docs/devops/admin-center/training"}},c={},d=[{value:"Run Diagnostics",id:"run-diagnostics",level:2},{value:"PowerShell",id:"powershell",level:2},{value:"Auto-expanding",id:"auto-expanding",level:3}];function l(e){const n={code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"mailbox-archive",children:"Mailbox Archive"}),"\n",(0,a.jsx)(n.p,{children:"This article outlines archive mailboxes and the auto-expanding features."}),"\n",(0,a.jsx)(n.h2,{id:"run-diagnostics",children:"Run Diagnostics"}),"\n",(0,a.jsx)(n.p,{children:"Run an automated diagnostic check on a user's archive mailbox to identify any problems and suggested resolutions."}),"\n",(0,a.jsx)("div",{children:(0,a.jsx)("a",{class:"button button--outline button--warning",href:"https://aka.ms/PillarArchiveMailbox",target:"_blank",children:"Diagnostics"})}),"\n",(0,a.jsx)(n.h2,{id:"powershell",children:"PowerShell"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"Connect-ExchangeOnline \n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"Enable-Mailbox -Identity <username> -Archive\n"})}),"\n",(0,a.jsx)(n.h3,{id:"auto-expanding",children:"Auto-expanding"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"Enable-Mailbox <user mailbox> -AutoExpandingArchive\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"Get-Mailbox <user mailbox> | FL AutoExpandingArchiveEnabled\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"mail-archive-enable",src:i(6392).A+"",width:"624",height:"560"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{alt:"mail-policy",src:i(5476).A+"",width:"619",height:"673"})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},6392:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/mail-archive-enable-c80276b4df26352cd4f6f71a1a190944.png"},5476:(e,n,i)=>{i.d(n,{A:()=>a});const a=i.p+"assets/images/mail-policy-814ad22ffbdffd6a093d01cbcf83fbac.png"},8453:(e,n,i)=>{i.d(n,{R:()=>o,x:()=>r});var a=i(6540);const t={},s=a.createContext(t);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);