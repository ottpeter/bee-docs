(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[8600],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||i;return a?n.createElement(f,l(l({ref:t},p),{},{components:a})):n.createElement(f,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=m;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){"use strict";var n=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},1395:function(e,t,a){"use strict";a.d(t,{Z:function(){return p}});var n=a(7294),r=a(944),i=a(6010),l="tabItem_1uMI",o="tabItemActive_2DSg";var s=37,c=39;var p=function(e){var t=e.lazy,a=e.block,p=e.defaultValue,u=e.values,m=e.groupId,d=e.className,f=(0,r.Z)(),h=f.tabGroupChoices,b=f.setTabGroupChoices,v=(0,n.useState)(p),g=v[0],k=v[1],y=n.Children.toArray(e.children),N=[];if(null!=m){var w=h[m];null!=w&&w!==g&&u.some((function(e){return e.value===w}))&&k(w)}var C=function(e){var t=e.currentTarget,a=N.indexOf(t),n=u[a].value;k(n),null!=m&&(b(m,n),setTimeout((function(){var e,a,n,r,i,l,s,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,l=window,s=l.innerHeight,c=l.innerWidth,a>=0&&i<=c&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},O=function(e){var t,a;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;a=N[n]||N[0];break;case s:var r=N.indexOf(e.target)-1;a=N[r]||N[N.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},d)},u.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:C,onClick:C},a)}))),t?(0,n.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){"use strict";var n=(0,a(7294).createContext)(void 0);t.Z=n},944:function(e,t,a){"use strict";var n=a(7294),r=a(9443);t.Z=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},9415:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(2122),r=a(9756),i=(a(7294),a(3905)),l=a(1395),o=a(8215),s=["components"],c={title:"Bee Clef",id:"bee-clef"},p={unversionedId:"installation/bee-clef",id:"installation/bee-clef",isDocsHomePage:!1,title:"Bee Clef",description:"Bee makes use of Go Ethereum's external signer, Clef.",source:"@site/docs/installation/bee-clef.md",sourceDirName:"installation",slug:"/installation/bee-clef",permalink:"/docs/installation/bee-clef",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/installation/bee-clef.md",version:"current",frontMatter:{title:"Bee Clef",id:"bee-clef"},sidebar:"Balls",previous:{title:"Bee Using Docker",permalink:"/docs/installation/docker"},next:{title:"Connectivity",permalink:"/docs/installation/connectivity"}},u=[{value:"Packages",id:"packages",children:[{value:"Configuring Bee Clef",id:"configuring-bee-clef",children:[]},{value:"Interact With Bee Clef",id:"interact-with-bee-clef",children:[]}]},{value:"Data Locations",id:"data-locations",children:[]},{value:"Manual Installation",id:"manual-installation",children:[]}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,s);return(0,i.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bee makes use of Go Ethereum's external signer, ",(0,i.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/docs/tools/clef/introduction"},"Clef"),"."),(0,i.kt)("p",null,"Because Bee must sign a lot of transactions automatically and quickly, a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-clef"},"Bee specific version of Clef, Bee Clef")," has been packaged which includes all the relevant configuration needed to make Clef work with Bee."),(0,i.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bee Clef will create a new Ethereum key pair for you during installation. Make sure you keep a ",(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/backups"},"backup")," of your key pair somewhere safe and secure!"))),(0,i.kt)("h2",{id:"packages"},"Packages"),(0,i.kt)("p",null,"Bee Clef can be installed automatically using your system's package manager."),(0,i.kt)(l.Z,{defaultValue:"debian",values:[{label:"Ubuntu / Debian / Raspbian",value:"debian"},{label:"CentOS",value:"centos"},{label:"MacOS",value:"macos"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"debian",mdxType:"TabItem"},(0,i.kt)("h4",{id:"amd64"},"AMD64"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_amd64.deb\nsudo dpkg -i bee-clef_0.12.0_amd64.deb\n")),(0,i.kt)("h4",{id:"arm-raspberry-pi"},"ARM (Raspberry Pi)"),(0,i.kt)("h5",{id:"armv7"},"ARMv7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_armv7.deb\nsudo dpkg -i bee-clef_0.12.0_armv7.deb\n")),(0,i.kt)("h5",{id:"arm64"},"ARM64"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_arm64.deb\nsudo dpkg -i bee-clef_0.12.0_arm64.deb\n"))),(0,i.kt)(o.Z,{value:"centos",mdxType:"TabItem"},(0,i.kt)("h4",{id:"amd64-1"},"AMD64"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_amd64.rpm\nsudo rpm -i bee-clef_0.12.0_amd64.rpm\n")),(0,i.kt)("h4",{id:"arm-raspberry-pi-1"},"ARM (Raspberry Pi)"),(0,i.kt)("h5",{id:"armv7-1"},"ARMv7"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_armv7.rpm\nsudo rpm -i bee-clef_0.12.0_armv7.rpm\n")),(0,i.kt)("h5",{id:"arm64-1"},"ARM64"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://github.com/ethersphere/bee-clef/releases/download/v0.12.0/bee-clef_0.12.0_arm64.rpm\nsudo rpm -i bee-clef_0.12.0_arm64.rpm\n"))),(0,i.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew tap ethersphere/tap\nbrew install swarm-clef\n")),(0,i.kt)("p",null,"To run Bee Clef as a service now and on startup, run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"brew services start swarm-clef\n")))),(0,i.kt)("h3",{id:"configuring-bee-clef"},"Configuring Bee Clef"),(0,i.kt)("p",null,"Configuration files are stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/default/bee-clef/")," on Linux and ",(0,i.kt)("inlineCode",{parentName:"p"},"/usr/local/etc/swarm-clef/default")," on MacOS."),(0,i.kt)("p",null,"To install clef for Swarm mainnet, change ",(0,i.kt)("inlineCode",{parentName:"p"},"BEE_CLEF_CHAIN_ID")," to be ",(0,i.kt)("inlineCode",{parentName:"p"},"100")," in order to interact with the XDAI network. For testnet, use chain id ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,i.kt)("p",null,"For a normal installation using a package manager, this should be the only configuration changes necessary to start using Bee Clef."),(0,i.kt)("h3",{id:"interact-with-bee-clef"},"Interact With Bee Clef"),(0,i.kt)("p",null,"Once Bee Clef has been installed, it will begin running as a service."),(0,i.kt)("p",null,"To check Bee Clef is running ok, we may use ",(0,i.kt)("inlineCode",{parentName:"p"},"systemctl")," (on Linux) or ",(0,i.kt)("inlineCode",{parentName:"p"},"launchctl")," (on MacOS) to query the status of the ",(0,i.kt)("inlineCode",{parentName:"p"},"bee-clef")," service."),(0,i.kt)(l.Z,{defaultValue:"linux",values:[{label:"Linux",value:"linux"},{label:"MacOS",value:"macos"}],mdxType:"Tabs"},(0,i.kt)(o.Z,{value:"linux",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"systemctl status bee-clef\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u25cf bee-clef.service - Bee Clef\n     Loaded: loaded (/lib/systemd/system/bee-clef.service; enabled; vendor preset: enabled)\n     Active: active (running) since Fri 2020-11-20 23:45:16 GMT; 1min 29s ago\n")),(0,i.kt)("p",null,"And if you want to get Bee Clef's logs, you can use:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -f -u bee-clef.service\n"))),(0,i.kt)(o.Z,{value:"macos",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"launchctl list | grep swarm-clef\n")))),(0,i.kt)("p",null,"When Bee Clef first starts, you should see something very similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-log"},'Feb 21 19:52:43 comp-name systemd[1]: Started Bee Clef.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: WARNING!\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: Clef is an account management tool. It may, like any software, contain bugs.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: Please take care to\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: - backup your keystore files,\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: - verify that the keystore(s) can be opened with your password.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: Clef is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: PURPOSE. See the GNU General Public License for more details.\nFeb 21 19:52:43 comp-name bee-clef-service[494678]: INFO [02-21|19:52:43.862] Using stdin/stdout as UI-channel\nFeb 21 19:52:44 comp-name bee-clef-service[494678]: INFO [02-21|19:52:44.036] Loaded 4byte database                    embeds=146841 locals=3 local=/etc/bee-clef/4byte.json\nFeb 21 19:52:44 comp-name bee-clef-service[494678]: {"jsonrpc":"2.0","id":1,"method":"ui_onInputRequired","params":[{"title":"Master Password","prompt":"Please enter the password to decrypt the master seed","isPassword":true}]}\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: INFO [02-21|19:54:25.048] Rule engine configured                   file=/etc/bee-clef/rules.js\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: INFO [02-21|19:54:25.048] Starting signer                          chainid=5 keystore=/var/lib/bee-clef/keystore light-kdf=false advanced=false\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: INFO [02-21|19:54:25.049] IPC endpoint opened                      url=/var/lib/bee-clef/clef.ipc\nFeb 21 19:54:25 comp-name bee-clef-service[494678]: {"jsonrpc":"2.0","method":"ui_onSignerStartup","params":[{"info":{"extapi_http":"n/a","extapi_ipc":"/var/lib/bee-clef/clef.ipc","extapi_version":"6.1.0","intapi_version":"7.0.1"}}]}\n')),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This line can be safely ignored, there is no action required: ",(0,i.kt)("inlineCode",{parentName:"p"},'{"jsonrpc":"2.0","id":1,"method":"ui_onInputRequired","params":[{"title":"Master Password","prompt":"Please enter the password to decrypt the master seed","isPassword":true}]}')))),(0,i.kt)("p",null,"As soon as ",(0,i.kt)("inlineCode",{parentName:"p"},"bee")," starts interacting with ",(0,i.kt)("inlineCode",{parentName:"p"},"bee-clef")," you should start to see log messages populate, for a regularly active and connected node they will appear every few seconds:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Feb 24 22:29:15 comp-name bee-clef-service[1118]: INFO [02-24|22:29:15.118] Op approved\nFeb 24 22:30:17 comp-name bee-clef-service[1118]: INFO [02-24|22:30:17.371] Op approved\nFeb 24 22:30:19 comp-name bee-clef-service[1118]: INFO [02-24|22:30:19.344] Op approved\n...\n")),(0,i.kt)("h2",{id:"data-locations"},"Data Locations"),(0,i.kt)("p",null,"Key material and other data is stored in ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/bee-clef/")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Bee can communicate with Bee Clef in a variety of ways. The default way, if installed via the packages, will use an Inter-process communication (IPC) file. This is a special file that ",(0,i.kt)("inlineCode",{parentName:"p"},"bee-clef")," creates on startup that Bee will use to send requests back-and-forth. When the ",(0,i.kt)("inlineCode",{parentName:"p"},"bee-clef")," service is running you'll notice that a ",(0,i.kt)("inlineCode",{parentName:"p"},"/var/lib/bee-clef/clef.ipc")," file is created."))),(0,i.kt)("h2",{id:"manual-installation"},"Manual Installation"),(0,i.kt)("p",null,"Try the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-clef/releases"},"Github releases page")," for binaries for your platform. Otherwise to install Clef manually first retrieve the relevant Clef binary from Ethereum's ",(0,i.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/downloads/"},"Geth & Tools")," download page, or build directly from the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/wiki/Building-Ethereum"},"source"),"."),(0,i.kt)("p",null,"Because Bee needs Clef to sign many transactions automatically, we must run Clef as a service with relaxed permissions and rules set. To ensure Clef only signs transactions from Bee, we must protect the ",(0,i.kt)("inlineCode",{parentName:"p"},"clef.ipc")," file by ",(0,i.kt)("strong",{parentName:"p"},"creating a Bee user and setting permissions so that it is only possible for this user to make use of the ipc socket.")),(0,i.kt)("p",null,"Additionally, Clef requires transaction signatures for the Bee's chequebook interaction."),(0,i.kt)("p",null,"A shell script automating the post-initialisation permission changing and including the Clef config, ",(0,i.kt)("inlineCode",{parentName:"p"},"clef-service"),", as well as the ",(0,i.kt)("inlineCode",{parentName:"p"},"4byte.json")," transaction signature file and ",(0,i.kt)("inlineCode",{parentName:"p"},"rules.js")," file can all be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethersphere/bee-clef/tree/master/packaging"},"bee-clef repository"),"."),(0,i.kt)("p",null,"Finally, once Clef is running, simply ",(0,i.kt)("a",{parentName:"p",href:"/docs/working-with-bee/configuration"},"configure your Bee node")," to enable Clef using ",(0,i.kt)("inlineCode",{parentName:"p"},"--clef-signer-enable")," and point Bee to the correct ipc socket using ",(0,i.kt)("inlineCode",{parentName:"p"},"--clef-signer-endpoint"),"."))}d.isMDXComponent=!0},6010:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);