webpackJsonp([5],{70:function(e,t,n){var s=n(37)(n(71),n(73),null,null,null);s.options.__file="/Users/joy/Desktop/code/learnEnglish/src/components/NavTab.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] NavTab.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(72);t["default"]={methods:(0,s.mapActions)(["changeOpenTap"])}},73:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-left"},[n("a",{staticClass:"icon menu toggle",attrs:{href:"javascript:void(0);"},on:{click:e.changeOpenTap}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},128:function(e,t,n){var s=n(37)(n(129),n(130),null,null,null);s.options.__file="/Users/joy/Desktop/code/learnEnglish/src/pages/invite/invite.vue",s.esModule&&Object.keys(s.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),s.options.functional&&console.error("[vue-loader] invite.vue: functional components are not supported with templates, they should use render functions."),e.exports=s.exports},129:function(e,t,n){"use strict";function s(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(70),i=s(o),r=n(30),a=n(10),l=s(a),u=new l["default"];t["default"]={components:{NavTab:i["default"]},data:function(){return{inviteCode:null,settings:USER_SETTINGS}},mounted:function(){this.getCode()},methods:{getCode:function(){var e=this;u.send({url:"getWechatInviteCode",success:function(t){e.inviteCode=t.item,e.setConfig()}})},setConfig:function(){var e=window.USER_INFO.userName+"邀请你加入Ledge同声翻译实战学习",t="http://wx.ledgetrans.com.cn/CommonImages/ledge_logo.png",n="http://wx.ledgetrans.com.cn/home/autologin?returnUrl="+encodeURIComponent("http://wx.ledgetrans.com.cn/index.html#/signup?inviteCode="+this.inviteCode);(0,r.share)({title:e,desc:"你的好多朋友都在这里！完成注册即可获得1000亮值。",link:n,imgUrl:t})}}}},130:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page pg-invite"},[n("header",{staticClass:"gb-header"},[n("NavTab"),e._v(" "),n("h1",{staticClass:"has-icon"},[e._v("邀请朋友")])],1),e._v(" "),n("div",{staticClass:"mainview"},[n("section",{staticClass:"invitation-detail"},[n("h2",[e._v("邀请朋友获得奖励")]),e._v(" "),n("p",[e._v("朋友只需要完成注册，即可获得"+e._s(e.settings.NewUserCredit)+"亮值，"),n("br"),e._v("同时你也获得"+e._s(e.settings.InvitationUserCredit)+"亮值，亮值可以用来抵扣消费。")])]),e._v(" "),e._m(0)])])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"how-to-do"},[n("h3",[e._v("如何邀请")]),e._v(" "),n("p",[e._v("很简单！你只需要点击右上角“分享给朋友”或“分享到朋友圈”就搞定了。坐等赚亮值吧~")])])}]},e.exports.render._withStripped=!0}});