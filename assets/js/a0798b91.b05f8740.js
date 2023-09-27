"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[7767],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),d=o,f=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},45637:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={title:"Hive",id:"hive"},c=void 0,s={unversionedId:"bee/installation/hive",id:"bee/installation/hive",title:"Hive",description:"Because of how the swarm is structured, we recommend that users",source:"@site/docs/bee/installation/hive.md",sourceDirName:"bee/installation",slug:"/bee/installation/hive",permalink:"/docs/bee/installation/hive",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/installation/hive.md",tags:[],version:"current",frontMatter:{title:"Hive",id:"hive"},sidebar:"bee",previous:{title:"Build from Source",permalink:"/docs/bee/installation/build-from-source"},next:{title:"Bee Using Docker",permalink:"/docs/bee/installation/docker"}},u={},p=[{value:"Docker",id:"docker",level:3},{value:"Docker-Compose",id:"docker-compose",level:3},{value:"Helm",id:"helm",level:3},{value:"Manually",id:"manually",level:3},{value:"Monitoring",id:"monitoring",level:3}],m={toc:p},d="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(d,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Because of how the swarm is structured, we recommend that users\nwishing to scale up their Bee operation, or set up a commercial Bee\nhive should seek to run many instances of Bee simultaneously. Read ",(0,a.kt)("a",{href:"/the-book-of-swarm.pdf",target:"_blank",rel:"noopener\nnoreferrer"},"The Book of Swarm")," for more information on how the\nswarm comes together."),(0,a.kt)("p",null,"Swarm provides tooling to help you install many Bees at once."),(0,a.kt)("h3",{id:"docker"},"Docker"),(0,a.kt)("p",null,"Up to date ",(0,a.kt)("a",{parentName:"p",href:"/docs/bee/installation/docker"},"Docker images for Bee")," are provided."),(0,a.kt)("h3",{id:"docker-compose"},"Docker-Compose"),(0,a.kt)("p",null,"It becomes easier to run multiple Bee nodes with\n",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose"),". Check out the Docker compose section of the\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee/tree/master/packaging/docker"},"Docker README"),"."),(0,a.kt)("h3",{id:"helm"},"Helm"),(0,a.kt)("p",null,"If you really want to run a lot of Bee nodes and you have experience using Kubernetes with Helm, you can have a look at how we manage our cluster under ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/helm/tree/master/charts/bee"},"Ethersphere/helm"),"."),(0,a.kt)("h3",{id:"manually"},"Manually"),(0,a.kt)("p",null,"If you just want to run a handful of bee nodes, you can run multiple bee nodes by creating separate configuration files."),(0,a.kt)("p",null,"Create your first configuration file by running"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"bee printconfig &> bee-config-1.yaml\n")),(0,a.kt)("p",null,"Make as many copies of bee-config-1.yaml as you want to run bee nodes. Increment the number in the name (",(0,a.kt)("inlineCode",{parentName:"p"},"bee-config-1")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"bee-config-2"),") for each new configuration file."),(0,a.kt)("p",null,"Configure your nodes as desired, but ensure that the values ",(0,a.kt)("inlineCode",{parentName:"p"},"api-addr"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"data-dir"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"debug-api-addr"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"p2p-addr")," are unique for each configuration."),(0,a.kt)("h3",{id:"monitoring"},"Monitoring"),(0,a.kt)("p",null,"See the monitoring section on how to access Bee's internal metrics! Share your community creations (like ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/doristeo/SwarmMonitoring"},"swarmMonitor")," - thanks doristeo!) in the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/X3ph5yGRFU"},"#node-operators")," channel of our Discord server so we can add you to our list of all things that are ",(0,a.kt)("a",{parentName:"p",href:"/docs/learn/ecosystem/awesome"},"awesome")," and Swarm. \ud83e\udde1"))}f.isMDXComponent=!0}}]);