(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[7787],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return m}});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(a),m=o,d=h["".concat(c,".").concat(m)]||h[m]||u[m]||r;return a?n.createElement(d,i(i({ref:t},p),{},{components:a})):n.createElement(d,i({ref:t},p))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},5251:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var n=a(2122),o=a(9756),r=(a(7294),a(3905)),i=["components"],s={title:"Keep Your Data Alive",id:"keep-your-data-alive"},c={unversionedId:"access-the-swarm/keep-your-data-alive",id:"access-the-swarm/keep-your-data-alive",isDocsHomePage:!1,title:"Keep Your Data Alive",description:"The swarm comprises the sum total of all storage space provided by all of our nodes, called the DISC (Distributed Immutable Store of Chunks). The right to write data into this distributed store is determined by the postage stamps that have been attached.",source:"@site/docs/access-the-swarm/keep-your-data-alive.md",sourceDirName:"access-the-swarm",slug:"/access-the-swarm/keep-your-data-alive",permalink:"/docs/access-the-swarm/keep-your-data-alive",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/access-the-swarm/keep-your-data-alive.md",version:"current",frontMatter:{title:"Keep Your Data Alive",id:"keep-your-data-alive"},sidebar:"Balls",previous:{title:"Track Upload Status",permalink:"/docs/access-the-swarm/syncing"},next:{title:"Pinning",permalink:"/docs/access-the-swarm/pinning"}},l=[{value:"Fund your node&#39;s wallet.",id:"fund-your-nodes-wallet",children:[]},{value:"Purchase a Batch of Stamps",id:"purchase-a-batch-of-stamps",children:[{value:"Amount",id:"amount",children:[]},{value:"Batch Depth",id:"batch-depth",children:[]},{value:"Calculating the Depth and Amount of Your Batch of Stamps",id:"calculating-the-depth-and-amount-of-your-batch-of-stamps",children:[]},{value:"Calculating the Remaining Balance of Your Batch",id:"calculating-the-remaining-balance-of-your-batch",children:[]}]}],p={toc:l};function u(e){var t=e.components,a=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The swarm comprises the sum total of all storage space provided by all of our nodes, called the DISC (Distributed Immutable Store of Chunks). The ",(0,r.kt)("em",{parentName:"p"},"right to write")," data into this distributed store is determined by the postage stamps that have been attached."),(0,r.kt)("h3",{id:"fund-your-nodes-wallet"},"Fund your node's wallet."),(0,r.kt)("p",null,"To start up your node, you will already have provided your node with\nXDAI for gas and BZZ which was transferred into your chequebook when\nyour node was initialised. This will be used to interact with other\nnodes using the ",(0,r.kt)("em",{parentName:"p"},"SWAP")," protocol. In order to access more funds to buy\nbatches of stamps, your wallet must be funded with BZZ. The easiest\nway to acheive this is to withdraw funds from your chequebook:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -XPOST "http://localhost:1635/chequebook/withdraw?amount=1000"\n')),(0,r.kt)("h2",{id:"purchase-a-batch-of-stamps"},"Purchase a Batch of Stamps"),(0,r.kt)("p",null,"Stamps are created in batches, so that storer nodes may calculate the\nvalidity of a chunk's stamp with only local knowledge. This enables\nthe privacy you enjoy in the swarm."),(0,r.kt)("p",null,"Stamp batches are created in ",(0,r.kt)("em",{parentName:"p"},"buckets")," with a ",(0,r.kt)("em",{parentName:"p"},"depth")," 16. The entire\nswarm ",(0,r.kt)("em",{parentName:"p"},"address space")," is divided into 2^16 = 65,536 different\nbuckets. When uploaded, each of your file's are split into 4kb chunks\nand assigned to a specific bucket based on it's address."),(0,r.kt)("p",null,"When creating a batch you must specify two values, ",(0,r.kt)("em",{parentName:"p"},"batch depth")," and ",(0,r.kt)("em",{parentName:"p"},"amount"),"."),(0,r.kt)("h3",{id:"amount"},"Amount"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"amount")," represents the quantity of BZZ that is assigned to this batch. The total amount of BZZ that will be paid for the batch is calulated from this figure and the ",(0,r.kt)("em",{parentName:"p"},"batch depth"),"."),(0,r.kt)("p",null,"The paid amount forms the ",(0,r.kt)("em",{parentName:"p"},"balance")," of the ",(0,r.kt)("em",{parentName:"p"},"batch"),". This ",(0,r.kt)("em",{parentName:"p"},"balance")," is then slowly depleted as time ticks on and ",(0,r.kt)("em",{parentName:"p"},"blocks")," are mined on the XDAI blockchain."),(0,r.kt)("h3",{id:"batch-depth"},"Batch Depth"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"batch depth")," determines ",(0,r.kt)("em",{parentName:"p"},"how many chunks")," are allowed to be in each ",(0,r.kt)("em",{parentName:"p"},"bucket"),". The number of chunks allowed in each ",(0,r.kt)("em",{parentName:"p"},"bucket")," is calculated to be a ",(0,r.kt)("inlineCode",{parentName:"p"},"2^(batch depth - bucket depth) = 2^(batch depth - 16)"),"."),(0,r.kt)("h3",{id:"calculating-the-depth-and-amount-of-your-batch-of-stamps"},"Calculating the Depth and Amount of Your Batch of Stamps"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Postage Stamps")," are a brand new feature addition to Swarm, and it's early days in the conception of how to get the best out of the stamp batches."),(0,r.kt)("p",null,"Right now, the easiest way to start uploading content, is to buy a large enough batch so that it is incredibly unlikely you will end up with too many ",(0,r.kt)("em",{parentName:"p"},"chunks")," falling into the same ",(0,r.kt)("em",{parentName:"p"},"bucket"),"."),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"amount")," you specify will determine the amount of time your chunks live in the swarm. Because pricing is variable, it is not possible to predict with accuracy exactly when your chunks will run out of balance, however, it can be estimated based on the ",(0,r.kt)("em",{parentName:"p"},"current price")," and the ",(0,r.kt)("em",{parentName:"p"},"remaining batch balance"),"."),(0,r.kt)("p",null,"For now, we suggest you specify depth 20 and amount 10000000 for your\nbatches. This should be ample to upload quite some data, and to keep\nyour files in the swarm for the forseeable future."),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you purchase a batch of stamps, you agree to burn BZZ. Although your 'balance' slowly decrements as time goes on, there is no way to withdraw BZZ from a batch. This is an outcome of Swarm's decentralised design, to read more about how the swarm fits toXDAIer, read ",(0,r.kt)("a",{href:"/the-book-of-swarm.pdf",target:"_blank",rel:"noopener noreferrer"},"The Book of Swarm")," ."))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl -s -XPOST http://localhost:1635/stamps/10000000/20\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Once your batch has been purchased, it will take a few minutes for other Bee nodes in the Swarm to catch up and register your batch. Allow some time for your batch to propagate in the network before proceeding to the next step."))),(0,r.kt)("p",null,"Look out for more ways to more accurately estimate the correct size of your batch coming soon!"),(0,r.kt)("p",null,"To check on your stamps, send a GET request to the stamp endpoint."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"curl http://localhost:1635/stamps\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When uploading content which is stamped using an already expired postage stamp, the node will not attempt to sync the content. You are advised to use longer-lived postage stamps and encrypt your content to work around this. It is not possible to reupload unencrypted content which was stamped using an expired postage stamp. We're working on improving on this."))),(0,r.kt)("h3",{id:"calculating-the-remaining-balance-of-your-batch"},"Calculating the Remaining Balance of Your Batch"),(0,r.kt)("p",null,"In order to make sure your ",(0,r.kt)("em",{parentName:"p"},"batch")," has sufficient ",(0,r.kt)("em",{parentName:"p"},"remaining balance")," to be stored and served by nodes in its ",(0,r.kt)("em",{parentName:"p"},"neighbourhood of responsibility"),", you must regularly check on its ",(0,r.kt)("em",{parentName:"p"},"balance")," and act accordingly. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"curl localhost:1635/chainstate\n")),(0,r.kt)("p",null,"Shows the current price per chunk per block in PLUR, the smallest unit of BZZ."),(0,r.kt)("p",null,"Soon, functionality will be added to ",(0,r.kt)("em",{parentName:"p"},"top up")," your batches balance. For now, you must reupload content with a newly created ",(0,r.kt)("em",{parentName:"p"},"stamp batch id"),"."))}u.isMDXComponent=!0}}]);