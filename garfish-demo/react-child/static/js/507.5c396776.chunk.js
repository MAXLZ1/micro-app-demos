"use strict";(window.webpackChunk_garfish_demo_react_child=window.webpackChunk_garfish_demo_react_child||[]).push([[507],{7003:function(e,t,n){n.r(t),n.d(t,{default:function(){return o}});n(9177);var a=n(2870),r=(n(4428),n(971)),i=(n(5914),n(6879)),l=n(786);function o(){var e=[{path:"/main/communication-test",basename:"",label:"\u8df3\u8f6c\u81f3\u4e3b\u5e94\u7528 page1"},{path:"/communication-test",basename:"/vue2App",label:"\u8df3\u8f6c\u81f3Vue2\u5b50\u5e94\u7528"},{path:"/communication-test",basename:"/reactApp",label:"\u8df3\u8f6c\u81f3React18\u5b50\u5e94\u7528"},{path:"/communication-test",basename:"/viteApp",label:"\u8df3\u8f6c\u81f3Vite\u5b50\u5e94\u7528"}].map((function(e){return(0,l.jsx)(i.default,{type:"primary",onClick:function(){return function(e){var t,n=e.path,a=e.basename;null===(t=window.Garfish.router)||void 0===t||t.push({path:n,basename:a})}(e)},children:e.label},e.basename+e.path)}));return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(r.Z.Title,{children:"React18\u5b50\u5e94\u7528\u5185\u63a7\u5236\u8df3\u8f6c"}),(0,l.jsx)(a.default,{size:20,children:e})]})}},6874:function(e,t,n){var a=n(9916).default,r=n(6335).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){var t=e.className,n=e.direction,a=e.index,r=e.marginDirection,u=e.children,s=e.split,d=e.wrap,f=o.useContext(c.SpaceContext),p=f.horizontalSize,m=f.verticalSize,v=f.latestIndex,h=f.supportFlexGap,g={};h||("vertical"===n?a<v&&(g={marginBottom:p/(s?2:1)}):g=(0,l.default)((0,l.default)({},a<v&&(0,i.default)({},r,p/(s?2:1))),d&&{paddingBottom:m}));if(null===u||void 0===u)return null;return o.createElement(o.Fragment,null,o.createElement("div",{className:t,style:g},u),a<v&&s&&o.createElement("span",{className:"".concat(t,"-split"),style:g},s))};var i=r(n(3680)),l=r(n(2173)),o=a(n(2889)),c=n(2870)},2870:function(e,t,n){var a=n(9916).default,r=n(6335).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=t.SpaceContext=void 0;var i=r(n(2173)),l=r(n(3680)),o=r(n(6418)),c=r(n(3246)),u=r(n(5545)),s=a(n(2889)),d=n(9663),f=r(n(598)),p=r(n(6874)),m=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n},v=s.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1});t.SpaceContext=v;var h={small:8,middle:16,large:24};var g=function(e){var t,n=s.useContext(d.ConfigContext),a=n.getPrefixCls,r=n.space,g=n.direction,w=e.size,y=void 0===w?(null===r||void 0===r?void 0:r.size)||"small":w,x=e.align,b=e.className,z=e.children,C=e.direction,_=void 0===C?"horizontal":C,O=e.prefixCls,j=e.split,S=e.style,k=e.wrap,A=void 0!==k&&k,E=m(e,["size","align","className","children","direction","prefixCls","split","style","wrap"]),F=(0,f.default)(),P=s.useMemo((function(){return(Array.isArray(y)?y:[y,y]).map((function(e){return function(e){return"string"===typeof e?h[e]:e||0}(e)}))}),[y]),N=(0,o.default)(P,2),G=N[0],M=N[1],I=(0,u.default)(z,{keepEmpty:!0}),B=void 0===x&&"horizontal"===_?"center":x,R=a("space",O),T=(0,c.default)(R,"".concat(R,"-").concat(_),(t={},(0,l.default)(t,"".concat(R,"-rtl"),"rtl"===g),(0,l.default)(t,"".concat(R,"-align-").concat(B),B),t),b),q="".concat(R,"-item"),D="rtl"===g?"marginLeft":"marginRight",V=0,L=I.map((function(e,t){null!==e&&void 0!==e&&(V=t);var n=e&&e.key||"".concat(q,"-").concat(t);return s.createElement(p.default,{className:q,key:n,direction:_,index:t,marginDirection:D,split:j,wrap:A},e)})),W=s.useMemo((function(){return{horizontalSize:G,verticalSize:M,latestIndex:V,supportFlexGap:F}}),[G,M,V,F]);if(0===I.length)return null;var Z={};return A&&(Z.flexWrap="wrap",F||(Z.marginBottom=-M)),F&&(Z.columnGap=G,Z.rowGap=M),s.createElement("div",(0,i.default)({className:T,style:(0,i.default)((0,i.default)({},Z),S)},E),s.createElement(v.Provider,{value:W},L))};t.default=g},9177:function(e,t,n){n(573),n(2768)},8076:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=o;var n=function(e){return+setTimeout(e,16)},a=function(e){return clearTimeout(e)};"undefined"!==typeof window&&"requestAnimationFrame"in window&&(n=function(e){return window.requestAnimationFrame(e)},a=function(e){return window.cancelAnimationFrame(e)});var r=0,i=new Map;function l(e){i.delete(e)}function o(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=r+=1;function o(t){if(0===t)l(a),e();else{var r=n((function(){o(t-1)}));i.set(a,r)}}return o(t),a}o.cancel=function(e){var t=i.get(e);return l(t),a(t)}},2768:function(e,t,n){n.r(t)}}]);
//# sourceMappingURL=507.5c396776.chunk.js.map