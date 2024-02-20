"use strict";(self.webpackChunkqbt_static_docs=self.webpackChunkqbt_static_docs||[]).push([[873],{5973:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=n(5893),s=n(1151);const o={title:"Script Installation",hide_title:!0},a=void 0,l={id:"script-installation",title:"Script Installation",description:"This documentation has a toggle in the nav menu to switch between a Basic and Advanced mode. In basic mode you'll see a version of the guide that assumes you have 0 knowledge of this project and how to use it.",source:"@site/docs/script-installation.md",sourceDirName:".",slug:"/script-installation",permalink:"/qbittorrent-nox-static/docs/script-installation",draft:!1,unlisted:!1,editUrl:"https://github.com/userdocs/qbittorrent-nox-static/tree/master/docs/script-installation.md",tags:[],version:"current",frontMatter:{title:"Script Installation",hide_title:!0},sidebar:"qtb_sidebar",previous:{title:"Prerequisite Check list",permalink:"/qbittorrent-nox-static/docs/Prerequisites"},next:{title:"Script Usage",permalink:"/qbittorrent-nox-static/docs/script-usage"}},r={},c=[{value:"Install using a terminal",id:"install-using-a-terminal",level:3},{value:"Installation one liners using Docker",id:"installation-one-liners-using-docker",level:2},{value:"Build one liners using Docker",id:"build-one-liners-using-docker",level:3}];function d(e){const t={admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components},{Advanced:n,Details:o,TabItem:a,Tabs:l}=t;return n||u("Advanced",!0),o||u("Details",!0),a||u("TabItem",!0),l||u("Tabs",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.admonition,{title:"Guide mode toggle",type:"tip",children:[(0,i.jsx)(t.p,{children:"This documentation has a toggle in the nav menu to switch between a Basic and Advanced mode. In basic mode you'll see a version of the guide that assumes you have 0 knowledge of this project and how to use it."}),(0,i.jsx)(t.p,{children:"It will avoid complexity and deviation into advanced tangents that would otherwise be helpful to someone who is already familiar with how the project works."})]}),"\n",(0,i.jsxs)(o,{className:"custom-details",children:[(0,i.jsx)("summary",{children:"Things to consider"}),(0,i.jsx)(t.p,{children:"There are actually a variety of ways you can approach the download and usage of the script."}),(0,i.jsx)(t.p,{children:"\ud83d\udfe9 Recommend: Download the script to a directory then go to the next section on docker usage where you create a docker around the local script. If you want to build stuff and test things you should download the script locally."}),(0,i.jsx)(t.p,{children:"\ud83d\udfe7 Optional: Download and bootstrap using a single docker command, which will be expanded on in detail in the next section. If you know exactly what you want to do you can simply make a one liner command to build the binary with no interaction required."}),(0,i.jsx)(t.p,{children:"\ud83d\udfe5 Not recommended: Download and run on the host. Dependencies like Qt have too many checks for system libs and not all are manageable to make sure the build is isolated from the host. It can work but most likely Qt will break stuff linking to things we don't want."}),(0,i.jsx)(t.p,{children:"Toggle the Basic guide to Advanced to see the exampled in the next section."})]}),"\n",(0,i.jsx)(t.p,{children:"For Alpine specifically, you need may to install bash to use this script."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"apk add bash\n"})}),"\n",(0,i.jsx)(t.h3,{id:"install-using-a-terminal",children:"Install using a terminal"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"wget -qO ~/qbt.sh git.io/qbstatic\n"})}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"curl -sLo ~/qbt.sh git.io/qbstatic\n"})}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)(t.h2,{id:"installation-one-liners-using-docker",children:"Installation one liners using Docker"}),(0,i.jsxs)(l,{children:[(0,i.jsxs)(a,{value:"Docker notes",label:"\ud83d\udd39Notes",default:!0,children:[(0,i.jsx)(t.p,{children:"Some notes on the dockers method:"}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["We will use a subdirectory and not your ",(0,i.jsx)(t.code,{children:"$HOME"})," directory as to avoid ",(0,i.jsx)(t.code,{children:".bashrc"})," and ",(0,i.jsx)(t.code,{children:".profile"})," conflicts."]}),"\n",(0,i.jsxs)(t.li,{children:["The subdirectory will be automatically created and named ",(0,i.jsx)(t.code,{children:"qbt"})," by the use of ",(0,i.jsx)(t.code,{children:"-v ~/qbt:/root"})]}),"\n",(0,i.jsxs)(t.li,{children:["The finale default path will be ",(0,i.jsx)(t.code,{children:"HOME/qbt"})," outside the docker container and ",(0,i.jsx)(t.code,{children:"/root/qbt"})," inside it."]}),"\n"]})]}),(0,i.jsxs)(a,{value:"Debian Linux",label:"\ud83d\udd39debian",children:[(0,i.jsx)(t.admonition,{title:"tags",type:"note",children:(0,i.jsxs)(t.p,{children:["You use ",(0,i.jsx)(t.code,{children:"debian:bullseye"})," ",(0,i.jsx)(t.code,{children:"debian:latest"})]})}),(0,i.jsx)(t.p,{children:"To bootstrap the container and run it:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"docker run -it -w /root -e \"LANG=en_GB.UTF-8\" -v ~/qbt:/root debian:latest /bin/bash -c 'apt update && apt install -y curl && curl -sLo ~/qbt.sh git.io/qbstatic && bash'\n"})}),(0,i.jsxs)(t.p,{children:["Alternatively, to bootstrap a container named ",(0,i.jsx)(t.code,{children:"qbtstatic"})," and it and leave it running in the background for reuse using ",(0,i.jsx)(t.code,{children:"-d"})," :"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"docker run --name qbtstatic -it -d -w /root -e \"LANG=en_GB.UTF-8\" -v ~/qbt:/root debian:latest /bin/bash -c 'apt update && apt install -y curl && curl -sLo ~/qbt.sh git.io/qbstatic'\n"})}),(0,i.jsx)(t.h3,{id:"build-one-liners-using-docker",children:"Build one liners using Docker"}),(0,i.jsx)(t.p,{children:"You can also provide options or environment variables to the script in the one liner commands to do it all in one go."})]}),(0,i.jsxs)(a,{value:"Ubuntu Linux",label:"\ud83d\udd39ubuntu",default:!0,children:[(0,i.jsx)(t.admonition,{title:"tags",type:"note",children:(0,i.jsxs)(t.p,{children:["You use ",(0,i.jsx)(t.code,{children:"ubuntu:focal"})," ",(0,i.jsx)(t.code,{children:"ubuntu:jammy"})," ",(0,i.jsx)(t.code,{children:"ubuntu:latest"})]})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"docker run -it -w /root -e \"LANG=en_GB.UTF-8\" -v ~/qbt:/root ubuntu:latest /bin/bash -c 'apt update && apt install -y curl && curl -sLo ~/qbt.sh git.io/qbstatic && bash'\n"})}),(0,i.jsxs)(t.p,{children:["Alternatively, to bootstrap a container named ",(0,i.jsx)(t.code,{children:"qbtstatic"})," and it and leave it running in the background for reuse using ",(0,i.jsx)(t.code,{children:"-d"})," :"]}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"docker run --name qbtstatic -it -d -w /root -e \"LANG=en_GB.UTF-8\" -v ~/qbt:/root ubuntu:latest /bin/bash -c 'apt update && apt install -y curl && curl -sLo ~/qbt.sh git.io/qbstatic'\n"})})]}),(0,i.jsxs)(a,{value:"Alpine linux",label:"\ud83d\udd39alpine",children:[(0,i.jsx)(t.admonition,{title:"tags",type:"note",children:(0,i.jsxs)(t.p,{children:["You use ",(0,i.jsx)(t.code,{children:"alpine:edge"})," ",(0,i.jsx)(t.code,{children:"alpine:latest"})]})}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"docker run -it -w /root -v ~/qbt:/root alpine:edge /bin/ash -c 'apk update && apk add bash curl && curl -sLo ~/qbt.sh git.io/qbstatic && bash'\n"})}),(0,i.jsx)(t.p,{children:"All in one command:"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-shell",children:"docker run --name qbtstatic -it -w /root -v ~/qbt:/root alpine:edge /bin/ash -c 'apk update && apk add bash curl && curl -sLo ~/qbt.sh git.io/qbstatic'\n"})})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}function u(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}},1151:(e,t,n)=>{n.d(t,{Z:()=>l,a:()=>a});var i=n(7294);const s={},o=i.createContext(s);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);