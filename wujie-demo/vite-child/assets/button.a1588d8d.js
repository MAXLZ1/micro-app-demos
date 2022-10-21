import{r as l,a as V,_ as f,b as re,F as Pe,j as u,C as H,d as ne,t as Oe,c as oe,w as ae,a5 as Ie,a6 as $e,a2 as Re,a7 as Ae,a8 as Le,K as je,p as Be,f as Ne,a1 as We,O as De,L as ye,i as Fe,B as se,S as Ge,D as Me,x as Ve,e as Ue}from"./index.66b9aa54.js";import{p as He}from"./index.23505bd1.js";function Ke(r){var n=r.className,a=r.direction,e=r.index,t=r.marginDirection,i=r.children,o=r.split,c=r.wrap,s=l.exports.useContext(Se),v=s.horizontalSize,g=s.verticalSize,d=s.latestIndex,x=s.supportFlexGap,p={};return x||(a==="vertical"?e<d&&(p={marginBottom:v/(o?2:1)}):p=V(V({},e<d&&f({},t,v/(o?2:1))),c&&{paddingBottom:g})),i==null?null:re(Pe,{children:[u("div",{className:n,style:p,children:i}),e<d&&o&&u("span",{className:"".concat(n,"-split"),style:p,children:o})]})}var qe=globalThis&&globalThis.__rest||function(r,n){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(a[e[t]]=r[e[t]]);return a},Se=l.exports.createContext({latestIndex:0,horizontalSize:0,verticalSize:0,supportFlexGap:!1}),Je={small:8,middle:16,large:24};function Qe(r){return typeof r=="string"?Je[r]:r||0}var Xe=function(n){var a,e=l.exports.useContext(H),t=e.getPrefixCls,i=e.space,o=e.direction,c=n.size,s=c===void 0?(i==null?void 0:i.size)||"small":c,v=n.align,g=n.className,d=n.children,x=n.direction,p=x===void 0?"horizontal":x,R=n.prefixCls,h=n.split,C=n.style,S=n.wrap,j=S===void 0?!1:S,B=qe(n,["size","align","className","children","direction","prefixCls","split","style","wrap"]),k=He(),W=l.exports.useMemo(function(){return(Array.isArray(s)?s:[s,s]).map(function(y){return Qe(y)})},[s]),D=ne(W,2),z=D[0],w=D[1],F=Oe(d,{keepEmpty:!0}),P=v===void 0&&p==="horizontal"?"center":v,_=t("space",R),K=oe(_,"".concat(_,"-").concat(p),(a={},f(a,"".concat(_,"-rtl"),o==="rtl"),f(a,"".concat(_,"-align-").concat(P),P),a),g),A="".concat(_,"-item"),b=o==="rtl"?"marginLeft":"marginRight",O=0,q=F.map(function(y,E){y!=null&&(O=E);var J=y&&y.key||"".concat(A,"-").concat(E);return u(Ke,{className:A,direction:p,index:E,marginDirection:b,split:h,wrap:j,children:y},J)}),G=l.exports.useMemo(function(){return{horizontalSize:z,verticalSize:w,latestIndex:O,supportFlexGap:k}},[z,w,O,k]);if(F.length===0)return null;var N={};return j&&(N.flexWrap="wrap",k||(N.marginBottom=-w)),k&&(N.columnGap=z,N.rowGap=w),u("div",{className:K,style:V(V({},N),C),...B,children:u(Se.Provider,{value:G,children:q})})};const gt=Xe;var Ye=0,$={};function U(r){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,a=Ye++,e=n;function t(){e-=1,e<=0?(r(),delete $[a]):$[a]=ae(t)}return $[a]=ae(t),a}U.cancel=function(n){n!==void 0&&(ae.cancel($[n]),delete $[n])};U.ids=$;var Y;function Ce(r){return!r||r.offsetParent===null||r.hidden}function Ze(r){return r instanceof Document?r.body:Array.from(r.childNodes).find(function(n){return(n==null?void 0:n.nodeType)===Node.ELEMENT_NODE})}function et(r){var n=(r||"").match(/rgba?\((\d*), (\d*), (\d*)(, [\d.]*)?\)/);return n&&n[1]&&n[2]&&n[3]?!(n[1]===n[2]&&n[2]===n[3]):!0}var Te=function(r){Ie(a,r);var n=$e(a);function a(){var e;return Re(this,a),e=n.apply(this,arguments),e.containerRef=l.exports.createRef(),e.animationStart=!1,e.destroyed=!1,e.onClick=function(t,i){var o,c,s=e.props,v=s.insertExtraNode,g=s.disabled;if(!(g||!t||Ce(t)||t.className.indexOf("-leave")>=0)){e.extraNode=document.createElement("div");var d=Ae(e),x=d.extraNode,p=e.context.getPrefixCls;x.className="".concat(p(""),"-click-animating-node");var R=e.getAttributeName();if(t.setAttribute(R,"true"),i&&i!=="#ffffff"&&i!=="rgb(255, 255, 255)"&&et(i)&&!/rgba\((?:\d*, ){3}0\)/.test(i)&&i!=="transparent"){x.style.borderColor=i;var h=((o=t.getRootNode)===null||o===void 0?void 0:o.call(t))||t.ownerDocument,C=(c=Ze(h))!==null&&c!==void 0?c:h;Y=Le(`
      [`.concat(p(""),"-click-animating-without-extra-node='true']::after, .").concat(p(""),`-click-animating-node {
        --antd-wave-shadow-color: `).concat(i,`;
      }`),"antd-wave",{csp:e.csp,attachTo:C})}v&&t.appendChild(x),["transition","animation"].forEach(function(S){t.addEventListener("".concat(S,"start"),e.onTransitionStart),t.addEventListener("".concat(S,"end"),e.onTransitionEnd)})}},e.onTransitionStart=function(t){if(!e.destroyed){var i=e.containerRef.current;!t||t.target!==i||e.animationStart||e.resetEffect(i)}},e.onTransitionEnd=function(t){!t||t.animationName!=="fadeEffect"||e.resetEffect(t.target)},e.bindAnimationEvent=function(t){if(!(!t||!t.getAttribute||t.getAttribute("disabled")||t.className.indexOf("disabled")>=0)){var i=function(c){if(!(c.target.tagName==="INPUT"||Ce(c.target))){e.resetEffect(t);var s=getComputedStyle(t).getPropertyValue("border-top-color")||getComputedStyle(t).getPropertyValue("border-color")||getComputedStyle(t).getPropertyValue("background-color");e.clickWaveTimeoutId=window.setTimeout(function(){return e.onClick(t,s)},0),U.cancel(e.animationStartId),e.animationStart=!0,e.animationStartId=U(function(){e.animationStart=!1},10)}};return t.addEventListener("click",i,!0),{cancel:function(){t.removeEventListener("click",i,!0)}}}},e.renderWave=function(t){var i=t.csp,o=e.props.children;if(e.csp=i,!l.exports.isValidElement(o))return o;var c=e.containerRef;return je(o)&&(c=Be(o.ref,e.containerRef)),Ne(o,{ref:c})},e}return We(a,[{key:"componentDidMount",value:function(){this.destroyed=!1;var t=this.containerRef.current;!t||t.nodeType!==1||(this.instance=this.bindAnimationEvent(t))}},{key:"componentWillUnmount",value:function(){this.instance&&this.instance.cancel(),this.clickWaveTimeoutId&&clearTimeout(this.clickWaveTimeoutId),this.destroyed=!0}},{key:"getAttributeName",value:function(){var t=this.context.getPrefixCls,i=this.props.insertExtraNode;return i?"".concat(t(""),"-click-animating"):"".concat(t(""),"-click-animating-without-extra-node")}},{key:"resetEffect",value:function(t){var i=this;if(!(!t||t===this.extraNode||!(t instanceof Element))){var o=this.props.insertExtraNode,c=this.getAttributeName();t.setAttribute(c,"false"),Y&&(Y.innerHTML=""),o&&this.extraNode&&t.contains(this.extraNode)&&t.removeChild(this.extraNode),["transition","animation"].forEach(function(s){t.removeEventListener("".concat(s,"start"),i.onTransitionStart),t.removeEventListener("".concat(s,"end"),i.onTransitionEnd)})}}},{key:"render",value:function(){return u(De,{children:this.renderWave})}}]),a}(l.exports.Component);Te.contextType=H;var tt=l.exports.forwardRef(function(r,n){return u(Te,{ref:n,...r})});const rt=tt;var nt=globalThis&&globalThis.__rest||function(r,n){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(a[e[t]]=r[e[t]]);return a},_e=l.exports.createContext(void 0),at=function(n){var a,e=l.exports.useContext(H),t=e.getPrefixCls,i=e.direction,o=n.prefixCls,c=n.size,s=n.className,v=nt(n,["prefixCls","size","className"]),g=t("btn-group",o),d="";switch(c){case"large":d="lg";break;case"small":d="sm";break}var x=oe(g,(a={},f(a,"".concat(g,"-").concat(d),d),f(a,"".concat(g,"-rtl"),i==="rtl"),a),s);return u(_e.Provider,{value:c,children:u("div",{...v,className:x})})};const it=at;var Z=function(){return{width:0,opacity:0,transform:"scale(0)"}},ee=function(n){return{width:n.scrollWidth,opacity:1,transform:"scale(1)"}},ot=function(n){var a=n.prefixCls,e=n.loading,t=n.existIcon,i=!!e;return t?u("span",{className:"".concat(a,"-loading-icon"),children:u(ye,{})}):u(Fe,{visible:i,motionName:"".concat(a,"-loading-icon-motion"),removeOnLeave:!0,onAppearStart:Z,onAppearActive:ee,onEnterStart:Z,onEnterActive:ee,onLeaveStart:ee,onLeaveActive:Z,children:function(o,c){var s=o.className,v=o.style;return u("span",{className:"".concat(a,"-loading-icon"),style:v,ref:c,children:u(ye,{className:s})})}})};const st=ot;var ct=globalThis&&globalThis.__rest||function(r,n){var a={};for(var e in r)Object.prototype.hasOwnProperty.call(r,e)&&n.indexOf(e)<0&&(a[e]=r[e]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,e=Object.getOwnPropertySymbols(r);t<e.length;t++)n.indexOf(e[t])<0&&Object.prototype.propertyIsEnumerable.call(r,e[t])&&(a[e[t]]=r[e[t]]);return a},be=/^[\u4e00-\u9fa5]{2}$/,ie=be.test.bind(be);function lt(r){return typeof r=="string"}function te(r){return r==="text"||r==="link"}function ut(r){return l.exports.isValidElement(r)&&r.type===l.exports.Fragment}function dt(r,n){if(r!=null){var a=n?" ":"";return typeof r!="string"&&typeof r!="number"&&lt(r.type)&&ie(r.props.children)?Ne(r,{children:r.props.children.split("").join(a)}):typeof r=="string"?ie(r)?u("span",{children:r.split("").join(a)}):u("span",{children:r}):ut(r)?u("span",{children:r}):r}}function ft(r,n){var a=!1,e=[];return l.exports.Children.forEach(r,function(t){var i=Ue(t),o=i==="string"||i==="number";if(a&&o){var c=e.length-1,s=e[c];e[c]="".concat(s).concat(t)}else e.push(t);a=o}),l.exports.Children.map(e,function(t){return dt(t,n)})}se("default","primary","ghost","dashed","link","text");se("default","circle","round");se("submit","button","reset");var pt=function(n,a){var e,t=n.loading,i=t===void 0?!1:t,o=n.prefixCls,c=n.type,s=c===void 0?"default":c,v=n.danger,g=n.shape,d=g===void 0?"default":g,x=n.size,p=n.disabled,R=n.className,h=n.children,C=n.icon,S=n.ghost,j=S===void 0?!1:S,B=n.block,k=B===void 0?!1:B,W=n.htmlType,D=W===void 0?"button":W,z=ct(n,["loading","prefixCls","type","danger","shape","size","disabled","className","children","icon","ghost","block","htmlType"]),w=l.exports.useContext(Ge),F=l.exports.useContext(Me),P=p||F,_=l.exports.useContext(_e),K=l.exports.useState(!!i),A=ne(K,2),b=A[0],O=A[1],q=l.exports.useState(!1),G=ne(q,2),N=G[0],y=G[1],E=l.exports.useContext(H),J=E.getPrefixCls,le=E.autoInsertSpaceInButton,Ee=E.direction,I=a||l.exports.createRef(),ue=function(){return l.exports.Children.count(h)===1&&!C&&!te(s)},ke=function(){if(!(!I||!I.current||le===!1)){var M=I.current.textContent;ue()&&ie(M)?N||y(!0):N&&y(!1)}},L=typeof i=="boolean"?i:(i==null?void 0:i.delay)||!0;l.exports.useEffect(function(){var T=null;return typeof L=="number"?T=window.setTimeout(function(){T=null,O(L)},L):O(L),function(){T&&(window.clearTimeout(T),T=null)}},[L]),l.exports.useEffect(ke,[I]);var de=function(M){var X=n.onClick;if(b||P){M.preventDefault();return}X==null||X(M)},m=J("btn",o),fe=le!==!1,ze={large:"lg",small:"sm",middle:void 0},pe=_||x||w,ve=pe&&ze[pe]||"",we=b?"loading":C,Q=Ve(z,["navigate"]),me=oe(m,(e={},f(e,"".concat(m,"-").concat(d),d!=="default"&&d),f(e,"".concat(m,"-").concat(s),s),f(e,"".concat(m,"-").concat(ve),ve),f(e,"".concat(m,"-icon-only"),!h&&h!==0&&!!we),f(e,"".concat(m,"-background-ghost"),j&&!te(s)),f(e,"".concat(m,"-loading"),b),f(e,"".concat(m,"-two-chinese-chars"),N&&fe&&!b),f(e,"".concat(m,"-block"),k),f(e,"".concat(m,"-dangerous"),!!v),f(e,"".concat(m,"-rtl"),Ee==="rtl"),f(e,"".concat(m,"-disabled"),Q.href!==void 0&&P),e),R),ge=C&&!b?C:u(st,{existIcon:!!C,prefixCls:m,loading:!!b}),xe=h||h===0?ft(h,ue()&&fe):null;if(Q.href!==void 0)return re("a",{...Q,className:me,onClick:de,ref:I,children:[ge,xe]});var he=re("button",{...z,type:D,className:me,onClick:de,disabled:P,ref:I,children:[ge,xe]});return te(s)?he:u(rt,{disabled:!!b,children:he})},ce=l.exports.forwardRef(pt);ce.Group=it;ce.__ANT_BUTTON=!0;const xt=ce;export{xt as B,gt as S};
