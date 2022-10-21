import{w as X,t as Y,d as W,u as Z,r as p,g as T,c as ee,_,a as t,C as ae,i as ne,b as te,e as oe,v as le,f as z,T as se,P as y,h as ue,I as ce,j as re,E as ie,k as pe,l as ve,m as de,n as fe,s as U,o as _e,p as me,q as r,x as i,y as c,z as C,A as M,W as S,B as j,D as ye,F as Ce}from"./index.a14ddcec.js";import{B as ge,_ as Ae}from"./index.3cb0bbc2.js";import{_ as he,a as xe}from"./index.4c999c0d.js";import{c as Ee}from"./index.19ab1b86.js";import{u as we}from"./app.3abe3992.js";import"./index.932e612d.js";var Fe={success:ue,info:ce,error:re,warning:ie},ke={success:pe,info:ve,error:de,warning:fe},Ie=Y("success","info","warning","error"),be=function(){return{type:y.oneOf(Ie),closable:{type:Boolean,default:void 0},closeText:y.any,message:y.any,description:y.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:y.any,closeIcon:y.any,onClose:Function}},Ve=W({name:"AAlert",inheritAttrs:!1,props:be(),setup:function(e,v){var u=v.slots,m=v.emit,d=v.attrs,g=v.expose,F=Z("alert",e),P=F.prefixCls,N=F.direction,f=p(!1),A=p(!1),h=p(),k=function(a){a.preventDefault();var s=h.value;s.style.height="".concat(s.offsetHeight,"px"),s.style.height="".concat(s.offsetHeight,"px"),f.value=!0,m("close",a)},x=function(){var a;f.value=!1,A.value=!0,(a=e.afterClose)===null||a===void 0||a.call(e)};g({animationEnd:x});var l=p({});return function(){var o,a,s=e.banner,I=e.closeIcon,b=I===void 0?(a=u.closeIcon)===null||a===void 0?void 0:a.call(u):I,O=e.closable,E=e.type,w=e.showIcon,R=T(u,e,"closeText"),V=T(u,e,"description"),L=T(u,e,"message"),B=T(u,e,"icon");w=s&&w===void 0?!0:w,E=s&&E===void 0?"warning":E||"info";var q=(V?ke:Fe)[E]||null;R&&(O=!0);var n=P.value,G=ee(n,(o={},_(o,"".concat(n,"-").concat(E),!0),_(o,"".concat(n,"-closing"),f.value),_(o,"".concat(n,"-with-description"),!!V),_(o,"".concat(n,"-no-icon"),!w),_(o,"".concat(n,"-banner"),!!s),_(o,"".concat(n,"-closable"),O),_(o,"".concat(n,"-rtl"),N.value==="rtl"),o)),J=O?t("button",{type:"button",onClick:k,class:"".concat(n,"-close-icon"),tabindex:0},[R?t("span",{class:"".concat(n,"-close-text")},[R]):b===void 0?t(ae,null,null):b]):null,K=B&&(ne(B)?Ee(B,{class:"".concat(n,"-icon")}):t("span",{class:"".concat(n,"-icon")},[B]))||t(q,{class:"".concat(n,"-icon")},null),Q=te("".concat(n,"-motion"),{appear:!1,css:!0,onAfterLeave:x,onBeforeLeave:function(D){D.style.maxHeight="".concat(D.offsetHeight,"px")},onLeave:function(D){D.style.maxHeight="0px"}});return A.value?null:t(se,Q,{default:function(){return[oe(t("div",z(z({role:"alert"},d),{},{style:[d.style,l.value],class:[d.class,G],"data-show":!f.value,ref:h}),[w?K:null,t("div",{class:"".concat(n,"-content")},[L?t("div",{class:"".concat(n,"-message")},[L]):null,V?t("div",{class:"".concat(n,"-description")},[V]):null]),J]),[[le,!f.value]])]}})}}});const Be=X(Ve);const De={name:"CoexistMicroApp"},Te=W({...De,setup(H){const e=p(null),v=p(null),u=p(null),m=p(!0),d=p(!0),g=p(!0),{apps:F}=U(we()),{user:P}=U(_e());me(F.value,x=>{x.forEach(l=>{l.name==="vue2App"?e.value={...l,url:`${l.url}#/vue2App/communication-test`}:l.name==="reactApp"?v.value={...l,url:`${l.url}#/reactApp/communication-test`}:l.name==="viteApp"&&(u.value={...l,url:`${l.url}#/viteApp/communication-test`})})},{immediate:!0});const{bus:N}=S;function f(){N.$emit("changeUser",{user:ye(P.value)})}function A(){m.value=!m.value}function h(){d.value=!d.value}function k(){g.value=!g.value}return(x,l)=>{const o=Be,a=ge,s=he,I=xe,b=Ae;return r(),i(b,{direction:"vertical",size:40,class:"box"},{default:c(()=>[t(o,{message:"\u5DE6\u4E0A\u4FA7\u5E94\u7528\u4E3AVue2\u5B50\u5E94\u7528\uFF0C\u53F3\u4E0A\u4FA7\u5E94\u7528\u4E3AReact18\u5B50\u5E94\u7528\uFF0C\u5DE6\u4E0B\u4FA7\u4E3Avite\u5B50\u5E94\u7528\u3002",type:"success"}),t(I,{gutter:20},{default:c(()=>[t(s,{span:12},{default:c(()=>[m.value?(r(),i(a,{key:0,type:"primary",danger:"",onClick:A},{default:c(()=>[C(" \u5378\u8F7DVue2\u5E94\u7528 ")]),_:1})):(r(),i(a,{key:1,type:"primary",onClick:A},{default:c(()=>[C(" \u52A0\u8F7DVue2\u5E94\u7528 ")]),_:1})),m.value&&e.value?(r(),i(M(S),{key:2,class:"app",name:e.value.name,url:e.value.url,afterMount:f},null,8,["name","url"])):j("",!0)]),_:1}),t(s,{span:12},{default:c(()=>[d.value?(r(),i(a,{key:0,type:"primary",danger:"",onClick:h},{default:c(()=>[C(" \u5378\u8F7DReact18\u5E94\u7528 ")]),_:1})):(r(),i(a,{key:1,type:"primary",onClick:h},{default:c(()=>[C(" \u52A0\u8F7DReact18\u5E94\u7528 ")]),_:1})),d.value&&v.value?(r(),i(M(S),{key:2,class:"app",name:v.value.name,url:v.value.url,afterMount:f},null,8,["name","url"])):j("",!0)]),_:1}),t(s,{span:12},{default:c(()=>[d.value?(r(),i(a,{key:0,type:"primary",danger:"",onClick:k},{default:c(()=>[C(" \u5378\u8F7DVite\u5E94\u7528 ")]),_:1})):(r(),i(a,{key:1,type:"primary",onClick:k},{default:c(()=>[C(" \u52A0\u8F7DVite\u5E94\u7528 ")]),_:1})),g.value&&u.value?(r(),i(M(S),{key:2,class:"app",name:u.value.name,url:u.value.url,afterMount:f},null,8,["name","url"])):j("",!0)]),_:1})]),_:1})]),_:1})}}});const je=Ce(Te,[["__scopeId","data-v-d0aaadfa"]]);export{je as default};
