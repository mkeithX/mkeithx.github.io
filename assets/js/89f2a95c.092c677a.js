(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8780],{5712:(e,n,s)=>{e.exports={src:{srcSet:s.p+"assets/ideal-img/winstore.4895603.640.png 640w,"+s.p+"assets/ideal-img/winstore.1c1a1ee.855.png 855w",images:[{path:s.p+"assets/ideal-img/winstore.4895603.640.png",width:640,height:228},{path:s.p+"assets/ideal-img/winstore.1c1a1ee.855.png",width:855,height:304}],src:s.p+"assets/ideal-img/winstore.4895603.640.png",toString:function(){return s.p+"assets/ideal-img/winstore.4895603.640.png"},placeholder:void 0,width:640,height:228},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAECAYAAAC3OK7NAAAACXBIWXMAAAsRAAALEQF/ZF+RAAAAk0lEQVR4nB2MMQ6CMAAA22gMFirBUGrCIHUiERcGmdWaMBgWn+DO4MDgI/QRzr7xTDpcbroT2WLOLpuhC4lOEuI4DmitiaIIKWVAXIs1v8eW+0vQ7Bu6Y0flKtq2xTlHmqYhEOJww3/efJ+C0/nCNE147+n7nmEYGMeRuq4RUq1YGssmEyilsNZijAkuy5I8z8PxD9JGOZO218KcAAAAAElFTkSuQmCC"}},3803:(e,n,s)=>{"use strict";s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=s(4848),r=s(8453),l=s(9489),t=s(7227);s(6540);const i={title:"Windows",description:"Windows - Frequently used Commands"},o=void 0,c={id:"cheat-sheets/windows",title:"Windows",description:"Windows - Frequently used Commands",source:"@site/docs/cheat-sheets/windows.mdx",sourceDirName:"cheat-sheets",slug:"/cheat-sheets/windows",permalink:"/docs/cheat-sheets/windows",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1717827627e3,frontMatter:{title:"Windows",description:"Windows - Frequently used Commands"},sidebar:"mySidebar",previous:{title:"Cheat Sheets",permalink:"/docs/cheat-sheets"},next:{title:"Git",permalink:"/docs/cheat-sheets/git"}},d={},u=[{value:"Download",id:"download",level:2},{value:"<code>Windows Terminal</code>",id:"windows-terminal",level:3},{value:"Start",id:"start",level:2},{value:"<code>PowerShell_Core - Version</code>",id:"powershell_core---version",level:3},{value:"<code>Network_info</code>",id:"network_info",level:3},{value:"<code>Enable/Disable Admin</code>",id:"enabledisable-admin",level:3},{value:"Troubleshoot",id:"troubleshoot",level:2},{value:"Network",id:"network",level:3},{value:"PC Health",id:"pc-health",level:2},{value:"<code>DISM_Repair and SFC</code>",id:"dism_repair-and-sfc",level:3}];function h(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components},{Details:i}=n;return i||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Recommend to have ",(0,a.jsx)(n.code,{children:"Windows Terminal"})," and ",(0,a.jsx)(n.code,{children:"PowerShell Core"})," installed in your system."]}),"\n",(0,a.jsx)(n.h2,{id:"download",children:"Download"}),"\n",(0,a.jsx)(n.h3,{id:"windows-terminal",children:(0,a.jsx)(n.code,{children:"Windows Terminal"})}),"\n",(0,a.jsx)("a",{href:"ms-windows-store://pdp/?productid=9n0dx20hk701",target:"_blank",children:(0,a.jsx)("img",{src:s(5712).default,alt:"Windows Store Link",className:"winstore"})}),"\n",(0,a.jsx)(n.p,{children:"Get from your favorite package managers."}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(t.A,{value:"winget",label:"Winget",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"winget install --id Microsoft.WindowsTerminal -e\n"})})}),(0,a.jsx)(t.A,{value:"choco",label:"Chocolatey",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"choco install microsoft-windows-terminal\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"start",children:"Start"}),"\n",(0,a.jsx)(n.h3,{id:"powershell_core---version",children:(0,a.jsx)(n.code,{children:"PowerShell_Core - Version"})}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(t.A,{value:"pwshedition",label:"Edition",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"$PSEdition\n"})})}),(0,a.jsx)(t.A,{value:"pwshversionA",label:"Version",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"$PSVersiontable\n"})})}),(0,a.jsx)(t.A,{value:"pwshversionB",label:"Build",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"$PSVersiontable.PSVersion\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"network_info",children:(0,a.jsx)(n.code,{children:"Network_info"})}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(t.A,{value:"pwsh",label:"PowerShell",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"Get-NetIPConfiguration\n"})})}),(0,a.jsx)(t.A,{value:"cmd",label:"CMD",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"ipconfig /all\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"enabledisable-admin",children:(0,a.jsx)(n.code,{children:"Enable/Disable Admin"})}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(t.A,{value:"enable",label:"Enable",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"net user administrator /active:yes\n"})})}),(0,a.jsx)(t.A,{value:"disable",label:"Disable",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"net user administrator /active:no\n"})})}),(0,a.jsx)(t.A,{value:"lists",label:"List",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"net user\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"troubleshoot",children:"Troubleshoot"}),"\n",(0,a.jsx)(n.h3,{id:"network",children:"Network"}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Reset"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ipconfig /release\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ipconfig /flushdns\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"ipconfig /renew\n"})}),(0,a.jsx)(n.admonition,{title:"Optional",type:"caution",children:(0,a.jsx)(n.p,{children:"Continue these two commands if you want to reset your network completely."})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"netsh int ip reset\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"netsh winsock reset\n"})}),(0,a.jsx)(n.p,{children:"Restart computer."}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"Restart-Comuputer\n"})})]}),"\n",(0,a.jsxs)(i,{children:[(0,a.jsx)("summary",{children:"Reports"}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"netsh interface show interface\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"netsh wlan show wlanreport\n"})}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"netsh interface ip show dnsservers\n"})})]}),"\n",(0,a.jsx)(n.h2,{id:"pc-health",children:"PC Health"}),"\n",(0,a.jsx)(n.h3,{id:"dism_repair-and-sfc",children:(0,a.jsx)(n.code,{children:"DISM_Repair and SFC"})}),"\n",(0,a.jsxs)(l.A,{children:[(0,a.jsx)(t.A,{value:"scn",label:"Scan",default:!0,children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"DISM /Online /Cleanup-Image /ScanHealth\n"})})}),(0,a.jsx)(t.A,{value:"rest",label:"Restore",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"DISM /Online /Cleanup /RestoreHealth\n"})})}),(0,a.jsx)(t.A,{value:"sfc",label:"SFC",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-sh",children:"SFC /scannow\n"})})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7227:(e,n,s)=>{"use strict";s.d(n,{A:()=>t});s(6540);var a=s(4164);const r={tabItem:"tabItem_Ymn6"};var l=s(4848);function t(e){let{children:n,hidden:s,className:t}=e;return(0,l.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,t),hidden:s,children:n})}},9489:(e,n,s)=>{"use strict";s.d(n,{A:()=>A});var a=s(6540),r=s(4164),l=s(4245),t=s(6347),i=s(6494),o=s(2814),c=s(5167),d=s(9900);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:s}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:s,attributes:a,default:r}}=e;return{value:n,label:s,attributes:a,default:r}}))}(s);return function(e){const n=(0,c.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,s])}function p(e){let{value:n,tabValues:s}=e;return s.some((e=>e.value===n))}function m(e){let{queryString:n=!1,groupId:s}=e;const r=(0,t.W6)(),l=function(e){let{queryString:n=!1,groupId:s}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:n,groupId:s});return[(0,o.aZ)(l),(0,a.useCallback)((e=>{if(!l)return;const n=new URLSearchParams(r.location.search);n.set(l,e),r.replace({...r.location,search:n.toString()})}),[l,r])]}function x(e){const{defaultValue:n,queryString:s=!1,groupId:r}=e,l=h(e),[t,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=s.find((e=>e.default))??s[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:l}))),[c,u]=m({queryString:s,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,l]=(0,d.Dv)(s);return[r,(0,a.useCallback)((e=>{s&&l.set(e)}),[s,l])]}({groupId:r}),b=(()=>{const e=c??x;return p({value:e,tabValues:l})?e:null})();(0,i.A)((()=>{b&&o(b)}),[b]);return{selectedValue:t,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var g=s(1062);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=s(4848);function j(e){let{className:n,block:s,selectedValue:a,selectValue:t,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.a_)(),d=e=>{const n=e.currentTarget,s=o.indexOf(n),r=i[s].value;r!==a&&(c(n),t(r))},u=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const s=o.indexOf(e.currentTarget)+1;n=o[s]??o[0];break}case"ArrowLeft":{const s=o.indexOf(e.currentTarget)-1;n=o[s]??o[o.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":s},n),children:i.map((e=>{let{value:n,label:s,attributes:l}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:u,onClick:d,...l,className:(0,r.A)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":a===n}),children:s??n},n)}))})}function w(e){let{lazy:n,children:s,selectedValue:r}=e;const l=(Array.isArray(s)?s:[s]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function v(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.A)("tabs-container",b.tabList),children:[(0,f.jsx)(j,{...n,...e}),(0,f.jsx)(w,{...n,...e})]})}function A(e){const n=(0,g.A)();return(0,f.jsx)(v,{...e,children:u(e.children)},String(n))}},8453:(e,n,s)=>{"use strict";s.d(n,{R:()=>t,x:()=>i});var a=s(6540);const r={},l=a.createContext(r);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);