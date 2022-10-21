import{d as V,u as Q,B as ft,D as vt,F as tt,p as mt,G as bt,P as K,a as b,L as nt,T as Et,r as P,H as z,J as ht,K as gt,_ as y,M as Tt,N as St,O as xt,Q as Ct,R as O,f as D,S as At,w as Nt,U as wt,c as kt,V as _t,W as Lt,t as et}from"./index.afcd1c94.js";import{w as at,i as zt,u as Bt}from"./index.96d7cd09.js";var H={transitionstart:{transition:"transitionstart",WebkitTransition:"webkitTransitionStart",MozTransition:"mozTransitionStart",OTransition:"oTransitionStart",msTransition:"MSTransitionStart"},animationstart:{animation:"animationstart",WebkitAnimation:"webkitAnimationStart",MozAnimation:"mozAnimationStart",OAnimation:"oAnimationStart",msAnimation:"MSAnimationStart"}},J={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},I=[],M=[];function It(){var a=document.createElement("div"),t=a.style;"AnimationEvent"in window||(delete H.animationstart.animation,delete J.animationend.animation),"TransitionEvent"in window||(delete H.transitionstart.transition,delete J.transitionend.transition);function r(i,h){for(var v in i)if(i.hasOwnProperty(v)){var g=i[v];for(var m in g)if(m in t){h.push(g[m]);break}}}r(H,I),r(J,M)}typeof window<"u"&&typeof document<"u"&&It();function it(a,t,r){a.addEventListener(t,r,!1)}function rt(a,t,r){a.removeEventListener(t,r,!1)}var Mt={startEvents:I,addStartEventListener:function(t,r){if(I.length===0){setTimeout(r,0);return}I.forEach(function(i){it(t,i,r)})},removeStartEventListener:function(t,r){I.length!==0&&I.forEach(function(i){rt(t,i,r)})},endEvents:M,addEndEventListener:function(t,r){if(M.length===0){setTimeout(r,0);return}M.forEach(function(i){it(t,i,r)})},removeEndEventListener:function(t,r){M.length!==0&&M.forEach(function(i){rt(t,i,r)})}};const U=Mt;var L;function ot(a){return!a||a.offsetParent===null}function Pt(a){var t=(a||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\.\d]*)?\)/);return t&&t[1]&&t[2]&&t[3]?!(t[1]===t[2]&&t[2]===t[3]):!0}const Ot=V({name:"Wave",props:{insertExtraNode:Boolean,disabled:Boolean},setup:function(t,r){var i=r.slots,h=r.expose,v=bt(),g=Q("",t),m=g.csp,T=g.prefixCls;h({csp:m});var S=null,k=null,x=null,C=!1,p=null,E=!1,N=function(n){if(!E){var e=tt(v);!n||n.target!==e||C||w(e)}},o=function(n){!n||n.animationName!=="fadeEffect"||w(n.target)},d=function(){var n=t.insertExtraNode;return n?"".concat(T.value,"-click-animating"):"".concat(T.value,"-click-animating-without-extra-node")},A=function(n,e){var l,u=t.insertExtraNode,s=t.disabled;if(!(s||!n||ot(n)||n.className.indexOf("-leave")>=0)){p=document.createElement("div"),p.className="".concat(T.value,"-click-animating-node");var _=d();n.removeAttribute(_),n.setAttribute(_,"true"),L=L||document.createElement("style"),e&&e!=="#ffffff"&&e!=="rgb(255, 255, 255)"&&Pt(e)&&!/rgba\(\d*, \d*, \d*, 0\)/.test(e)&&e!=="transparent"&&(!((l=m.value)===null||l===void 0)&&l.nonce&&(L.nonce=m.value.nonce),p.style.borderColor=e,L.innerHTML=`
        [`.concat(T.value,"-click-animating-without-extra-node='true']::after, .").concat(T.value,`-click-animating-node {
          --antd-wave-shadow-color: `).concat(e,`;
        }`),document.body.contains(L)||document.body.appendChild(L)),u&&n.appendChild(p),U.addStartEventListener(n,N),U.addEndEventListener(n,o)}},w=function(n){if(!(!n||n===p||!(n instanceof Element))){var e=t.insertExtraNode,l=d();n.setAttribute(l,"false"),L&&(L.innerHTML=""),e&&p&&n.contains(p)&&n.removeChild(p),U.removeStartEventListener(n,N),U.removeEndEventListener(n,o)}},W=function(n){if(!(!n||!n.getAttribute||n.getAttribute("disabled")||n.className.indexOf("disabled")>=0)){var e=function(u){if(!(u.target.tagName==="INPUT"||ot(u.target))){w(n);var s=getComputedStyle(n).getPropertyValue("border-top-color")||getComputedStyle(n).getPropertyValue("border-color")||getComputedStyle(n).getPropertyValue("background-color");k=setTimeout(function(){return A(n,s)},0),at.cancel(x),C=!0,x=at(function(){C=!1},10)}};return n.addEventListener("click",e,!0),{cancel:function(){n.removeEventListener("click",e,!0)}}}};return ft(function(){vt(function(){var f=tt(v);f.nodeType===1&&(S=W(f))})}),mt(function(){S&&S.cancel(),clearTimeout(k),E=!0}),function(){var f;return(f=i.default)===null||f===void 0?void 0:f.call(i)[0]}}});var Wt=function(){return{prefixCls:String,type:String,htmlType:{type:String,default:"button"},shape:{type:String},size:{type:String},loading:{type:[Boolean,Object],default:function(){return!1}},disabled:{type:Boolean,default:void 0},ghost:{type:Boolean,default:void 0},block:{type:Boolean,default:void 0},danger:{type:Boolean,default:void 0},icon:K.any,href:String,target:String,title:String,onClick:{type:Function},onMousedown:{type:Function}}};const jt=Wt;var lt=function(t){t&&(t.style.width="0px",t.style.opacity="0",t.style.transform="scale(0)")},ut=function(t){vt(function(){t&&(t.style.width="".concat(t.scrollWidth,"px"),t.style.opacity="1",t.style.transform="scale(1)")})},st=function(t){t&&t.style&&(t.style.width=null,t.style.opacity=null,t.style.transform=null)};const Ft=V({name:"LoadingIcon",props:{prefixCls:String,loading:[Boolean,Object],existIcon:Boolean},setup:function(t){return function(){var r=t.existIcon,i=t.prefixCls,h=t.loading;if(r)return b("span",{class:"".concat(i,"-loading-icon")},[b(nt,null,null)]);var v=!!h;return b(Et,{name:"".concat(i,"-loading-icon-motion"),onBeforeEnter:lt,onEnter:ut,onAfterEnter:st,onBeforeLeave:ut,onLeave:function(m){setTimeout(function(){lt(m)})},onAfterLeave:st},{default:function(){return[v?b("span",{class:"".concat(i,"-loading-icon")},[b(nt,null,null)]):null]}})}}});var ct=/^[\u4e00-\u9fa5]{2}$/,dt=ct.test.bind(ct);function G(a){return a==="text"||a==="link"}const Ht=V({name:"AButton",inheritAttrs:!1,__ANT_BUTTON:!0,props:zt(jt(),{type:"default"}),slots:["icon"],setup:function(t,r){var i=r.slots,h=r.attrs,v=r.emit,g=Q("btn",t),m=g.prefixCls,T=g.autoInsertSpaceInButton,S=g.direction,k=g.size,x=P(null),C=P(void 0),p=!1,E=P(!1),N=P(!1),o=z(function(){return T.value!==!1}),d=z(function(){return ht(t.loading)==="object"&&t.loading.delay?t.loading.delay||!0:!!t.loading});gt(d,function(n){clearTimeout(C.value),typeof d.value=="number"?C.value=setTimeout(function(){E.value=n},d.value):E.value=n},{immediate:!0});var A=z(function(){var n,e=t.type,l=t.shape,u=l===void 0?"default":l,s=t.ghost,_=t.block,B=t.danger,c=m.value,j={large:"lg",small:"sm",middle:void 0},F=k.value,R=F&&j[F]||"";return n={},y(n,"".concat(c),!0),y(n,"".concat(c,"-").concat(e),e),y(n,"".concat(c,"-").concat(u),u!=="default"&&u),y(n,"".concat(c,"-").concat(R),R),y(n,"".concat(c,"-loading"),E.value),y(n,"".concat(c,"-background-ghost"),s&&!G(e)),y(n,"".concat(c,"-two-chinese-chars"),N.value&&o.value),y(n,"".concat(c,"-block"),_),y(n,"".concat(c,"-dangerous"),!!B),y(n,"".concat(c,"-rtl"),S.value==="rtl"),n}),w=function(){var e=x.value;if(!(!e||T.value===!1)){var l=e.textContent;p&&dt(l)?N.value||(N.value=!0):N.value&&(N.value=!1)}},W=function(e){if(E.value||t.disabled){e.preventDefault();return}v("click",e)},f=function(e,l){var u=l?" ":"";if(e.type===At){var s=e.children.trim();return dt(s)&&(s=s.split("").join(u)),b("span",null,[s])}return e};return Tt(function(){St(!(t.ghost&&G(t.type)),"Button","`link` or `text` button can't be a `ghost` button.")}),ft(w),xt(w),mt(function(){C.value&&clearTimeout(C.value)}),function(){var n,e,l=t.icon,u=l===void 0?(n=i.icon)===null||n===void 0?void 0:n.call(i):l,s=Ct((e=i.default)===null||e===void 0?void 0:e.call(i));p=s.length===1&&!u&&!G(t.type);var _=t.type,B=t.htmlType,c=t.disabled,j=t.href,F=t.title,R=t.target,pt=t.onMousedown,yt=E.value?"loading":u,$=O(O({},h),{title:F,disabled:c,class:[A.value,h.class,y({},"".concat(m.value,"-icon-only"),s.length===0&&!!yt)],onClick:W,onMousedown:pt});c||delete $.disabled;var q=u&&!E.value?u:b(Ft,{existIcon:!!u,prefixCls:m.value,loading:!!E.value},null),X=s.map(function(Z){return f(Z,p&&o.value)});if(j!==void 0)return b("a",D(D({},$),{},{href:j,target:R,ref:x}),[q,X]);var Y=b("button",D(D({},$),{},{ref:x,type:B}),[q,X]);return G(_)?Y:b(Ot,{ref:"wave",disabled:!!E.value},{default:function(){return[Y]}})}}});var Rt={small:8,middle:16,large:24},Dt=function(){return{prefixCls:String,size:{type:[String,Number,Array]},direction:K.oneOf(et("horizontal","vertical")).def("horizontal"),align:K.oneOf(et("start","end","center","baseline")),wrap:{type:Boolean,default:void 0}}};function Ut(a){return typeof a=="string"?Rt[a]:a||0}var Gt=V({name:"ASpace",props:Dt(),slots:["split"],setup:function(t,r){var i=r.slots,h=Q("space",t),v=h.prefixCls,g=h.space,m=h.direction,T=Bt(),S=z(function(){var o,d,A;return(A=(o=t.size)!==null&&o!==void 0?o:(d=g.value)===null||d===void 0?void 0:d.size)!==null&&A!==void 0?A:"small"}),k=P(),x=P();gt(S,function(){var o=(Array.isArray(S.value)?S.value:[S.value,S.value]).map(function(A){return Ut(A)}),d=wt(o,2);k.value=d[0],x.value=d[1]},{immediate:!0});var C=z(function(){return t.align===void 0&&t.direction==="horizontal"?"center":t.align}),p=z(function(){var o;return kt(v.value,"".concat(v.value,"-").concat(t.direction),(o={},y(o,"".concat(v.value,"-rtl"),m.value==="rtl"),y(o,"".concat(v.value,"-align-").concat(C.value),C.value),o))}),E=z(function(){return m.value==="rtl"?"marginLeft":"marginRight"}),N=z(function(){var o={};return T.value&&(o.columnGap="".concat(k.value,"px"),o.rowGap="".concat(x.value,"px")),O(O({},o),t.wrap&&{flexWrap:"wrap",marginBottom:"".concat(-x.value,"px")})});return function(){var o,d,A=t.wrap,w=t.direction,W=w===void 0?"horizontal":w,f=_t((o=i.default)===null||o===void 0?void 0:o.call(i)),n=f.length;if(n===0)return null;var e=(d=i.split)===null||d===void 0?void 0:d.call(i),l="".concat(v.value,"-item"),u=k.value,s=n-1;return b("div",{class:p.value,style:N.value},[f.map(function(_,B){var c={};return T.value||(W==="vertical"?B<s&&(c={marginBottom:"".concat(u/(e?2:1),"px")}):c=O(O({},B<s&&y({},E.value,"".concat(u/(e?2:1),"px"))),A&&{paddingBottom:"".concat(x.value,"px")})),b(Lt,null,[b("div",{class:l,style:c},[_]),B<s&&e&&b("span",{class:"".concat(l,"-split"),style:c},[e])])})])}}});const Jt=Nt(Gt);export{Ht as B,Jt as _};
