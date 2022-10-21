"use strict";(window["webpackJsonp_@wujie-demo/react-child"]=window["webpackJsonp_@wujie-demo/react-child"]||[]).push([[418],{7003:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});n(9177);var a=n(2870),r=(n(4428),n(971)),i=(n(5914),n(6879)),l=n(786);function o(){var e=[{url:"#/main/communication-test",label:"\u8df3\u8f6c\u81f3\u4e3b\u5e94\u7528 page1"},{url:"#/vue2App/communication-test",label:"\u8df3\u8f6c\u81f3Vue2\u5b50\u5e94\u7528"},{url:"#/reactApp/communication-test",label:"\u8df3\u8f6c\u81f3React18\u5b50\u5e94\u7528"},{url:"#/viteApp/communication-test",label:"\u8df3\u8f6c\u81f3Vite\u5b50\u5e94\u7528"}].map((function(e){return(0,l.jsx)(i.default,{type:"primary",onClick:function(){return function(e){var t=e.url;window.history.pushState({},"",window.location.pathname+t)}(e)},children:e.label},e.url)}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z.Title,{children:"React18\u5b50\u5e94\u7528\u5185\u63a7\u5236\u8df3\u8f6c"}),(0,l.jsx)(a.default,{size:20,children:e})]})}},6874:function(e,t,n){var a=n(9916).default,r=n(6335).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.className,n=e.direction,a=e.index,r=e.marginDirection,u=e.children,d=e.split,s=e.wrap,f=o.useContext(c.SpaceContext),p=f.horizontalSize,m=f.verticalSize,v=f.latestIndex,w=f.supportFlexGap,y={};w||("vertical"===n?a<v&&(y={marginBottom:p/(d?2:1)}):y=(0,l.default)((0,l.default)({},a<v&&(0,i.default)({},r,p/(d?2:1))),s&&{paddingBottom:m}));if(null===u||void 0===u)return null;return o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:y},u),a<v&&d&&o.createElement("span",{className:"".concat(t,"-split"),style:y},d))};var i=r(n(3680)),l=r(n(2173)),o=a(n(2889)),c=n(2870)},2870:function(e,t,n){var a=n(9916).default,r=n(6335).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SpaceContext=void 0;var i=r(n(2173)),l=r(n(3680)),o=r(n(6418)),c=r(n(3246)),u=r(n(5545)),d=a(n(2889)),s=n(9663),f=r(n(598)),p=r(n(6874)),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=d.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1});t.SpaceContext=v;var w={small:8,middle:16,large:24};var y=function(e){var t,n=d.useContext(s.ConfigContext),a=n.getPrefixCls,r=n.space,y=n.direction,x=e.size,g=void 0===x?(null===r||void 0===r?void 0:r.size)||"small":x,h=e.align,b=e.className,z=e.children,j=e.direction,C=void 0===j?"horizontal":j,O=e.prefixCls,S=e.split,A=e.style,E=e.wrap,F=void 0!==E&&E,P=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),_=(0,f.default)(),N=d.useMemo((function(){return(Array.isArray(g)?g:[g,g]).map((function(e){return function(e){return"string"===typeof e?w[e]:e||0}(e)}))}),[g]),k=(0,o.default)(N,2),M=k[0],G=k[1],I=(0,u.default)(z,{keepEmpty:!0}),B=void 0===h&&"horizontal"===C?"center":h,R=a("space",O),T=(0,c.default)(R,"".concat(R,"-").concat(C),(t={},(0,l.default)(t,"".concat(R,"-rtl"),"rtl"===y),(0,l.default)(t,"".concat(R,"-align-").concat(B),B),t),b),q="".concat(R,"-item"),D="rtl"===y?"marginLeft":"marginRight",J=0,V=I.map((function(e,t){null!==e&&void 0!==e&&(J=t);var n=e&&e.key||"".concat(q,"-").concat(t);return d.createElement(p.default,{className:q,key:n,direction:C,index:t,marginDirection:D,split:S,wrap:F},e)})),L=d.useMemo((function(){return{horizontalSize:M,verticalSize:G,latestIndex:J,supportFlexGap:_}}),[M,G,J,_]);if(0===I.length)return null;var W={};return F&&(W.flexWrap="wrap",_||(W.marginBottom=-G)),_&&(W.columnGap=M,W.rowGap=G),d.createElement("div",(0,i.default)({className:T,style:(0,i.default)((0,i.default)({},W),A)},P),d.createElement(v.Provider,{value:L},V))};t.default=y},9177:function(e,t,n){n(573),n(2768)},8076:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=function(e){return+setTimeout(e,16)},a=function(e){return clearTimeout(e)};"undefined"!==typeof window&&"requestAnimationFrame"in window&&(n=function(e){return window.requestAnimationFrame(e)},a=function(e){return window.cancelAnimationFrame(e)});var r=0,i=new Map;function l(e){i.delete(e)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=r+=1;function o(t){if(0===t)l(a),e();else{var r=n((function(){o(t-1)}));i.set(a,r)}}return o(t),a}o.cancel=function(e){var t=i.get(e);return l(t),a(t)}},2768:function(e,t,n){n.r(t)}}]);
//# sourceMappingURL=418.5e1b3632.chunk.js.map