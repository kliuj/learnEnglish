webpackJsonp([9],{111:function(e,t,o){var n=o(37)(o(112),o(113),null,null,null);n.options.__file="/Users/joy/Desktop/code/learnEnglish/src/components/HeaderView.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] HeaderView.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},112:function(e,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=o(29);t["default"]={props:{beforeBack:{type:Function,"default":null},pageName:{type:String,"default":"index"},pageTitle:{type:String,"default":"index"},iconName:{type:String,"default":"back"}},mounted:function(){(0,n.saveFrom)(this.pageName,this.$router.history.current)},methods:{goBack:function(){this.beforeBack?this.beforeBack(this.backToLastPage):this.backToLastPage()},backToLastPage:function(){var e=(0,n.getBack)(this.pageName);this.$router.push({name:e.name,query:e.para})}}}},113:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("header",{staticClass:"gb-header"},[o("div",{staticClass:"header-left"},[o("a",{staticClass:"icon","class":e.iconName,attrs:{href:"javascript:void (0);"},on:{click:e.goBack}})]),e._v(" "),o("h1",{staticClass:"has-icon"},[e._v(e._s(e.pageTitle))]),e._v(" "),e._t("default")],2)},staticRenderFns:[]},e.exports.render._withStripped=!0},144:function(e,t,o){var n=o(37)(o(145),o(146),null,null,null);n.options.__file="/Users/joy/Desktop/code/learnEnglish/src/pages/account/signup.vue",n.esModule&&Object.keys(n.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),n.options.functional&&console.error("[vue-loader] signup.vue: functional components are not supported with templates, they should use render functions."),e.exports=n.exports},145:function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(111),r=n(s),i=o(30),a=o(29),c=o(10),u=n(c),l=new u["default"];t["default"]={components:{HeaderView:r["default"]},data:function(){return{mountedDom:!1,countDown:null,second:0,phone:null,verifyCode:null,inviteCode:null,backUrl:""}},beforeRouteEnter:function(e,t,o){o(function(t){t.backurl=e.query.returnUrl,t.inviteCode=e.query.inviteCode})},beforeRouteLeave:function(e,t,o){this.countDown&&window.clearInterval(this.countDown),o()},methods:{countTime:function(){var e=this;this.countDown&&window.clearInterval(this.countDown),this.second=60,this.countDown=window.setInterval(function(){e.second>0?e.second=e.second-1:e.countDown&&window.clearInterval(e.countDown)},1e3)},signup:function(){var e=this;return!!this.checkPhone()&&(this.verifyCode?void l.send({url:"setWechatLogin",type:"post",needLogin:!1,params:{Phone:this.phone,InviteCode:this.inviteCode,VerifyCode:this.verifyCode},success:function(t){(0,i.setCookie)({name:"ticket",value:t.Ticket}),e.getUserInfo()},error:function(e){(0,i.showAlert)(e.errorMsg)}}):((0,i.showAlert)("请输入验证码"),!1))},checkPhone:function(){return!!/^1\d{10}$/.test(this.phone)||((0,i.showAlert)("请输入正确的手机号"),!1)},getCode:function(){var e=this;return!!this.checkPhone()&&void l.send({url:"setWechatLogin",type:"put",needLogin:!1,params:{Phone:this.phone,InviteCode:this.inviteCode},success:function(){e.countTime()},error:function(e){(0,i.showAlert)(e.errorMsg)}})},getUserInfo:function(){var e=this;l.send({url:"getWechatUser",type:"get",params:{},success:function(t){var o=t.item,n=void 0===o?{}:o;(0,a.setStore)("userInfo",n),e.goBack(n)},error:function(){console.log("获取用户信息失败")}})},goBack:function(e){var t=(0,a.getStore)("loginBack");this.$store.dispatch("getNewUserInfo"),this.backurl&&"undefined"!=this.backurl?location.replace(this.backurl):t?((0,a.delStore)("loginBack"),location.replace(t)):(0,i.routerUrl)("index",this.$router)}}}},146:function(e,t,o){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"page pg-account pg-account-signup"},[o("HeaderView",{attrs:{pageName:"signup",pageTitle:"创建帐户",iconName:"close"}}),e._v(" "),o("div",{staticClass:"mainview"},[o("section",{staticClass:"create"},[e._m(0),e._v(" "),o("p",[e._v("只需一步即可完成注册，超简单！")]),e._v(" "),o("div",{staticClass:"signup-form"},[o("div",{staticClass:"row"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"tel",maxlength:"11",placeholder:"手机号码"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"row"},[o("input",{directives:[{name:"model",rawName:"v-model",value:e.verifyCode,expression:"verifyCode"}],attrs:{type:"text",maxlength:"6",placeholder:"短信验证码"},domProps:{value:e.verifyCode},on:{input:function(t){t.target.composing||(e.verifyCode=t.target.value)}}})]),e._v(" "),o("div",{staticClass:"row"},[0===e.second?o("a",{staticClass:"get-sms-code",attrs:{href:"javascript:void(0);"},on:{click:e.getCode}},[e._v("获取验证码")]):e._e(),e._v(" "),e.second>0?o("a",{staticClass:"get-sms-code",attrs:{href:"javascript:void(0);"}},[e._v(e._s(e.second)+"秒后重新获取")]):e._e()]),e._v(" "),o("div",{staticClass:"row"},[o("a",{staticClass:"button primary-button",attrs:{href:"javascript:void(0);"},on:{click:e.signup}},[e._v("注册")])])])])])],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",[n("img",{attrs:{src:o(147)}})])}]},e.exports.render._withStripped=!0}});