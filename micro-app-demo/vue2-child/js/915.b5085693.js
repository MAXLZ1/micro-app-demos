"use strict";(self["webpackJsonp_@micro-app-demo/vue2-child"]=self["webpackJsonp_@micro-app-demo/vue2-child"]||[]).push([[915],{31915:function(t,e,a){a.r(e),a.d(e,{default:function(){return s}});var n=function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Vue2子应用内控制跳转")]),e("a-space",{attrs:{size:20}},t._l(t.buttons,(function(a){return e("a-button",{key:a.url,attrs:{type:"primary"},on:{click:function(e){return t.navigate(a.url)}}},[t._v(" "+t._s(a.label)+" ")])})),1)],1)},u=[],i=(a(28822),a(23263)),r=(a(51654),a(91508)),o={name:"NavigateView",data(){return{mainAppRouter:null,buttons:[{label:"跳转至主应用 page1",url:"/main/communication-test"},{label:"跳转至Vue2子应用",url:"/vue2App/communication-test"},{label:"跳转至React18子应用",url:"/reactApp/communication-test"},{label:"跳转至Vite子应用",url:"/viteApp/communication-test"}]}},created(){this.mainAppRouter=window?.microApp.getData()?.router},methods:{navigate(t){this.mainAppRouter?.push(t)}},components:{[r.ZP.name]:r.ZP,[i["default"].name]:i["default"]}},l=o,p=a(90879),c=(0,p.Z)(l,n,u,!1,null,"254da6ad",null),s=c.exports}}]);
//# sourceMappingURL=915.b5085693.js.map