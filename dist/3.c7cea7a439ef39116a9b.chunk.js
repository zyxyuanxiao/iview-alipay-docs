webpackJsonp([3],{525:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(602),a=n.n(i);for(var o in i)["default","default"].indexOf(o)<0&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n(614),r=n.n(s),c=n(92),l=c(a.a,r.a,!1,null,null,null);l.options.__file="src/views/components/toast.vue",e.default=l.exports},529:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(197),a=function(t){return t&&t.__esModule?t:{default:t}}(i),o=a.default.prefix,s={beforeComponents:[{title:"快速上手",titleEn:"Quick Start",path:o+"/docs/guide/start"},{title:"更新日志",titleEn:"Change Log",path:o+"/docs/guide/update"}],components:[{type:"Layout",title:"布局",list:[{title:"Layout 栅格布局",path:"/components/layout"},{title:"Grid 宫格",path:"/components/grid"},{title:"Panel 面板",path:"/components/panel"},{title:"List 列表",path:"/components/list"},{title:"Card 卡片",path:"/components/card"}]},{type:"Basic",title:"基础",list:[{title:"Button 按钮",path:"/components/button"},{title:"Color 色彩",path:"/components/color"},{title:"Icon 图标",path:"/components/icon"}]},{type:"Navigation",title:"导航",list:[{title:"TabBar 标签栏",path:"/components/tab-bar"},{title:"Tabs 标签页",path:"/components/tabs"},{title:"Drawer 抽屉",path:"/components/drawer"},{title:"Page 分页",path:"/components/page"},{title:"Steps 步骤条",path:"/components/steps"},{title:"NoticeBar 通告栏",path:"/components/notice-bar"},{title:"Index 索引选择器",path:"/components/index"},{title:"Sticky 吸顶容器",path:"/components/sticky"}]},{type:"Feedback",title:"操作反馈",list:[{title:"ActionSheet 动作面板",path:"/components/action-sheet"},{title:"Toast 轻提示",path:"/components/toast"},{title:"Modal 对话框",path:"/components/modal"},{title:"Message 全局提醒",path:"/components/message"},{title:"Spin 加载中",path:"/components/spin"},{title:"Swipeout 滑动菜单",path:"/components/swipeout"}]},{type:"View",title:"视图",list:[{title:"Badge 徽章",path:"/components/badge"},{title:"Alert 警告提示",path:"/components/alert"},{title:"Tag 标签",path:"/components/tag"},{title:"Progress 进度条",path:"/components/progress"},{title:"Avatar 头像",path:"/components/avatar"},{title:"Collapse 折叠面板",path:"/components/collapse"},{title:"CountDown 倒计时",path:"/components/count-down"},{title:"Divider 分隔符",path:"/components/divider"},{title:"LoadMore 页底提示",path:"/components/load-more"}]},{type:"Form",title:"表单",list:[{title:"Input 输入框",path:"/components/input"},{title:"Radio 单选",path:"/components/radio"},{title:"Checkbox 复选",path:"/components/checkbox"},{title:"Switch 开关",path:"/components/switch"},{title:"Rate 评分",path:"/components/rate"},{title:"InputNumber 数字输入框",path:"/components/input-number"}]}]};s.components.forEach(function(t){t.list&&t.list.forEach(function(t){t.path=o+t.path})}),e.default=s},530:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean},computed:{title_link:function(){return this.title.replace(/\s/g,"_")}}}},531:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{handleChange:function(t){"iview"===t?window.location.href="https://www.iviewui.com":"iview-weapp"===t?window.location.href="https://weapp.iviewui.com":"inmap"===t&&(window.location.href="http://inmap.talkingdata.com")}}}},532:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(558),o=i(a),s=n(529),r=(i(s),n(557)),c=i(r),l=n(61),d=i(l);e.default={inject:["app"],components:{Navigate:o.default,navMenu:c.default},data:function(){return{list:[],need_api:!1,donate:!1,ask:!1,activeKey:"",adCarousel:0,ad_index:this.app.ad_index}},methods:{handleModalClose:function(){this.donate=!1},handleAskClose:function(){this.ask=!1},updateActiveNav:function(){var t=["/docs/guide/install","/docs/guide/install-en","/docs/guide/start","/docs/guide/start-en","/docs/guide/i18n","/docs/guide/i18n-en","/docs/guide/theme","/docs/guide/theme-en","/docs/guide/iview-loader","/docs/guide/iview-loader-en","/overview","/overview-en","/docs/guide/update","/docs/guide/update-en"],e=this.$route.path;e.indexOf("component")>-1||t.indexOf(e)>-1?this.activeKey="component":e.indexOf("practice")>-1?this.activeKey="practice":e.indexOf("live")>-1?this.activeKey="live":this.activeKey="component"},handleNavMenuChange:function(t){this.activeKey=t},handleClickLink:function(t){var e=document.getElementById(t).offsetTop;window.location.hash=t;var n=e+15;"API"===t&&(n-=150),window.scrollTo(0,n)},handleAsideAd:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(this.ask=!0)}},mounted:function(){var t=this;this.updateActiveNav();var e=this.$slots.default[0].elm.querySelectorAll(".example");if(e.length){this.need_api=!0;for(var n=0;n<e.length;n++){var i=e[n].querySelectorAll("header span a")[0].getAttribute("href").replace("#","");this.list.push({title:i,path:i})}}else{this.need_api=!1;for(var a=this.$slots.default[0].elm.querySelectorAll(".anchor"),o=0;o<a.length;o++){var s=a[o].querySelectorAll("h2")[0];if(s){var r=s.innerHTML,c=a[o].querySelectorAll("h2")[0].getAttribute("id");this.list.push({title:r,path:c})}}}d.default.$on("on-donate-show",function(){t.donate=!0})}}},533:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return(0,s.default)(e).forEach(function(n){t=t.replace(new RegExp("<"+n+"(\\W+)","g"),"<"+e[n]+"$1").replace(new RegExp("</"+n+">","g"),"</"+e[n]+">")}),t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(198),s=i(o),r=n(134),c=i(r),l=n(133),d=i(l),u=n(544),p=i(u);e.default={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data:function(){return{openScale:!1,code:"",copied:!1,title:"Code"}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},mounted:function(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,c.default.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,c.default.highlightBlock(this.$refs.code2);var t=this.$parent.$parent.$parent;"Demo"===t.$options.name&&(this.title=t.title)},methods:{clip:function(){var t=this,e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),n=new d.default(".copy",{text:function(){return e}});n.on("success",function(e){e.clearSelection(),n.destroy(),t.copied=!0,t.$Message.success("代码已复制到剪贴板"),setTimeout(function(){t.copied=!1},2e3)})},scale:function(){this.openScale=!0},getSource:function(t,e){var n=new RegExp("<"+e+"[^>]*>"),i=t.match(n);return i?(i=i[0],t.slice(t.indexOf(i)+i.length,t.lastIndexOf("</"+e+">"))):""},openFiddle:function(){var t=this.$refs.code.textContent,e=this.getSource(t,"script").replace(/export default/,"var Main ="),n=this.getSource(t,"style"),i='<div id="app">'+a(this.getSource(t,"template"),p.default)+"</div>",o=['<script src="//unpkg.com/vue/dist/vue.js"><\/script>','<script src="//unpkg.com/iview/dist/iview.min.js"><\/script>',i].join("\n"),s='@import url("//unpkg.com/iview/dist/styles/iview.css");\n#app{padding: 32px;}'+n,r=e+"\nvar Component = Vue.extend(Main)\nnew Component().$mount('#app')",c={js:r,css:s,html:o,panel_css:1,panel_js:3},l={method:"post",action:"https://jsfiddle.net/api/post/library/pure/",target:"_blank",id:"fiddle-form",style:"display: none;"},d=document.createElement("textarea"),u=document.createElement("form");for(var v in l)u.setAttribute(v,l[v]);for(var h in c)d.name=h,d.value=c[h].toString(),u.appendChild(d.cloneNode());document.body.appendChild(u),u.submit(),document.body.removeChild(u)}}}},534:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(529),o=i(a),s=n(197),r=i(s),c=n(61),l=(i(c),n(554)),d=i(l);e.default={components:{ApplicationMenu:d.default},props:{activeKey:String},data:function(){return{root:r.default.prefix+"/",search:"",navigateList:[],liveDot:!1,currentActiveKey:this.activeKey}},watch:{activeKey:function(t){this.currentActiveKey=t},currentActiveKey:function(t){this.$emit("on-change",t)}},methods:{handleSearch:function(t){var e=this;this.search="",this.$refs.select.setQuery(""),this.$nextTick(function(){setTimeout(function(){e.$router.push(t)},300)})},handleSelect:function(t){var e=this;"index"===t?this.$router.push(this.root):"component"===t&&this.$router.push(o.default.beforeComponents[0].path),this.$nextTick(function(){e.updateActiveNav()})},updateActiveNav:function(){var t=["/docs/guide/install","/docs/guide/start","/docs/guide/i18n","/docs/guide/theme","/docs/guide/iview-loader","/overview","/docs/guide/update"],e=this.$route.path;e.indexOf("component")>-1||t.indexOf(e)>-1?this.currentActiveKey="component":e.indexOf("practice")>-1?this.currentActiveKey="practice":e.indexOf("live")>-1?this.currentActiveKey="live":this.currentActiveKey="component"},handleGoToGitHub:function(){window.open("https://github.com/ant-move/mini-iview")},handleGoToTwitter:function(){}},created:function(){for(var t=[],e=0;e<o.default.components.length;e++)for(var n=0;n<o.default.components[e].list.length;n++)t.push(o.default.components[e].list[n]);this.navigateList=t;var i=window.localStorage.getItem("liveVersion");this.liveDot=!i||i<r.default.liveVersion}}},535:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(529),o=i(a),s=n(197),r=i(s),c=n(61),l=i(c),d=n(199),u=i(d);e.default={components:{adSend:u.default},props:{type:{type:[String,Number]}},data:function(){return{navigate:o.default,showDot:!1,activeKey:this.$route.path,showAd:!1}},methods:{handleDonate:function(){l.default.$emit("on-donate-show")},handleSelect:function(t){var e=this;this.$nextTick(function(){e.$router.push(t)})},handleAd:function(){},handleBuy:function(t){"taobao"===t?window.open("https://detail.tmall.com/item.htm?id=559480603657"):"jd"===t?window.open("https://item.jd.com/12215519.html"):"video"===t?window.open("https://segmentfault.com/ls/1650000011074057"):"dangdang"===t&&window.open("http://product.dangdang.com/25180286.html")}},created:function(){this.activeKey=this.$route.path},mounted:function(){var t=window.localStorage.getItem("version");this.showDot=!t||t<r.default.version,console.log(this.navigate)}}},536:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"Demo",props:{title:{type:String,default:""},vertical:{type:Boolean,default:!1},hideCode:{type:Boolean,default:!1}},data:function(){return{showCode:!1,showMore:!0,demo_height:0,code_height:0,ready:!1,lang:this.$lang}},computed:{codeHeight:function(){var t={};return this.ready&&(this.showCode?t.height=this.code_height+"px":t.height=this.demo_height+"px"),t},style:function(){var t={opacity:1};return this.hideCode&&!this.showCode&&(t.opacity=0),t}},mounted:function(){var t=this;this.$nextTick(function(){var e=t.$children[0].$children[0].$el.clientHeight,n=t.$children[0].$children[1].$el.clientHeight+20;t.code_height=n,n<=e&&!t.hideCode&&(t.showMore=!1),t.demo_height=t.hideCode?30:e,t.ready=!0})}}},537:function(t,e,n){t.exports=n.p+"1002ce86f2774b5470c043d8da3bb408.png"},538:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"anchor"},[t.h1?n("h1",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.h2?n("h2",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.h3?n("h3",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.h4?n("h4",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.h5?n("h5",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.h6?n("h6",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("default"),t._v(" "),n("a",{attrs:{href:"#"+t.title_link}},[t._v("#")])],2)},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};e.default=o},539:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigate"},["component"===t.type?n("Menu",{attrs:{width:"auto","active-name":t.activeKey},on:{"on-select":t.handleSelect}},[t._l(t.navigate.beforeComponents,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path}},["更新日志"!==e.title?[t._v("\n                "+t._s(e.title)+"\n            ")]:t._e(),t._v(" "),"更新日志"===e.title?[n("Badge",{attrs:{dot:t.showDot}},[t._v("\n                    "+t._s(e.title)+"\n                ")])]:t._e()],2)}),t._v(" "),n("div",{staticClass:"navigate-group"},[t._v("组件")]),t._v(" "),t._l(t.navigate.components,function(e){return n("Menu-group",{key:e.type,attrs:{title:e.title}},t._l(e.list,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path}},[[t._v("\n                    "+t._s(e.title.split(" ")[0])+"\n                    "),n("span",{staticClass:"navigate-group-span"},[t._v(t._s(e.title.split(" ")[1]))])]],2)}),1)})],2):t._e()],1)},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};e.default=o},540:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"wrapper"},[i("div",{staticClass:"wrapper-header"},[i("nav-menu",{attrs:{"active-key":t.activeKey},on:{"on-change":t.handleNavMenuChange}})],1),t._v(" "),i("div",{staticClass:"wrapper-container"},[i("Row",[i("i-col",{staticClass:"wrapper-navigate",attrs:{span:"4"}},[i("Navigate",{attrs:{type:t.activeKey}})],1),t._v(" "),i("i-col",{attrs:{span:"17"}},[i("div",{staticClass:"wrapper-content ivu-article"},[t._t("default")],2)]),t._v(" "),i("i-col",{attrs:{span:"3"}},[i("Affix",{attrs:{"offset-top":75}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.list.length,expression:"list.length"}],staticClass:"catalogue"},[i("card",{attrs:{"dis-hover":""}},[i("div",{staticClass:"catalogue-title"},[[t._v("目录")]],2),t._v(" "),i("div",{staticClass:"catalogue-content"},[i("ul",[t._l(t.list,function(e){return i("li",[i("a",{attrs:{href:"#"+e.path},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.handleClickLink(e.path)}}},[t._v(t._s(e.title))])])}),t._v(" "),t.need_api?i("li",[i("a",{attrs:{href:"#API"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClickLink("API")}}},[t._v("API")])]):t._e()],2)])])],1),t._v(" "),[i("div",{staticStyle:{"margin-top":"20px"}}),t._v(" "),i("div",{staticClass:"article-qrcode"},[i("img",{attrs:{src:"https://cache.amap.com/ecology/tool/antmove/web/assets/iView-Aliapp.jpg"}})])]],2)],1)],1)],1)]),t._v(" "),i("div",{staticClass:"footer"},[i("div",{staticClass:"footer-main"},[i("Row",[i("i-col",{attrs:{span:"5"}},[i("h4",[i("Icon",{attrs:{type:"social-github"}}),t._v("\n                        GitHub\n                    ")],1),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/ant-move/mini-iview",target:"_blank"}},[t._v("iView Alipay App")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/iview/iview",target:"_blank"}},[t._v("iView")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/TalkingData/iview-weapp",target:"_blank"}},[t._v("iView Weapp")])])])]),t._v(" "),i("i-col",{attrs:{span:"5"}},[i("h4",[i("Icon",{attrs:{type:"link"}}),t._v("\n                        相关站点\n                    ")],1),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://ant-move.github.io/website/",target:"_blank"}},[t._v("Antmove")]),t._v(" - 做最好的小程序转换器\n                        ")]),t._v(" "),i("li",[i("a",{attrs:{href:"https://www.talkingdata.com/",target:"_blank"}},[t._v("TalkingData")]),t._v(" - 用数据的心智去超越\n                        ")])])]),t._v(" "),i("i-col",{attrs:{span:"5",offset:"2"}},[i("h4",[i("Icon",{attrs:{type:"chatbubbles"}}),t._v("\n                        社区\n                    ")],1),t._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://github.com/ant-move/mini-iview/issues",target:"_blank"}},[t._v("反馈建议")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/ant-move/mini-iview/issues/new",target:"_blank"}},[t._v("提交bug")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://segmentfault.com/search?q=antmove",target:"_blank"}},[t._v("SegmentFault")])])])]),t._v(" "),i("i-col",{attrs:{span:"5",offset:"2"}},[i("div",{staticClass:"footer-aside"},[i("div",{staticClass:"footer-logo"},[i("img",{attrs:{src:n(552)}})])])])],1)],1)])])},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};e.default=o},541:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Menu",{attrs:{mode:"horizontal","active-name":t.currentActiveKey},on:{"on-select":t.handleSelect}},[i("div",{staticClass:"wrapper-header-nav"},[i("router-link",{staticClass:"wrapper-header-nav-logo",attrs:{to:t.root}},[i("img",{attrs:{src:n(537)}})]),t._v(" "),i("div",{staticClass:"wrapper-header-nav-search"},[i("i-select",{ref:"select",attrs:{filterable:"",placeholder:"搜索组件"},on:{"on-change":t.handleSearch},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},t._l(t.navigateList,function(e){return i("i-option",{key:e.path,attrs:{value:e.path}},[t._v("\n                    "+t._s(e.title)+"\n                ")])}),1)],1),t._v(" "),i("div",{staticClass:"wrapper-header-nav-list"},[i("Menu-item",{attrs:{name:"index"}},[i("Icon",{attrs:{type:"ios-navigate"}}),t._v("\n                首页\n            ")],1),t._v(" "),i("Menu-item",{attrs:{name:"component"}},[i("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n                组件\n            ")],1),t._v(" "),i("ButtonGroup",{staticClass:"wrapper-header-nav-list-btn"},[i("Button",{attrs:{type:"ghost",size:"small",icon:"social-github"},on:{click:t.handleGoToGitHub}})],1)],1)],1)])},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};e.default=o},542:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pre",{class:{bg:t.bg}},[n("code",{ref:"code",class:t.language},[t._t("default")],2)]),t._v(" "),"Code"!==t.title?n("span",{staticClass:"open-fiddle",on:{click:t.openFiddle}},[n("Tooltip",{attrs:{content:"在 JSFiddle 中打开",placement:"top",transfer:""}},[n("Icon",{attrs:{type:"code",size:"18"}})],1)],1):t._e(),t._v(" "),n("span",{staticClass:"scale",on:{click:t.scale}},[n("Tooltip",{attrs:{content:"放大",placement:"top",transfer:""}},[n("Icon",{attrs:{type:"qr-scanner",size:"18"}})],1)],1),t._v(" "),n("span",{staticClass:"copy",on:{click:t.clip}},[n("Tooltip",{attrs:{content:"复制代码",placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.copied,expression:"!copied"}],attrs:{type:"clipboard",size:"18"}}),t._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:t.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"checkmark",size:"18"}})],1)],1),t._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:t.title,width:"65"},model:{value:t.openScale,callback:function(e){t.openScale=e},expression:"openScale"}},[n("pre",{class:{bg:t.bg}},[n("code",{ref:"code2",class:t.language})])])],1)},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};e.default=o},543:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"apps"},[n("Dropdown",{attrs:{transfer:"",trigger:"click"},on:{"on-click":t.handleChange}},[n("img",{staticClass:"apps-menu",attrs:{src:"https://file.iviewui.com/icon/application.png"}}),t._v(" "),n("Icon",{staticClass:"apps-arrow",attrs:{type:"ios-arrow-down"}}),t._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"iview"}},[n("img",{staticClass:"apps-img",attrs:{src:"https://file.iviewui.com/icon/iview.png"}}),t._v(" "),n("span",{staticClass:"apps-name"},[t._v("iView")])]),t._v(" "),n("DropdownItem",{attrs:{name:"iview-weapp"}},[n("img",{staticClass:"apps-img",attrs:{src:"https://file.iviewui.com/icon/iview.png"}}),t._v(" "),n("span",{staticClass:"apps-name"},[t._v("iView Weapp")])]),t._v(" "),n("DropdownItem",{attrs:{name:"inmap"}},[n("img",{staticClass:"apps-img",attrs:{src:"https://file.iviewui.com/icon/inmap.png"}}),t._v(" "),n("span",{staticClass:"apps-name"},[t._v("inMap")])])],1)],1)],1)},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};e.default=o},544:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={Affix:"affix",Alert:"alert",AutoComplete:"auto-complete",Avatar:"avatar",BackTop:"back-top",Badge:"badge",Breadcrumb:"breadcrumb",BreadcrumbItem:"breadcrumb-item",Button:"i-button",ButtonGroup:"button-group",Card:"card",Carousel:"carousel",CarouselItem:"carousel-item",Cascader:"cascader",Checkbox:"checkbox",CheckboxGroup:"checkbox-group",Circle:"i-circle",Col:"i-col",Collapse:"collapse",ColorPicker:"color-picker",DatePicker:"date-picker",Dropdown:"dropdown",DropdownItem:"dropdown-item",DropdownMenu:"dropdown-menu",Form:"i-form",FormItem:"form-item",Icon:"icon",Input:"i-input",InputNumber:"input-number",Layout:"layout",Sider:"sider",Header:"i-header",Content:"i-content",Footer:"i-footer",Menu:"i-menu",MenuGroup:"menu-group",MenuItem:"menu-item",Submenu:"submenu",Modal:"modal",Option:"i-option",OptionGroup:"option-group",Page:"page",Panel:"panel",Poptip:"poptip",Progress:"i-progress",Radio:"radio",RadioGroup:"radio-group",Rate:"rate",Row:"row",Scroll:"scroll",Select:"i-select",Slider:"slider",Spin:"spin",Step:"step",Steps:"steps",Switch:"i-switch",Table:"i-table",Tabs:"tabs",TabPane:"tab-pane",Tag:"tag",Timeline:"timeline",TimelineItem:"timeline-item",TimePicker:"time-picker",Tooltip:"tooltip",Transfer:"transfer",Tree:"tree",Upload:"upload"}},545:function(t,e){},546:function(t,e){},547:function(t,e){},548:function(t,e){},549:function(t,e){},550:function(t,e){},551:function(t,e){},552:function(t,e,n){t.exports=n.p+"71855c83e416d82db92a7ba7ebc65122.png"},553:function(t,e,n){"use strict";function i(t){l||n(545)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(530),o=n.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n(538),c=n.n(r),l=!1,d=n(92),u=i,p=d(o.a,c.a,!1,u,null,null);p.options.__file="src/components/anchor.vue",e.default=p.exports},554:function(t,e,n){"use strict";function i(t){l||n(551)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(531),o=n.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n(543),c=n.n(r),l=!1,d=n(92),u=i,p=d(o.a,c.a,!1,u,null,null);p.options.__file="src/components/applications.vue",e.default=p.exports},555:function(t,e,n){"use strict";function i(t){l||n(547)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(532),o=n.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n(540),c=n.n(r),l=!1,d=n(92),u=i,p=d(o.a,c.a,!1,u,null,null);p.options.__file="src/components/article.vue",e.default=p.exports},556:function(t,e,n){"use strict";function i(t){l||(n(550),n(549))}Object.defineProperty(e,"__esModule",{value:!0});var a=n(533),o=n.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n(542),c=n.n(r),l=!1,d=n(92),u=i,p=d(o.a,c.a,!1,u,"data-v-c2ff9106",null);p.options.__file="src/components/code.vue",e.default=p.exports},557:function(t,e,n){"use strict";function i(t){l||n(548)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(534),o=n.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n(541),c=n.n(r),l=!1,d=n(92),u=i,p=d(o.a,c.a,!1,u,null,null);p.options.__file="src/components/menu.vue",e.default=p.exports},558:function(t,e,n){"use strict";function i(t){l||n(546)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(535),o=n.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n(539),c=n.n(r),l=!1,d=n(92),u=i,p=d(o.a,c.a,!1,u,"data-v-39279dfe",null);p.options.__file="src/components/navigate.vue",e.default=p.exports},559:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Row",{staticClass:"example",class:{"example-vertical":t.vertical},attrs:{id:t.title}},[n("i-col",{staticClass:"example-demo",attrs:{span:t.vertical?24:12}},[n("div",{staticClass:"example-case"},[t._t("demo")],2),t._v(" "),n("header",{staticClass:"example-header"},[n("span",[t._v("\n                "+t._s(t.title)+"\n                "),n("a",{attrs:{href:"#"+t.title}},[t._v("#")])])]),t._v(" "),n("div",{staticClass:"example-desc"},[t._t("desc")],2)]),t._v(" "),n("div",{staticClass:"example-split"}),t._v(" "),n("i-col",{staticClass:"example-code",style:t.codeHeight,attrs:{span:t.vertical?24:12}},[n("div",{style:t.style},[t._t("code")],2),t._v(" "),t.showMore?n("div",{staticClass:"example-code-more",on:{click:function(e){t.showCode=!t.showCode}}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.showCode,expression:"!showCode"}],attrs:{type:"ios-arrow-down"}}),t._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:t.showCode,expression:"showCode"}],attrs:{type:"ios-arrow-up"}}),t._v(" "),n("i-button",{directives:[{name:"show",rawName:"v-show",value:t.hideCode&&!t.showCode,expression:"hideCode && !showCode"}],attrs:{type:"text"}},["zh-CN"===t.lang?[t._v("显示代码")]:[t._v("Show Code")]],2)],1):t._e()])],1)},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};e.default=o},560:function(t,e){},561:function(t,e,n){"use strict";function i(t){l||n(560)}Object.defineProperty(e,"__esModule",{value:!0});var a=n(536),o=n.n(a);for(var s in a)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return a[t]})}(s);var r=n(559),c=n.n(r),l=!1,d=n(92),u=i,p=d(o.a,c.a,!1,u,null,null);p.options.__file="src/components/demo.vue",e.default=p.exports},602:function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var a=n(555),o=i(a),s=n(556),r=i(s),c=n(561),l=i(c),d=n(685),u=i(d),p=n(553),v=i(p);e.default={components:{iArticle:o.default,iCode:r.default,Demo:l.default,Anchor:v.default},data:function(){return{code:u.default}}}},614:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("i-article",[n("article",[n("h1",[t._v("Toast 轻提示")]),t._v(" "),n("Anchor",{attrs:{title:"概述",h2:""}}),t._v(" "),n("p",[t._v("一种轻量级反馈/提示，可以用来显示不会打断用户操作的内容，适合用于页面转场、数据交互的等场景中。")]),t._v(" "),n("Anchor",{attrs:{title:"使用指南",h2:""}}),t._v(" "),n("p",[t._v("在 .json 中引入组件")]),t._v(" "),n("i-code",{attrs:{bg:"",lang:"json"}},[t._v(t._s(t.code.import))]),t._v(" "),n("Anchor",{attrs:{title:"示例",h2:""}}),t._v(" "),n("Alert",{attrs:{"show-icon":""}},[n("div",{attrs:{slot:"desc"},slot:"desc"},[n("p",[t._v("Toast 组件主要依靠 JavaScript 主动调用，所以只需在 wxml 中添加一个组件，并设置 id，其余配置在 .js 里完成。")]),t._v(" "),n("p",[t._v("如果只有一个 Toast 组件，建议将 id 设置为 #toast，否则需要额外配置 selector 属性来指定。")])])]),t._v(" "),n("i-code",{attrs:{bg:"",lang:"html"}},[t._v(t._s(t.code.usage))]),t._v(" "),n("br"),n("br"),t._v(" "),n("i-code",{attrs:{bg:"",lang:"js"}},[t._v(t._s(t.code.js))]),t._v(" "),n("ad"),t._v(" "),n("div",{staticClass:"api"},[n("Anchor",{attrs:{title:"API",h2:""}}),t._v(" "),n("Anchor",{attrs:{title:"$Toast properties",h3:""}}),t._v(" "),n("table",[n("thead",[n("tr",[n("th",[t._v("属性")]),t._v(" "),n("th",[t._v("说明")]),t._v(" "),n("th",[t._v("类型")]),t._v(" "),n("th",[t._v("默认值")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[t._v("content")]),t._v(" "),n("td",[t._v("内容")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("type")]),t._v(" "),n("td",[t._v("内置的类型，可选值为 default、success、warning、error、loading")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("default")])]),t._v(" "),n("tr",[n("td",[t._v("duration")]),t._v(" "),n("td",[t._v("持续时间，单位秒，设置为 0 则不自动关闭，需调用 $Toast.hide() 方法手动关闭")]),t._v(" "),n("td",[t._v("Number")]),t._v(" "),n("td",[t._v("2")])]),t._v(" "),n("tr",[n("td",[t._v("icon")]),t._v(" "),n("td",[t._v("自定义图标")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("image")]),t._v(" "),n("td",[t._v("自定义图片地址")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("-")])]),t._v(" "),n("tr",[n("td",[t._v("mask")]),t._v(" "),n("td",[t._v("是否显示一个隐藏的遮罩层，点击遮罩层可立即关闭组件")]),t._v(" "),n("td",[t._v("Boolean")]),t._v(" "),n("td",[t._v("true")])]),t._v(" "),n("tr",[n("td",[t._v("selector")]),t._v(" "),n("td",[t._v("组件标识")]),t._v(" "),n("td",[t._v("String")]),t._v(" "),n("td",[t._v("#toast")])])])])],1)],1)])},a=[];i._withStripped=!0;var o={render:i,staticRenderFns:a};e.default=o},685:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={};i.import='\n"usingComponents": {\n    "i-toast": "../../dist/toast/index"\n}\n',i.usage='\n<i-button type="ghost" onClick="handleText">只显示文本</i-button>\n<i-button type="ghost" onClick="handleSuccess">成功</i-button>\n<i-button type="ghost" onClick="handleWarning">警告</i-button>\n<i-button type="ghost" onClick="handleError">错误</i-button>\n<i-button type="ghost" onClick="handleLoading">Loading</i-button>\n<i-button type="ghost" onClick="handleIcon">使用图标</i-button>\n<i-button type="ghost" onClick="handleImage">使用自定义图片</i-button>\n<i-button type="ghost" onClick="handleMask">无遮罩层</i-button>\n\n<i-toast id="toast" />\n',i.js="\nconst { $Toast } = require('../../dist/base/index');\n\nPage({\n    handleText () {\n        $Toast({\n            content: '这是文本提示'\n        });\n    },\n    handleSuccess () {\n        $Toast({\n            content: '成功的提示',\n            type: 'success'\n        });\n    },\n    handleWarning () {\n        $Toast({\n            content: '警告的提示',\n            type: 'warning'\n        });\n    },\n    handleError () {\n        $Toast({\n            content: '错误的提示',\n            type: 'error'\n        });\n    },\n    handleLoading () {\n        $Toast({\n            content: '加载中',\n            type: 'loading'\n        });\n    },\n    handleIcon () {\n        $Toast({\n            content: '使用内置的图标',\n            icon: 'praise'\n        });\n    },\n    handleImage () {\n        $Toast({\n            content: '使用自定义图片',\n            image: 'https://i.loli.net/2017/08/21/599a521472424.jpg'\n        });\n    },\n    handleMask () {\n        $Toast({\n            content: '5秒后自动关闭',\n            icon: 'prompt',\n            duration: 0,\n            mask: false\n        });\n        setTimeout(() => {\n            $Toast.hide();\n        }, 5000);\n    },\n});\n",e.default=i}});