(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4704],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return h},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||r;return n?o.createElement(f,i(i({ref:t},h),{},{components:n})):o.createElement(f,i({ref:t},h))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3538:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return y},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return f}});var o=n(2122),a=n(9756),r=n(7294),i=n(3905),s=n(6010),l="tableOfContentsInline_3fWc";function c(e){var t=e.toc,n=e.isChild;return t.length?r.createElement("ul",{className:n?"":"table-of-contents"},t.map((function(e){return r.createElement("li",{key:e.id},r.createElement("a",{href:"#"+e.id,dangerouslySetInnerHTML:{__html:e.value}}),r.createElement(c,{isChild:!0,toc:e.children}))}))):null}var h=function(e){var t=e.toc;return r.createElement("div",{className:(0,s.Z)(l)},r.createElement(c,{toc:t}))},u=["components"],d={id:"terminology",title:"Terminology"},m={unversionedId:"introduction/terminology",id:"introduction/terminology",isDocsHomePage:!1,title:"Terminology",description:"Bee",source:"@site/docs/introduction/terminology.md",sourceDirName:"introduction",slug:"/introduction/terminology",permalink:"/docs/introduction/terminology",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/introduction/terminology.md",version:"current",frontMatter:{id:"terminology",title:"Terminology"},sidebar:"Balls",previous:{title:"Welcome!",permalink:"/docs/"},next:{title:"Quick Start",permalink:"/docs/installation/quick-start"}},f=[{value:"Bee",id:"bee",children:[]},{value:"Clef &amp; Bee-Clef",id:"clef--bee-clef",children:[]},{value:"Swarm",id:"swarm",children:[]},{value:"Ethereum / Blockchain",id:"ethereum--blockchain",children:[{value:"BZZ Token",id:"bzz-token",children:[]},{value:"SWAP",id:"swap",children:[]},{value:"Cheques &amp; ChequeBook",id:"cheques--chequebook",children:[]},{value:"Goerli",id:"goerli",children:[]},{value:"Mainnet",id:"mainnet",children:[]}]}],p={toc:f};function y(e){var t=e.components,n=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,o.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(h,{toc:f,mdxType:"TOCInline"}),(0,i.kt)("h2",{id:"bee"},"Bee"),(0,i.kt)("p",null,"The Bee, also referred to as a 'node' or 'client' is the heart and work-horse of the swarm. This is the service that you will run on your devices, and once running it will join with other nodes over a Peer-to-peer (p2p) network to form the 'swarm'."),(0,i.kt)("p",null,"The Bee becomes the broker of data, storing and supplying blocks of data in a give-and-take exchange for BZZ tokens."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/installation/quick-start#install-bee"},"Install Bee"))),(0,i.kt)("h2",{id:"clef--bee-clef"},"Clef & Bee-Clef"),(0,i.kt)("p",null,"Clef, by itself, is a tool built for the Ethereum blockchain. It is used to sign the transaction before they are placed (permanently) onto the blockchain. Think of this as a notary which has the power to make transactions binding and 'official'. Bee includes a specific version of Clef \"Bee-clef\" that is tailored and configured specific to Bee's needs. Therefor, if you are running a Bee node, you'll also want to run a Bee-clef instance."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Currently, as of version 0.5.2, you must run one instance of Bee-clef for every instance of Bee."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/installation/bee-clef"},"Install Bee-clef"))),(0,i.kt)("h2",{id:"swarm"},"Swarm"),(0,i.kt)("p",null,"Swarm is the collective term for all of the Bee nodes within the network. It is the system that, together, provides the distributed and decentralised storage and communication system accomplishing the overarching goal."),(0,i.kt)("p",null,"Swarm is also the name of the core organization that oversees the development and success of the Bee Swarm as a whole. You can find them at ",(0,i.kt)("a",{parentName:"p",href:"https://swarm.ethereum.org/"},"swarm.ethereum.org"),"."),(0,i.kt)("h2",{id:"ethereum--blockchain"},"Ethereum / Blockchain"),(0,i.kt)("p",null,"Ethereum is most commonly known by its traded coin, ETH, but in actuality, the Ethereum blockchain framework provides other foundational services upon which makes the higher-level goals of Bee possible."),(0,i.kt)("p",null,'Ethereum provides a service known as "smart contracts" which, in basic terms, is essentially the ability to publish rules or a binding digital code-of-conduct that establish the proper flow and exchange of data. Bee uses these contracts for two main purposes: To establish the Swarm incentivization token "BZZ", and to establish the concepts of Cheques and ChequeBooks.'),(0,i.kt)("p",null,"With these two core concepts found, you have created the proper economic tools to build a strong distributed system (via BZZ) and to make it fast, efficient, and cheap (via Cheques)."),(0,i.kt)("h3",{id:"bzz-token"},"BZZ Token"),(0,i.kt)("p",null,"The BZZ Token is built out of a smart contract that is specifically designed to be the token of cost and reward that provides the incentive to provide computing, storage and network resources to the Swarm."),(0,i.kt)("h3",{id:"swap"},"SWAP"),(0,i.kt)("p",null,"SWAP is the name of the system/rules applied to the exchange of data that results in the reward (or cost) of BZZ. As you contribute service to the swarm, you are awarded through the SWAP system with BZZ; but as you consume the service of the swarm, it costs you BZZ."),(0,i.kt)("p",null,"Read more about ",(0,i.kt)("a",{parentName:"p",href:"/docs/advanced/swap"},"SWAP here"),"."),(0,i.kt)("h3",{id:"cheques--chequebook"},"Cheques & ChequeBook"),(0,i.kt)("p",null,"Settling transactions on the Ethereum network can be expensive and time-consuming, especially when there is a high-volume of transactions. If Bee nodes are transferring many blocks of files back-and-forth to feed the Swarm network demand, the amount of transactions can add up quickly."),(0,i.kt)("p",null,"To speed up this process cheques were created. They are an off-chain method of payment where issuer signs a cheque specifying a beneficiary, a date and an amount, gives it to the recipient as a token of promise to pay at a later date. The nice thing about this is that Cheques can 'stack-up' so that when you settle the exchange, by 'committing' the exchange of BZZ on the blockchain, many small cheques can be counted as one large payout."),(0,i.kt)("p",null,"The ChequeBook is the smart contract that allows the beneficiary to choose when payments are to be processed. Which essentially means it's the address and logic mechanism that allows you to cash-out the cheques that you've received."),(0,i.kt)("h3",{id:"goerli"},"Goerli"),(0,i.kt)("p",null,"Goerli is a Testnet, meaning that this is a safe environment to develop and test Bee until it is mature enough to run in production. It's currently also being used as the community-building platform that will migrate to Mainnet once live. Tokens on this network are often prefixed with a lower-case 'g', example: 'gBZZ' and 'gETH' and because this is a test network, they carry no monetary value."),(0,i.kt)("h4",{id:"faucet"},"Faucet"),(0,i.kt)("p",null,'It takes BZZ tokens to seed your node so it can join the Swarm. Before it can start providing storage/network as a resource, it needs to receive data that the Swarm holds which costs BZZ. Since Goerli is a test network, there aren\'t marketplaces that you can "buy" BZZ, so a faucet is a pool of BZZ (and gEth) that will "sprinkle" (freely share/send) some of it to the address that you request. There is a #faucet-requset channel on the ',(0,i.kt)("a",{parentName:"p",href:"https://discord.gg/wdghaQsGq5"},"Swarm Discord")," which you may join and request."),(0,i.kt)("h3",{id:"mainnet"},"Mainnet"),(0,i.kt)("p",null,"This is another name for the production 'official' Ethereum network that you use to buy/sell Ethereum (among many others). Bee will launch on this network once feature complete and stable."))}y.isMDXComponent=!0},6010:function(e,t,n){"use strict";function o(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=o(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=o(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);