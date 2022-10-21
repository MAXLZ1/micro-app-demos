"use strict";(self["webpackChunk_icestark_demo_vue2_child"]=self["webpackChunk_icestark_demo_vue2_child"]||[]).push([[536],{60884:function(){},54498:function(){},6943:function(e,t,n){n.r(t)},60905:function(e,t,n){n.r(t)},19015:function(e,t,n){n(51654);var r=n(91508),a=(n(60366),n(38753)),o=(n(70919),n(68975)),s=(n(27668),n(57611)),l=(n(28822),n(23263)),i=n(3002),u=n(34999);t["Z"]={name:"Counter",data(){return{step:1}},computed:{...(0,u.rn)(i.A,["value"])},methods:{...(0,u.nv)(i.A,["increment","decrement"])},components:{[l["default"].name]:l["default"],[s.Z.name]:s.Z,[o.Z.name]:o.Z,[a.ZP.name]:a.ZP,[r.ZP.name]:r.ZP}}},92295:function(e,t,n){n(99710);var r,a=n(95258),o=(n(27668),n(57611)),s=(n(70919),n(68975)),l=(n(28822),n(23263)),i=(n(43786),n(43219)),u=(n(51991),n(6514)),c=n(84153);(function(e){e["success"]="success",e["warn"]="warn",e["error"]="error",e["info"]="info"})(r||(r={})),t["Z"]={name:"MessageTrigger",data(){return{types:[{value:r.success,label:"成功"},{value:r.error,label:"失败"},{value:r.warn,label:"提醒"},{value:r.info,label:"信息"}],formItemLayout:{labelCol:{xs:{span:24},sm:{span:3,offset:6}},wrapperCol:{xs:{span:24},sm:{span:9}}}}},beforeCreate(){this.form=this.$form.createForm(this,{name:"form"})},methods:{sendMessage(){this.form.validateFields(((e,t)=>{e||c.B.emit("message",{...t,from:"Vue2子应用"})}))}},components:{[u.Z.TextArea.name]:u.Z.TextArea,[i.ZP.name]:i.ZP,[i.ZP.Option.name]:i.ZP.Option,[l["default"].name]:l["default"],[s.Z.name]:s.Z,[o.Z.name]:o.Z,[a.ZP.name]:a.ZP,[a.ZP.Item.name]:a.ZP.Item}}},3277:function(e,t,n){n(59513);var r=n(93028),a=n(67163),o=n(34999);t["Z"]={name:"UserInfo",data(){return{column:{xxl:3,xl:2,lg:2,md:2,sm:1,xs:1}}},computed:{...(0,o.rn)(a.L,["user"])},components:{[r.ZP.name]:r.ZP,[r.ZP.Item.name]:r.ZP.Item}}},91298:function(e,t,n){n(51654);var r=n(91508),a=(n(9883),n(72424)),o=n(98966),s=n(62631),l=n(77024);t["Z"]={name:"User",components:{MessageTrigger:l.Z,Counter:s.Z,UserInfo:o.Z,[a.Z.name]:a.Z,[r.ZP.name]:r.ZP}}},3002:function(e,t,n){n.d(t,{A:function(){return o}});var r=n(34999),a=n(75536);const o=(0,r.Q_)("counter",(()=>{const e=(0,a.ref)(0),t=t=>{e.value+=t},n=t=>{e.value-=t};return{value:e,decrement:n,increment:t}}))},72048:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var r=n(61150),a=i(r),o=n(52803),s=i(o),l=n(55590);function i(e){return e&&e.__esModule?e:{default:e}}var u={child:s["default"].any,bordered:s["default"].bool,colon:s["default"].bool,type:s["default"].oneOf(["label","content"]),layout:s["default"].oneOf(["horizontal","vertical"])},c={functional:!0,props:u,render:function(e,t){var n,r=t.props,o=r.child,s=r.bordered,i=r.colon,u=r.type,c=r.layout,f=(0,l.getOptionProps)(o),d=f.prefixCls,m=f.span,p=void 0===m?1:m,v=t.data.key,b=(0,l.getComponentFromProp)(o,"label"),h=(0,l.getSlots)(o),Z={attrs:{},class:[d+"-item-label",(n={},(0,a["default"])(n,d+"-item-colon",i),(0,a["default"])(n,d+"-item-no-label",!b),n)],key:v+"-label"};return"vertical"===c&&(Z.attrs.colSpan=2*p-1),s?"label"===u?e("th",Z,[b]):e("td",{class:d+"-item-content",key:v+"-content",attrs:{colSpan:2*p-1}},[h["default"]]):e("td",{attrs:{colSpan:p},class:d+"-item"},"vertical"===c?"content"===u?[e("span",{class:d+"-item-content",key:v+"-content"},[h["default"]])]:[e("span",{class:[d+"-item-label",(0,a["default"])({},d+"-item-colon",i)],key:v+"-label"},[b])]:[e("span",Z,[b]),e("span",{class:d+"-item-content",key:v+"-content"},[h["default"]])])}};t["default"]=c},93028:function(e,t,n){n(15526);var r=n(61150),a=_(r),o=n(46011),s=_(o),l=n(45752),i=_(l),u=n(64827),c=_(u),f=n(75577),d=n(72048),m=_(d),p=n(52803),v=_(p),b=n(55590),h=n(30987),Z=_(h),y=n(18566),g=_(y),x=n(36543);function _(e){return e&&e.__esModule?e:{default:e}}var C={prefixCls:v["default"].string,label:v["default"].any,span:v["default"].number};function P(e){var t=e;return void 0===e?t=[]:Array.isArray(e)||(t=[e]),t}var k={name:"ADescriptionsItem",props:(0,b.initDefaultProps)(C,{span:1})},w={prefixCls:v["default"].string,bordered:v["default"].bool,size:v["default"].oneOf(["default","middle","small"]).def("default"),title:v["default"].any,column:v["default"].oneOfType([v["default"].number,v["default"].object]),layout:v["default"].oneOf(["horizontal","vertical"]),colon:v["default"].bool},I=function(e,t){var n=[],r=null,a=void 0,o=P(e);return o.forEach((function(e,s){var l=(0,b.getOptionProps)(e),u=e;r||(a=t,r=[],n.push(r));var c=s===o.length-1,f=!0;c&&(f=!l.span||l.span===a,u=(0,x.cloneElement)(u,{props:{span:a}}));var d=l.span,m=void 0===d?1:d;r.push(u),a-=m,a<=0&&(r=null,(0,i["default"])(0===a&&f,"Descriptions","Sum of column `span` in a line exceeds `column` of Descriptions."))})),n},A={xxl:3,xl:3,lg:3,md:3,sm:2,xs:1},z={name:"ADescriptions",Item:k,mixins:[Z["default"]],inject:{configProvider:{default:function(){return f.ConfigConsumerProps}}},props:(0,b.initDefaultProps)(w,{column:A}),data:function(){return{screens:{},token:void 0}},methods:{getColumn:function(){var e=this.$props.column;if("object"===("undefined"===typeof e?"undefined":(0,s["default"])(e)))for(var t=0;t<u.responsiveArray.length;t++){var n=u.responsiveArray[t];if(this.screens[n]&&void 0!==e[n])return e[n]||A[n]}return"number"===typeof e?e:3},renderRow:function(e,t,n,r,a,o){var s=n.prefixCls,l=this.$createElement,i=function(e,t,n){return l(m["default"],{attrs:{child:e,bordered:r,colon:o,type:t,layout:a},key:t+"-"+(e.key||n)})},u=[],c=[];return P(e).forEach((function(e,t){u.push(i(e,"label",t)),"vertical"===a?c.push(i(e,"content",t)):r&&u.push(i(e,"content",t))})),"vertical"===a?[l("tr",{class:s+"-row",key:"label-"+t},[u]),l("tr",{class:s+"-row",key:"content-"+t},[c])]:l("tr",{class:s+"-row",key:t},[u])}},mounted:function(){var e=this,t=this.$props.column;this.token=c["default"].subscribe((function(n){"object"===("undefined"===typeof t?"undefined":(0,s["default"])(t))&&e.setState({screens:n})}))},beforeDestroy:function(){c["default"].unsubscribe(this.token)},render:function(){var e,t=this,n=arguments[0],r=this.$props,o=r.prefixCls,s=r.size,l=r.bordered,i=void 0!==l&&l,u=r.layout,c=void 0===u?"horizontal":u,f=r.colon,d=void 0===f||f,m=(0,b.getComponentFromProp)(this,"title")||null,p=this.configProvider.getPrefixCls,v=p("descriptions",o),h=this.getColumn(),Z=this.$slots["default"],y=P(Z).map((function(e){return(0,b.isValidElement)(e)?(0,x.cloneElement)(e,{props:{prefixCls:v}}):null})).filter((function(e){return e})),g=I(y,h);return n("div",{class:[v,(e={},(0,a["default"])(e,v+"-"+s,"default"!==s),(0,a["default"])(e,v+"-bordered",!!i),e)]},[m&&n("div",{class:v+"-title"},[m]),n("div",{class:v+"-view"},[n("table",[n("tbody",[g.map((function(e,n){return t.renderRow(e,n,{prefixCls:v},i,c,d)}))])])])])},install:function(e){e.use(g["default"]),e.component(z.name,z),e.component(z.Item.name,z.Item)}};t.ZP=z},59513:function(e,t,n){n(74380),n(6943)},72424:function(e,t,n){var r=n(61150),a=c(r),o=n(52803),s=c(o),l=n(75577),i=n(18566),u=c(i);function c(e){return e&&e.__esModule?e:{default:e}}var f={name:"ADivider",props:{prefixCls:s["default"].string,type:s["default"].oneOf(["horizontal","vertical",""]).def("horizontal"),dashed:s["default"].bool,orientation:s["default"].oneOf(["left","right","center"])},inject:{configProvider:{default:function(){return l.ConfigConsumerProps}}},render:function(){var e,t=arguments[0],n=this.prefixCls,r=this.type,o=this.$slots,s=this.dashed,l=this.orientation,i=void 0===l?"center":l,u=this.configProvider.getPrefixCls,c=u("divider",n),f=i.length>0?"-"+i:i,d=(e={},(0,a["default"])(e,c,!0),(0,a["default"])(e,c+"-"+r,!0),(0,a["default"])(e,c+"-with-text"+f,o["default"]),(0,a["default"])(e,c+"-dashed",!!s),e);return t("div",{class:d,attrs:{role:"separator"}},[o["default"]&&t("span",{class:c+"-inner-text"},[o["default"]])])},install:function(e){e.use(u["default"]),e.component(f.name,f)}};t.Z=f},9883:function(e,t,n){n(74380),n(60905)},71921:function(e,t,n){n.d(t,{s:function(){return r},x:function(){return a}});var r=function(){var e=this,t=e._self._c;return t("a-space",{staticClass:"box",attrs:{size:40,direction:"vertical"}},[t("a-row",{attrs:{type:"flex",justify:"center",align:"middle",gutter:20}},[t("a-col",[t("label",[e._v("step:")])]),t("a-col",[t("a-input-number",{attrs:{size:"large"},model:{value:e.step,callback:function(t){e.step=t},expression:"step"}})],1)],1),t("a-row",{attrs:{type:"flex",justify:"center",align:"middle",gutter:40}},[t("a-col",[t("a-button",{staticClass:"btn",attrs:{type:"primary",size:"large"},on:{click:()=>e.increment(e.step)}},[e._v("+")])],1),t("a-col",[t("h1",{staticClass:"number"},[e._v(e._s(e.value))])]),t("a-col",[t("a-button",{staticClass:"btn",attrs:{type:"danger",size:"large"},on:{click:()=>e.decrement(e.step)}},[e._v("-")])],1)],1)],1)},a=[]},97346:function(e,t,n){n.d(t,{s:function(){return r},x:function(){return a}});var r=function(){var e=this,t=e._self._c;return t("a-form",{attrs:{form:e.form}},[t("a-form-item",e._b({attrs:{label:"信息文本"}},"a-form-item",e.formItemLayout,!1),[t("a-textarea",{directives:[{name:"decorator",rawName:"v-decorator",value:["info",{rules:[{required:!0,message:"信息不能为空!"}]}],expression:"['info', { rules: [{ required: true, message: '信息不能为空!' }] }]"}],attrs:{placeholder:"输入信息文本",rows:4}})],1),t("a-form-item",e._b({attrs:{label:"消息类型"}},"a-form-item",e.formItemLayout,!1),[t("a-select",{directives:[{name:"decorator",rawName:"v-decorator",value:["type",{initialValue:"success",rules:[{required:!0,message:"消息类型不能为空!"}]}],expression:"['type', { initialValue: 'success', rules: [{ required: true, message: '消息类型不能为空!' }] }]"}]},e._l(e.types,(function(n){return t("a-select-option",{key:n.value,attrs:{value:n.value}},[e._v(e._s(n.label))])})),1)],1),t("a-row",{attrs:{type:"flex",justify:"center"}},[t("a-col",[t("a-button",{attrs:{type:"primary"},on:{click:e.sendMessage}},[e._v("向主应用发送信息")])],1)],1)],1)},a=[]},53400:function(e,t,n){n.d(t,{s:function(){return r},x:function(){return a}});var r=function(){var e=this,t=e._self._c;return e.user?t("div",[t("a-descriptions",{attrs:{title:"来自主应用的数据 User Store Info",bordered:"",column:e.column}},[t("a-descriptions-item",{attrs:{label:"UserName"}},[e._v(e._s(e.user.name))]),t("a-descriptions-item",{attrs:{label:"Age"}},[e._v(e._s(e.user.age))]),t("a-descriptions-item",{attrs:{label:"Gender"}},[e._v(e._s(e.user.gender))]),t("a-descriptions-item",{attrs:{label:"Telephone"}},[e._v(e._s(e.user.phone))])],1)],1):e._e()},a=[]},92293:function(e,t,n){n.d(t,{s:function(){return r},x:function(){return a}});var r=function(){var e=this,t=e._self._c;return t("a-space",{staticClass:"box",attrs:{direction:"vertical",size:40}},[t("a-divider",{staticClass:"title"},[t("h1",[e._v("Vue2子应用页面")])]),t("user-info"),t("a-divider",{staticClass:"title"},[t("h2",[e._v("Vue2子应用向主应用通信")])]),t("message-trigger"),t("a-divider",{staticClass:"title"},[t("h2",[e._v("Vue2子应用Counter")])]),t("counter")],1)},a=[]},62631:function(e,t,n){var r=n(71921),a=n(43412),o=(n(20637),n(90879)),s=(0,o.Z)(a.Z,r.s,r.x,!1,null,"43a70264",null);t["Z"]=s.exports},77024:function(e,t,n){var r=n(97346),a=n(7055),o=n(90879),s=(0,o.Z)(a.Z,r.s,r.x,!1,null,"432818c6",null);t["Z"]=s.exports},98966:function(e,t,n){var r=n(53400),a=n(71638),o=n(90879),s=(0,o.Z)(a.Z,r.s,r.x,!1,null,"d864e07c",null);t["Z"]=s.exports},90536:function(e,t,n){n.r(t);var r=n(92293),a=n(25216),o=(n(57307),n(90879)),s=(0,o.Z)(a.Z,r.s,r.x,!1,null,"0bac77ca",null);t["default"]=s.exports},20637:function(e,t,n){n(60884)},57307:function(e,t,n){n(54498)},43412:function(e,t,n){var r=n(19015);t["Z"]=r.Z},7055:function(e,t,n){var r=n(92295);t["Z"]=r.Z},71638:function(e,t,n){var r=n(3277);t["Z"]=r.Z},25216:function(e,t,n){var r=n(91298);t["Z"]=r.Z}}]);
//# sourceMappingURL=536.b16e3778.js.map