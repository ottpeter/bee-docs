"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[2264],{71064:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>i,metadata:()=>a,toc:()=>l});var o=t(17624),s=t(4552);const i={title:"Fund Your Node",id:"fund-your-node"},r=void 0,a={id:"bee/installation/fund-your-node",title:"Fund Your Node",description:"In order to start your Bee node on the mainnet, its Ethereum wallet must be",source:"@site/docs/bee/installation/fund-your-node.md",sourceDirName:"bee/installation",slug:"/bee/installation/fund-your-node",permalink:"/docs/bee/installation/fund-your-node",draft:!1,unlisted:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/installation/fund-your-node.md",tags:[],version:"current",frontMatter:{title:"Fund Your Node",id:"fund-your-node"},sidebar:"bee",previous:{title:"Connectivity",permalink:"/docs/bee/installation/connectivity"},next:{title:"Introduction",permalink:"/docs/bee/working-with-bee/introduction"}},d={},l=[{value:"A node&#39;s wallet",id:"a-nodes-wallet",level:3},{value:"Chequebook",id:"chequebook",level:3},{value:"Joining the swarm (mainnet)",id:"joining-the-swarm-mainnet",level:2},{value:"Basic deployment",id:"basic-deployment",level:3},{value:"Full performance node",id:"full-performance-node",level:3}];function h(e){const n={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.M)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:["In order to start your Bee node on the ",(0,o.jsx)(n.em,{children:"mainnet"}),", its Ethereum wallet must be\nfunded with:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["1 ",(0,o.jsx)(n.a,{href:"/docs/learn/glossary#xbzz-token",children:"xBZZ"}),", for traffic\naccounting (this is optional, ",(0,o.jsx)(n.a,{href:"#basic-deployment",children:"see below"}),")"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:["some ",(0,o.jsx)(n.a,{href:"/docs/learn/glossary#xdai-token",children:"xDAI"}),", to pay the gas fees of\na couple of transactions on the ",(0,o.jsx)(n.a,{href:"/docs/learn/glossary#gnosis-chain",children:"Gnosis\nChain"}),"."]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Take note that xBZZ is the ",(0,o.jsx)(n.a,{href:"/docs/learn/glossary#bridged-tokens",children:"bridged"})," version of BZZ from Ethereum to the Gnosis Chain."]}),"\n",(0,o.jsx)(n.h3,{id:"a-nodes-wallet",children:"A node's wallet"}),"\n",(0,o.jsx)(n.p,{children:"When your Bee node is installed, an Ethereum wallet is also created. This wallet\nis used by Bee to interact with the blockchain (e.g. for sending and receiving\ncheques, or for making purchases of postage stamps, etc.)."}),"\n",(0,o.jsx)(n.h3,{id:"chequebook",children:"Chequebook"}),"\n",(0,o.jsxs)(n.p,{children:["When your node has downloaded enough content to exceed the free tier threshold,\nthen ",(0,o.jsx)(n.em,{children:"cheques"})," are sent to peers to provide payment in return for their\nservices."]}),"\n",(0,o.jsxs)(n.p,{children:["In order to send these cheques, a ",(0,o.jsx)(n.em,{children:"chequebook"})," must be deployed on the\nblockchain for your node, and for full speed operation it can be funded with\nBZZ. This deployment happens when a node initialises for the first time. Your\nBee node will warn you in its log if there aren't enough funds in its wallet for\ndeploying the chequebook."]}),"\n",(0,o.jsxs)(n.p,{children:["You can ",(0,o.jsx)(n.a,{href:"/docs/bee/working-with-bee/configuration",children:"configure"})," the amount of xBZZ to\nbe sent from the node's wallet. It is 1 xBZZ by default, but it can be set to\nzero."]}),"\n",(0,o.jsx)(n.h2,{id:"joining-the-swarm-mainnet",children:"Joining the swarm (mainnet)"}),"\n",(0,o.jsx)(n.h3,{id:"basic-deployment",children:"Basic deployment"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to get your Bee node up and running as easily as possible, then you\ncan set its\n",(0,o.jsx)(n.a,{href:"/docs/bee/working-with-bee/configuration#--swap-initial-deposit",children:(0,o.jsx)(n.code,{children:"--swap-initial-deposit"})}),"\nvalue to zero. This means that your node's chequebook will not get funded with\nxBZZ, meaning that other nodes will only serve it within the free tier bandwidth\nthreshold."]}),"\n",(0,o.jsxs)(n.p,{children:["Since gas fees on the ",(0,o.jsx)(n.a,{href:"https://www.gnosis.io/",children:"Gnosis Chain"})," are very low,\nyou won't need much xDAI either to get started. You may acquire a small amount\nfor free by using the official Gnosis Chain xDAI faucet ",(0,o.jsx)(n.a,{href:"https://gnosisfaucet.com/",children:"xDAI Faucet"}),". The required amount is a function of the current transaction fee on chain, but 0.01 xDAI should be\nmore than enough to start up your node."]}),"\n",(0,o.jsxs)(n.p,{children:["You can use the ",(0,o.jsx)(n.a,{href:"https://blockscout.com/xdai/mainnet/",children:"Blockscout"})," block\nexplorer to inspect what's going on with your wallet by searching for its\nEthereum address."]}),"\n",(0,o.jsx)(n.h3,{id:"full-performance-node",children:"Full performance node"}),"\n",(0,o.jsxs)(n.p,{children:["If you want to run a full node, or upload a lot of content, then you may need\nmore xDAI for gas. To acquire this, you may convert DAI on the main Ethereum\nnetwork to xDAI using the\n",(0,o.jsx)(n.a,{href:"https://docs.gnosischain.com/bridges/tokenbridge/xdai-bridge",children:"xDAI bridge"}),",\nor buy xDAI\n",(0,o.jsx)(n.a,{href:"https://buyxdai.com/",children:"directly using fiat"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["You will also need to fund your node with more xBZZ for full speed access, or to\npurchase postage stamps to upload content. To bridge BZZ from the Ethereum\nmainet to the ",(0,o.jsx)(n.a,{href:"https://www.gnosis.io/",children:"Gnosis Chain"}),", you may use\n",(0,o.jsx)(n.a,{href:"https://omni.gnosischain.com/",children:"OmniBridge"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"To find out what your node's Ethereum address is, please consult your relevant\ninstallation guide or check your logs!"}),"\n",(0,o.jsx)(n.h1,{id:"configure-your-wallet-app",children:"Configure Your Wallet App"}),"\n",(0,o.jsxs)(n.p,{children:["To interact with the BZZ ecosystem, you will need to make a couple of small\nconfiguration additions to your wallet software. In the case of e.g. MetaMask,\nyou'll need to\n",(0,o.jsx)(n.a,{href:"https://docs.gnosischain.com/tools/wallets/metamask/",children:"add the Gnosis Chain network"}),",\nand then\n",(0,o.jsx)(n.a,{href:"https://metamask.zendesk.com/hc/en-us/articles/360015489031-How-to-add-unlisted-tokens-custom-tokens-in-MetaMask",children:"add a custom token"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"The canonical addresses for the BZZ token on the various blockchains are as\nfollows:"}),"\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Blockchain"}),(0,o.jsx)(n.th,{children:"Contract address"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Ethereum, BZZ"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://ethplorer.io/address/0x19062190b1925b5b6689d7073fdfc8c2976ef8cb",children:(0,o.jsx)(n.code,{children:"0x19062190b1925b5b6689d7073fdfc8c2976ef8cb"})})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Gnosis Chain, xBZZ"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://blockscout.com/xdai/mainnet/tokens/0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da/",children:(0,o.jsx)(n.code,{children:"0xdBF3Ea6F5beE45c02255B2c26a16F300502F68da"})})})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Goerli (testnet), gBZZ"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"https://goerli.etherscan.io/address/0x2ac3c1d3e24b45c6c310534bc2dd84b5ed576335",children:(0,o.jsx)(n.code,{children:"0x2ac3c1d3e24b45c6c310534bc2dd84b5ed576335"})})})]})]})]}),"\n",(0,o.jsx)(n.h1,{id:"accessing-your-nodes-wallet",children:"Accessing Your Node's Wallet"}),"\n",(0,o.jsxs)(n.p,{children:["If you wish to interact with the node's wallet directly then you can\nimport it into a wallet app like ",(0,o.jsx)(n.a,{href:"https://metamask.io/",children:"MetaMask"}),". To\ndo that you will need the wallet file and its password. A Bee node's\nwallet key is stored within the ",(0,o.jsx)(n.code,{children:"keys/"})," folder in its datadir, in JSON\nformat, and its password should be in a file nearby it."]}),"\n",(0,o.jsx)(n.p,{children:"For example on Debian or Ubuntu:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-sh",children:"sudo cat /var/lib/bee/keys/swarm.key\nsudo cat /var/lib/bee/password\n"})}),"\n",(0,o.jsx)(n.h1,{id:"testnet",children:"Testnet"}),"\n",(0,o.jsxs)(n.p,{children:["A Bee node needs gETH and gBZZ in its wallet to be able to properly\ninteract with the test network. One way to acquire these funds is to\nsign into our Discord and request gETH and gBZZ test tokens from the\n",(0,o.jsx)(n.em,{children:"faucet bot"})," to your node's Ethereum address."]}),"\n",(0,o.jsx)(n.p,{children:"To find out what your node's Ethereum address is, please consult the\ninstallation guide or check the logs!"}),"\n",(0,o.jsx)(n.p,{children:"Once you have the address:"}),"\n",(0,o.jsxs)(n.ol,{children:["\n",(0,o.jsxs)(n.li,{children:["join our ",(0,o.jsx)(n.a,{href:"https://discord.gg/wdghaQsGq5",children:"Discord server"})]}),"\n",(0,o.jsxs)(n.li,{children:["navigate to the ",(0,o.jsx)(n.a,{href:"https://discord.gg/TVgKhsGEbc",children:"#faucet"})," channel"]}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"https://discord.gg/tXGPdzZQaV",children:"verify your username"})}),"\n",(0,o.jsxs)(n.li,{children:["request test tokens from the ",(0,o.jsx)(n.em,{children:"faucet bot"})]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["To request the tokens you must ",(0,o.jsx)(n.strong,{children:"type"})," (not copy paste) the following, replacing the address with your own:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:"/faucet sprinkle 0xabeeecdef123452a40f6ea9f598596ca8556bd57\n"})}),"\n",(0,o.jsxs)(n.p,{children:["If you have problems, please let us know by making a post in the ",(0,o.jsx)(n.a,{href:"https://discord.gg/TVgKhsGEbc",children:"#faucet"})," channel, we will do our best to provide tokens to everyone."]}),"\n",(0,o.jsx)(n.p,{children:"Note that you should use a Chromium-based client (e.g., Chrome, native Discord client) to type the faucet command, as support for other browsers is spotty. It's reported to not work on Firefox, for example."}),"\n",(0,o.jsx)(n.p,{children:"Transactions may take a while to complete, please be patient. We're also keen for you to join us in the swarm, and indeed you soon will! \ud83d\udc1d &nbsp \ud83d\udc1d &nbsp \ud83d\udc1d"})]})}function c(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>r});var o=t(11504);const s={},i=o.createContext(s);function r(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);