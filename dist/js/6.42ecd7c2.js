webpackJsonp([6],{83:function(e,t,s){var a=s(37)(s(84),s(85),null,null,null);a.options.__file="/Users/kerwinliu/Documents/code/code/learnEnglish/src/components/HeaderView.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] HeaderView.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},84:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(29);t["default"]={props:{beforeBack:{type:Function,"default":null},pageName:{type:String,"default":"index"},pageTitle:{type:String,"default":"index"},iconName:{type:String,"default":"back"}},mounted:function(){(0,a.saveFrom)(this.pageName,this.$router.history.current)},methods:{goBack:function(){this.beforeBack?this.beforeBack(this.backToLastPage):this.backToLastPage()},backToLastPage:function(){var e=(0,a.getBack)(this.pageName);this.$router.push({name:e.name,query:e.para})}}}},85:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"gb-header"},[s("div",{staticClass:"header-left"},[s("a",{staticClass:"icon","class":e.iconName,attrs:{href:"javascript:void (0);"},on:{click:e.goBack}})]),e._v(" "),s("h1",{staticClass:"has-icon"},[e._v(e._s(e.pageTitle))]),e._v(" "),e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},95:function(e,t,s){var a=s(37)(s(96),s(100),null,null,null);a.options.__file="/Users/kerwinliu/Documents/code/code/learnEnglish/src/pages/courses/details.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] details.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},96:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(83),n=a(i),o=s(10),r=a(o),l=s(97),c=a(l),u=new r["default"];t["default"]={data:function(){return{modalVisiable:!1,id:0,data:null,audioList:[]}},components:{HeaderView:n["default"],Audio:c["default"]},beforeRouteEnter:function(e,t,s){var a=e.query;s(function(e){e.id=a.id,e.getData(),e.getAudioList()})},methods:{getData:function(){var e=this;u.send({url:"getWechatCourse",params:{id:this.id},success:function(t){e.data=t.item}})},getAudioList:function(){var e=this;u.send({url:"getWechatCourseAudio",params:{id:this.id},success:function(t){e.audioList=t.items}})},hideModal:function(){this.modalVisiable=!1}}}},97:function(e,t,s){var a=s(37)(s(98),s(99),null,null,null);a.options.__file="/Users/kerwinliu/Documents/code/code/learnEnglish/src/components/Audio.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] Audio.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},98:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(30),n=s(10),o=a(n);new o["default"];t["default"]={props:{src:{type:String,"default":""},label:{type:String,"default":""},intro:{type:String,"default":""},onplay:{type:Function,"default":function(){}},onpause:{type:Function,"default":function(){}},text:{type:String,"default":"免费试听"},audioid:{type:Number,"default":0}},data:function(){return{playState:0,loadFailed:!1}},computed:{classObject:function(){return{"fa-play-circle":0===this.playState,"fa-stop-circle":1===this.playState}}},methods:{clickAction:function(e){if(this.loadFailed)return(0,i.showAlert)(this.label+"课程下载失败"),!1;var t=e.currentTarget.childNodes[0];0!==this.playState?(this.playState=0,t.pause()):(this.closeAll(),this.playState=1,t.play())},closeAll:function(){var e=document.getElementsByTagName("audio");console.log(e);for(var t=0;t<e.length;t++)e[t].pause()},onerror:function(e){console.log(e),console.log(this.label+"课程下载失败"),this.loadFailed=!0},pauseListener:function(e){this.playState=0},playing:function(e){console.log(e)},sendApi:function(){Models.send({url:"getWechatPlayAudio",params:{audioId:this.audioId},success:function(e){}})}}}},99:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("label",{attrs:{"for":""}},[e._v("L-"+e._s(e.label))]),e._v(" "),s("span",[s("a",{attrs:{href:"javascript:void(0);"},on:{click:e.clickAction}},[s("audio",{attrs:{src:e.src},on:{error:e.onerror,playing:e.playing,waiting:e.playing,pause:e.pauseListener}},[e._v("\n                Your browser does not support the audio element.\n            ")]),e._v(" "),s("i",{staticClass:"fa","class":e.classObject}),e._v(" \n            "+e._s(e.playState?"停止":e.text)+"\n        ")])]),e._v(" "),s("em",[e._v(e._s(e.intro))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},100:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page pg-courses pg-course-details"},[s("HeaderView",{attrs:{pageName:"courseDetail",pageTitle:"课程详情"}},[s("div",{staticClass:"header-right"},[s("a",{attrs:{href:"javascript:void(0);"}},[e._v("购买")])])]),e._v(" "),s("div",{staticClass:"mainview"},[e.data?s("section",{staticClass:"course-details"},[s("div",{staticClass:"course-summary"},[s("div",{staticClass:"cover"},[s("img",{attrs:{src:e.data.courseImgUrl}})]),e._v(" "),s("div",{staticClass:"title"},[e._v(e._s(e.data.courseName))]),e._v(" "),s("div",{staticClass:"category"},[e._v("共"+e._s(e.data.coursePeriod)+"课时 • "+e._s(e.data.courseClassifyName))]),e._v(" "),s("div",{staticClass:"price"},[e._v("课程费 ￥"+e._s(e.data.coursePrice))])]),e._v(" "),s("div",{staticClass:"course-desc",domProps:{innerHTML:e._s(e.data.courseIntroduce)}}),e._v(" "),e.audioList.length>0?s("div",{staticClass:"gb-listview"},[s("div",{staticClass:"legend"},[e._v("课程")]),e._v(" "),s("ul",e._l(e.audioList,function(t,a){return s("li",{key:a},[e._v('=`http://wx.ledgetrans.com.cn/api/wechatcoursePlay/${item.Id}`\n\t\t\t\t\t\t\t:label="index"\n\t\t\t\t\t\t\t:id="item.Id"\n\t\t\t\t\t\t\t:intro="item.AudioName"/>\n\t\t            ')])}))]):e._e()]):e._e(),e._v(" "),s("section",{directives:[{name:"show",rawName:"v-show",value:e.modalVisiable,expression:"modalVisiable"}],staticClass:"quick-buy"},[s("div",{staticClass:"modal"}),e._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"hd"},[s("div",{staticClass:"title"},[e._v("购买课程")]),e._v(" "),s("a",{staticClass:"cancel",attrs:{href:"javascript:void(0)"},on:{click:e.hideModal}},[e._v("取消")])]),e._v(" "),e._m(0),e._v(" "),e._m(1)])])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"bd"},[s("ul",{staticClass:"listview"},[s("li",[s("label",[e._v("课程")]),e._v(" "),s("span",[e._v("课程名称字数再长也不截断")])]),e._v(" "),s("li",[s("label",[e._v("课程费")]),e._v(" "),s("span",[e._v("￥100.00")])]),e._v(" "),s("li",[s("label",{attrs:{"for":""}},[e._v("可用积分")]),e._v(" "),s("span",[e._v("100")]),e._v(" "),s("span",{staticClass:"right"},[s("input",{staticClass:"ctrl-checkbox",attrs:{type:"checkbox",id:"",name:"",value:"",checked:""}})])]),e._v(" "),s("li",[s("label",[e._v("获赠积分")]),e._v(" "),s("span",[e._v("990")])])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"action"},[s("a",{staticClass:"button",attrs:{href:"javascript:void(0);"}},[e._v("去支付￥99.00")])])}]},e.exports.render._withStripped=!0}});