"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9083],{380:(n,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>o});var i=a(4848),t=a(8453);const s={title:"Conda",description:"CLI - Conda"},l="QUICK START",c={id:"cheat-sheets/conda",title:"Conda",description:"CLI - Conda",source:"@site/docs/cheat-sheets/conda.mdx",sourceDirName:"cheat-sheets",slug:"/cheat-sheets/conda",permalink:"/docs/cheat-sheets/conda",draft:!1,unlisted:!1,editUrl:"https://github.com/mkeithX/mkeithx.github.io/edit/main/website/docs/cheat-sheets/conda.mdx",tags:[],version:"current",lastUpdatedBy:"Keith Tan",lastUpdatedAt:172233645e4,frontMatter:{title:"Conda",description:"CLI - Conda"},sidebar:"mySidebar",previous:{title:"Git",permalink:"/docs/cheat-sheets/git"},next:{title:"Batch",permalink:"/docs/cheat-sheets/batch"}},d={},o=[{value:"Verifying",id:"verifying",level:2},{value:"Environments",id:"environments",level:2},{value:"What is Anaconda?",id:"what-is-anaconda",level:2},{value:"Installation",id:"installation",level:2},{value:"Step 1: Download Anaconda",id:"step-1-download-anaconda",level:3},{value:"Step 2: Install Anaconda",id:"step-2-install-anaconda",level:3},{value:"Step 3: Verify Installation",id:"step-3-verify-installation",level:3},{value:"Using Anaconda",id:"using-anaconda",level:2},{value:"Managing Environments",id:"managing-environments",level:3},{value:"Creating an Environment",id:"creating-an-environment",level:4},{value:"Activating an Environment",id:"activating-an-environment",level:4},{value:"Deactivating an Environment",id:"deactivating-an-environment",level:4},{value:"Installing Packages",id:"installing-packages",level:3},{value:"Installing a Package",id:"installing-a-package",level:4},{value:"Updating a Package",id:"updating-a-package",level:4},{value:"Removing a Package",id:"removing-a-package",level:4},{value:"Managing Environments with Anaconda Navigator",id:"managing-environments-with-anaconda-navigator",level:3},{value:"Launching Anaconda Navigator",id:"launching-anaconda-navigator",level:4},{value:"Test",id:"test",level:2}];function r(n){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,t.R)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"quick-start",children:"QUICK START"}),"\n",(0,i.jsx)(e.admonition,{type:"tip",children:(0,i.jsx)(e.p,{children:"Creating a new environment is advised for each new project or workflow."})}),"\n",(0,i.jsx)(e.h2,{id:"verifying",children:"Verifying"}),"\n",(0,i.jsx)(e.h2,{id:"environments",children:"Environments"}),"\n",(0,i.jsx)(e.h2,{id:""}),"\n",(0,i.jsx)(e.h1,{id:"setting-up-anaconda-a-comprehensive-guide",children:"Setting Up Anaconda: A Comprehensive Guide"}),"\n",(0,i.jsx)(e.p,{children:"Anaconda is a powerful tool for managing Python packages and environments, widely used in data science, machine learning, and scientific computing. In this guide, we'll walk through the steps to set up Anaconda on your system."}),"\n",(0,i.jsx)(e.h2,{id:"what-is-anaconda",children:"What is Anaconda?"}),"\n",(0,i.jsx)(e.p,{children:"Anaconda is a distribution of the Python and R programming languages for scientific computing, data analysis, and machine learning. It includes a package manager, environment manager, and a collection of pre-installed libraries and tools. Anaconda simplifies the process of installing and managing dependencies for data science projects."}),"\n",(0,i.jsx)(e.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsx)(e.h3,{id:"step-1-download-anaconda",children:"Step 1: Download Anaconda"}),"\n",(0,i.jsxs)(e.p,{children:["Visit the Anaconda website (",(0,i.jsx)(e.a,{href:"https://www.anaconda.com/products/distribution",children:"https://www.anaconda.com/products/distribution"}),") and download the appropriate version for your operating system (Windows, macOS, or Linux)."]}),"\n",(0,i.jsx)(e.h3,{id:"step-2-install-anaconda",children:"Step 2: Install Anaconda"}),"\n",(0,i.jsx)(e.p,{children:"Once the download is complete, follow the installation instructions for your operating system. The installation wizard will guide you through the process, allowing you to choose installation options and specify the installation directory."}),"\n",(0,i.jsx)(e.h3,{id:"step-3-verify-installation",children:"Step 3: Verify Installation"}),"\n",(0,i.jsxs)(e.p,{children:["After installation, open a terminal or command prompt and type ",(0,i.jsx)(e.code,{children:"conda --version"}),". If Anaconda is installed correctly, you should see the version number displayed in the output."]}),"\n",(0,i.jsx)(e.h2,{id:"using-anaconda",children:"Using Anaconda"}),"\n",(0,i.jsx)(e.h3,{id:"managing-environments",children:"Managing Environments"}),"\n",(0,i.jsx)(e.p,{children:"Anaconda allows you to create isolated Python environments, each with its own set of packages and dependencies. This is useful for managing project dependencies and avoiding conflicts between packages."}),"\n",(0,i.jsx)(e.h4,{id:"creating-an-environment",children:"Creating an Environment"}),"\n",(0,i.jsx)(e.p,{children:"To create a new environment, use the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"conda create --name myenv\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Replace ",(0,i.jsx)(e.code,{children:"myenv"})," with the name of your environment. You can also specify the Python version and additional packages to install:"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"conda create --name myenv python=3.8 numpy pandas\n"})}),"\n",(0,i.jsx)(e.h4,{id:"activating-an-environment",children:"Activating an Environment"}),"\n",(0,i.jsx)(e.p,{children:"To activate an environment, use the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"conda activate myenv\n"})}),"\n",(0,i.jsx)(e.h4,{id:"deactivating-an-environment",children:"Deactivating an Environment"}),"\n",(0,i.jsx)(e.p,{children:"To deactivate the current environment, simply use the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"conda deactivate\n"})}),"\n",(0,i.jsx)(e.h3,{id:"installing-packages",children:"Installing Packages"}),"\n",(0,i.jsxs)(e.p,{children:["Anaconda comes with its own package manager called ",(0,i.jsx)(e.code,{children:"conda"}),", which makes it easy to install, update, and remove packages."]}),"\n",(0,i.jsx)(e.h4,{id:"installing-a-package",children:"Installing a Package"}),"\n",(0,i.jsx)(e.p,{children:"To install a package, use the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"conda install package_name\n"})}),"\n",(0,i.jsxs)(e.p,{children:["Replace ",(0,i.jsx)(e.code,{children:"package_name"})," with the name of the package you want to install."]}),"\n",(0,i.jsx)(e.h4,{id:"updating-a-package",children:"Updating a Package"}),"\n",(0,i.jsx)(e.p,{children:"To update a package to the latest version, use the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"conda update package_name\n"})}),"\n",(0,i.jsx)(e.h4,{id:"removing-a-package",children:"Removing a Package"}),"\n",(0,i.jsx)(e.p,{children:"To remove a package, use the following command:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"conda remove package_name\n"})}),"\n",(0,i.jsx)(e.h3,{id:"managing-environments-with-anaconda-navigator",children:"Managing Environments with Anaconda Navigator"}),"\n",(0,i.jsx)(e.p,{children:"Anaconda Navigator is a graphical user interface (GUI) that allows you to manage environments, packages, and projects using a visual interface."}),"\n",(0,i.jsx)(e.h4,{id:"launching-anaconda-navigator",children:"Launching Anaconda Navigator"}),"\n",(0,i.jsx)(e.p,{children:"To launch Anaconda Navigator, simply type the following command in your terminal or command prompt:"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-shell",children:"anaconda-navigator\n"})}),"\n",(0,i.jsx)(e.h2,{id:"test",children:"Test"}),"\n",(0,i.jsx)("div",{class:"contentTableContainer",children:(0,i.jsxs)("table",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:"Description"}),(0,i.jsx)("th",{children:"Command"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)(e.p,{children:["Update ",(0,i.jsx)(e.code,{children:"conda"})," in base environment"]})}),(0,i.jsx)("td",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-py",children:"conda update --all -n base\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsxs)(e.p,{children:["Verify ",(0,i.jsx)(e.code,{children:"conda"})," install and check version"]})}),(0,i.jsx)("td",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"conda info\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(e.p,{children:"List installed of packages"})}),(0,i.jsx)("td",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"conda env list\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(e.p,{children:"Create a new environment (myenv)."})}),(0,i.jsx)("td",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"conda create --name myenv\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(e.p,{children:"Update environment in (myenv)."})}),(0,i.jsx)("td",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"conda update --all -n myenv\n"})})})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(e.p,{children:"Remove all unused files"})}),(0,i.jsx)("td",{children:(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-bash",children:"conda clean --all\n"})})})]})]})})]})}function h(n={}){const{wrapper:e}={...(0,t.R)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(r,{...n})}):r(n)}},8453:(n,e,a)=>{a.d(e,{R:()=>l,x:()=>c});var i=a(6540);const t={},s=i.createContext(t);function l(n){const e=i.useContext(s);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:l(n.components),i.createElement(s.Provider,{value:e},n.children)}}}]);