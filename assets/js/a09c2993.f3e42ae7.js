(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4128],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},p),{},{components:n})):r.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1143:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i=["components"],l={id:"introduction",title:"Welcome!",slug:"/"},s={unversionedId:"introduction",id:"introduction",isDocsHomePage:!1,title:"Welcome!",description:"Hello and welcome to Swarm! \ud83d\udc1d",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/",permalink:"/docs/",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/introduction.md",version:"current",frontMatter:{id:"introduction",title:"Welcome!",slug:"/"},sidebar:"Balls",next:{title:"Terminology",permalink:"/docs/introduction/terminology"}},c=[{value:"Swarm Whitepaper and The Book of Swarm",id:"swarm-whitepaper-and-the-book-of-swarm",children:[]},{value:"Bonding Curve",id:"bonding-curve",children:[]},{value:"Installation",id:"installation",children:[]},{value:"Working With Bee",id:"working-with-bee",children:[]},{value:"Access the Swarm",id:"access-the-swarm",children:[]},{value:"API Reference",id:"api-reference",children:[]},{value:"Dapps",id:"dapps",children:[]},{value:"Incentives",id:"incentives",children:[]},{value:"Find Out More",id:"find-out-more",children:[]},{value:"Development",id:"development",children:[]},{value:"Community",id:"community",children:[]},{value:"Reporting a bug",id:"reporting-a-bug",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Hello and welcome to Swarm! \ud83d\udc1d"),(0,a.kt)("p",null,"As soon as the Bee client is up and running it will begin to connect with peers all over the world to become part of Swarm, a global p2p network tasked with storing and distributing all of the world's data."),(0,a.kt)("p",null,"Swarm is a decentralised data storage and distribution technology, ready to power the next generation of censorship resistant, unstoppable serverless apps."),(0,a.kt)("p",null,"Swarm is economically self-sustaining due to a built-in incentive system enforced through smart contracts on the Ethereum blockchain. Swarm aspires to shape the future towards a self-sovereign global society and permissionless open markets. Applications can run autonomously yet securely in a planetary-scale deployment and execution environment."),(0,a.kt)("h1",{id:"swarm"},"Swarm"),(0,a.kt)("h2",{id:"swarm-whitepaper-and-the-book-of-swarm"},"Swarm Whitepaper and The Book of Swarm"),(0,a.kt)("p",null,"What happens with a Bee node after startup? Want to know more about the Swarm technology behind Bee?\nWant to make your own client? Read the ",(0,a.kt)("a",{href:"/swarm-whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"},"Swarm Whitepaper")," and for a deeper dive, ",(0,a.kt)("a",{href:"/the-book-of-swarm.pdf",target:"_blank",rel:"noopener noreferrer"},"The Book of Swarm"),",\nour 250 page guide to the tech underpinning the Swarm network."),(0,a.kt)("h2",{id:"bonding-curve"},"Bonding Curve"),(0,a.kt)("p",null,"Find more information on the bonding curve, including its ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bzzaar-contracts"},"source code")," in the github repository."),(0,a.kt)("h1",{id:"bee"},"Bee"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Don't have Bee installed yet? It's easy! Head over to the ",(0,a.kt)("a",{parentName:"p",href:"/docs/installation/quick-start"},"installation")," section to get Bee up and running."),(0,a.kt)("h2",{id:"working-with-bee"},"Working With Bee"),(0,a.kt)("p",null,"Once Bee is installed, find out how to configure the software, interact with the API, monitor what Bee is up to, and make those all important backups in the ",(0,a.kt)("a",{parentName:"p",href:"/docs/working-with-bee/introduction"},"working with Bee")," section."),(0,a.kt)("h2",{id:"access-the-swarm"},"Access the Swarm"),(0,a.kt)("p",null,"To learn more about how to get the most out of Bee, find out how to ",(0,a.kt)("a",{parentName:"p",href:"/docs/access-the-swarm/upload-and-download"},"access the swarm")," section so you can share files with your friends, use Bee to host a website on a public Swarm Gateway, and much more!"),(0,a.kt)("h2",{id:"api-reference"},"API Reference"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/api-reference"},"Find detailed information")," on all the endpoints available in the autogenerated ",(0,a.kt)("a",{href:"/api",target:"_blank",rel:"noopener noreferrer"},"API reference")," and ",(0,a.kt)("a",{href:"/debug-api",target:"_blank",rel:"noopener noreferrer"},"Debug API reference")," guides."),(0,a.kt)("h2",{id:"dapps"},"Dapps"),(0,a.kt)("p",null,"Swarm is all about dapps. It strives to provide the most developer\nfriendly environment on which to build decentralised\norganisations. Built on the principles of functionality, flexibility\nand accessibility, Bee provides high level constructs for file\nstorage, feeds and key-value stores, while also providing the low\nlevel access with libraries that create Single Owner and Trojan chunks\nclientside, with total e2e privacy. Learn more about how to ",(0,a.kt)("a",{parentName:"p",href:"/docs/dapps-on-swarm/introduction"},"develop\non Swarm"),"."),(0,a.kt)("h2",{id:"incentives"},"Incentives"),(0,a.kt)("p",null,"Need even more incentive to get involved with the wonderful world of\nSwarm? Find out how you can ",(0,a.kt)("a",{parentName:"p",href:"/docs/working-with-bee/cashing-out"},"earn xBZZ\ntokens")," for storing and\ndistributing your share of the world's data - sharing is caring!"),(0,a.kt)("h2",{id:"find-out-more"},"Find Out More"),(0,a.kt)("p",null,"Read ",(0,a.kt)("a",{href:"/the-book-of-swarm.pdf",target:"_blank",rel:"noopener noreferrer"},"The Book of Swarm"),", our 250 page epic\nguide to the future tech underpinning the Swarm network."),(0,a.kt)("p",null,"For a lighter read, read the ",(0,a.kt)("a",{href:"/swarm-whitepaper.pdf",target:"_blank",rel:"noopener noreferrer"},"Swarm Whitepaper"),"."),(0,a.kt)("h2",{id:"development"},"Development"),(0,a.kt)("p",null,"Join our efforts! Are you up to the challenge of\nhelping to create Bee and the other incredible technologies that are\nbeing build on top of it? You are invited to contribute code to the Bee\nclient or any of the other projects in Swarm's\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere"},"Ethersphere"),"."),(0,a.kt)("h2",{id:"community"},"Community"),(0,a.kt)("p",null,"There is a vibrant and buzzing community behind Swarm - get involved\nin one of our group channels:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"http://ethswarm.org"},"Swarm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://discord.gg/wdghaQsGq5"},"Discord")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://twitter.com/ethswarm"},"Twitter @ethswarm")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.reddit.com/r/ethswarm/"},"reddit channel")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://ethswarm.medium.com/"},"Medium"))),(0,a.kt)("h2",{id:"reporting-a-bug"},"Reporting a bug"),(0,a.kt)("p",null,"If your Bee isn't working, get in touch with the ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/wdghaQsGq5"},"#node-operators channel on Discord")," or ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee/issues"},"let us know on GitHub!")," \ud83d\udc1d"),(0,a.kt)("p",null,"Thanks for beeing here, Love and Bees from the Swarm Team x"))}u.isMDXComponent=!0}}]);