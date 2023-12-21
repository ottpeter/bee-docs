"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[9570],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(a),m=r,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[d]="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=a[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},85162:function(e,t,a){a.d(t,{Z:function(){return l}});var n=a(67294),r=a(86010),o={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,a=e.hidden,l=e.className;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(o.tabItem,l),hidden:a},t)}},74866:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(87462),r=a(67294),o=a(86010),l=a(12466),i=a(16550),s=a(91980),u=a(67392),p=a(50012);function d(e){return function(e){var t,a;return null!=(t=null==(a=r.Children.map(e,(function(e){if(!e||(0,r.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function c(e){var t=e.values,a=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:d(a);return function(e){var t=(0,u.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function h(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId,o=(0,i.k6)(),l=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:n});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var t=new URLSearchParams(o.location.search);t.set(l,e),o.replace(Object.assign({},o.location,{search:t.toString()}))}}),[l,o])]}function f(e){var t,a,n,o,l=e.defaultValue,i=e.queryString,s=void 0!==i&&i,u=e.groupId,d=c(e),f=(0,r.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!m({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:d})})),b=f[0],w=f[1],k=h({queryString:s,groupId:u}),y=k[0],g=k[1],v=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),a=(0,p.Nk)(t),n=a[0],o=a[1],[n,(0,r.useCallback)((function(e){t&&o.set(e)}),[t,o])]),N=v[0],I=v[1],S=function(){var e=null!=y?y:N;return m({value:e,tabValues:d})?e:null}();return(0,r.useLayoutEffect)((function(){S&&w(S)}),[S]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:d}))throw new Error("Can't select invalid tab value="+e);w(e),g(e),I(e)}),[g,I,d]),tabValues:d}}var b=a(72389),w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){var t=e.className,a=e.block,i=e.selectedValue,s=e.selectValue,u=e.tabValues,p=[],d=(0,l.o5)().blockElementScrollPositionUntilNextRender,c=function(e){var t=e.currentTarget,a=p.indexOf(t),n=u[a].value;n!==i&&(d(t),s(n))},m=function(e){var t,a=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":var n,r=p.indexOf(e.currentTarget)+1;a=null!=(n=p[r])?n:p[0];break;case"ArrowLeft":var o,l=p.indexOf(e.currentTarget)-1;a=null!=(o=p[l])?o:p[p.length-1]}null==(t=a)||t.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((function(e){var t=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:function(e){return p.push(e)},onKeyDown:m,onClick:c},l,{className:(0,o.Z)("tabs__item",w.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),null!=a?a:t)})))}function y(e){var t=e.lazy,a=e.children,n=e.selectedValue,o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var l=o.find((function(e){return e.props.value===n}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},o.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n})})))}function g(e){var t=f(e);return r.createElement("div",{className:(0,o.Z)("tabs-container",w.tabList)},r.createElement(k,(0,n.Z)({},e,t)),r.createElement(y,(0,n.Z)({},e,t)))}function v(e){var t=(0,b.Z)();return r.createElement(g,(0,n.Z)({key:String(t)},e))}},57655:function(e,t,a){a.r(t),a.d(t,{assets:function(){return c},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return u},metadata:function(){return d},toc:function(){return m}});var n=a(87462),r=a(63366),o=(a(67294),a(3905)),l=a(74866),i=a(85162),s=["components"],u={title:"Upload and Download",id:"upload-and-download"},p=void 0,d={unversionedId:"develop/access-the-swarm/upload-and-download",id:"develop/access-the-swarm/upload-and-download",title:"Upload and Download",description:"When you upload your files to the Swarm, they are split into 4kb",source:"@site/docs/develop/access-the-swarm/upload-and-download.md",sourceDirName:"develop/access-the-swarm",slug:"/develop/access-the-swarm/upload-and-download",permalink:"/docs/develop/access-the-swarm/upload-and-download",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/develop/access-the-swarm/upload-and-download.md",tags:[],version:"current",frontMatter:{title:"Upload and Download",id:"upload-and-download"},sidebar:"develop",previous:{title:"Buy a Batch of Stamps",permalink:"/docs/develop/access-the-swarm/buy-a-stamp-batch"},next:{title:"Erasure Coding",permalink:"/docs/develop/access-the-swarm/erasure-coding"}},c={},m=[{value:"Uploads and Download Endpoints Overview",id:"uploads-and-download-endpoints-overview",level:2},{value:"Upload a File",id:"upload-a-file",level:2},{value:"Purchasing Your Batch of Stamps",id:"purchasing-your-batch-of-stamps",level:2},{value:"Using Stamps to Upload a File",id:"using-stamps-to-upload-a-file",level:2},{value:"API",id:"api",level:4},{value:"Swarm CLI",id:"swarm-cli",level:4},{value:"Download a File",id:"download-a-file",level:2},{value:"API",id:"api-1",level:4},{value:"Swarm CLI",id:"swarm-cli-1",level:4},{value:"Upload a Directory",id:"upload-a-directory",level:2},{value:"Upload the Directory Containing Your Website",id:"upload-the-directory-containing-your-website",level:3},{value:"Public Gateways",id:"public-gateways",level:2}],h={toc:m},f="wrapper";function b(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)(f,(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When you upload your files to the Swarm, they are split into 4kb\n",(0,o.kt)("em",{parentName:"p"},"chunks")," and then distributed to nodes in the network that are\nresponsible for storing and serving these parts of your content.\nTo learn more about how Swarm's decentralized storage solution works,\ncheck out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/technology/what-is-swarm"},'"Learn" section'),"."),(0,o.kt)("p",null,"In order for you to be able to upload any data to the network,\nyou must first purchase ",(0,o.kt)("a",{parentName:"p",href:"/docs/learn/technology/contracts/postage-stamp"},"postage stamps"),"\nand then use those stamps to upload your data. Keep on reading\nbelow to learn how."),(0,o.kt)("h2",{id:"uploads-and-download-endpoints-overview"},"Uploads and Download Endpoints Overview"),(0,o.kt)("p",null,"There are three endpoints which can be used for uploading and downloading data from Swarm, and each endpoint has different usage. "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/api/#tag/Bytes"},(0,o.kt)("inlineCode",{parentName:"a"},"/bytes"))," - Used for uploading raw data, lacks convenience features present in the ",(0,o.kt)("inlineCode",{parentName:"li"},"/bzz")," endpoint but allows for greater customization for advanced use cases."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/api/#tag/BZZ"},(0,o.kt)("inlineCode",{parentName:"a"},"/bzz"))," - Used for general download and uploads of files or collections of files."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"/api/#tag/Chunk"},(0,o.kt)("inlineCode",{parentName:"a"},"/chunks"))," - Used for downloading and uploading individual chunks, and also for uploading streams of chunks.")),(0,o.kt)("p",null,"Generally speaking, the ",(0,o.kt)("inlineCode",{parentName:"p"},"/bzz")," endpoint is appropriate for general common use cases such as uploading websites, sharing files, etc., while the ",(0,o.kt)("inlineCode",{parentName:"p"},"/chunks")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"bytes")," endpoints allow for more complex uses cases. In this guide, we focus on the usage of the ",(0,o.kt)("inlineCode",{parentName:"p"},"/bzz")," endpoint. "),(0,o.kt)("h2",{id:"upload-a-file"},"Upload a File"),(0,o.kt)("p",null,"To upload data to the swarm, you must perform the following steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fund your node's wallet with xBZZ."),(0,o.kt)("li",{parentName:"ol"},"Purchase a ",(0,o.kt)("em",{parentName:"li"},"batch")," of stamps with your xBZZ."),(0,o.kt)("li",{parentName:"ol"},"Wait for the batch to propagate across the network."),(0,o.kt)("li",{parentName:"ol"},"Upload your content, specifying the ",(0,o.kt)("em",{parentName:"li"},"batch id")," so that Bee can attach stamps to your chunks."),(0,o.kt)("li",{parentName:"ol"},"Download your content using your content's hash.")),(0,o.kt)("h2",{id:"purchasing-your-batch-of-stamps"},"Purchasing Your Batch of Stamps"),(0,o.kt)("p",null,"In order to upload your data to swarm, you must agree to burn (spend)\nsome of your xBZZ to signify to storer and fowarder nodes that this\ncontent is valued. Before you proceed to the next step, you must buy\nstamps! See this guide on how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/buy-a-stamp-batch"},"purchase an appropriate batch of stamps"),"."),(0,o.kt)("h2",{id:"using-stamps-to-upload-a-file"},"Using Stamps to Upload a File"),(0,o.kt)("p",null,"Once your Bee node is running, a HTTP API is enabled for you to interact with. The command line utility ",(0,o.kt)("a",{parentName:"p",href:"https://ec.haxx.se/http/http-multipart"},"curl")," is a great way to interact with a Bee node's API. Swarm CLI alternative commands are also included as a more user-friendly way of interacting with your Bee node's API."),(0,o.kt)(l.Z,{defaultValue:"api",values:[{label:"API",value:"api"},{label:"Swarm CLI",value:"swarm-cli"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"api",mdxType:"TabItem"},(0,o.kt)("h4",{id:"api"},"API"),(0,o.kt)("p",null,"First, let's check to see if the API is running as expected..."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl http://localhost:1633\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Ethereum Swarm Bee\n")),(0,o.kt)("p",null,"Once running, a file can be uploaded by making an HTTP POST request to the ",(0,o.kt)("inlineCode",{parentName:"p"},"bzz")," endpoint of the Bee API."),(0,o.kt)("p",null,"Here, you must specify your ",(0,o.kt)("em",{parentName:"p"},"Batch ID")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Swarm-Postage-Batch-Id")," header, the file name in the ",(0,o.kt)("inlineCode",{parentName:"p"},"name")," query parameter, and also pass the appropriate mime type in the ",(0,o.kt)("inlineCode",{parentName:"p"},"Content-Type")," header."),(0,o.kt)("p",null,"You may also wish to employ the erasure coding feature to add greater protection for your data, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/erasure-coding"},"erasure coding page")," for more details on its usage."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},' curl -X POST http://localhost:1633/bzz?name=test.txt -H "swarm-postage-batch-id: 6544bebff0fcb7633e510e43efe2944aebbc2c5a556f8d27e00fba8a849a29a1" -H "Content-Type: text/plain"\n')),(0,o.kt)("admonition",{type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Data uploaded to Swarm is always public. In Swarm, sensitive files\nmust be ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/store-with-encryption"},"encrypted"),"\nbefore uploading to ensure their contents always remains private.")),(0,o.kt)("p",null,"When succesful, a JSON formatted response will be returned, containing\na ",(0,o.kt)("strong",{parentName:"p"},"swarm reference")," or ",(0,o.kt)("strong",{parentName:"p"},"hash")," which is the ",(0,o.kt)("em",{parentName:"p"},"address")," of the\nuploaded file, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reference": "22cbb9cedca08ca8d50b0319a32016174ceb8fbaa452ca5f0a77b804109baa00"\n}\n')),(0,o.kt)("p",null,"Keep this ",(0,o.kt)("em",{parentName:"p"},"address")," safe, as we'll use it to retrieve our content later on.")),(0,o.kt)(i.Z,{value:"swarm-cli",mdxType:"TabItem"},(0,o.kt)("h4",{id:"swarm-cli"},"Swarm CLI"),(0,o.kt)("p",null,"We have a ",(0,o.kt)("inlineCode",{parentName:"p"},"test.txt")," file we wish to upload, let's check its contents."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat test.txt\nThis is a test file\nIt will be used to test uploading and downloading from Swarm\n")),(0,o.kt)("p",null,"Check that our node is operating normally.  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swarm-cli status\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Bee\nAPI: http://localhost:1633 [OK]\nDebug API: http://localhost:1635 [OK]\nVersion: 1.18.2-50fcec7b\nMode: full\n\nTopology\nConnected Peers: 175\nPopulation: 13614\nDepth: 9\n\nWallet\nxBZZ: 85.5638752768932272\nxDAI: 4.753393401487287091\n\nChequebook\nAvailable xBZZ: 0.0000000000018\nTotal xBZZ: 0.0000000000018\n\nStaking\nStaked BZZ: 10\n\nRedistribution\nReward: 831386836533248000\nHas sufficient funds: true\nFully synced: true\nFrozen: false\nLast selected round: 202266\nLast played round: 202266\nLast won round: 186776\nMinimum gas funds: 101250000000000000\n")),(0,o.kt)("p",null,"List our stamps."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swarm-cli stamp list\n")),(0,o.kt)("p",null,"Copy the ID of the stamp we wish to use."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Stamp ID: daa8c5b36e1cf481b10118a8b02430a6f22618deaa6ba5aa4ea660de66aa62db\nUsage: 7%\nRemaining Capacity: 7.50 GB\nTTL: 91 days 1 hour 45 minutes 28 seconds\nExpires: 2024-02-01\n")),(0,o.kt)("p",null,"Use the stamp ID to upload our file."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swarm-cli upload test.txt --stamp daa8c5b36e1cf481b10118a8b02430a6f22618deaa6ba5aa4ea660de66aa62db\n")),(0,o.kt)("p",null,"If successful, we will receive the hash of the uploaded file and the URL where it is reachable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"Swarm hash: 1ffd2b67c8f34596a0b8375be29423c2d47e7995fcac8dd83fbd34e3d839b5a2\nURL: http://localhost:1633/bzz/1ffd2b67c8f34596a0b8375be29423c2d47e7995fcac8dd83fbd34e3d839b5a2/\nStamp ID: daa8c5b3\nUsage: 7%\nRemaining Capacity: 7.50 GB \n")),(0,o.kt)("p",null,"Let's check that the file is downloadable."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swarm-cli download 1ffd2b67c8f34596a0b8375be29423c2d47e7995fcac8dd83fbd34e3d839b5a2\ntest.txt OK\n")),(0,o.kt)("p",null,"And let's confirm that the contents of the file are correct."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat test.txt\nThis is a test file\nIt will be used to test uploading and downloading from Swarm\n")))),(0,o.kt)("p",null,"In Swarm, every piece of data has a unique ",(0,o.kt)("em",{parentName:"p"},"address")," which is a unique and reproducible cryptographic hash digest. If you upload the same file twice, you will always receive the same hash. This makes working with data in Swarm super secure!"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If you are uploading a large file it is useful to track the status of your upload as it is processed into the network. To improve the user experience, learn how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/syncing"},"follow the status of your upload"),"."),(0,o.kt)("p",{parentName:"admonition"},"Once your file has been ",(0,o.kt)("strong",{parentName:"p"},"completely synced with the network"),", you will be able to turn off your computer and other nodes will take over to serve the data for you!")),(0,o.kt)("h2",{id:"download-a-file"},"Download a File"),(0,o.kt)("p",null,"Once your file is uploaded to Swarm it can be easily downloaded. "),(0,o.kt)(l.Z,{defaultValue:"api",values:[{label:"API",value:"api"},{label:"Swarm CLI",value:"swarm-cli"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"api",mdxType:"TabItem"},(0,o.kt)("h4",{id:"api-1"},"API"),(0,o.kt)("p",null,"Uploaded files can be retrieved with a simple HTTP GET request."),(0,o.kt)("p",null,"Substitute the ",(0,o.kt)("em",{parentName:"p"},"hash")," in the last part of the URL with the reference\nto your own data."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"curl -OJL http://localhost:1633/bzz/c02e7d943fbc0e753540f377853b7181227a83e773870847765143681511c97d/\n")),(0,o.kt)("p",null,"You may even simply navigate to the URL in your browser:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://localhost:1633/bzz/22cbb9cedca08ca8d50b0319a32016174ceb8fbaa452ca5f0a77b804109baa00"},"http://localhost:1633/bzz/22cb...aa00"))),(0,o.kt)(i.Z,{value:"swarm-cli",mdxType:"TabItem"},(0,o.kt)("h4",{id:"swarm-cli-1"},"Swarm CLI"),(0,o.kt)("p",null,"Simply use the ",(0,o.kt)("inlineCode",{parentName:"p"},"swarm-cli download")," command followed by the hash of the file you wish to download. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"swarm-cli download 1ffd2b67c8f34596a0b8375be29423c2d47e7995fcac8dd83fbd34e3d839b5a2\ntest.txt OK\n")),(0,o.kt)("p",null,"And let's print out the file contents to confirm it was downloaded properly."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cat test.txt\nThis is a test file\nIt will be used to test uploading and downloading from Swarm\n")))),(0,o.kt)("h2",{id:"upload-a-directory"},"Upload a Directory"),(0,o.kt)("p",null,"It is possible to use Bee to upload directories of files all at once."),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Comfortable with nodeJS and JavaScript? Check out ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/swarm-cli"},"swarm-cli"),", a command line tool you can use to easily interact with your Bee node!")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"If an uploaded directory contains an ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file, when you navigate to the directory in a web browser it will automatically be served to users from our ",(0,o.kt)("a",{parentName:"p",href:"https://gateway.ethswarm.org"},"Swarm gateways")," as if it were a website hosted by a normal web server. Use this feature to host your unstoppable website on Swarm!")),(0,o.kt)("p",null,"This feature makes use of the ",(0,o.kt)("a",{parentName:"p",href:"https://www.gnu.org/software/tar/"},"tar")," command line utility to package the directory into a single file that can then be uploaded to the Bee API for processing and distributed into the swarm for later retrieval."),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"GZIP compression is not supported in the current version of Bee, so make sure not to use the ",(0,o.kt)("inlineCode",{parentName:"p"},"-z")," flag when using the ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," command!")),(0,o.kt)("h3",{id:"upload-the-directory-containing-your-website"},"Upload the Directory Containing Your Website"),(0,o.kt)("p",null,"First, use the ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," command line utility to create an archive containing all the files of your directory. If uploading a website, we must take care to ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file is at the root of the directory tree."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tree my_website\n>\nmy_website\n\u251c\u2500\u2500 assets\n\u2502\xa0\xa0 \u2514\u2500\u2500 style.css\n\u251c\u2500\u2500 index.html\n\u2514\u2500\u2500 error.html\n")),(0,o.kt)("p",null,"Use the following command to ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," package maintains the correct directory structure:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd my_website\ntar -cf ../my_website.tar .\ncd ..\n")),(0,o.kt)("p",null,"Next, simply POST the ",(0,o.kt)("inlineCode",{parentName:"p"},"tar")," file as binary data to Bee's ",(0,o.kt)("inlineCode",{parentName:"p"},"dir")," endpoint, taking care to include the header ",(0,o.kt)("inlineCode",{parentName:"p"},"Content Type: application/x-tar"),"."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"In order to upload your data to swarm, you must agree to burn some of your xBZZ to signify to storer and fowarder nodes that the content is important. Before you progress to the next step, you must buy stamps! See this guide on how to ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/keep-your-data-alive"},"purchase an appropriate batch of stamps"),".")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'curl \\\n    -X POST \\\n    -H "Content-Type: application/x-tar" \\\n    -H "Swarm-Index-Document: index.html" \\\n    -H "Swarm-Error-Document: error.html" \\\n    -H "Swarm-Collection: true" \\\n    -H "Swarm-Postage-Batch-Id: 78a26be9b42317fe6f0cbea3e47cbd0cf34f533db4e9c91cf92be40eb2968264" \\\n    --data-binary @my_website.tar http://localhost:1633/bzz\n')),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For instances where a single page app has a JavaScript router that handles url queries itself, simply pass ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," as the error document. Bee will pass over control to the JavaScript served by the ",(0,o.kt)("inlineCode",{parentName:"p"},"index.html")," file in the circumstance that a path does not yield a file from the manifest.")),(0,o.kt)("p",null,"When the upload is successful, Bee will return a JSON document containing the Swarm Reference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "reference": "b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b"\n}\n')),(0,o.kt)("p",null,"Now, simply navigate your browser to view the reference using the ",(0,o.kt)("inlineCode",{parentName:"p"},"bzz")," endpoint and your website will be served!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://localhost:1633/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/"},"http://localhost:1633/bzz/b25c89a...214917b/")),(0,o.kt)("p",null,"Other files are served at their relative paths, e.g:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://localhost:1633/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/assets/style.css"},"http://localhost:1633/bzz/b25c89a...214917b/assets/style.css")),(0,o.kt)("p",null,"Once your data has been ",(0,o.kt)("a",{parentName:"p",href:"/docs/develop/access-the-swarm/syncing"},"fully processed into the network"),", you will then be able to retrieve it from any Bee node."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://gateway.ethswarm.org/bzz/b25c89a401d9f26811680476619a1eb4a4e189e614bc6161cbfd8b343214917b/"},"https://gateway.ethswarm.org/bzz/b25c89a...214917b/index.html")),(0,o.kt)("p",null,"If you are not able to download your file from a different Bee node, you may be experiencing connection issues, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/bee/installation/connectivity"},"troubleshooting connectivity")," for assistance."),(0,o.kt)("h2",{id:"public-gateways"},"Public Gateways"),(0,o.kt)("p",null,"To share files with someone who isn't running a Bee node yet, simply change the host in the link to be one of our public gateways. Send the link to your friends, and they will be able to download the file too!"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://download.gateway.ethswarm.org/bzz/22cbb9cedca08ca8d50b0319a32016174ceb8fbaa452ca5f0a77b804109baa00/"},"https://download.gateway.ethswarm.org/bzz/22cb...aa00/")))}b.isMDXComponent=!0}}]);