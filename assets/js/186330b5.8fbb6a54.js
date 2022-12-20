(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[4869],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,m=p["".concat(s,".").concat(h)]||p[h]||c[h]||r;return n?a.createElement(m,i(i({ref:t},d),{},{components:n})):a.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5108:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u},default:function(){return c}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=["components"],l={title:"Fund Your Node",id:"fund-your-node"},s={unversionedId:"installation/fund-your-node",id:"installation/fund-your-node",isDocsHomePage:!1,title:"Fund Your Node",description:"In order to start your Bee node on the mainnet, its Ethereum wallet must be",source:"@site/docs/installation/fund-your-node.md",sourceDirName:"installation",slug:"/installation/fund-your-node",permalink:"/docs/installation/fund-your-node",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/installation/fund-your-node.md",version:"current",frontMatter:{title:"Fund Your Node",id:"fund-your-node"},sidebar:"Balls",previous:{title:"Connectivity",permalink:"/docs/installation/connectivity"},next:{title:"Configuration",permalink:"/docs/working-with-bee/configuration"}},u=[{value:"A node&#39;s wallet",id:"a-nodes-wallet",children:[]},{value:"Chequebook",id:"chequebook",children:[]},{value:"Joining the swarm (mainnet)",id:"joining-the-swarm-mainnet",children:[{value:"Basic deployment",id:"basic-deployment",children:[]},{value:"Full performance node",id:"full-performance-node",children:[]}]},{value:"Debian/Ubuntu Installation",id:"debianubuntu-installation",children:[{value:"With Bee-Clef",id:"with-bee-clef",children:[]},{value:"Without Bee-Clef",id:"without-bee-clef",children:[]}]}],d={toc:u};function c(e){var t=e.components,n=(0,o.Z)(e,i);return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In order to start your Bee node on the ",(0,r.kt)("em",{parentName:"p"},"mainnet"),", its Ethereum wallet must be\nfunded with:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"1 ",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction/terminology#xbzz-token"},"xBZZ"),", for traffic\naccounting (this is optional, ",(0,r.kt)("a",{parentName:"p",href:"#basic-deployment"},"see below"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"some ",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction/terminology#xdai-token"},"xDAI"),", to pay the gas fees of\na couple of transactions on the ",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction/terminology#gnosis-chain"},"Gnosis\nChain"),"."))),(0,r.kt)("p",null,"The reason BZZ must be ",(0,r.kt)("a",{parentName:"p",href:"/docs/introduction/terminology#bridging-tokens"},"bridged"),"\nto the Gnosis Chain is that the transaction fees are currently too high on the\nEthereum mainnet for Swarm's purposes."),(0,r.kt)("h3",{id:"a-nodes-wallet"},"A node's wallet"),(0,r.kt)("p",null,"When your Bee node is installed, an Ethereum wallet is also created. This wallet\nis used by Bee to interact with the blockchain (e.g. for sending and receiving\ncheques, or for making purchases of postage stamps, etc.)."),(0,r.kt)("h3",{id:"chequebook"},"Chequebook"),(0,r.kt)("p",null,"When your node has downloaded enough content to exceed the free tier threshold,\nthen ",(0,r.kt)("em",{parentName:"p"},"cheques")," are sent to peers to provide payment in return for their\nservices."),(0,r.kt)("p",null,"In order to send these cheques, a ",(0,r.kt)("em",{parentName:"p"},"chequebook")," must be deployed on the\nblockchain for your node, and for full speed operation it can be funded with\nBZZ. This deployment happens when a node initialises for the first time. Your\nBee node will warn you in its log if there aren't enough funds in its wallet for\ndeploying the chequebook."),(0,r.kt)("p",null,"You can ",(0,r.kt)("a",{parentName:"p",href:"/docs/working-with-bee/configuration"},"configure")," the amount of BZZ to\nbe sent from the node's wallet. It is 1 BZZ by default, but it can be set to\nzero."),(0,r.kt)("h2",{id:"joining-the-swarm-mainnet"},"Joining the swarm (mainnet)"),(0,r.kt)("h3",{id:"basic-deployment"},"Basic deployment"),(0,r.kt)("p",null,"If you want to get your Bee node up and running as easily as possible, then you\ncan set its\n",(0,r.kt)("a",{parentName:"p",href:"/docs/working-with-bee/configuration#--swap-initial-deposit"},(0,r.kt)("inlineCode",{parentName:"a"},"--swap-initial-deposit")),"\nvalue to zero. This means that your node's chequebook will not get funded with\nBZZ, meaning that other nodes will only serve it within the free tier bandwidth\nthreshold."),(0,r.kt)("p",null,"Since gas fees on the ",(0,r.kt)("a",{parentName:"p",href:"https://www.xdaichain.com/"},"Gnosis Chain")," are very low,\nyou won't need much xDAI either to get started. You may acquire a small amount\nof it for free by using the ",(0,r.kt)("a",{parentName:"p",href:"https://xdai-app.herokuapp.com/faucet"},"BAO Community xDAI\nFaucet"),". The required amount is a\nfunction of the current transaction fee on the chain, but 0.01 xDAI should be\nmore than enough to start up your node."),(0,r.kt)("p",null,"You can use the ",(0,r.kt)("a",{parentName:"p",href:"https://blockscout.com/xdai/mainnet/"},"Blockscout")," block\nexplorer to inspect what's going on with your wallet by searching for its\nEthereum address."),(0,r.kt)("h3",{id:"full-performance-node"},"Full performance node"),(0,r.kt)("p",null,"If you want to run a full node, or upload a lot of content, then you may need\nmore xDAI for gas. To acquire this, you may convert DAI on the main Ethereum\nnetwork to xDAI using the\n",(0,r.kt)("a",{parentName:"p",href:"https://www.xdaichain.com/for-users/bridges/converting-xdai-via-bridge"},"xDAI bridge"),",\nor buy xDAI\n",(0,r.kt)("a",{parentName:"p",href:"https://www.xdaichain.com/for-users/get-xdai-tokens/buying-xdai-with-fiat"},"directly using fiat"),"."),(0,r.kt)("p",null,"You will also need to fund your node with more BZZ for full speed access, or to\npurchase postage stamps to upload content. To bridge BZZ from the Ethereum\nmainet to the ",(0,r.kt)("a",{parentName:"p",href:"https://www.xdaichain.com/"},"Gnosis Chain"),", you may use\n",(0,r.kt)("a",{parentName:"p",href:"https://omni.xdaichain.com/bridge"},"OmniBridge"),"."),(0,r.kt)("p",null,"To find out what your node's Ethereum address is, please consult your relevant\ninstallation guide or check your logs!"),(0,r.kt)("h1",{id:"configure-your-wallet-app"},"Configure Your Wallet App"),(0,r.kt)("p",null,"To interact with the BZZ ecosystem, you will need to make a couple of small\nconfiguration additions to your wallet software. In the case of e.g. MetaMask,\nyou'll need to\n",(0,r.kt)("a",{parentName:"p",href:"https://www.xdaichain.com/for-users/wallets/metamask"},"add the Gnosis Chain network"),",\nand then\n",(0,r.kt)("a",{parentName:"p",href:"https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask"},"add a custom token"),"."),(0,r.kt)("p",null,"The canoncial addresses for the BZZ token on the various blockchains are as\nfollows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Blockchain"),(0,r.kt)("th",{parentName:"tr",align:null},"Contract address"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ethereum, BZZ"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://ethplorer.io/address/0x19062190b1925b5b6689d7073fdfc8c2976ef8cb"},(0,r.kt)("inlineCode",{parentName:"a"},"0x19062190b1925b5b6689d7073fdfc8c2976ef8cb")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Gnosis Chain, xBZZ"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://blockscout.com/xdai/mainnet/tokens/0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da/"},(0,r.kt)("inlineCode",{parentName:"a"},"0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Goerli (testnet), gBZZ"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"https://goerli.etherscan.io/address/0x2ac3c1d3e24b45c6c310534bc2dd84b5ed576335"},(0,r.kt)("inlineCode",{parentName:"a"},"0x2ac3c1d3e24b45c6c310534bc2dd84b5ed576335")))))),(0,r.kt)("h1",{id:"accessing-your-nodes-wallet"},"Accessing Your Node's Wallet"),(0,r.kt)("p",null,"When your Bee node is installed, an Ethereum wallet is created. This wallet is\nused by Bee to interact with the blockchain (e.g. for sending and receiving\ncheques, or for making purchases of postage stamps, etc.)."),(0,r.kt)("p",null,"If you wish to interact with the node's wallet directly (e.g. by importing it\ninto a wallet app like ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),"), then you can access\nthe wallet file as follows."),(0,r.kt)("h2",{id:"debianubuntu-installation"},"Debian/Ubuntu Installation"),(0,r.kt)("h3",{id:"with-bee-clef"},"With Bee-Clef"),(0,r.kt)("p",null,"Your encrypted wallet file can be found as in this example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo ls /var/lib/bee-clef/keystore\nsudo cat /var/lib/bee-clef/keystore/UTC--2021-10-08T11-23-20.885085712Z--8789eb182fb94741ef65e29e0879d5a8bb721b9b\n")),(0,r.kt)("p",null,"And decrypted using the automatically generated password found at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cat /var/lib/bee-clef/password\n")),(0,r.kt)("h3",{id:"without-bee-clef"},"Without Bee-Clef"),(0,r.kt)("p",null,"Your key can be found within the ",(0,r.kt)("inlineCode",{parentName:"p"},"keys/")," folder of your datadir. For instance,\non a normal Ubuntu/Debian install you will find it at:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"sudo cat /var/lib/bee/keys/libp2p.key\n")),(0,r.kt)("p",null,"Once you have acquired your wallet file and its password, you may use any\nEthereum wallet software such as ",(0,r.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," to interact\nwith your wallet."),(0,r.kt)("h1",{id:"testnet"},"Testnet"),(0,r.kt)("p",null,"Your Bee node needs gETH and gBZZ to be able to properly interact with the test network. In order to receive these, you will need to sign into our Discord and request your gETH and gBZZ test tokens from the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/TVgKhsGEbc"},"#faucet")," channel, using your node's Ethereum address."),(0,r.kt)("p",null,"To work out what your node's Ethereum address is, please consult your relevant installation guide or check your logs!"),(0,r.kt)("p",null,"Once you have determined your Ethereum address, join our ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/wdghaQsGq5"},"Discord\nserver")," and navigate to the\n",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/TVgKhsGEbc"},"#faucet")," channel. After you have ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/tXGPdzZQaV"},"verified your\nusername")," (and say hi! \ud83d\udc4b), use our Faucet Bot\nto get your test tokens."),(0,r.kt)("p",null,"Here you must ",(0,r.kt)("strong",{parentName:"p"},"type")," (not copy paste) the following, replacing the address with your own:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"/faucet sprinkle 0xabeeecdef123452a40f6ea9f598596ca8556bd57\n")),(0,r.kt)("p",null,"If you have problems, please let us know by making a post in the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/TVgKhsGEbc"},"#faucet")," channel, we will do our best to provide tokens to everyone."),(0,r.kt)("p",null,"Note that you should use a Chromium-based client (e.g., Chrome, native Discord client) to type the faucet command, as support for other browsers is spotty. It's reported to not work on Firefox, for example."),(0,r.kt)("p",null,"Transactions may take a while to complete, please be patient. We're also keen for you to join us in the swarm, and indeed you soon will! \ud83d\udc1d ","\xa0"," \ud83d\udc1d ","\xa0"," \ud83d\udc1d"))}c.isMDXComponent=!0}}]);