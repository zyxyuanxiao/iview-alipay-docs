webpackJsonp([2],{526:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(603),i=n.n(a);for(var o in a)["default","default"].indexOf(o)<0&&function(t){n.d(e,t,function(){return a[t]})}(o);var s=n(644),r=n.n(s),l=n(92),c=l(i.a,r.a,!1,null,null,null);c.options.__file="src/views/guide/start.vue",e.default=c.exports},529:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(197),i=function(t){return t&&t.__esModule?t:{default:t}}(a),o=i.default.prefix,s={beforeComponents:[{title:"快速上手",titleEn:"Quick Start",path:o+"/docs/guide/start"},{title:"更新日志",titleEn:"Change Log",path:o+"/docs/guide/update"}],components:[{type:"Layout",title:"布局",list:[{title:"Layout 栅格布局",path:"/components/layout"},{title:"Grid 宫格",path:"/components/grid"},{title:"Panel 面板",path:"/components/panel"},{title:"List 列表",path:"/components/list"},{title:"Card 卡片",path:"/components/card"}]},{type:"Basic",title:"基础",list:[{title:"Button 按钮",path:"/components/button"},{title:"Color 色彩",path:"/components/color"},{title:"Icon 图标",path:"/components/icon"}]},{type:"Navigation",title:"导航",list:[{title:"TabBar 标签栏",path:"/components/tab-bar"},{title:"Tabs 标签页",path:"/components/tabs"},{title:"Drawer 抽屉",path:"/components/drawer"},{title:"Page 分页",path:"/components/page"},{title:"Steps 步骤条",path:"/components/steps"},{title:"NoticeBar 通告栏",path:"/components/notice-bar"},{title:"Index 索引选择器",path:"/components/index"},{title:"Sticky 吸顶容器",path:"/components/sticky"}]},{type:"Feedback",title:"操作反馈",list:[{title:"ActionSheet 动作面板",path:"/components/action-sheet"},{title:"Toast 轻提示",path:"/components/toast"},{title:"Modal 对话框",path:"/components/modal"},{title:"Message 全局提醒",path:"/components/message"},{title:"Spin 加载中",path:"/components/spin"},{title:"Swipeout 滑动菜单",path:"/components/swipeout"}]},{type:"View",title:"视图",list:[{title:"Badge 徽章",path:"/components/badge"},{title:"Alert 警告提示",path:"/components/alert"},{title:"Tag 标签",path:"/components/tag"},{title:"Progress 进度条",path:"/components/progress"},{title:"Avatar 头像",path:"/components/avatar"},{title:"Collapse 折叠面板",path:"/components/collapse"},{title:"CountDown 倒计时",path:"/components/count-down"},{title:"Divider 分隔符",path:"/components/divider"},{title:"LoadMore 页底提示",path:"/components/load-more"}]},{type:"Form",title:"表单",list:[{title:"Input 输入框",path:"/components/input"},{title:"Radio 单选",path:"/components/radio"},{title:"Checkbox 复选",path:"/components/checkbox"},{title:"Switch 开关",path:"/components/switch"},{title:"Rate 评分",path:"/components/rate"},{title:"InputNumber 数字输入框",path:"/components/input-number"}]}]};s.components.forEach(function(t){t.list&&t.list.forEach(function(t){t.path=o+t.path})}),e.default=s},530:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{title:String,h1:Boolean,h2:Boolean,h3:Boolean,h4:Boolean,h5:Boolean,h6:Boolean},computed:{title_link:function(){return this.title.replace(/\s/g,"_")}}}},531:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{handleChange:function(t){"iview"===t?window.location.href="https://www.iviewui.com":"iview-weapp"===t?window.location.href="https://weapp.iviewui.com":"inmap"===t&&(window.location.href="http://inmap.talkingdata.com")}}}},532:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(558),o=a(i),s=n(529),r=(a(s),n(557)),l=a(r),c=n(61),p=a(c);e.default={inject:["app"],components:{Navigate:o.default,navMenu:l.default},data:function(){return{list:[],need_api:!1,donate:!1,ask:!1,activeKey:"",adCarousel:0,ad_index:this.app.ad_index}},methods:{handleModalClose:function(){this.donate=!1},handleAskClose:function(){this.ask=!1},updateActiveNav:function(){var t=["/docs/guide/install","/docs/guide/install-en","/docs/guide/start","/docs/guide/start-en","/docs/guide/i18n","/docs/guide/i18n-en","/docs/guide/theme","/docs/guide/theme-en","/docs/guide/iview-loader","/docs/guide/iview-loader-en","/overview","/overview-en","/docs/guide/update","/docs/guide/update-en"],e=this.$route.path;e.indexOf("component")>-1||t.indexOf(e)>-1?this.activeKey="component":e.indexOf("practice")>-1?this.activeKey="practice":e.indexOf("live")>-1?this.activeKey="live":this.activeKey="component"},handleNavMenuChange:function(t){this.activeKey=t},handleClickLink:function(t){var e=document.getElementById(t).offsetTop;window.location.hash=t;var n=e+15;"API"===t&&(n-=150),window.scrollTo(0,n)},handleAsideAd:function(t){arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&(this.ask=!0)}},mounted:function(){var t=this;this.updateActiveNav();var e=this.$slots.default[0].elm.querySelectorAll(".example");if(e.length){this.need_api=!0;for(var n=0;n<e.length;n++){var a=e[n].querySelectorAll("header span a")[0].getAttribute("href").replace("#","");this.list.push({title:a,path:a})}}else{this.need_api=!1;for(var i=this.$slots.default[0].elm.querySelectorAll(".anchor"),o=0;o<i.length;o++){var s=i[o].querySelectorAll("h2")[0];if(s){var r=s.innerHTML,l=i[o].querySelectorAll("h2")[0].getAttribute("id");this.list.push({title:r,path:l})}}}p.default.$on("on-donate-show",function(){t.donate=!0})}}},533:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}function i(t,e){return(0,s.default)(e).forEach(function(n){t=t.replace(new RegExp("<"+n+"(\\W+)","g"),"<"+e[n]+"$1").replace(new RegExp("</"+n+">","g"),"</"+e[n]+">")}),t}Object.defineProperty(e,"__esModule",{value:!0});var o=n(198),s=a(o),r=n(134),l=a(r),c=n(133),p=a(c),u=n(544),d=a(u);e.default={props:{lang:{type:String,default:"javascript"},bg:{type:Boolean,default:!1}},data:function(){return{openScale:!1,code:"",copied:!1,title:"Code"}},computed:{language:function(){return"auto"==this.lang?"":this.lang}},mounted:function(){this.code=this.$refs.code.innerHTML.replace(/\n/,""),this.$refs.code.innerHTML=this.code,l.default.highlightBlock(this.$refs.code),this.$refs.code2.innerHTML=this.code,l.default.highlightBlock(this.$refs.code2);var t=this.$parent.$parent.$parent;"Demo"===t.$options.name&&(this.title=t.title)},methods:{clip:function(){var t=this,e=this.code.replace(/&lt;/g,"<").replace(/&gt;/g,">").replace(/&amp;/g,"&"),n=new p.default(".copy",{text:function(){return e}});n.on("success",function(e){e.clearSelection(),n.destroy(),t.copied=!0,t.$Message.success("代码已复制到剪贴板"),setTimeout(function(){t.copied=!1},2e3)})},scale:function(){this.openScale=!0},getSource:function(t,e){var n=new RegExp("<"+e+"[^>]*>"),a=t.match(n);return a?(a=a[0],t.slice(t.indexOf(a)+a.length,t.lastIndexOf("</"+e+">"))):""},openFiddle:function(){var t=this.$refs.code.textContent,e=this.getSource(t,"script").replace(/export default/,"var Main ="),n=this.getSource(t,"style"),a='<div id="app">'+i(this.getSource(t,"template"),d.default)+"</div>",o=['<script src="//unpkg.com/vue/dist/vue.js"><\/script>','<script src="//unpkg.com/iview/dist/iview.min.js"><\/script>',a].join("\n"),s='@import url("//unpkg.com/iview/dist/styles/iview.css");\n#app{padding: 32px;}'+n,r=e+"\nvar Component = Vue.extend(Main)\nnew Component().$mount('#app')",l={js:r,css:s,html:o,panel_css:1,panel_js:3},c={method:"post",action:"https://jsfiddle.net/api/post/library/pure/",target:"_blank",id:"fiddle-form",style:"display: none;"},p=document.createElement("textarea"),u=document.createElement("form");for(var v in c)u.setAttribute(v,c[v]);for(var f in l)p.name=f,p.value=l[f].toString(),u.appendChild(p.cloneNode());document.body.appendChild(u),u.submit(),document.body.removeChild(u)}}}},534:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(529),o=a(i),s=n(197),r=a(s),l=n(61),c=(a(l),n(554)),p=a(c);e.default={components:{ApplicationMenu:p.default},props:{activeKey:String},data:function(){return{root:r.default.prefix+"/",search:"",navigateList:[],liveDot:!1,currentActiveKey:this.activeKey}},watch:{activeKey:function(t){this.currentActiveKey=t},currentActiveKey:function(t){this.$emit("on-change",t)}},methods:{handleSearch:function(t){var e=this;this.search="",this.$refs.select.setQuery(""),this.$nextTick(function(){setTimeout(function(){e.$router.push(t)},300)})},handleSelect:function(t){var e=this;"index"===t?this.$router.push(this.root):"component"===t&&this.$router.push(o.default.beforeComponents[0].path),this.$nextTick(function(){e.updateActiveNav()})},updateActiveNav:function(){var t=["/docs/guide/install","/docs/guide/start","/docs/guide/i18n","/docs/guide/theme","/docs/guide/iview-loader","/overview","/docs/guide/update"],e=this.$route.path;e.indexOf("component")>-1||t.indexOf(e)>-1?this.currentActiveKey="component":e.indexOf("practice")>-1?this.currentActiveKey="practice":e.indexOf("live")>-1?this.currentActiveKey="live":this.currentActiveKey="component"},handleGoToGitHub:function(){window.open("https://github.com/ant-move/mini-iview")},handleGoToTwitter:function(){}},created:function(){for(var t=[],e=0;e<o.default.components.length;e++)for(var n=0;n<o.default.components[e].list.length;n++)t.push(o.default.components[e].list[n]);this.navigateList=t;var a=window.localStorage.getItem("liveVersion");this.liveDot=!a||a<r.default.liveVersion}}},535:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(529),o=a(i),s=n(197),r=a(s),l=n(61),c=a(l),p=n(199),u=a(p);e.default={components:{adSend:u.default},props:{type:{type:[String,Number]}},data:function(){return{navigate:o.default,showDot:!1,activeKey:this.$route.path,showAd:!1}},methods:{handleDonate:function(){c.default.$emit("on-donate-show")},handleSelect:function(t){var e=this;this.$nextTick(function(){e.$router.push(t)})},handleAd:function(){},handleBuy:function(t){"taobao"===t?window.open("https://detail.tmall.com/item.htm?id=559480603657"):"jd"===t?window.open("https://item.jd.com/12215519.html"):"video"===t?window.open("https://segmentfault.com/ls/1650000011074057"):"dangdang"===t&&window.open("http://product.dangdang.com/25180286.html")}},created:function(){this.activeKey=this.$route.path},mounted:function(){var t=window.localStorage.getItem("version");this.showDot=!t||t<r.default.version,console.log(this.navigate)}}},537:function(t,e,n){t.exports=n.p+"1002ce86f2774b5470c043d8da3bb408.png"},538:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"anchor"},[t.h1?n("h1",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.h2?n("h2",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.h3?n("h3",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.h4?n("h4",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.h5?n("h5",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t.h6?n("h6",{attrs:{id:t.title_link}},[t._v(t._s(t.title))]):t._e(),t._v(" "),t._t("default"),t._v(" "),n("a",{attrs:{href:"#"+t.title_link}},[t._v("#")])],2)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.default=o},539:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"navigate"},["component"===t.type?n("Menu",{attrs:{width:"auto","active-name":t.activeKey},on:{"on-select":t.handleSelect}},[t._l(t.navigate.beforeComponents,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path}},["更新日志"!==e.title?[t._v("\n                "+t._s(e.title)+"\n            ")]:t._e(),t._v(" "),"更新日志"===e.title?[n("Badge",{attrs:{dot:t.showDot}},[t._v("\n                    "+t._s(e.title)+"\n                ")])]:t._e()],2)}),t._v(" "),n("div",{staticClass:"navigate-group"},[t._v("组件")]),t._v(" "),t._l(t.navigate.components,function(e){return n("Menu-group",{key:e.type,attrs:{title:e.title}},t._l(e.list,function(e){return n("Menu-item",{key:e.path,attrs:{name:e.path}},[[t._v("\n                    "+t._s(e.title.split(" ")[0])+"\n                    "),n("span",{staticClass:"navigate-group-span"},[t._v(t._s(e.title.split(" ")[1]))])]],2)}),1)})],2):t._e()],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.default=o},540:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"wrapper"},[a("div",{staticClass:"wrapper-header"},[a("nav-menu",{attrs:{"active-key":t.activeKey},on:{"on-change":t.handleNavMenuChange}})],1),t._v(" "),a("div",{staticClass:"wrapper-container"},[a("Row",[a("i-col",{staticClass:"wrapper-navigate",attrs:{span:"4"}},[a("Navigate",{attrs:{type:t.activeKey}})],1),t._v(" "),a("i-col",{attrs:{span:"17"}},[a("div",{staticClass:"wrapper-content ivu-article"},[t._t("default")],2)]),t._v(" "),a("i-col",{attrs:{span:"3"}},[a("Affix",{attrs:{"offset-top":75}},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.list.length,expression:"list.length"}],staticClass:"catalogue"},[a("card",{attrs:{"dis-hover":""}},[a("div",{staticClass:"catalogue-title"},[[t._v("目录")]],2),t._v(" "),a("div",{staticClass:"catalogue-content"},[a("ul",[t._l(t.list,function(e){return a("li",[a("a",{attrs:{href:"#"+e.path},on:{click:function(n){return n.stopPropagation(),n.preventDefault(),t.handleClickLink(e.path)}}},[t._v(t._s(e.title))])])}),t._v(" "),t.need_api?a("li",[a("a",{attrs:{href:"#API"},on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.handleClickLink("API")}}},[t._v("API")])]):t._e()],2)])])],1),t._v(" "),[a("div",{staticStyle:{"margin-top":"20px"}}),t._v(" "),a("div",{staticClass:"article-qrcode"})]],2)],1)],1)],1)]),t._v(" "),a("div",{staticClass:"footer"},[a("div",{staticClass:"footer-main"},[a("Row",[a("i-col",{attrs:{span:"5"}},[a("h4",[a("Icon",{attrs:{type:"social-github"}}),t._v("\n                        GitHub\n                    ")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ant-move/mini-iview",target:"_blank"}},[t._v("iView Alipay App")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/iview/iview",target:"_blank"}},[t._v("iView")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/TalkingData/iview-weapp",target:"_blank"}},[t._v("iView Weapp")])])])]),t._v(" "),a("i-col",{attrs:{span:"5"}},[a("h4",[a("Icon",{attrs:{type:"link"}}),t._v("\n                        相关站点\n                    ")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://ant-move.github.io/website/",target:"_blank"}},[t._v("Antmove")]),t._v(" - 做最好的小程序转换器\n                        ")]),t._v(" "),a("li",[a("a",{attrs:{href:"https://www.talkingdata.com/",target:"_blank"}},[t._v("TalkingData")]),t._v(" - 用数据的心智去超越\n                        ")])])]),t._v(" "),a("i-col",{attrs:{span:"5",offset:"2"}},[a("h4",[a("Icon",{attrs:{type:"chatbubbles"}}),t._v("\n                        社区\n                    ")],1),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://github.com/ant-move/mini-iview/issues",target:"_blank"}},[t._v("反馈建议")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ant-move/mini-iview/issues/new",target:"_blank"}},[t._v("提交bug")])]),t._v(" "),a("li",[a("a",{attrs:{href:"https://segmentfault.com/search?q=antmove",target:"_blank"}},[t._v("SegmentFault")])])])]),t._v(" "),a("i-col",{attrs:{span:"5",offset:"2"}},[a("div",{staticClass:"footer-aside"},[a("div",{staticClass:"footer-logo"},[a("img",{attrs:{src:n(552)}})])])])],1)],1)])])},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.default=o},541:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("Menu",{attrs:{mode:"horizontal","active-name":t.currentActiveKey},on:{"on-select":t.handleSelect}},[a("div",{staticClass:"wrapper-header-nav"},[a("router-link",{staticClass:"wrapper-header-nav-logo",attrs:{to:t.root}},[a("img",{attrs:{src:n(537)}})]),t._v(" "),a("div",{staticClass:"wrapper-header-nav-search"},[a("i-select",{ref:"select",attrs:{filterable:"",placeholder:"搜索组件"},on:{"on-change":t.handleSearch},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}},t._l(t.navigateList,function(e){return a("i-option",{key:e.path,attrs:{value:e.path}},[t._v("\n                    "+t._s(e.title)+"\n                ")])}),1)],1),t._v(" "),a("div",{staticClass:"wrapper-header-nav-list"},[a("Menu-item",{attrs:{name:"index"}},[a("Icon",{attrs:{type:"ios-navigate"}}),t._v("\n                首页\n            ")],1),t._v(" "),a("Menu-item",{attrs:{name:"component"}},[a("Icon",{attrs:{type:"ios-keypad"}}),t._v("\n                组件\n            ")],1),t._v(" "),a("ButtonGroup",{staticClass:"wrapper-header-nav-list-btn"},[a("Button",{attrs:{type:"ghost",size:"small",icon:"social-github"},on:{click:t.handleGoToGitHub}})],1)],1)],1)])},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.default=o},542:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("pre",{class:{bg:t.bg}},[n("code",{ref:"code",class:t.language},[t._t("default")],2)]),t._v(" "),"Code"!==t.title?n("span",{staticClass:"open-fiddle",on:{click:t.openFiddle}},[n("Tooltip",{attrs:{content:"在 JSFiddle 中打开",placement:"top",transfer:""}},[n("Icon",{attrs:{type:"code",size:"18"}})],1)],1):t._e(),t._v(" "),n("span",{staticClass:"scale",on:{click:t.scale}},[n("Tooltip",{attrs:{content:"放大",placement:"top",transfer:""}},[n("Icon",{attrs:{type:"qr-scanner",size:"18"}})],1)],1),t._v(" "),n("span",{staticClass:"copy",on:{click:t.clip}},[n("Tooltip",{attrs:{content:"复制代码",placement:"top",transfer:""}},[n("Icon",{directives:[{name:"show",rawName:"v-show",value:!t.copied,expression:"!copied"}],attrs:{type:"clipboard",size:"18"}}),t._v(" "),n("Icon",{directives:[{name:"show",rawName:"v-show",value:t.copied,expression:"copied"}],staticStyle:{color:"#5cb85c"},attrs:{type:"checkmark",size:"18"}})],1)],1),t._v(" "),n("Modal",{attrs:{"class-name":"code-scale-modal",title:t.title,width:"65"},model:{value:t.openScale,callback:function(e){t.openScale=e},expression:"openScale"}},[n("pre",{class:{bg:t.bg}},[n("code",{ref:"code2",class:t.language})])])],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.default=o},543:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"apps"},[n("Dropdown",{attrs:{transfer:"",trigger:"click"},on:{"on-click":t.handleChange}},[n("img",{staticClass:"apps-menu",attrs:{src:"https://file.iviewui.com/icon/application.png"}}),t._v(" "),n("Icon",{staticClass:"apps-arrow",attrs:{type:"ios-arrow-down"}}),t._v(" "),n("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[n("DropdownItem",{attrs:{name:"iview"}},[n("img",{staticClass:"apps-img",attrs:{src:"https://file.iviewui.com/icon/iview.png"}}),t._v(" "),n("span",{staticClass:"apps-name"},[t._v("iView")])]),t._v(" "),n("DropdownItem",{attrs:{name:"iview-weapp"}},[n("img",{staticClass:"apps-img",attrs:{src:"https://file.iviewui.com/icon/iview.png"}}),t._v(" "),n("span",{staticClass:"apps-name"},[t._v("iView Weapp")])]),t._v(" "),n("DropdownItem",{attrs:{name:"inmap"}},[n("img",{staticClass:"apps-img",attrs:{src:"https://file.iviewui.com/icon/inmap.png"}}),t._v(" "),n("span",{staticClass:"apps-name"},[t._v("inMap")])])],1)],1)],1)},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.default=o},544:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={Affix:"affix",Alert:"alert",AutoComplete:"auto-complete",Avatar:"avatar",BackTop:"back-top",Badge:"badge",Breadcrumb:"breadcrumb",BreadcrumbItem:"breadcrumb-item",Button:"i-button",ButtonGroup:"button-group",Card:"card",Carousel:"carousel",CarouselItem:"carousel-item",Cascader:"cascader",Checkbox:"checkbox",CheckboxGroup:"checkbox-group",Circle:"i-circle",Col:"i-col",Collapse:"collapse",ColorPicker:"color-picker",DatePicker:"date-picker",Dropdown:"dropdown",DropdownItem:"dropdown-item",DropdownMenu:"dropdown-menu",Form:"i-form",FormItem:"form-item",Icon:"icon",Input:"i-input",InputNumber:"input-number",Layout:"layout",Sider:"sider",Header:"i-header",Content:"i-content",Footer:"i-footer",Menu:"i-menu",MenuGroup:"menu-group",MenuItem:"menu-item",Submenu:"submenu",Modal:"modal",Option:"i-option",OptionGroup:"option-group",Page:"page",Panel:"panel",Poptip:"poptip",Progress:"i-progress",Radio:"radio",RadioGroup:"radio-group",Rate:"rate",Row:"row",Scroll:"scroll",Select:"i-select",Slider:"slider",Spin:"spin",Step:"step",Steps:"steps",Switch:"i-switch",Table:"i-table",Tabs:"tabs",TabPane:"tab-pane",Tag:"tag",Timeline:"timeline",TimelineItem:"timeline-item",TimePicker:"time-picker",Tooltip:"tooltip",Transfer:"transfer",Tree:"tree",Upload:"upload"}},545:function(t,e){},546:function(t,e){},547:function(t,e){},548:function(t,e){},549:function(t,e){},550:function(t,e){},551:function(t,e){},552:function(t,e,n){t.exports=n.p+"71855c83e416d82db92a7ba7ebc65122.png"},553:function(t,e,n){"use strict";function a(t){c||n(545)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(530),o=n.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n(538),l=n.n(r),c=!1,p=n(92),u=a,d=p(o.a,l.a,!1,u,null,null);d.options.__file="src/components/anchor.vue",e.default=d.exports},554:function(t,e,n){"use strict";function a(t){c||n(551)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(531),o=n.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n(543),l=n.n(r),c=!1,p=n(92),u=a,d=p(o.a,l.a,!1,u,null,null);d.options.__file="src/components/applications.vue",e.default=d.exports},555:function(t,e,n){"use strict";function a(t){c||n(547)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(532),o=n.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n(540),l=n.n(r),c=!1,p=n(92),u=a,d=p(o.a,l.a,!1,u,null,null);d.options.__file="src/components/article.vue",e.default=d.exports},556:function(t,e,n){"use strict";function a(t){c||(n(550),n(549))}Object.defineProperty(e,"__esModule",{value:!0});var i=n(533),o=n.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n(542),l=n.n(r),c=!1,p=n(92),u=a,d=p(o.a,l.a,!1,u,"data-v-c2ff9106",null);d.options.__file="src/components/code.vue",e.default=d.exports},557:function(t,e,n){"use strict";function a(t){c||n(548)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(534),o=n.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n(541),l=n.n(r),c=!1,p=n(92),u=a,d=p(o.a,l.a,!1,u,null,null);d.options.__file="src/components/menu.vue",e.default=d.exports},558:function(t,e,n){"use strict";function a(t){c||n(546)}Object.defineProperty(e,"__esModule",{value:!0});var i=n(535),o=n.n(i);for(var s in i)["default","default"].indexOf(s)<0&&function(t){n.d(e,t,function(){return i[t]})}(s);var r=n(539),l=n.n(r),c=!1,p=n(92),u=a,d=p(o.a,l.a,!1,u,"data-v-39279dfe",null);d.options.__file="src/components/navigate.vue",e.default=d.exports},562:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a={};a.button='\n"usingComponents": {\n    "i-button": "../../dist/button/index"\n}\n',a.wxml='\n<i-button type="primary" onClick="handleClick">这是一个按钮</i-button>\n',a.install="\n# 从 GitHub 下载后，安装依赖\nnpm install\n\n# 编译组件\nnpm run dev\n",e.default=a},565:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={props:{type:{type:String,default:"render"}}}},603:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(555),o=a(i),s=n(556),r=a(s),l=n(562),c=a(l),p=n(553),u=a(p),d=n(697),v=a(d);e.default={components:{iArticle:o.default,iCode:r.default,Anchor:u.default,Study:v.default},data:function(){return{code:c.default}},methods:{}}},608:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",["render"===t.type?n("a",{attrs:{href:"https://segmentfault.com/l/1500000008892728",target:"_blank"}},[n("Icon",{attrs:{type:"social-youtube-outline"}}),t._v(" "),n("span",[t._v(" 学习 Render 函数的内容")])],1):t._e(),t._v(" "),"component"===t.type?n("a",{attrs:{href:"https://segmentfault.com/l/1500000009448056",target:"_blank"}},[n("Icon",{attrs:{type:"social-youtube-outline"}}),t._v(" "),n("span",[t._v(" 学习组件基础内容")])],1):t._e(),t._v(" "),"webpack"===t.type?n("a",{attrs:{href:"https://segmentfault.com/l/1500000009448189",target:"_blank"}},[n("Icon",{attrs:{type:"social-youtube-outline"}}),t._v(" "),n("span",[t._v(" 学习 webpack 内容")])],1):t._e()])},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.default=o},644:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("i-article",[a("article",{staticClass:"markdown-body entry-content p-5",attrs:{itemprop:"text"}},[a("h1",[t._v("\n        iView alipay\n      ")]),t._v(" "),a("h3",[t._v("\n        一套高质量的支付宝小程序 UI 组件库\n      ")]),t._v(" "),a("blockquote",[a("p",[t._v("\n          使用\n          "),a("a",{attrs:{href:"https://ant-move.github.io/website/",rel:"nofollow"}},[t._v("Antmove")]),t._v(" 小程序转换器基于\n          "),a("a",{attrs:{href:"https://github.com/TalkingData/iview-weapp"}},[t._v("iview-weapp")]),t._v(" 转换得到。\n        ")])]),t._v(" "),a("h2",[t._v("\n       文档\n      ")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://weapp.iviewui.com",rel:"nofollow"}},[t._v("微信版官方文档")])]),t._v(" "),a("blockquote",[a("p",[t._v("大部分组件都保留了原有的用法，只有一两个做了少许的改动。支付宝版本文档近期推出。")])]),t._v(" "),a("h2",[t._v("\n        快速上手\n      ")]),t._v(" "),a("br"),t._v(" "),a("h3",[t._v("\n        使用之前\n      ")]),t._v(" "),a("p",[t._v("\n        在开始使用 iView alipay 之前，你需要先阅读\n        "),a("a",{attrs:{href:"https://docs.alipay.com/mini/framework/custom-component-overview",rel:"nofollow"}},[t._v("支付宝小程序自定义组件")]),t._v(" 的相关文档。\n      ")]),t._v(" "),a("h3",[t._v("\n        如何使用\n      ")]),t._v(" "),a("p",[t._v("\n        下载 iView 的代码，将\n        "),a("code",[t._v("dist")]),t._v(" 目录拷贝到自己的项目中。然后按照如下的方式使用组件，以 Button 为例，其它组件在对应的文档页查看：\n      ")]),t._v(" "),a("ul",[a("li",[t._v("添加需要的组件。在页面的 json 中配置（路径根据自己项目位置配置）：")])]),t._v(" "),a("div",{staticClass:"highlight highlight-source-json"},[a("pre",[a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[t._v('"')]),t._v("usingComponents"),a("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(": {\n    "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[t._v('"')]),t._v("i-button"),a("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(": "),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[t._v('"')]),t._v("../../dist/button/index"),a("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v("\n}")])]),t._v(" "),a("ul",{attrs:{start:"2"}},[a("li",[t._v("在 axml 中使用组件：")])]),t._v(" "),a("div",{staticClass:"highlight highlight-text-html-basic"},[a("pre",[t._v("<"),a("span",{staticClass:"pl-ent"},[t._v("i-button")]),t._v(" "),a("span",{staticClass:"pl-e"},[t._v("type")]),t._v("="),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[t._v('"')]),t._v("primary"),a("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(" "),a("span",{staticClass:"pl-e"},[t._v("onClick")]),t._v("="),a("span",{staticClass:"pl-s"},[a("span",{staticClass:"pl-pds"},[t._v('"')]),t._v("handleClick"),a("span",{staticClass:"pl-pds"},[t._v('"')])]),t._v(">这是一个按钮</"),a("span",{staticClass:"pl-ent"},[t._v("i-button")]),t._v(">")])]),t._v(" "),a("h3",[t._v("预览")]),t._v(" "),a("p",[a("img",{attrs:{width:"150px",async:"",src:n(692),alt:""}}),t._v(" "),a("img",{attrs:{width:"150px",async:"",src:n(693),alt:""}}),t._v(" "),a("img",{attrs:{width:"150px",async:"",src:n(694),alt:""}})]),t._v(" "),a("h3",[t._v("\n        IDE 预览\n      ")]),t._v(" "),a("p",[t._v("下载本项目到本地，使用支付宝 IDE 打开 iview-alipay 即可预览。")]),t._v(" "),a("blockquote",[a("p",[t._v("\n          预览时请在项目详情设置中开启\n          "),a("code",[t._v("component2")]),t._v(" 编译，详情可参考\n          "),a("a",{attrs:{href:"https://docs.alipay.com/mini/framework/custom-component-overview#%E4%BD%BF%E7%94%A8%E9%A1%BB%E7%9F%A5",rel:"nofollow"}},[t._v("支付宝小程序自定义组件使用介绍")]),t._v("。\n        ")])]),t._v(" "),a("h2",[t._v("\n        License\n      ")]),t._v(" "),a("p",[a("a",{attrs:{href:"http://opensource.org/licenses/MIT",rel:"nofollow"}},[t._v("MIT")])]),t._v(" "),a("h2",[t._v("\n        感谢\n      ")]),t._v(" "),a("p",[t._v("感谢 TalkingData 团队对 ivew-weapp 的贡献，本项目基于 iview-weapp 转换而来，并做了支付宝小程序平台的适配兼容。")])])])},i=[];a._withStripped=!0;var o={render:a,staticRenderFns:i};e.default=o},692:function(t,e,n){t.exports=n.p+"526910cfa6fa3cc84be09783e4fb102b.gif"},693:function(t,e,n){t.exports=n.p+"d9b709109f7d0eb5ed600de339e757ae.gif"},694:function(t,e,n){t.exports=n.p+"b684ddb29bb562854bb25990fcea34be.gif"},697:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(565),i=n.n(a);for(var o in a)["default","default"].indexOf(o)<0&&function(t){n.d(e,t,function(){return a[t]})}(o);var s=n(608),r=n.n(s),l=n(92),c=l(i.a,r.a,!1,null,null,null);c.options.__file="src/components/study.vue",e.default=c.exports}});