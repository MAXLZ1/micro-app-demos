import{w as X,t as Y,d as W,u as Z,r as p,g as T,c as ee,_,a as o,C as ae,i as ne,b as te,e as oe,v as le,f as z,T as se,P as y,h as ue,I as ce,j as re,E as ie,k as pe,l as ve,m as de,n as fe,s as U,o as _e,p as me,q as ye,x as r,y as i,z as c,A as C,B as M,W as S,D as j,F as Ce,G as ge}from"./index.155f219e.js";import{B as Ae,_ as he}from"./index.28675919.js";import{_ as xe,a as Ee}from"./index.e43cd759.js";import{c as we}from"./index.1dc2cb50.js";import"./index.01aa03c2.js";var Fe={success:ue,info:ce,error:re,warning:ie},ke={success:pe,info:ve,error:de,warning:fe},Ie=Y("success","info","warning","error"),be=function(){return{type:y.oneOf(Ie),closable:{type:Boolean,default:void 0},closeText:y.any,message:y.any,description:y.any,afterClose:Function,showIcon:{type:Boolean,default:void 0},prefixCls:String,banner:{type:Boolean,default:void 0},icon:y.any,closeIcon:y.any,onClose:Function}},Ve=W({name:"AAlert",inheritAttrs:!1,props:be(),setup:function(e,v){var u=v.slots,m=v.emit,d=v.attrs,g=v.expose,F=Z("alert",e),P=F.prefixCls,N=F.direction,f=p(!1),A=p(!1),h=p(),k=function(a){a.preventDefault();var s=h.value;s.style.height="".concat(s.offsetHeight,"px"),s.style.height="".concat(s.offsetHeight,"px"),f.value=!0,m("close",a)},x=function(){var a;f.value=!1,A.value=!0,(a=e.afterClose)===null||a===void 0||a.call(e)};g({animationEnd:x});var t=p({});return function(){var l,a,s=e.banner,I=e.closeIcon,b=I===void 0?(a=u.closeIcon)===null||a===void 0?void 0:a.call(u):I,O=e.closable,E=e.type,w=e.showIcon,R=T(u,e,"closeText"),V=T(u,e,"description"),L=T(u,e,"message"),B=T(u,e,"icon");w=s&&w===void 0?!0:w,E=s&&E===void 0?"warning":E||"info";var q=(V?ke:Fe)[E]||null;R&&(O=!0);var n=P.value,G=ee(n,(l={},_(l,"".concat(n,"-").concat(E),!0),_(l,"".concat(n,"-closing"),f.value),_(l,"".concat(n,"-with-description"),!!V),_(l,"".concat(n,"-no-icon"),!w),_(l,"".concat(n,"-banner"),!!s),_(l,"".concat(n,"-closable"),O),_(l,"".concat(n,"-rtl"),N.value==="rtl"),l)),J=O?o("button",{type:"button",onClick:k,class:"".concat(n,"-close-icon"),tabindex:0},[R?o("span",{class:"".concat(n,"-close-text")},[R]):b===void 0?o(ae,null,null):b]):null,K=B&&(ne(B)?we(B,{class:"".concat(n,"-icon")}):o("span",{class:"".concat(n,"-icon")},[B]))||o(q,{class:"".concat(n,"-icon")},null),Q=te("".concat(n,"-motion"),{appear:!1,css:!0,onAfterLeave:x,onBeforeLeave:function(D){D.style.maxHeight="".concat(D.offsetHeight,"px")},onLeave:function(D){D.style.maxHeight="0px"}});return A.value?null:o(se,Q,{default:function(){return[oe(o("div",z(z({role:"alert"},d),{},{style:[d.style,t.value],class:[d.class,G],"data-show":!f.value,ref:h}),[w?K:null,o("div",{class:"".concat(n,"-content")},[L?o("div",{class:"".concat(n,"-message")},[L]):null,V?o("div",{class:"".concat(n,"-description")},[V]):null]),J]),[[le,!f.value]])]}})}}});const Be=X(Ve);const De={name:"CoexistMicroApp"},Te=W({...De,setup(H){const e=p(null),v=p(null),u=p(null),m=p(!0),d=p(!0),g=p(!0),{apps:F}=U(_e()),{user:P}=U(me());ye(F.value,x=>{x.forEach(t=>{t.name==="vue2App"?e.value={...t,name:t.name+"Coexist",url:`${t.url}#/vue2App/communication-test`}:t.name==="reactApp"?v.value={...t,name:t.name+"Coexist",url:`${t.url}#/reactApp/communication-test`}:t.name==="viteApp"&&(u.value={...t,name:t.name+"Coexist",url:`${t.url}#/viteApp/communication-test`})})},{immediate:!0});const{bus:N}=S;function f(){N.$emit("changeUser",{user:Ce(P.value)})}function A(){m.value=!m.value}function h(){d.value=!d.value}function k(){g.value=!g.value}return(x,t)=>{const l=Be,a=Ae,s=xe,I=Ee,b=he;return r(),i(b,{direction:"vertical",size:40,class:"box"},{default:c(()=>[o(l,{message:"\u5DE6\u4E0A\u4FA7\u5E94\u7528\u4E3AVue2\u5B50\u5E94\u7528\uFF0C\u53F3\u4E0A\u4FA7\u5E94\u7528\u4E3AReact18\u5B50\u5E94\u7528\uFF0C\u5DE6\u4E0B\u4FA7\u4E3Avite\u5B50\u5E94\u7528\u3002",type:"success"}),o(I,{gutter:20},{default:c(()=>[o(s,{span:12},{default:c(()=>[m.value?(r(),i(a,{key:0,type:"primary",danger:"",onClick:A},{default:c(()=>[C(" \u5378\u8F7DVue2\u5E94\u7528 ")]),_:1})):(r(),i(a,{key:1,type:"primary",onClick:A},{default:c(()=>[C(" \u52A0\u8F7DVue2\u5E94\u7528 ")]),_:1})),m.value&&e.value?(r(),i(M(S),{key:2,class:"app",name:e.value.name,url:e.value.url,afterMount:f},null,8,["name","url"])):j("",!0)]),_:1}),o(s,{span:12},{default:c(()=>[d.value?(r(),i(a,{key:0,type:"primary",danger:"",onClick:h},{default:c(()=>[C(" \u5378\u8F7DReact18\u5E94\u7528 ")]),_:1})):(r(),i(a,{key:1,type:"primary",onClick:h},{default:c(()=>[C(" \u52A0\u8F7DReact18\u5E94\u7528 ")]),_:1})),d.value&&v.value?(r(),i(M(S),{key:2,class:"app",name:v.value.name,url:v.value.url,afterMount:f},null,8,["name","url"])):j("",!0)]),_:1}),o(s,{span:12},{default:c(()=>[d.value?(r(),i(a,{key:0,type:"primary",danger:"",onClick:k},{default:c(()=>[C(" \u5378\u8F7DVite\u5E94\u7528 ")]),_:1})):(r(),i(a,{key:1,type:"primary",onClick:k},{default:c(()=>[C(" \u52A0\u8F7DVite\u5E94\u7528 ")]),_:1})),g.value&&u.value?(r(),i(M(S),{key:2,class:"app",name:u.value.name,url:u.value.url,afterMount:f},null,8,["name","url"])):j("",!0)]),_:1})]),_:1})]),_:1})}}});const Me=ge(Te,[["__scopeId","data-v-6265415a"]]);export{Me as default};
