import{B as t}from"./index.4e148679.js";import{a9 as v,aa as m,d as C,u as b,S as g,_ as s,a as h,Z as _}from"./index.c93ae85d.js";var x=v(function r(n){m(this,r),this.error=new Error("unreachable case: ".concat(JSON.stringify(n)))}),G=function(){return{prefixCls:String,size:{type:String}}};const c=C({name:"AButtonGroup",props:G(),setup:function(n,f){var i=f.slots,u=b("btn-group",n),o=u.prefixCls,p=u.direction,d=g(function(){var e,l=n.size,a="";switch(l){case"large":a="lg";break;case"small":a="sm";break;case"middle":case void 0:break;default:console.warn(new x(l).error)}return e={},s(e,"".concat(o.value),!0),s(e,"".concat(o.value,"-").concat(a),a),s(e,"".concat(o.value,"-rtl"),p.value==="rtl"),e});return function(){var e;return h("div",{class:d.value},[_((e=i.default)===null||e===void 0?void 0:e.call(i))])}}});t.Group=c;t.install=function(r){return r.component(t.name,t),r.component(c.name,c),r};