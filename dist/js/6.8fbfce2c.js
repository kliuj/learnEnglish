webpackJsonp([6],{111:function(e,t,s){var a=s(37)(s(112),s(113),null,null,null);a.options.__file="/Users/joy/Desktop/code/learnEnglish/src/components/HeaderView.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] HeaderView.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},112:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(29);t["default"]={props:{beforeBack:{type:Function,"default":null},pageName:{type:String,"default":"index"},pageTitle:{type:String,"default":"index"},iconName:{type:String,"default":"back"}},mounted:function(){(0,a.saveFrom)(this.pageName,this.$router.history.current)},methods:{goBack:function(){this.beforeBack?this.beforeBack(this.backToLastPage):this.backToLastPage()},backToLastPage:function(){var e=(0,a.getBack)(this.pageName);this.$router.push({name:e.name,query:e.para})}}}},113:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",{staticClass:"gb-header"},[s("div",{staticClass:"header-left"},[s("a",{staticClass:"icon","class":e.iconName,attrs:{href:"javascript:void (0);"},on:{click:e.goBack}})]),e._v(" "),s("h1",{staticClass:"has-icon"},[e._v(e._s(e.pageTitle))]),e._v(" "),e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},131:function(e,t,s){var a=s(37)(s(132),s(136),null,null,null);a.options.__file="/Users/joy/Desktop/code/learnEnglish/src/pages/courses/details.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] details.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},132:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=s(7),r=a(i),o=s(111),n=a(o),c=s(10),l=a(c),u=s(133),d=a(u),p=s(30),v=new l["default"];t["default"]={data:function(){return{modalVisiable:!1,id:0,data:null,audioList:[],usercredit:!0,showAudio:!1,selectSource:{},playerListener:null}},components:{HeaderView:n["default"],Audio:d["default"]},mounted:function(){this.playerListener=function(){setTimeout(function(){var e=document.getElementById("audioplayer");e&&e.play()},100)},document.addEventListener("touchend",this.playerListener)},beforeRouteLeave:function(e,t,s){this.playerListener&&document.removeEventListener("touchend",this.playerListener),s()},watch:{usercredit:function(){USER_SETTINGS.UsePrice&&(this.usercredit?this.price=this.data.coursePrice-this.data.userValidCredit*parseInt(USER_SETTINGS.CostPrice)/parseInt(USER_SETTINGS.UseCredit):this.price=this.data.coursePrice,this.getcredit=parseInt(this.price/parseInt(USER_SETTINGS.UsePrice))*parseInt(USER_SETTINGS.UseGiveCredit))}},beforeRouteEnter:function(e,t,s){var a=e.query;s(function(e){e.id=a.id,e.getData(),e.getAudioList()})},methods:{getClass:function(){return(0,p.Browser)().versions.ios?"audio-player":"audio-player-android"},onSelected:function(e,t){this.showAudio=!0,this.selectSource={src:e,intro:t}},closeAudio:function(){this.showAudio=!1},getData:function(){var e=this;v.send({url:"getWechatCourse",params:{id:this.id},success:function(t){e.data=t.item,e.caculetePrice()}})},caculetePrice:function(){if(USER_SETTINGS.UsePrice){if(this.usercredit){var e=this.data.coursePrice-this.data.userValidCredit*parseInt(USER_SETTINGS.CostPrice)/parseInt(USER_SETTINGS.UseCredit);this.price=e>0?e:0}else this.price=this.data.coursePrice;this.getcredit=parseInt(this.price/parseInt(USER_SETTINGS.UsePrice))*parseInt(USER_SETTINGS.UseGiveCredit)}},getAudioList:function(){var e=this;v.send({url:"getWechatCourseAudio",params:{id:this.id},success:function(t){wx.ready(function(){e.audioList=t.items})}})},hideModal:function(){this.modalVisiable=!1},buy:function(){var e=this;v.send({url:"getWechatIsLogin",type:"get",needLogin:!1,success:function(t){var s=t.item;if(1==s)e.modalVisiable=!0;else{var a="http://wx.ledgetrans.com.cn/index.html"+location.hash;localStorage.setItem("loginBack",(0,r["default"])(a)),(0,p.jumpUrl)("login")}}})},getFree:function(){var e=this;v.send({url:"getWechatBuyCourse",type:"post",params:{CourseId:this.id,CreditPay:0},success:function(t){1===t.item.courseOrderStatus&&e.$router.replace({name:"timeline"})}})},pay:function(){var e=this;v.send({url:"getWechatBuyCourse",type:"post",params:{CourseId:this.id,CreditPay:this.usercredit?this.data.userValidCredit:0},success:function(t){0===t.item.courseOrderStatus&&e.sendWxPay(t.item)}})},sendWxPay:function(e){var t=this,s=e.orderNo;v.send({url:"getWechatConfig",type:"post",params:{orderNo:s},success:function(e){(0,p.wxPay)({d:e,success:function(){t.$router.replace({name:"timeline"}),console.log("支付成功")},cancel:function(){console.log("支付取消")},fail:function(){console.log("支付失败")}})}})}}}},133:function(e,t,s){var a=s(37)(s(134),s(135),null,null,null);a.options.__file="/Users/joy/Desktop/code/learnEnglish/src/components/Audio.vue",a.esModule&&Object.keys(a.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),a.options.functional&&console.error("[vue-loader] Audio.vue: functional components are not supported with templates, they should use render functions."),e.exports=a.exports},134:function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var i=(s(30),s(10)),r=a(i);new r["default"];t["default"]={props:{label:{type:Number,"default":0},intro:{type:String,"default":""},onplay:{type:Function,"default":function(){}},onSelected:{type:Function,"default":function(){}},onpause:{type:Function,"default":function(){}},text:{type:String,"default":"免费试听"},audioId:{type:String,"default":""},id:{type:Number,"default":0},source:{type:String,"default":""}},data:function(){return{src:"",playState:0,loadFailed:!1}},mounted:function(){this.src=this.source||"http://wx.ledgetrans.com.cn/api/wechatcoursePlay/"+this.audioId},computed:{classObject:function(){return this.audioId?{"fa-play-circle":0===this.playState,"fa-stop-circle":1===this.playState}:"fa-lock"}},methods:{clickAction:function(e){this.audioId&&this.onSelected(this.src,this.intro)},closeAll:function(){var e=document.getElementsByTagName("audio");console.log(e);for(var t=0;t<e.length;t++)e[t].pause()},onerror:function(e){console.log(e),console.log(this.label+"课程下载失败"),this.loadFailed=!0,this.playState=0},pauseListener:function(e){this.playState=0},playing:function(e){console.log(e)},waiting:function(e){console.log(e)},sendApi:function(){}}}},135:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("label",{attrs:{"for":""}},[e._v("L-"+e._s(e.label))]),e._v(" "),s("span",[s("a",{attrs:{href:"javascript:void(0);"},on:{click:e.clickAction}},[s("i",{staticClass:"fa","class":e.classObject}),e._v(" \n            "+e._s(e.audioId?e.text:"")+"\n        ")])]),e._v(" "),s("em",[e._v(e._s(e.intro))])])},staticRenderFns:[]},e.exports.render._withStripped=!0},136:function(e,t,s){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"page pg-courses pg-course-details"},[s("HeaderView",{attrs:{pageName:"courseDetail",pageTitle:"课程详情"}},[!e.data||e.data.isPurchased||e.data.isFree?e._e():s("div",{staticClass:"header-right"},[s("a",{attrs:{href:"javascript:void(0);"},on:{click:e.buy}},[e._v("购买")])]),e._v(" "),e.data&&e.data.isFree&&!e.data.isPurchased?s("div",{staticClass:"header-right"},[s("a",{attrs:{href:"javascript:void(0);"},on:{click:e.getFree}},[e._v("获取")])]):e._e()]),e._v(" "),s("div",{staticClass:"mainview"},[e.data?s("section",{staticClass:"course-details"},[s("div",{staticClass:"course-summary"},[s("div",{staticClass:"cover"},[s("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.data.courseImgUrl,expression:"data.courseImgUrl"}]})]),e._v(" "),s("div",{staticClass:"title"},[e._v(e._s(e.data.courseName))]),e._v(" "),s("div",{staticClass:"category"},[e._v("共"+e._s(e.data.coursePeriod)+"课时 • "+e._s(e.data.courseClassifyName))]),e._v(" "),0!==e.data.coursePrice?s("div",{staticClass:"price"},[e._v("课程费 ￥"+e._s(e.data.coursePrice))]):e._e(),e._v(" "),0===e.data.coursePrice?s("div",{staticClass:"price"},[e._v("免费课程")]):e._e()]),e._v(" "),s("div",{staticClass:"course-desc",domProps:{innerHTML:e._s(e.data.courseIntroduce)}}),e._v(" "),e.audioList.length>0?s("div",{staticClass:"gb-listview"},[s("div",{staticClass:"legend"},[e._v("课程")]),e._v(" "),s("ul",e._l(e.audioList,function(t,a){return s("li",{key:a},[s("Audio",{attrs:{audioId:t.PlayID,label:a,id:t.Id,onSelected:e.onSelected,text:e.data.isPurchased||e.data.isFree?"播放":"免费试听",intro:t.AudioName}})],1)}))]):e._e()]):e._e(),e._v(" "),e.showAudio?s("section",{staticClass:"play-audio"},[s("div",{staticClass:"player-box"},[e._m(0),e._v(" "),s("div",{staticClass:"lesson-name"},[e._v(e._s(e.selectSource.intro))]),e._v(" "),s("audio",{"class":e.getClass(),attrs:{src:e.selectSource.src,controls:"controls",controlsList:"nodownload",id:"audioplayer"}}),e._v(" "),s("span",{staticClass:"close",on:{click:e.closeAudio}},[s("a",{attrs:{href:"javascript:void(0)"}})])])]):e._e(),e._v(" "),!e.data||e.data.isPurchased||e.data.isFree?e._e():[s("section",{directives:[{name:"show",rawName:"v-show",value:e.modalVisiable,expression:"modalVisiable"}],staticClass:"quick-buy"},[s("div",{staticClass:"modal"}),e._v(" "),s("div",{staticClass:"container"},[s("div",{staticClass:"hd"},[s("div",{staticClass:"title"},[e._v("购买课程")]),e._v(" "),s("a",{staticClass:"cancel",attrs:{href:"javascript:void(0)"},on:{click:e.hideModal}},[e._v("取消")])]),e._v(" "),s("div",{staticClass:"bd"},[s("ul",{staticClass:"listview"},[s("li",[s("label",[e._v("课程")]),e._v(" "),s("span",[e._v(e._s(e.data.courseName))])]),e._v(" "),s("li",[s("label",[e._v("课程费")]),e._v(" "),s("span",[e._v("￥"+e._s(e.data.coursePrice))])]),e._v(" "),e.data.userValidCredit?s("li",[s("label",{attrs:{"for":""}},[e._v("可用亮值")]),e._v(" "),s("span",[e._v(e._s(e.data.userValidCredit))]),e._v(" "),s("span",{staticClass:"right"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.usercredit,expression:"usercredit"}],staticClass:"ctrl-checkbox",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(e.usercredit)?e._i(e.usercredit,null)>-1:e.usercredit},on:{change:function(t){var s=e.usercredit,a=t.target,i=!!a.checked;if(Array.isArray(s)){var r=null,o=e._i(s,r);a.checked?o<0&&(e.usercredit=s.concat([r])):o>-1&&(e.usercredit=s.slice(0,o).concat(s.slice(o+1)))}else e.usercredit=i}}})])]):e._e(),e._v(" "),s("li",[s("label",[e._v("获赠亮值")]),e._v(" "),s("span",[e._v(e._s(e.getcredit))])])])]),e._v(" "),s("div",{staticClass:"action"},[s("a",{staticClass:"button",attrs:{href:"javascript:void(0);"},on:{click:e.pay}},[e._v("去支付￥"+e._s(e.price))])])])])]],2)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"course-cover"},[a("img",{attrs:{src:s(137),width:"100%"}})])}]},e.exports.render._withStripped=!0},137:function(e,t,s){e.exports=s.p+"img/ce65dc1f.temp_300x300.jpg"}});