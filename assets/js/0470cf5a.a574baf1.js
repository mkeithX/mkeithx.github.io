"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2163],{9313:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>o});var i=s(4848),t=s(8453);const r={title:"Git",description:"Version Control - Git"},c=void 0,a={id:"cheat-sheets/git",title:"Git",description:"Version Control - Git",source:"@site/docs/cheat-sheets/git.mdx",sourceDirName:"cheat-sheets",slug:"/cheat-sheets/git",permalink:"/docs/cheat-sheets/git",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1723456207e3,frontMatter:{title:"Git",description:"Version Control - Git"},sidebar:"mySidebar",previous:{title:"Windows",permalink:"/docs/cheat-sheets/windows"},next:{title:"Conda",permalink:"/docs/cheat-sheets/conda"}},l={},o=[{value:"Basic workflow",id:"basic-workflow",level:2},{value:"Using <code>git switch</code>",id:"using-git-switch",level:2},{value:"<code>.gitconfig</code>",id:"gitconfig",level:2},{value:"Basic",id:"basic",level:3},{value:"Extended",id:"extended",level:3}];function h(e){const n={code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.R)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"basic-workflow",children:"Basic workflow"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Show"}),(0,i.jsxs)("div",{children:[" ",(0,i.jsx)("div",{children:(0,i.jsxs)(n.p,{children:["This outlines the basic ",(0,i.jsx)("code",{children:".git"})," workflow."]})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Create a local branch"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git checkout -b my-feature\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Make changes"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git commit -m "feat: my feature description"\n'})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Push changes"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git push\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git push -u origin my-feature\n"})})]})]}),"\n",(0,i.jsxs)(n.h2,{id:"using-git-switch",children:["Using ",(0,i.jsx)(n.code,{children:"git switch"})]}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Show"}),(0,i.jsxs)("div",{children:[(0,i.jsxs)("div",{children:[(0,i.jsx)(n.code,{children:"git switch"})," enhances branch management in Git, making it easier to switch between, create, and merge branches."]}),(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Switch to an Existing Branch"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git switch branch-name\n"})}),(0,i.jsxs)(n.ol,{start:"2",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Create and Switch to a New Branch"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git switch -c new-branch-name\n"})}),(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Work on Your Branch"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git add .\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git commit -m "Describe your changes"\n'})}),(0,i.jsxs)(n.ol,{start:"4",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Push Your Branch to Remote"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git push -u origin new-branch-name\n"})}),(0,i.jsxs)(n.ol,{start:"5",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Merge Changes from Another Branch"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git switch your-branch\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git merge main\n"})}),(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Resolve Conflicts (if any)"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git add .\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'git commit -m "Resolved merge conflicts"\n'})}),(0,i.jsxs)(n.ol,{start:"7",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Switch Back to Another Branch"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git switch main\n"})}),(0,i.jsxs)(n.ol,{start:"8",children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.strong,{children:"Clean Up"})}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git branch -d new-feature\n"})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"git push origin --delete new-feature\n"})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"gitconfig",children:(0,i.jsx)(n.code,{children:".gitconfig"})}),"\n",(0,i.jsx)(n.h3,{id:"basic",children:"Basic"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Show"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title=".gitconfig',children:"[user]\n    name = my_username\n    email = my_email@example.com\n[init]\n\tdefaultBranch = main\n[color]\n\tui = auto\n[core]\n\teditor = code\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"extended",children:"Extended"}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Show"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",metastring:'title=".gitconfig"',children:'\n# First things first, always set up your user info.\n// highlight-start\n\n[user]\nname = my_username\nemail = my_email@example.com\n\n// highlight-end\n\n# Display colours in the console\n[color]\nui = auto\nbranch = auto\nstatus = auto\n\n# Always rebase when using `git pull`, except for `main, master, develop` branches.\n[branch]\nautosetuprebase = always\n\n[branch "main"]\nrebase = false\n\n[branch "master"]\nrebase = false\n\n[branch "develop"]\nrebase = false\n\n\n\n# Automatically set up remote tracking branches for all new local branches.\n\n\n\n[push]\nautoSetupRemote = true\n\n# Important setting in windows that allows working on both Windows and cross-platform projects\n[core]\neol = native\nautocrlf = input\n\n# Common typos and aliases for long commands\n[alias]\nchekcout = checkout\nocmmit = commit\nstatsu = status\nsttaus = status\nfa = fetch --all\npushf = push --force-with-lease\nstsah = stash\n\n# Common LFS Settings\n[filter "lfs"]\nsmudge = git-lfs smudge -- %f\nprocess = git-lfs filter-process\nrequired = true\nclean = git-lfs clean -- %f\n\n# How private registries are handled\n[credential "https://my_company_vcs.example.com"]\nprovider = generic\n'})})]})]})}function d(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},8453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>a});var i=s(6540);const t={},r=i.createContext(t);function c(e){const n=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);