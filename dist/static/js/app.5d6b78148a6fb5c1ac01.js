webpackJsonp([0],[,,,,,,,function(t,e,n){"use strict";n.d(e,"a",function(){return r});var a=n(41),s=n.n(a),r=function(t,e){return s()(e).reduce(function(n,a){var s=e[a];return!0===s&&(n+=" "+t+"-"+a),"string"==typeof s&&(n+=" "+t+"-"+s),n},t)}},,,,,,,,,function(t,e,n){n(72);var a=n(0)(n(29),n(109),null,null);t.exports=a.exports},,function(t,e,n){n(80),n(79);var a=n(0)(n(21),n(115),null,null);t.exports=a.exports},function(t,e,n){"use strict";var a=n(89),s=n.n(a),r=n(90),i=n.n(r),o=n(95),l=n.n(o),c=n(16),u=n.n(c),d=n(91),p=n.n(d),v=n(94),g=n.n(v),m=n(92),f=n.n(m),h=n(93),_=n.n(h),b={install:function(t){t.component("n-button",s.a),t.component("n-checkbox",i.a),t.component("n-radio",l.a),t.component("n-toggle",u.a),t.component("n-input",p.a),t.component("n-progress",g.a),t.component("n-label",f.a),t.component("n-pagination",_.a)}};e.a=b},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(6),s=n(18),r=n.n(s);a.a.config.productionTip=!1,new a.a({el:"#app",render:function(t){return t(r.a)}})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(16),s=n.n(a),r=n(96),i=n.n(r),o=n(97),l=n.n(o),c=n(98),u=n.n(c);e.default={name:"app",components:{NToggle:s.a,MainContent:i.a,NavBar:l.a,TopNavbar:u.a},data:function(){return{cbValue:!0,toggleValue:!0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),s=n.n(a),r=n(7);e.default={functional:!0,props:{type:{type:String,default:"default"},size:{type:String},tag:{type:String,default:"button"},simple:Boolean,round:Boolean,icon:Boolean,iconMini:Boolean},render:function(t,e){var a=e.data,i=e.props,o=e.children,l="n-button btn";return l+=" "+n.i(r.a)("btn",i),a.staticClass=a.staticClass?a.staticClass+" "+l:l,t(i.tag,s()({},a),o)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={model:{prop:"checked",event:"change"},props:{label:String,checked:[Array,Boolean],disabled:[Boolean,String],type:{type:String,default:"default"}},data:function(){return{cbId:""}},computed:{model:{get:function(){return this.checked},set:function(t){this.$emit("change",t)}},checkboxType:function(){if(this.type)return"checkbox-"+this.type}},created:function(){this.cbId=Math.random().toString(16).slice(2)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{value:[String,Number],type:{type:String,default:"text"},noBorder:Boolean,hasIcon:Boolean,iconAlign:{type:String,default:"right"},placeholder:String},computed:{styleClasses:function(){var t="";return this.noBorder&&(t+="form-group-no-border"),this.hasIcon&&(t+=" input-group"),t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(8),s=n.n(a),r=n(7);e.default={functional:!0,props:{type:{type:String,default:"default"},tag:{type:String,default:"span"}},render:function(t,e){var a=e.data,i=e.props,o=e.children,l="n-badge";return l+=" "+n.i(r.a)("badge",i),a.staticClass=a.staticClass?a.staticClass+" "+l:l,t(i.tag,s()({},a),o)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{type:String,default:"primary"},total:{type:Number,default:5}},computed:{paginationClass:function(){return"pagination-"+this.type}},data:function(){return{currentActivePage:1}},methods:{changePage:function(t){this.currentActivePage=t}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{percentage:Number,status:{type:String,default:"default"},showPercentage:{type:Boolean,default:!0},height:{type:Number,default:1}},computed:{progressWidth:function(){return{width:this.percentage+"%"}},progressHeight:function(){return{height:this.height+"px"}},progressClass:function(){return"progress-"+this.status},progressPercentage:function(){return this.percentage+"%"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{label:String,disabled:[Boolean,String],value:[String,Boolean],name:String,type:{type:String,default:"default"}},data:function(){return{cbId:""}},computed:{model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},created:function(){this.cbId=Math.random().toString(16).slice(2)}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{label:String,value:[Array,Boolean],disabled:[Boolean,String],onText:String,offText:String},computed:{switchClass:function(){return"bootstrap-switch-"+(this.model?"on":"off")},model:{get:function(){return this.value},set:function(t){this.$emit("input",t)}}},methods:{triggerToggle:function(){this.model=!this.model}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(69),s=(n.n(a),n(88)),r=n.n(s),i=n(6),o=n(19),l=n(99),c=n.n(l),u=n(100),d=n.n(u),p=n(101),v=n.n(p),g=n(102),m=n.n(g),f=n(105),h=n.n(f),_=n(104),b=n.n(_),y=n(103),x=n.n(y);r.a.highlightAll(),i.a.use(o.a),i.a.component("demo-block",c.a),e.default={components:{Buttons:d.a,Checkboxes:v.a,Inputs:m.a,Textareas:h.a,ProgressBars:b.a,Labels:x.a}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{hovering:!1,isExpanded:!1}},props:{jsfiddle:Object,default:function(){return{}}},methods:{goJsfiddle:function(){var t=this.jsfiddle,e=t.script,n=t.html,a=t.style,s=(e||"").replace(/export default/,"var Main =").trim(),r='<script src="//unpkg.com/vue/dist/vue.js"><\/script>\n<script src="//unpkg.com/element-ui@1.0/lib/index.js"><\/script>\n<div id="app">\n'+n.trim()+"\n</div>",i='@import url("//unpkg.com/element-ui@1.0/lib/theme-default/index.css")\n'+(a||"").trim()+"\n";s=s?s+"\nvar Ctor = Vue.extend(Main)\nnew Ctor().$mount('#app')":"new Vue().$mount('#app')";var o={js:s,css:i,html:r,panel_js:3,panel_css:1},l=document.getElementById("fiddle-form")||document.createElement("form");l.innerHTML="";var c=document.createElement("textarea");l.method="post",l.action="https://jsfiddle.net/api/post/library/pure/",l.target="_blank";for(var u in o)c.name=u,c.value=o[u].toString(),l.appendChild(c.cloneNode());l.setAttribute("id","fiddle-form"),l.style.display="none",document.body.appendChild(l),l.submit()}},computed:{lang:function(){return this.$route.path.split("/")[1]},blockClass:function(){return"demo-test"},iconClass:function(){return this.isExpanded?"el-icon-caret-top":"el-icon-caret-bottom"},controlText:function(){return this.isExpanded?"Hide code":"Show code"},codeArea:function(){return this.$el.getElementsByClassName("meta")[0]},codeAreaHeight:function(){return this.$el.getElementsByClassName("description").length>0?Math.max(this.$el.getElementsByClassName("description")[0].clientHeight,this.$el.getElementsByClassName("highlight")[0].clientHeight):this.$el.getElementsByClassName("highlight")[0].clientHeight}},watch:{isExpanded:function(t){this.codeArea.style.height=t?this.codeAreaHeight+1+"px":"0"}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$el.getElementsByClassName("highlight")[0];0===t.$el.getElementsByClassName("description").length&&(e.style.width="100%",e.borderRight="none")})}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{unchecked:!1,checked:!0,disabled:!0,danger:!0,primary:!0,simpleRadio:"1",disabledRadio:"2",simpleToggle:!1,textToggle:!0}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{simple:"",border:"",iconRight:"",iconLeft:"",success:"Success",danger:"Error input"}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{textarea:""}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},,function(t,e,n){n(85);var a=n(0)(n(22),null,null,null);t.exports=a.exports},function(t,e,n){n(84);var a=n(0)(n(23),n(119),null,null);t.exports=a.exports},function(t,e,n){n(78);var a=n(0)(n(24),n(114),null,null);t.exports=a.exports},function(t,e,n){n(75);var a=n(0)(n(25),null,null,null);t.exports=a.exports},function(t,e,n){n(77);var a=n(0)(n(26),n(113),null,null);t.exports=a.exports},function(t,e,n){n(82);var a=n(0)(n(27),n(117),null,null);t.exports=a.exports},function(t,e,n){n(74);var a=n(0)(n(28),n(111),null,null);t.exports=a.exports},function(t,e,n){n(81);var a=n(0)(n(30),n(116),null,null);t.exports=a.exports},function(t,e,n){n(83);var a=n(0)(n(31),n(118),null,null);t.exports=a.exports},function(t,e,n){n(71);var a=n(0)(n(32),n(108),null,null);t.exports=a.exports},function(t,e,n){n(76);var a=n(0)(n(33),n(112),null,null);t.exports=a.exports},function(t,e,n){n(87);var a=n(0)(n(34),n(122),null,null);t.exports=a.exports},function(t,e,n){n(73);var a=n(0)(n(35),n(110),null,null);t.exports=a.exports},function(t,e,n){n(86);var a=n(0)(n(36),n(121),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(37),n(106),null,null);t.exports=a.exports},function(t,e,n){var a=n(0)(n(38),n(120),null,null);t.exports=a.exports},function(t,e,n){n(70);var a=n(0)(n(39),n(107),null,null);t.exports=a.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tim-row",attrs:{id:"labels-row"}},[n("h2",[t._v(" Labels ")]),t._v(" "),n("legend"),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("p",[t._v("\n          Colored labels with the html tag you want\n        ")]),t._v(" "),n("n-label",{attrs:{type:"default"}},[t._v("Default")]),t._v(" "),n("n-label",{attrs:{type:"primary",tag:"div"}},[t._v("Primary")]),t._v(" "),n("n-label",{attrs:{type:"success"}},[t._v("Success")]),t._v(" "),n("n-label",{attrs:{type:"info"}},[t._v("Info")]),t._v(" "),n("n-label",{attrs:{type:"warning"}},[t._v("Warning")]),t._v(" "),n("n-label",{attrs:{type:"danger"}},[t._v("Danger")])],1),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-label type="default">Default</n-label>\n<n-label type="primary" tag="div">Primary</n-label> \x3c!--This label will be rendered as a div--\x3e\n<n-label type="success">Success</n-label>\n<n-label type="info">Info</n-label>\n<n-label type="warning">Warning</n-label>\n<n-label type="danger">Danger</n-label>\n            ')]),t._v("\n          ")]),t._v("\n        ")])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tim-row",attrs:{id:"textarea-row"}},[n("h2",[t._v(" Textarea ")]),t._v(" "),n("legend"),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("p",[t._v("\n          The textarea has a new style, so it looks similar to all other inputs.\n        ")]),t._v(" "),n("div",{staticClass:"row"},[n("textarea",{staticClass:"form-control",attrs:{placeholder:"Here can be your nice text",rows:"5"}})])]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<textarea class="form-control" v-model="textarea" placeholder="Here can be your nice text" rows="5" ></textarea>\n            ')]),t._v("\n          ")]),t._v("\n          "),n("code",{staticClass:"language-javascript"},[t._v("\nexport default{\n    data() {\n      return {\n        textarea: ''\n      }\n    }\n}\n          ")]),t._v("\n        ")])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-header page-header-small clear-filter",attrs:{"filter-color":"orange"}},[n("div",{staticClass:"page-header-image",staticStyle:{"background-image":"url('static/img/header.jpg')"},attrs:{"data-parallax":"true"}}),t._v(" "),n("div",{staticClass:"container"},[n("div",{staticClass:"content-center"},[n("h1",{staticClass:"title text-center"},[t._v("Components Documentation")]),t._v(" "),n("h3",{staticClass:"description text-center"},[t._v("Elements description - v1.0.0")])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bootstrap-switch bootstrap-switch-wrapper bootstrap-switch-animate",class:t.switchClass},[n("div",{staticClass:"bootstrap-switch-container",on:{click:function(e){t.triggerToggle()}}},[n("span",{staticClass:"bootstrap-switch-handle-on bootstrap-switch-primary"},[t._v("\n    "+t._s(t.onText)+"\n    ")]),t._v(" "),n("span",{staticClass:"bootstrap-switch-label"}),t._v(" "),n("span",{staticClass:"bootstrap-switch-handle-off bootstrap-switch-primary"},[t._v(t._s(t.offText))])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tim-row",attrs:{id:"checkbox-row"}},[n("h2",[t._v(" Checkboxes ")]),t._v(" "),n("legend"),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("p",[t._v("\n          Easy to use checkbox components with v-model\n        ")]),t._v(" "),n("div",{staticClass:"row"},[n("n-checkbox",{model:{value:t.unchecked,callback:function(e){t.unchecked=e},expression:"unchecked"}},[t._v("Unchecked")]),t._v(" "),n("n-checkbox",{model:{value:t.checked,callback:function(e){t.checked=e},expression:"checked"}},[t._v("Checked")]),t._v(" "),n("n-checkbox",{attrs:{type:"success"},model:{value:t.primary,callback:function(e){t.primary=e},expression:"primary"}},[t._v("Success")]),t._v(" "),n("n-checkbox",{attrs:{type:"danger"},model:{value:t.danger,callback:function(e){t.danger=e},expression:"danger"}},[t._v("Danger")]),t._v(" "),n("n-checkbox",{attrs:{disabled:""},model:{value:t.disabled,callback:function(e){t.disabled=e},expression:"disabled"}},[t._v("Checked and disabled")])],1)]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-checkbox v-model="unchecked">Unchecked</n-checkbox>\n<n-checkbox v-model="checked">Checked</n-checkbox>\n<n-checkbox v-model="danger" type="danger">Danger</n-checkbox>\n<n-checkbox v-model="disabled" disabled>Checked</n-checkbox>\n            ')]),t._v("\n          ")]),t._v("\n          "),n("code",{staticClass:"language-javascript"},[t._v("\nexport default{\n    data() {\n      return {\n        unchecked: false,\n        checked: true,\n        disabled: true,\n        danger: true,\n        primary: true\n      }\n    }\n  }")]),t._v("\n        ")])])]),t._v(" "),n("h2",[t._v(" Radio buttons")]),t._v(" "),n("legend"),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("p",[t._v("\n          Pretty, easy to use radio buttons\n\n        ")]),t._v(" "),n("div",{staticClass:"row"},[n("n-radio",{attrs:{label:"1"},model:{value:t.simpleRadio,callback:function(e){t.simpleRadio=e},expression:"simpleRadio"}},[t._v("Option 1")]),t._v(" "),n("n-radio",{attrs:{label:"2"},model:{value:t.simpleRadio,callback:function(e){t.simpleRadio=e},expression:"simpleRadio"}},[t._v("Option 2")])],1),t._v(" "),n("div",{staticClass:"row"},[n("n-radio",{attrs:{label:"1",disabled:""},model:{value:t.disabledRadio,callback:function(e){t.disabledRadio=e},expression:"disabledRadio"}},[t._v(" Disabled radio is off")]),t._v(" "),n("n-radio",{attrs:{label:"2",disabled:""},model:{value:t.disabledRadio,callback:function(e){t.disabledRadio=e},expression:"disabledRadio"}},[t._v(" Disabled radio is on")])],1)]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-radio v-model="simpleRadio" label="1">Option 1</n-radio>\n<n-radio v-model="simpleRadio" label="2">Option 2</n-radio>\n\n<n-radio v-model="disabledRadio" label="1" disabled> Disabled radio is off</n-radio>\n<n-radio v-model="disabledRadio" label="2" disabled> Disabled radio is on</n-radio>\n            ')]),t._v("\n          ")]),t._v("\n          "),n("code",{staticClass:"language-javascript"},[t._v("\nexport default{\n    data() {\n      return {\n        simpleRadio: '1',\n        disabledRadio: '2',\n      }\n    }\n  }")]),t._v("\n        ")])])]),t._v(" "),n("h2",[t._v(" Toggle buttons ")]),t._v(" "),n("legend"),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("p",[t._v("\n          V-model ready toggle buttons as a fancy alternative to checkboxes\n        ")]),t._v(" "),n("div",{staticClass:"row"},[n("n-toggle",{model:{value:t.simpleToggle,callback:function(e){t.simpleToggle=e},expression:"simpleToggle"}}),t._v(" "),n("n-toggle",{attrs:{onText:"ON",offText:"OFF"},model:{value:t.textToggle,callback:function(e){t.textToggle=e},expression:"textToggle"}})],1)]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-toggle v-model="simpleToggle"></n-toggle>\n<n-toggle onText="ON" offText="OFF" v-model="textToggle"></n-toggle>\n            ')]),t._v("\n          ")]),t._v("\n          "),n("code",{staticClass:"language-javascript"},[t._v("\nexport default{\n    data() {\n      return {\n        simpleToggle: false,\n        textToggle: true\n      }\n    }\n  }")]),t._v("\n        ")])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"n-radio radio"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{id:t.cbId,type:"radio",name:t.name,disabled:t.disabled},domProps:{checked:!0===t.model,value:t.label,checked:t._q(t.model,t.label)},on:{__c:function(e){t.model=t.label}}}),t._v(" "),n("label",{attrs:{for:t.cbId}},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"demo-block",class:[t.blockClass,{hover:t.hovering}],on:{mouseenter:function(e){t.hovering=!0},mouseleave:function(e){t.hovering=!1}}},[t._t("source"),t._v(" "),n("div",{staticClass:"meta"},[n("div",{staticClass:"description"},[t._t("default")],2),t._v(" "),t._t("highlight")],2),t._v(" "),n("div",{staticClass:"demo-block-control",on:{click:function(e){t.isExpanded=!t.isExpanded}}},[n("transition",{attrs:{name:"arrow-slide"}},[n("i",{class:[t.iconClass,{hovering:t.hovering}]})]),t._v(" "),n("transition",{attrs:{name:"text-slide"}},[n("span",{directives:[{name:"show",rawName:"v-show",value:t.hovering,expression:"hovering"}]},[t._v(t._s(t.controlText))])])],1)],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"pagination",class:t.paginationClass},t._l(t.total,function(e){return n("li",{staticClass:"page-item",class:{active:t.currentActivePage===e}},[n("a",{staticClass:"page-link",on:{click:function(n){t.changePage(e)}}},[t._v(t._s(e))])])}))},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"n-input form-group",class:t.styleClasses},[t.hasIcon&&"left"===t.iconAlign?n("span",{staticClass:"input-group-addon"},[t._t("default")],2):t._e(),t._v(" "),n("input",{staticClass:"form-control",attrs:{type:t.type,placeholder:t.placeholder},domProps:{value:t.value},on:{input:function(e){t.$emit("input",e.target.value)}}}),t._v(" "),t.hasIcon&&"right"===t.iconAlign?n("span",{staticClass:"input-group-addon"},[t._t("default")],2):t._e()])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav-bar"),t._v(" "),n("div",{staticClass:"wrapper"},[n("top-navbar"),t._v(" "),n("main-content")],1)],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"section"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),t._v(" "),n("div",{staticClass:"col-lg-8 col-md-12"},[n("div",{staticClass:"tim-container"},[n("buttons")],1),t._v(" "),n("div",{staticClass:"tim-container"},[n("checkboxes")],1),t._v(" "),n("div",{staticClass:"tim-container"},[n("inputs")],1),t._v(" "),n("div",{staticClass:"tim-container"},[n("textareas")],1),t._v(" "),n("div",{staticClass:"tim-container"},[n("progress-bars")],1),t._v(" "),n("div",{staticClass:"tim-container"},[n("labels")],1)])])])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-lg-3 col-md-6"},[n("div",{staticClass:"fixed-section"},[n("ul",[n("li",[n("a",{attrs:{href:"#buttons-row"}},[t._v("Buttons")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#checkbox-row"}},[t._v("Checkbox/Radio/Toggle")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#inputs-row"}},[t._v("Inputs")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#textarea-row"}},[t._v("Textarea")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#progress-row"}},[t._v("Progress Bars")])]),t._v(" "),n("li",[n("a",{attrs:{href:"#labels-row"}},[t._v("Labels")])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"n-progress progress-container",class:t.progressClass},[n("span",{staticClass:"progress-badge"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"progress",style:t.progressHeight},[n("div",{staticClass:"progress-bar",style:t.progressWidth,attrs:{role:"progressbar","aria-valuenow":"60","aria-valuemin":"0","aria-valuemax":"100"}},[t.showPercentage?n("span",{staticClass:"progress-value"},[t._v(t._s(t.progressPercentage))]):t._e()])])])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"navbar navbar-toggleable-md fixed-top bg-primary navbar-transparent",attrs:{"color-on-scroll":"500"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"navbar-translate"},[n("button",{staticClass:"navbar-toggler navbar-toggler-right",attrs:{type:"button","data-toggle":"collapse","data-target":"#navigation","aria-controls":"navigation-index","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-bar bar1"}),t._v(" "),n("span",{staticClass:"navbar-toggler-bar bar2"}),t._v(" "),n("span",{staticClass:"navbar-toggler-bar bar3"})])]),t._v(" "),n("div",{staticClass:"collapse navbar-collapse justify-content-end",attrs:{id:"navigation","data-nav-image":"static/img/blurred-image-1.jpg"}},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://github.com/cristijora/vue-now-ui"}},[t._v("Back to Kit")])]),t._v(" "),n("li",{staticClass:"nav-item"},[n("a",{staticClass:"nav-link",attrs:{href:"https://github.com/cristijora/vue-now-ui/issues"}},[t._v("Have an issue?")])])])])])])}]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"n-checkbox checkbox",class:t.checkboxType},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.model,expression:"model"}],attrs:{id:t.cbId,type:"checkbox",disabled:t.disabled},domProps:{checked:!0===t.model,checked:Array.isArray(t.model)?t._i(t.model,null)>-1:t.model},on:{__c:function(e){var n=t.model,a=e.target,s=!!a.checked;if(Array.isArray(n)){var r=t._i(n,null);s?r<0&&(t.model=n.concat(null)):r>-1&&(t.model=n.slice(0,r).concat(n.slice(r+1)))}else t.model=s}}}),t._v(" "),n("label",{attrs:{for:t.cbId}},[t._t("default")],2)])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tim-row",attrs:{id:"progress-row"}},[n("h2",[t._v(" Progress bars ")]),t._v(" "),n("legend"),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("p",[t._v("\n          Customizable progress bars via props. 6 types of progress bars with different colors to suit your application\n        ")]),t._v(" "),n("n-progress",{attrs:{percentage:20}},[t._v("Default")]),t._v(" "),n("n-progress",{attrs:{percentage:30,status:"primary"}},[t._v("Primary")]),t._v(" "),n("n-progress",{attrs:{percentage:40,status:"info"}},[t._v("Info")]),t._v(" "),n("n-progress",{attrs:{percentage:50,status:"success"}},[t._v("Success")]),t._v(" "),n("n-progress",{attrs:{percentage:60,status:"danger","show-percentage":!1}},[t._v("Danger no percentage")]),t._v(" "),n("n-progress",{attrs:{percentage:100,status:"warning",height:3}},[t._v("Warning with custom height")])],1),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-progress :percentage="20" >Default</n-progress>\n<n-progress :percentage="30" status="primary">Primary</n-progress>\n<n-progress :percentage="40" status="info">Info</n-progress>\n<n-progress :percentage="50" status="success">Success</n-progress>\n<n-progress :percentage="60" status="danger" :show-percentage="false">Danger no percentage</n-progress>\n<n-progress :percentage="100" status="warning" :height="3">Warning with custom height</n-progress>\n            ')]),t._v("\n          ")]),t._v("\n        ")])])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tim-row",attrs:{id:"inputs-row"}},[n("h2",[t._v(" Inputs ")]),t._v(" "),n("legend"),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("p",[t._v("\n          We restyled the Bootstrap input to give it a more flat, minimal look. You can use them with regular labels, states or input groups.\n        ")]),t._v(" "),n("div",{staticClass:"row"},[n("div",{staticClass:"col-sm-4"},[n("n-input",{attrs:{placeholder:"Simple","no-border":""},model:{value:t.simple,callback:function(e){t.simple=e},expression:"simple"}})],1),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("n-input",{attrs:{placeholder:"Border"},model:{value:t.border,callback:function(e){t.border=e},expression:"border"}})],1),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("n-input",{staticClass:"has-success",attrs:{"no-border":""},model:{value:t.success,callback:function(e){t.success=e},expression:"success"}})],1),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("n-input",{staticClass:"has-danger",model:{value:t.danger,callback:function(e){t.danger=e},expression:"danger"}})],1),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("n-input",{attrs:{placeholder:"Right Icon","has-icon":"","no-border":""},model:{value:t.iconRight,callback:function(e){t.iconRight=e},expression:"iconRight"}},[n("i",{staticClass:"fa fa-user-circle"})])],1),t._v(" "),n("div",{staticClass:"col-sm-4"},[n("n-input",{attrs:{placeholder:"Left Icon","has-icon":"","no-border":"",iconAlign:"left"},model:{value:t.iconLeft,callback:function(e){t.iconLeft=e},expression:"iconLeft"}},[n("i",{staticClass:"fa fa-user-circle"})])],1)])]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-input v-model="simple" placeholder="Simple" no-border></n-input>\n<n-input v-model="border" placeholder="Border"></n-input>\n<n-input v-model="success" no-border class="has-success"></n-input>\n\n<n-input v-model="danger" class="has-danger"></n-input>\n<n-input v-model="iconRight" placeholder="Right Icon" has-icon no-border>\n  <i class="fa fa-user-circle"></i>\n</n-input>\n<n-input v-model="iconLeft" placeholder="Left Icon" has-icon no-border iconAlign="left">\n  <i class="fa fa-user-circle"></i>\n</n-input>\n            ')]),t._v("\n          ")]),t._v("\n          "),n("code",{staticClass:"language-javascript"},[t._v("\nexport default{\n    data() {\n      return {\n        simple: '',\n        border: '',\n        iconRight: '',\n        iconLeft: '',\n        success: 'Success',\n        danger: 'Error input'\n      }\n    }\n}\n")]),t._v("\n        ")])])]),t._v(" "),n("p")],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tim-row",attrs:{id:"buttons-row"}},[n("h2",[t._v("Buttons")]),t._v(" "),n("legend"),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("h4",[t._v("Colors")]),t._v(" "),n("p",[t._v("We worked over the original Bootstrap classes, choosing a different, slightly intenser color pallete:")]),t._v(" "),n("p",[n("n-button",[t._v("Default")]),t._v(" "),n("n-button",{attrs:{type:"primary"}},[t._v("Primary")]),t._v(" "),n("n-button",{attrs:{type:"info"}},[t._v("Info")]),t._v(" "),n("br"),t._v(" "),n("n-button",{attrs:{type:"success"}},[t._v("Success")]),t._v(" "),n("n-button",{attrs:{type:"warning"}},[t._v("Warning")]),t._v(" "),n("n-button",{attrs:{type:"danger"}},[t._v("Danger")]),t._v(" "),n("n-button",{attrs:{type:"neutral"}},[t._v("Neutral")])],1)]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",{staticClass:"line-numbers"},[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-button>Default</n-button>\n<n-button type="primary">Primary</n-button>\n<n-button type="info">Info</n-button>\n<n-button type="success">Success</n-button>\n\n<n-button type="warning">Warning</n-button>\n<n-button type="danger">Danger</n-button>\n<n-button type="neutral">Neutral</n-button>\n            ')]),t._v("\n\n          ")]),t._v("\n        ")])])]),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("h4",[t._v("Sizes")]),t._v(" "),n("p",[t._v("Buttons come in all needed sizes:")]),t._v(" "),n("p",[n("n-button",{attrs:{type:"primary",size:"lg"}},[t._v("Large")]),t._v(" "),n("n-button",{attrs:{type:"primary"}},[t._v("Normal")]),t._v(" "),n("n-button",{attrs:{type:"primary",size:"sm"}},[t._v("Small")])],1)]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",{staticClass:"line-numbers"},[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-button type="primary" size="lg">Large</n-button>\n<n-button type="primary">Normal</n-button>\n<n-button type="primary" size="sm">Small</n-button>\n            ')]),t._v("\n\n          ")]),t._v("\n        ")])])]),t._v(" "),n("demo-block",[n("div",{staticClass:"source",slot:"source"},[n("h4",[t._v("Styles")]),t._v(" "),n("p",[t._v("\n          We added extra classes that can help you better customise the look. You can use regular buttons, rounded corners buttons or plain simple buttons. Let's see some examples:")]),t._v(" "),n("p",[n("n-button",{attrs:{type:"primary"}},[t._v("Default")]),t._v(" "),n("n-button",{attrs:{type:"primary",round:""}},[t._v("Round")]),t._v(" "),n("n-button",{attrs:{type:"primary",round:""}},[n("i",{staticClass:"now-ui-icons ui-2_favourite-28"}),t._v(" With Icon")]),t._v(" "),n("n-button",{attrs:{type:"primary",round:"",icon:"","icon-mini":""}},[n("i",{staticClass:"now-ui-icons ui-2_favourite-28"})]),t._v(" "),n("n-button",{attrs:{type:"primary",simple:""}},[t._v("Simple")])],1),t._v(" "),n("p",[t._v("\n          Button groups and disabled state all work like they are supposed to. We used the Nucleo icons that can be found "),n("a",{attrs:{href:"https://nucleoapp.com/?ref=creativetim",target:"_blank"}},[t._v("here")]),t._v(".")])]),t._v(" "),n("div",{staticClass:"highlight",slot:"highlight"},[n("pre",{staticClass:"line-numbers"},[t._v("\n          "),n("code",{staticClass:"language-markup"},[t._v("\n            "),n("script",{attrs:{type:"prism-html-markup"}},[t._v('\n<n-button type="primary">Default</n-button>\n<n-button type="primary" round>Round</n-button>\n<n-button type="primary" round><i class="now-ui-icons ui-2_favourite-28"></i> With Icon</n-button>\n<n-button type="primary" round icon icon-mini><i class="now-ui-icons ui-2_favourite-28"></i></n-button>\n<n-button type="primary" simple>Simple</n-button>\n            ')]),t._v("\n\n          ")]),t._v("\n        ")])])])],1)},staticRenderFns:[]}}],[20]);
//# sourceMappingURL=app.5d6b78148a6fb5c1ac01.js.map