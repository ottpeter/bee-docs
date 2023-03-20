(self.webpackChunkbee_docs=self.webpackChunkbee_docs||[]).push([[7236],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,h=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},d),{},{components:n})):r.createElement(h,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8813:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=["components"],s={title:"Ultra Light Nodes",id:"ultra-light-nodes"},l={unversionedId:"access-the-swarm/ultra-light-nodes",id:"access-the-swarm/ultra-light-nodes",isDocsHomePage:!1,title:"Ultra Light Nodes",description:"When running without a blockchain we can't do settlements thus risking getting blocklisted by other peers.",source:"@site/docs/access-the-swarm/ultra-light-nodes.md",sourceDirName:"access-the-swarm",slug:"/access-the-swarm/ultra-light-nodes",permalink:"/docs/access-the-swarm/ultra-light-nodes",editUrl:"https://github.com/ethersphere/docs.github.io/blob/master/docs/access-the-swarm/ultra-light-nodes.md",version:"current",frontMatter:{title:"Ultra Light Nodes",id:"ultra-light-nodes"},sidebar:"Balls",previous:{title:"Light Nodes",permalink:"/docs/access-the-swarm/light-nodes"},next:{title:"Dapps On Swarm",permalink:"/docs/dapps-on-swarm/introduction"}},c=[],d={toc:c};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-danger alert alert--danger"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"danger")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"When running without a blockchain we can't do settlements thus risking getting blocklisted by other peers."))),(0,o.kt)("h4",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"In order to configure ultra light node mode use the same configurations as for the ",(0,o.kt)("a",{parentName:"p",href:"/docs/access-the-swarm/light-nodes"},"light node"),"\nbut leave the ",(0,o.kt)("inlineCode",{parentName:"p"},"blockchain-rpc-endpoint")," configuration param value to empty (or just comment it out)."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Make sure you set the ",(0,o.kt)("inlineCode",{parentName:"p"},"swap-enable")," configuration parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),", otherwise you will get an error."))),(0,o.kt)("h4",{id:"mode-of-operation"},"Mode of Operation"),(0,o.kt)("p",null,"The target audience for this mode of operations are users who want to try out running a node but don't\nwant to go through the hassle of blockchain onboarding. The user will be able to download data as long as\nthe connected peers will allow this ",(0,o.kt)("inlineCode",{parentName:"p"},"freeriding"),"."),(0,o.kt)("p",null,"Running Bee without a connected blockchain backend, however, imposes some limitations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"we can't do overlay verification"),(0,o.kt)("li",{parentName:"ul"},"we can't do settlements")),(0,o.kt)("p",null,"Since we can't buy postage stamps - we can not:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"send pss messages"),(0,o.kt)("li",{parentName:"ul"},"upload data to the network")),(0,o.kt)("h4",{id:"switching-on-and-off"},"Switching On and Off"),(0,o.kt)("p",null,"It is safe to switch between ultra light mode and other modes of operation."))}u.isMDXComponent=!0}}]);