import{a as x,_ as o,r as d,C as Y,e as S,c as Z,j as W,B as ee,d as I}from"./index.66b9aa54.js";import{p as ae}from"./index.23505bd1.js";var K=["xxl","xl","lg","md","sm","xs"],z={xs:"(max-width: 575px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",xxl:"(min-width: 1600px)"},y=new Map,Q=-1,H={},ne={matchHandlers:{},dispatch:function(n){return H=n,y.forEach(function(r){return r(H)}),y.size>=1},subscribe:function(n){return y.size||this.register(),Q+=1,y.set(Q,n),n(H),Q},unsubscribe:function(n){y.delete(n),y.size||this.unregister()},unregister:function(){var n=this;Object.keys(z).forEach(function(r){var t=z[r],a=n.matchHandlers[t];a==null||a.mql.removeListener(a==null?void 0:a.listener)}),y.clear()},register:function(){var n=this;Object.keys(z).forEach(function(r){var t=z[r],a=function(f){var O=f.matches;n.dispatch(x(x({},H),o({},r,O)))},v=window.matchMedia(t);v.addListener(a),n.matchHandlers[t]={mql:v,listener:a},a(v)})}};const X=ne;var se=d.exports.createContext({});const te=se;var ce=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};function oe(e){return typeof e=="number"?"".concat(e," ").concat(e," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?"0 0 ".concat(e):e}var ie=["xs","sm","md","lg","xl","xxl"],le=d.exports.forwardRef(function(e,n){var r,t=d.exports.useContext(Y),a=t.getPrefixCls,v=t.direction,b=d.exports.useContext(te),f=b.gutter,O=b.wrap,N=b.supportFlexGap,w=e.prefixCls,C=e.span,$=e.order,j=e.offset,G=e.push,A=e.pull,L=e.className,E=e.children,T=e.flex,q=e.style,_=ce(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),i=a("col",w),R={};ie.forEach(function(u){var l,s={},h=e[u];typeof h=="number"?s.span=h:S(h)==="object"&&(s=h||{}),delete _[u],R=x(x({},R),(l={},o(l,"".concat(i,"-").concat(u,"-").concat(s.span),s.span!==void 0),o(l,"".concat(i,"-").concat(u,"-order-").concat(s.order),s.order||s.order===0),o(l,"".concat(i,"-").concat(u,"-offset-").concat(s.offset),s.offset||s.offset===0),o(l,"".concat(i,"-").concat(u,"-push-").concat(s.push),s.push||s.push===0),o(l,"".concat(i,"-").concat(u,"-pull-").concat(s.pull),s.pull||s.pull===0),o(l,"".concat(i,"-rtl"),v==="rtl"),l))});var m=Z(i,(r={},o(r,"".concat(i,"-").concat(C),C!==void 0),o(r,"".concat(i,"-order-").concat($),$),o(r,"".concat(i,"-offset-").concat(j),j),o(r,"".concat(i,"-push-").concat(G),G),o(r,"".concat(i,"-pull-").concat(A),A),r),L,R),c={};if(f&&f[0]>0){var F=f[0]/2;c.paddingLeft=F,c.paddingRight=F}if(f&&f[1]>0&&!N){var p=f[1]/2;c.paddingTop=p,c.paddingBottom=p}return T&&(c.flex=oe(T),O===!1&&!c.minWidth&&(c.minWidth=0)),W("div",{..._,style:x(x({},c),q),className:m,ref:n,children:E})});const ve=le;var ue=globalThis&&globalThis.__rest||function(e,n){var r={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(r[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var a=0,t=Object.getOwnPropertySymbols(e);a<t.length;a++)n.indexOf(t[a])<0&&Object.prototype.propertyIsEnumerable.call(e,t[a])&&(r[t[a]]=e[t[a]]);return r};ee("top","middle","bottom","stretch");ee("start","end","center","space-around","space-between","space-evenly");var fe=d.exports.forwardRef(function(e,n){var r,t=e.prefixCls,a=e.justify,v=e.align,b=e.className,f=e.style,O=e.children,N=e.gutter,w=N===void 0?0:N,C=e.wrap,$=ue(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),j=d.exports.useContext(Y),G=j.getPrefixCls,A=j.direction,L=d.exports.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),E=I(L,2),T=E[0],q=E[1],_=ae(),i=d.exports.useRef(w);d.exports.useEffect(function(){var D=X.subscribe(function(P){var g=i.current||0;(!Array.isArray(g)&&S(g)==="object"||Array.isArray(g)&&(S(g[0])==="object"||S(g[1])==="object"))&&q(P)});return function(){return X.unsubscribe(D)}},[]);var R=function(){var P=[void 0,void 0],g=Array.isArray(w)?w:[w,void 0];return g.forEach(function(M,J){if(S(M)==="object")for(var B=0;B<K.length;B++){var k=K[B];if(T[k]&&M[k]!==void 0){P[J]=M[k];break}}else P[J]=M}),P},m=G("row",t),c=R(),F=Z(m,(r={},o(r,"".concat(m,"-no-wrap"),C===!1),o(r,"".concat(m,"-").concat(a),a),o(r,"".concat(m,"-").concat(v),v),o(r,"".concat(m,"-rtl"),A==="rtl"),r),b),p={},u=c[0]!=null&&c[0]>0?c[0]/-2:void 0,l=c[1]!=null&&c[1]>0?c[1]/-2:void 0;if(u&&(p.marginLeft=u,p.marginRight=u),_){var s=I(c,2);p.rowGap=s[1]}else l&&(p.marginTop=l,p.marginBottom=l);var h=I(c,2),U=h[0],V=h[1],re=d.exports.useMemo(function(){return{gutter:[U,V],wrap:C,supportFlexGap:_}},[U,V,C,_]);return W(te.Provider,{value:re,children:W("div",{...$,className:F,style:x(x({},p),f),ref:n,children:O})})});const xe=fe;export{ve as C,X as R,xe as a,K as r};
