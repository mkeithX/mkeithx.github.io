"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5398],{1541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>u,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var s=n(4848),o=n(8453),r=(n(9195),n(4724),n(9215));const i={title:"Batch",description:"Batch examples.",sidebar_position:2},c=void 0,a={id:"cheat-sheets/batch",title:"Batch",description:"Batch examples.",source:"@site/docs/cheat-sheets/batch.mdx",sourceDirName:"cheat-sheets",slug:"/cheat-sheets/batch",permalink:"/docs/cheat-sheets/batch",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/docs/cheat-sheets/batch.mdx",tags:[],version:"current",lastUpdatedBy:"Keith WT",lastUpdatedAt:1723191716e3,sidebarPosition:2,frontMatter:{title:"Batch",description:"Batch examples.",sidebar_position:2},sidebar:"mySidebar",previous:{title:"Conda",permalink:"/docs/cheat-sheets/conda"},next:{title:"MDX and React",permalink:"/docs/cheat-sheets/mdx-react"}},l={},d=[{value:"Lock workstation",id:"lock-workstation",level:3},{value:"Logoff",id:"logoff",level:3},{value:"Group policy",id:"group-policy",level:3},{value:"Folder locker",id:"folder-locker",level:3}];function h(e){const t={code:"code",h3:"h3",pre:"pre",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h3,{id:"lock-workstation",children:"Lock workstation"}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-batch",metastring:"showLineNumbers",children:"@echo off\n\nRundll32.exe User32.dll,LockWorkStation\n"})})}),"\n",(0,s.jsx)(t.h3,{id:"logoff",children:"Logoff"}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-batch",metastring:"showLineNumbers",children:'@echo off\n\nREM Clear all Temporary Internet Files and IE History\nRunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 8\nRunDll32.exe InetCpl.cpl,ClearMyTracksByProcess 1\n\nREM Remove all files from %TEMP%\nsdelete -s %TEMP%\\*.*\n\nREM Remove list of Recently opened documents\nsdelete "%USERPROFILE%\\Recent\\*.*"\n\nREM Clears DNS records and Resets TCP/IP\nipconfig /flushdns\n\nREM Change directory to where puttylogs.py is located and Execute the Python script\ncd /d "path_to_puttylogs_directory" && python puttylogs.py\n\nREM Log the date/time\necho %DATE% %TIME% >> %HOMEDRIVE%\\logoff.txt\n\nREM Log off my machine\nshutdown -l -f\n'})})}),"\n",(0,s.jsx)(t.h3,{id:"group-policy",children:"Group policy"}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-batch",metastring:"showLineNumbers",children:'@echo off\npushd "%~dp0"\n\ndir /b "%SystemRoot%\\servicing\\Packages\\Microsoft-Windows-GroupPolicy-ClientExtensions-Package~3*.mum" > List.txt\ndir /b "%SystemRoot%\\servicing\\Packages\\Microsoft-Windows-GroupPolicy-ClientTools-Package~3*.mum" >> List.txt\n\nfor /f %%i in (List.txt) do (\n    dism /online /norestart /add-package:"%SystemRoot%\\servicing\\Packages\\%%i"\n)\n\ndel List.txt\n\npause\n'})})}),"\n",(0,s.jsx)(t.h3,{id:"folder-locker",children:"Folder locker"}),"\n",(0,s.jsx)(r.A,{children:(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-batch",metastring:"showLineNumbers",children:'@ECHO OFF\ntitle Folder Locker\n\nREM Set variables\nset "LOCKER_FOLDER=Locker"\nset "LOCKER_FILE=Control Panel.{21EC2020-3AEA-1069-A2DD-08002B30309D}"\nset "PASSWORD=12345"\n\nREM Main logic\nif EXIST "%LOCKER_FILE%" goto UNLOCK\nif NOT EXIST %LOCKER_FOLDER% goto MDLOCKER\n\n:CONFIRM\necho Are you sure you want to lock the folder? (Y/N)\nset /p "cho=>"\nif /I "%cho%"=="Y" goto LOCK\nif /I "%cho%"=="N" goto END\necho Invalid choice.\ngoto CONFIRM\n\n:LOCK\nren %LOCKER_FOLDER% "%LOCKER_FILE%"\nattrib +h +s "%LOCKER_FILE%"\necho Folder locked successfully.\ngoto END\n\n:UNLOCK\necho Enter password to unlock folder:\nset /p "pass=>"\nif "%pass%"=="%PASSWORD%" (\n    attrib -h -s "%LOCKER_FILE%"\n    ren "%LOCKER_FILE%" %LOCKER_FOLDER%\n    echo Folder unlocked successfully.\n) else (\n    echo Invalid password.\n    goto FAIL\n)\ngoto END\n\n:FAIL\necho Invalid password.\ngoto END\n\n:MDLOCKER\nmd %LOCKER_FOLDER%\necho Locker created successfully.\ngoto END\n\n:END\n'})})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},4724:(e,t,n)=>{n.d(t,{A:()=>r});n(6540);var s=n(9215),o=n(4848);function r(e){let{url:t}=e;return(0,o.jsx)("div",{style:{padding:10},children:(0,o.jsx)(s.A,{url:t,style:{minWidth:"min(100%,45vw)",width:996,maxWidth:"100%",overflow:"hidden"},bodyStyle:{padding:0},children:(0,o.jsx)("iframe",{src:t,title:t,style:{display:"block",width:"100%",height:300}})})})}},9215:(e,t,n)=>{n.d(t,{A:()=>i});n(6540);var s=n(4164);const o={browserWindow:"browserWindow_my1Q",browserWindowHeader:"browserWindowHeader_jXSR",row:"row_KZDM",buttons:"buttons_uHc7",right:"right_oyze",browserWindowAddressBar:"browserWindowAddressBar_Pd8y",dot:"dot_giz1",browserWindowMenuIcon:"browserWindowMenuIcon_Vhuh",bar:"bar_rrRL",browserWindowBody:"browserWindowBody_Idgs"};var r=n(4848);function i(e){let{children:t,minHeight:n,url:i="https://mkeithx.pages.dev",style:c,bodyStyle:a}=e;return(0,r.jsxs)("div",{className:o.browserWindow,style:{...c,minHeight:n},children:[(0,r.jsxs)("div",{className:o.browserWindowHeader,children:[(0,r.jsxs)("div",{className:o.buttons,children:[(0,r.jsx)("span",{className:o.dot,style:{background:"#f25f58"}}),(0,r.jsx)("span",{className:o.dot,style:{background:"#fbbe3c"}}),(0,r.jsx)("span",{className:o.dot,style:{background:"#58cb42"}})]}),(0,r.jsx)("div",{className:(0,s.A)(o.browserWindowAddressBar,"text--truncate"),children:i}),(0,r.jsx)("div",{className:o.browserWindowMenuIcon,children:(0,r.jsxs)("div",{children:[(0,r.jsx)("span",{className:o.bar}),(0,r.jsx)("span",{className:o.bar}),(0,r.jsx)("span",{className:o.bar})]})})]}),(0,r.jsx)("div",{className:o.browserWindowBody,style:a,children:t})]})}},9195:(e,t,n)=>{n.d(t,{A:()=>o});var s=n(4848);const o=e=>{let{src:t,type:n,maxWidth:o,alt:r}=e;return"youtube"===n?(0,s.jsx)("iframe",{width:"100%",style:{aspectRatio:"16 / 9",maxWidth:o||"100%"},src:t.youtube,title:r,allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowFullScreen:!0}):"local"===n?(0,s.jsxs)("video",{autoPlay:!0,loop:!0,muted:!0,playsInline:!0,width:"100%",style:{borderRadius:"8px",maxWidth:o||"100%"},children:[(0,s.jsx)("source",{src:t.webm,title:r,type:"video/webm"}),(0,s.jsx)("source",{src:t.mp4,title:r,type:"video/mp4"}),(0,s.jsx)("source",{src:t.ogg,title:r,type:"video/ogg"})]}):null}},8453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var s=n(6540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);