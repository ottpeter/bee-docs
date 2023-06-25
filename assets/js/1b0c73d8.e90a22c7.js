"use strict";(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[1716],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),h=o,f=p["".concat(c,".").concat(h)]||p[h]||d[h]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},234:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return p}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],l={title:"Ultra Light Nodes",id:"ultra-light-nodes"},c=void 0,u={unversionedId:"bee/working-with-bee/ultra-light-nodes",id:"bee/working-with-bee/ultra-light-nodes",title:"Ultra Light Nodes",description:"When running without a blockchain connection, bandwidth incentive payments (SWAP) cannot be made so there is a risk of getting blocklisted by other peers for unpaid services.",source:"@site/docs/bee/working-with-bee/ultra-light-nodes.md",sourceDirName:"bee/working-with-bee",slug:"/bee/working-with-bee/ultra-light-nodes",permalink:"/docs/bee/working-with-bee/ultra-light-nodes",draft:!1,editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/bee/working-with-bee/ultra-light-nodes.md",tags:[],version:"current",frontMatter:{title:"Ultra Light Nodes",id:"ultra-light-nodes"},sidebar:"bee",previous:{title:"Light Nodes",permalink:"/docs/bee/working-with-bee/light-nodes"}},s={},p=[{value:"Configuration",id:"configuration",level:4},{value:"Mode of Operation",id:"mode-of-operation",level:4}],d={toc:p},h="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"When running without a blockchain connection, bandwidth incentive payments (SWAP) cannot be made so there is a risk of getting blocklisted by other peers for unpaid services.")),(0,i.kt)("h4",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"In order to run an ultra-light node use the same configuration as for the ",(0,i.kt)("a",{parentName:"p",href:"/docs/bee/working-with-bee/light-nodes"},"light node")," but leave the ",(0,i.kt)("inlineCode",{parentName:"p"},"blockchain-rpc-endpoint")," parameter value to empty (or just comment it out)."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you set the ",(0,i.kt)("inlineCode",{parentName:"p"},"swap-enable")," configuration parameter to ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),", otherwise you will get an error.")),(0,i.kt)("h4",{id:"mode-of-operation"},"Mode of Operation"),(0,i.kt)("p",null,"The target audience for this mode of operations are users who want to try out running a node but don't\nwant to go through the hassle of blockchain onboarding. Ultra-light nodes will be able to download data as long as the data consumed does not exceed the payment threshold (",(0,i.kt)("inlineCode",{parentName:"p"},"payment-threshold")," in ",(0,i.kt)("a",{parentName:"p",href:"/docs/bee/working-with-bee/configuration"},"configuration"),") set by peers they connect to."),(0,i.kt)("p",null,"Running Bee without a connected blockchain backend, however, imposes some limitations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can't do overlay verification"),(0,i.kt)("li",{parentName:"ul"},"Can't do SWAP settlements")),(0,i.kt)("p",null,"Since we can't buy postage stamps:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Can't send PSS messages"),(0,i.kt)("li",{parentName:"ul"},"Can't upload data to the network")))}f.isMDXComponent=!0}}]);