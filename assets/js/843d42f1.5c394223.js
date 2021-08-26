(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[5586],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var a=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=i,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||o;return n?a.createElement(h,r(r({ref:t},d),{},{components:n})):a.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},7197:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(2122),i=n(9756),o=(n(7294),n(3905)),r=["components"],l={title:"Configuration",id:"configuration"},s={unversionedId:"working-with-bee/configuration",id:"working-with-bee/configuration",isDocsHomePage:!1,title:"Configuration",description:"Bee is a very flexible program, and can be configured in a variety of",source:"@site/docs/working-with-bee/configuration.md",sourceDirName:"working-with-bee",slug:"/working-with-bee/configuration",permalink:"/docs/working-with-bee/configuration",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/working-with-bee/configuration.md",version:"current",frontMatter:{title:"Configuration",id:"configuration"},sidebar:"Balls",previous:{title:"Fund Your Node",permalink:"/docs/installation/fund-your-node"},next:{title:"Debug API",permalink:"/docs/working-with-bee/debug-api"}},p=[{value:"Important Configuration Changes",id:"important-configuration-changes",children:[{value:"Full Node",id:"full-node",children:[]},{value:"Swap Endpoint",id:"swap-endpoint",children:[]},{value:"NAT Address",id:"nat-address",children:[]},{value:"LevelDB Open File Descriptors Limit",id:"leveldb-open-file-descriptors-limit",children:[]},{value:"ENS Endpoint",id:"ens-endpoint",children:[]}]},{value:"Specifying Configuration",id:"specifying-configuration",children:[{value:"Configuration Priority",id:"configuration-priority",children:[]},{value:"Command Line Arguments",id:"command-line-arguments",children:[]},{value:"Environment variables",id:"environment-variables",children:[]},{value:"Configuration file",id:"configuration-file",children:[]}]},{value:"Configuring Bee Installed Using a Package Manager",id:"configuring-bee-installed-using-a-package-manager",children:[{value:"Linux",id:"linux",children:[]},{value:"MacOS",id:"macos",children:[]}]},{value:"Configuration Options",id:"configuration-options",children:[{value:"Global",id:"global",children:[]},{value:"Start",id:"start",children:[]}]}],d={toc:p};function u(e){var t=e.components,n=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Bee is a very flexible program, and can be configured in a variety of\nways depending on your use case. This expanded section will cover\nconfiguration in detail."),(0,o.kt)("h2",{id:"important-configuration-changes"},"Important Configuration Changes"),(0,o.kt)("div",{className:"admonition admonition-important alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before starting Bee for the first time, there is ",(0,o.kt)("em",{parentName:"p"},"some")," configuration\nto do! Make sure you consider updating the following recommended\nsettings!"))),(0,o.kt)("h3",{id:"full-node"},"Full Node"),(0,o.kt)("p",null,"By default, Bee runs as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/access-the-swarm/light-nodes"},"light\nnode"),". To fully participate in\nthe swarm, you must set the ",(0,o.kt)("inlineCode",{parentName:"p"},"--full-node")," option to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",{id:"swap-endpoint"},"Swap Endpoint"),(0,o.kt)("p",null,"In order to access the blockchain, your Bee must be connected to an XDAI blockchain node on the XDAI network. We recommend running your own ",(0,o.kt)("a",{parentName:"p",href:"https://www.xdaichain.com/for-validators/new-validator-process-flow/nethermind-node-setup"},"XDAI Node using Nethermind"),"."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The xDai chain will soon implement the London hardfork. Please stay informed and update your infrastructure accordingly as OpenEthereum clients are not guaranteed to be supported after the hardfork!"))),(0,o.kt)("h3",{id:"nat-address"},"NAT Address"),(0,o.kt)("p",null,"To enable others to connect to your node, you must broadcast your\npublic IP and ensure Bee is accessible on the correct p2p port\n(default ",(0,o.kt)("inlineCode",{parentName:"p"},"1634"),"). We recommend that you ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation/connectivity"},"manually configure your\nexternal IP and check connectivity"),"\nto ensure that your Bee is able to receive inbound connections from\nother peers."),(0,o.kt)("p",null,"First determine your public IP address."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl icanhazip.com\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"123.123.123.123\n")),(0,o.kt)("p",null,"Then configure your node, including your p2p port (default ",(0,o.kt)("inlineCode",{parentName:"p"},"1634"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'nat-addr: "123.123.123.123:1634"\n')),(0,o.kt)("h3",{id:"leveldb-open-file-descriptors-limit"},"LevelDB Open File Descriptors Limit"),(0,o.kt)("p",null,"Bee is designed to work on a lot of different hardware. To facilitate\nthe exploration of this, we have given node\noperators access to leveldb's ",(0,o.kt)("inlineCode",{parentName:"p"},"--db-open-files-limit"),". This influences\nthe speed with which Bee can read and write to its database, and\ntherefore its performance in forwarding and serving chunks. Some say\nsetting this to much more than the default 200 leads to a much\nenhanced ability to participate in the swarm and get those BZZs!\nShare your experience in the #node-operators channel of our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/wdghaQsGq5"},"Discord\nserver")," to help us make this process\nmore automated in the future!"),(0,o.kt)("h3",{id:"ens-endpoint"},"ENS Endpoint"),(0,o.kt)("p",null,"The ENS domain resolution system is used to host websites on Bee, and in order to use this your Bee must be connected to an Ethereum blockchain node on the main network. If you would like to ",(0,o.kt)("a",{parentName:"p",href:"/docs/access-the-swarm/browse-the-swarm"},"browse the swarm")," We recommend you sign up to ",(0,o.kt)("a",{parentName:"p",href:"https://infura.io"},"Infura's")," API service and set your ",(0,o.kt)("inlineCode",{parentName:"p"},"--resolver-options=https://mainnet.infura.io/v3/your-api-key"),"."),(0,o.kt)("h2",{id:"specifying-configuration"},"Specifying Configuration"),(0,o.kt)("h3",{id:"configuration-priority"},"Configuration Priority"),(0,o.kt)("p",null,"Configuration is processed in the following ascending order of preference:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Command Line Arguments"),(0,o.kt)("li",{parentName:"ol"},"Environment Variables"),(0,o.kt)("li",{parentName:"ol"},"Configuration File")),(0,o.kt)("h3",{id:"command-line-arguments"},"Command Line Arguments"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"bee start --help")," in your Terminal to get the list of available command line arguments."),(0,o.kt)("h3",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"Bee config may also be passed using environment variables."),(0,o.kt)("p",null,"Environment variables are set as variables in your operating system's\nsession or systemd configuration file. To set an environment variable,\ntype the following in your terminal session."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"export VARIABLE_NAME=variableValue\n")),(0,o.kt)("p",null,"Verify if it is correctly set by running ",(0,o.kt)("inlineCode",{parentName:"p"},"echo $VARIABLE_NAME"),"."),(0,o.kt)("p",null,"All available configuration options are available as ",(0,o.kt)("inlineCode",{parentName:"p"},"BEE")," prefixed,\ncapitalised, and underscored environment variables."),(0,o.kt)("p",null,"e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"--api-addr")," becomes ",(0,o.kt)("inlineCode",{parentName:"p"},"BEE_API_ADDR"),"."),(0,o.kt)("h3",{id:"configuration-file"},"Configuration file"),(0,o.kt)("p",null,"Bee can also be configured by providing a YAML configuration file using the ",(0,o.kt)("inlineCode",{parentName:"p"},"--config")," flag."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bee start --config /home/<user>/bee-config.yaml \n")),(0,o.kt)("h4",{id:"automatically-generate-a-config-file"},"Automatically generate a config file"),(0,o.kt)("p",null,"Configuration files can be easily generated by simply substituting the ",(0,o.kt)("inlineCode",{parentName:"p"},"start")," command with ",(0,o.kt)("inlineCode",{parentName:"p"},"printconfig")," when starting Bee using the command line."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"bee printconfig &> bee-config.yaml\n")),(0,o.kt)("p",null,"This produces the following file contents, showing the default\nconfiguration of Bee:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'api-addr: :1633\nblock-hash: ""\nblock-time: "15"\nbootnode:\n- /dnsaddr/testnet.ethswarm.org\nbootnode-mode: false\ncache-capacity: "1000000"\ncache-retrieval: true\nclef-signer-enable: false\nclef-signer-endpoint: ""\nclef-signer-ethereum-address: ""\nconfig: /home/user/.bee.yaml\ncors-allowed-origins: []\ndata-dir: /home/user/.bee\ndb-block-cache-capacity: "33554432"\ndb-disable-seeks-compaction: false\ndb-open-files-limit: "200"\ndb-write-buffer-size: "33554432"\ndebug-api-addr: :1635\ndebug-api-enable: false\nfull-node: false\ngateway-mode: false\nglobal-pinning-enable: false\nhelp: false\nmainnet: false\nnat-addr: ""\nnetwork-id: "10"\np2p-addr: :1634\np2p-quic-enable: false\np2p-ws-enable: false\npassword: ""\npassword-file: ""\npayment-early: "10000000"\npayment-threshold: "100000000"\npayment-tolerance: "100000000"\npostage-stamp-address: ""\nprice-oracle-address: ""\nresolver-options: []\nswap-deployment-gas-price: ""\nswap-enable: true\nswap-endpoint: ws://localhost:8546\nswap-factory-address: ""\nswap-initial-deposit: "10000000000000000"\nswap-legacy-factory-addresses: []\ntracing-enable: false\ntracing-endpoint: 127.0.0.1:6831\ntracing-service-name: bee\ntransaction: ""\nverbosity: info\nwarmup-time: 20m0s\nwelcome-message: ""\n')),(0,o.kt)("h2",{id:"configuring-bee-installed-using-a-package-manager"},"Configuring Bee Installed Using a Package Manager"),(0,o.kt)("p",null,"Bee node's installed using package managers ",(0,o.kt)("inlineCode",{parentName:"p"},"apt-get")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"yum")," are\nconfigured using a configuration file which is automatically generated\nduring the installation process."),(0,o.kt)("p",null,"To alter Bee's configuration, simply edit the configuration file as\ndesired, and restart your Bee node using ",(0,o.kt)("inlineCode",{parentName:"p"},"systemctl"),"."),(0,o.kt)("h3",{id:"linux"},"Linux"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vi /etc/bee/bee.yaml\nsudo systemctl restart bee\n")),(0,o.kt)("h3",{id:"macos"},"MacOS"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"vi /usr/local/etc/swarm-bee/bee.yaml\nbrew services restart swarm-bee\n")),(0,o.kt)("h2",{id:"configuration-options"},"Configuration Options"),(0,o.kt)("p",null,"Bee provides the following options to customise your node."),(0,o.kt)("h3",{id:"global"},"Global"),(0,o.kt)("h4",{id:"--config"},"--config"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<user>/.bee.yaml")),(0,o.kt)("p",null,"The location of a YAML configuration file containing configuration options. See ",(0,o.kt)("a",{parentName:"p",href:"#configuration-file"},"configuration"),"."),(0,o.kt)("h3",{id:"start"},"Start"),(0,o.kt)("h4",{id:"--api-addr"},"--api-addr"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," :1633"),(0,o.kt)("p",null,"The IP and port the API will serve HTTP requests from. Omitting the IP\npart of the address will cause the server to listen to all\ninterfaces. Argument values are of the form '132.132.132.132:1633'."),(0,o.kt)("h4",{id:"--block-time"},"--block-time"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," 15"),(0,o.kt)("p",null,"The expected block time of the attached SWAP endpoint."),(0,o.kt)("h4",{id:"--bootnode"},"--bootnode"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/dnsaddr/bootnode.ethswarm.org")),(0,o.kt)("p",null,"This is a ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/multiformats/multiaddr"},"multiaddr"),"\nspecifying the Bee bootnodes used for bootstrapping the network. It\ncan be multiple values."),(0,o.kt)("p",null,"By default a node connects to the Swarm mainnet.  When using a private or test network, network specific bootnodes must be set. "),(0,o.kt)("p",null,"Any Bee node in a network can act as a bootnode."),(0,o.kt)("h4",{id:"--cache-capacity"},"--cache-capacity"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000")),(0,o.kt)("p",null,"The amount of disk space, in chunks, that is used for forwarding and uploading chunks."),(0,o.kt)("h4",{id:"--cache-retrieval"},"--cache-retrieval"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("p",null,"Enable the caching of forwarded content."),(0,o.kt)("h4",{id:"--clef-signer-enable"},"--clef-signer-enable"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,"Set this to true to enable signing using Ethereum's Clef external\nsigner. Clef is a new feature which requires a corresponding rules\nfiles or running in advanced mode to allow for auto-signing of\nhandshakes and cheques."),(0,o.kt)("h4",{id:"--clef-signer-endpoint"},"--clef-signer-endpoint"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("strong",{parentName:"p"},"default path for clef for each host operating system")),(0,o.kt)("p",null,"You may also specify a custom IPC file path for your Clef signer."),(0,o.kt)("h4",{id:"--clef-signer-ethereum-address"},"--clef-signer-ethereum-address"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("strong",{parentName:"p"},"selects the clef address at index 0")),(0,o.kt)("p",null,"Use this command to specify which Bee Clef address is used if you have imported multiple keys into Bee Clef."),(0,o.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"If you have multiple addresses imported into your instance of Bee Clef, you must specify your address for each node, including the first one, as addresses may been re-ordered during import."))),(0,o.kt)("h4",{id:"--cors-allowed-origins"},"--cors-allowed-origins"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"[]")),(0,o.kt)("p",null,"HTTP/WS origin domains or wildcards defining these, which the API will\nallow responses to, e.g."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'bee start --cors-allowed-origins="*"\nbee start --cors-allowed-origins="https://website.ethswarm.org"\n')),(0,o.kt)("h4",{id:"--data-dir"},"--data-dir"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"/home/<user>/.bee")),(0,o.kt)("p",null,"The location on your disk where Bee stores its data. Data in this\ndirectory will be required to restore a node state using the same key."),(0,o.kt)("p",null,"This consists of the following three types of data."),(0,o.kt)("h5",{id:"1-chunk-data-localstore"},"1. Chunk Data (localstore)"),(0,o.kt)("p",null,"This consists of chunks and files that you have pinned locally, cached chunks you have requested, or chunks within your radius of responsibility which you are responsible for serving to your peers."),(0,o.kt)("h5",{id:"2-state-data-statestore"},"2. State Data (statestore)"),(0,o.kt)("p",null,"This is information about the local state of your Bee node and should be backed up."),(0,o.kt)("h5",{id:"3-keystore-data-keys"},"3. Keystore Data (keys)"),(0,o.kt)("p",null,"These files contain encrypted versions of your private key and should be backed up and kept private."),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Keep the key files in your keystore data directory safe! "),(0,o.kt)("p",{parentName:"div"},"They are the cryptographic proof of your network identity and cannot be recovered."))),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"The next four options expose low-level configurations for\n",(0,o.kt)("a",{parentName:"em",href:"https://pkg.go.dev/github.com/syndtr/goleveldb@v1.0.0/leveldb/opt#Options"},"LevelDB"),"'s\n\xa0",(0,o.kt)("a",{parentName:"em",href:"https://pkg.go.dev/github.com/syndtr/goleveldb@v1.0.0/leveldb#OpenFile"},"Openfile"),"\nmethod. Please let us know how you get on with tweaking these settings\non your hardware in the\n",(0,o.kt)("a",{parentName:"em",href:"https://discord.gg/X3ph5yGRFU"},"#node-operators")," channel on our\n",(0,o.kt)("a",{parentName:"em",href:"https://discord.gg/wdghaQsGq5"},"Discord server"))),(0,o.kt)("h4",{id:"--db-block-cache-capacity"},"--db-block-cache-capacity"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"33554432")),(0,o.kt)("p",null,"Corresponds to LevelDB ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockCacheCapacity")," (see above)"),(0,o.kt)("h4",{id:"--db-disable-seeks-compaction"},"--db-disable-seeks-compaction"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,"Corresponds to LevelDB ",(0,o.kt)("inlineCode",{parentName:"p"},"DisableSeeksCompaction")," (see above)"),(0,o.kt)("h4",{id:"--db-open-files-limit"},"--db-open-files-limit"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"200")),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"To accomodate less powerful hardware and operating systems, the ",(0,o.kt)("inlineCode",{parentName:"p"},"db-open-files-limit")," is set deliberately low. We recommend that you try to increase it to nearer to ",(0,o.kt)("inlineCode",{parentName:"p"},"10000")," or more if this is possible when using your hardware. ",(0,o.kt)("em",{parentName:"p"},"Please let us know how you get on with tweaking these settings on your hardware in the ",(0,o.kt)("a",{parentName:"em",href:"https://discord.gg/X3ph5yGRFU"},"#node-operators")," channel on our ",(0,o.kt)("a",{parentName:"em",href:"https://discord.gg/wdghaQsGq5"},"Discord server"))))),(0,o.kt)("p",null,"Corresponds to LevelDB ",(0,o.kt)("inlineCode",{parentName:"p"},"OpenFilesCacheCapacity")," (see above)"),(0,o.kt)("h4",{id:"--db-write-buffer-size"},"--db-write-buffer-size"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"33554432")),(0,o.kt)("p",null,"Corresponds to LevelDB ",(0,o.kt)("inlineCode",{parentName:"p"},"WriteBuffer")," (see above)"),(0,o.kt)("h4",{id:"--debug-api-addr"},"--debug-api-addr"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},":1635")),(0,o.kt)("p",null,"The IP and port the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/api-reference"},"Debug API"),"\nwill serve HTTP requests from."),(0,o.kt)("p",null,"Omitting the IP part of the address will cause the server to listen to\nall requests."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"--debug-api-enable")," must be set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h4",{id:"--debug-api-enable"},"--debug-api-enable"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,"Set this to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to enable access to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/api-reference"},"Debug API")),(0,o.kt)("h4",{id:"--full-node"},"--full-node"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," false"),(0,o.kt)("p",null,"Enable this by setting it to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to fully participate in serving and forwarding chunks to the network."),(0,o.kt)("h4",{id:"--gateway-mode"},"--gateway-mode"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,"Set this to ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," to disable a set of sensitive features in the API\nto ensure that it is safe to expose your ",(0,o.kt)("inlineCode",{parentName:"p"},"api-addr")," to the public\nInternet."),(0,o.kt)("h4",{id:"--global-pinning-enable"},"--global-pinning-enable"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,"Enables the Global Pinning functionality when set to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h4",{id:"--mainnet"},"--mainnet"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("h4",{id:"--nat-addr"},"--nat-addr"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},'""')),(0,o.kt)("p",null,"Sets the expected public IP. Normally this is generated automatically, but in certain circumstances it may be desirable to set it manually."),(0,o.kt)("h4",{id:"--network-id"},"--network-id"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"10")),(0,o.kt)("p",null,"The network ID for which to accept new connections. Set to 1 for mainnet, 10 for testnet."),(0,o.kt)("h4",{id:"--p2p-addr"},"--p2p-addr"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},":1634")),(0,o.kt)("p",null,"The IP and port to listen for p2p protocol messages."),(0,o.kt)("h4",{id:"--p2p-quic-enable"},"--p2p-quic-enable"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("h4",{id:"--p2p-ws-enable"},"--p2p-ws-enable"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,"Enables web-sockets transport for p2p communications."),(0,o.kt)("h4",{id:"--password"},"--password"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},'""')),(0,o.kt)("p",null,"Password used to decrypt Swarm identity keys. "),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Passing passwords as command line arguments is insecure. Use a password file or environment variable in production environments."))),(0,o.kt)("h4",{id:"--password-file"},"--password-file"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},'""')),(0,o.kt)("p",null,"The path to a file that contains password for decrypting keys. The empty string assumes no file is presented."),(0,o.kt)("h4",{id:"--payment-early"},"--payment-early"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000000000")),(0,o.kt)("p",null,"Amount in BZZ below the peers payment threshold which causes Bee to\ninitiate settlement."),(0,o.kt)("h4",{id:"--payment-threshold"},"--payment-threshold"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"10000000000000")),(0,o.kt)("p",null,"The threshold in BZZ where you expect to get paid from your peers."),(0,o.kt)("h4",{id:"--payment-tolerance"},"--payment-tolerance"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"10000000000000")),(0,o.kt)("p",null,"The excess debt above payment threshold in gBZZ where you disconnect from your peer."),(0,o.kt)("h4",{id:"--postage-stamp-address"},"--postage-stamp-address"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("em",{parentName:"p"},"automatically configured depending on network")),(0,o.kt)("p",null,"The address of the postage stamp contract on the Ethereum blockchain, used for buying batches of stamps."),(0,o.kt)("h4",{id:"--resolver-options"},"--resolver-options"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," eth:0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e@localhost:8545"),(0,o.kt)("p",null,"ENS API endpoint for a TLD, with contract address. Multiple values can be provided. "),(0,o.kt)("p",null,"Settings should be provided in the format ",(0,o.kt)("inlineCode",{parentName:"p"},"[tld:][contract-addr@]url")),(0,o.kt)("p",null,"A default top level domain and resolver contract address are provided, but an ENS/Geth endpoint must be provided to enable this functionality."),(0,o.kt)("h4",{id:"--swap-enable"},"--swap-enable"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"true")),(0,o.kt)("h4",{id:"--swap-endpoint"},"--swap-endpoint"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"ws://localhost:8546")),(0,o.kt)("p",null,"SWAP ethereum blockchain endpoint. Must be equipped with websockets."),(0,o.kt)("h4",{id:"--swap-factory-address"},"--swap-factory-address"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"anointed contract for the current blockchain id")),(0,o.kt)("h4",{id:"--swap-initial-deposit"},"--swap-initial-deposit"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"10000000000000000")),(0,o.kt)("h4",{id:"--tracing-enable"},"--tracing-enable"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"false")),(0,o.kt)("p",null,"Send tracing spans to the tracing service. More information how to\nconfigure and visualize tracing data is available\n",(0,o.kt)("a",{parentName:"p",href:"/docs/bee-developers/useful-dev-info#tracing"},"here"),"."),(0,o.kt)("h4",{id:"--tracing-endpoint"},"--tracing-endpoint"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1:6831")),(0,o.kt)("p",null,"The URL where the tracing service listens for Thrift protocol UDP messages."),(0,o.kt)("h4",{id:"--tracing-service-name"},"--tracing-service-name"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"bee")),(0,o.kt)("p",null,"Bee service identifier in tracing spans."),(0,o.kt)("h4",{id:"--transaction"},"--transaction"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},'""')),(0,o.kt)("p",null,"As a spam prevention measure, for nodes which deployed their\nchequebook with v0.5.0 or before, specify ",(0,o.kt)("inlineCode",{parentName:"p"},"transaction")," - ",(0,o.kt)("a",{parentName:"p",href:"/docs/FAQ#how-can-i-find-a-transaction-hash-for-the---transaction-configuration-parameter"},"the\ntransaction hash of any Ethereum transaction on the XDAI\nnetwork"),"\nsent from the Bee node's Ethereum address."),(0,o.kt)("h4",{id:"--verbosity"},"--verbosity"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},"info")),(0,o.kt)("p",null,"0=silent, 1=error, 2=warn, 3=info, 4=debug, 5=trace"),(0,o.kt)("h4",{id:"--welcome-message"},"--welcome-message"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"default")," ",(0,o.kt)("inlineCode",{parentName:"p"},'""')),(0,o.kt)("p",null,"Custom welcome message to be displayed to peers on succesful connection."))}u.isMDXComponent=!0}}]);