"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5445],{391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var a=t(4848),r=t(8453),i=t(9489),s=t(7227);const l={title:"Python Virtual Environments",sidebar_label:"Virtual Environments",description:"Exploring Python Virtual Environments"},o="Python Virtual Environments",u={id:"guides/python/setup/virtual-environments",title:"Python Virtual Environments",description:"Exploring Python Virtual Environments",source:"@site/docs/guides/python/setup/virtual-environments.mdx",sourceDirName:"guides/python/setup",slug:"/guides/python/setup/virtual-environments",permalink:"/docs/guides/python/setup/virtual-environments",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:1722766004e3,frontMatter:{title:"Python Virtual Environments",sidebar_label:"Virtual Environments",description:"Exploring Python Virtual Environments"},sidebar:"mySidebar",previous:{title:"Installing Python",permalink:"/docs/guides/python/setup/installing-python"},next:{title:"HTML Basics",permalink:"/docs/guides/html/"}},c={},d=[{value:"What are Virtual Environments?",id:"what-are-virtual-environments",level:2},{value:"Why Use Virtual Environments?",id:"why-use-virtual-environments",level:2},{value:"Dependency Management",id:"dependency-management",level:3},{value:"Isolation",id:"isolation",level:3},{value:"Portability",id:"portability",level:3},{value:"Utilizing Virtual Environments",id:"utilizing-virtual-environments",level:2},{value:"Using venv (Python 3.3+)",id:"using-venv-python-33",level:3},{value:"Activating",id:"activating",level:3},{value:"Managing Dependencies",id:"managing-dependencies",level:3},{value:"Summary",id:"summary",level:2}];function h(e){const n={admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"python-virtual-environments",children:"Python Virtual Environments"}),"\n",(0,a.jsx)(n.p,{children:"Python's virtual environments are a powerful tool for managing dependencies and keeping project environments clean and isolated. Let's take a brief dive into what virtual environments are and why they are essential for Python developers."}),"\n",(0,a.jsx)(n.h2,{id:"what-are-virtual-environments",children:"What are Virtual Environments?"}),"\n",(0,a.jsx)(n.p,{children:"A virtual environment is a self-contained directory tree that contains a Python installation for a particular version of Python, plus a number of additional packages. It enables you to have multiple, independent Python environments on the same computer, each with its own set of dependencies."}),"\n",(0,a.jsx)(n.h2,{id:"why-use-virtual-environments",children:"Why Use Virtual Environments?"}),"\n",(0,a.jsx)(n.h3,{id:"dependency-management",children:"Dependency Management"}),"\n",(0,a.jsx)(n.p,{children:"Virtual environments allow you to install and manage dependencies for each project separately. This prevents conflicts between different projects that may require different versions of the same package."}),"\n",(0,a.jsx)(n.h3,{id:"isolation",children:"Isolation"}),"\n",(0,a.jsx)(n.p,{children:"By isolating dependencies, virtual environments ensure that changes made to one project's environment do not affect others. This isolation protects against unintended consequences and facilitates reproducibility."}),"\n",(0,a.jsx)(n.h3,{id:"portability",children:"Portability"}),"\n",(0,a.jsxs)(n.p,{children:["Virtual environments can be easily shared with others by sharing the project's ",(0,a.jsx)(n.code,{children:"requirements.txt"})," file, which lists all dependencies. This makes it simple for collaborators to set up the same environment and reproduce your work."]}),"\n",(0,a.jsx)(n.h2,{id:"utilizing-virtual-environments",children:"Utilizing Virtual Environments"}),"\n",(0,a.jsx)(n.h3,{id:"using-venv-python-33",children:"Using venv (Python 3.3+)"}),"\n",(0,a.jsxs)(i.A,{groupId:"operating-systems",children:[(0,a.jsx)(s.A,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"py -m venv .venv\n"})})}),(0,a.jsx)(s.A,{value:"unix",label:"Unix",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"python3 -m venv .venv\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"activating",children:"Activating"}),"\n",(0,a.jsxs)(i.A,{groupId:"operating-systems",children:[(0,a.jsx)(s.A,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:".venv\\Scripts\\activate\n"})})}),(0,a.jsx)(s.A,{value:"unix",label:"Unix",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"source .venv/bin/activate\n"})})})]}),"\n",(0,a.jsx)(n.h3,{id:"managing-dependencies",children:"Managing Dependencies"}),"\n",(0,a.jsxs)(i.A,{groupId:"operating-systems",children:[(0,a.jsx)(s.A,{value:"win",label:"Windows",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"py -m pip install <package_name>\n"})})}),(0,a.jsx)(s.A,{value:"unix",label:"Unix",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-py",children:"pip install <package_name>\n"})})})]}),"\n",(0,a.jsx)(n.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(n.admonition,{type:"tip",children:(0,a.jsx)(n.p,{children:"Python virtual environments are an indispensable tool for Python developers, offering a clean and efficient way to manage dependencies and isolate project environments. Whether you're working on a small script or a large-scale application, incorporating virtual environments into your workflow can help streamline development and ensure project consistency."})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},7227:(e,n,t)=>{t.d(n,{A:()=>s});t(6540);var a=t(4164);const r={tabItem:"tabItem_Ymn6"};var i=t(4848);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.A)(r.tabItem,s),hidden:t,children:n})}},9489:(e,n,t)=>{t.d(n,{A:()=>w});var a=t(6540),r=t(4164),i=t(4245),s=t(6347),l=t(6494),o=t(2814),u=t(5167),c=t(9900);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,a.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:a,default:r}}=e;return{value:n,label:t,attributes:a,default:r}}))}(t);return function(e){const n=(0,u.X)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function p(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function v(e){let{queryString:n=!1,groupId:t}=e;const r=(0,s.W6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o.aZ)(i),(0,a.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function m(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=h(e),[s,o]=(0,a.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!p({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const a=t.find((e=>e.default))??t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:n,tabValues:i}))),[u,d]=v({queryString:t,groupId:r}),[m,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Dv)(t);return[r,(0,a.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),f=(()=>{const e=u??m;return p({value:e,tabValues:i})?e:null})();(0,l.A)((()=>{f&&o(f)}),[f]);return{selectedValue:s,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(1062);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=t(4848);function b(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,i.a_)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==a&&(u(n),s(r))},d=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.A)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>o.push(e),onKeyDown:d,onClick:c,...i,className:(0,r.A)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function x(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function j(e){const n=m(e);return(0,y.jsxs)("div",{className:(0,r.A)("tabs-container",f.tabList),children:[(0,y.jsx)(b,{...n,...e}),(0,y.jsx)(x,{...n,...e})]})}function w(e){const n=(0,g.A)();return(0,y.jsx)(j,{...e,children:d(e.children)},String(n))}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var a=t(6540);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);