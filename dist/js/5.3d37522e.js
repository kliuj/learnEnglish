webpackJsonp([5],{70:function(e,t,n){var o=n(37)(n(71),n(73),null,null,null);o.options.__file="/Users/joy/Desktop/code/learnEnglish/src/components/NavTab.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] NavTab.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},71:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(72);t["default"]={methods:(0,o.mapActions)(["changeOpenTap"])}},73:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"header-left"},[n("a",{staticClass:"icon menu toggle",attrs:{href:"javascript:void(0);"},on:{click:e.changeOpenTap}})])},staticRenderFns:[]},e.exports.render._withStripped=!0},92:function(e,t,n){var o=n(37)(n(93),n(94),null,null,null);o.options.__file="/Users/joy/Desktop/code/learnEnglish/src/pages/invite/invite.vue",o.esModule&&Object.keys(o.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),o.options.functional&&console.error("[vue-loader] invite.vue: functional components are not supported with templates, they should use render functions."),e.exports=o.exports},93:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(70),r=o(s),i=n(30),a=n(7),l=o(a),u=new l["default"];t["default"]={components:{NavTab:r["default"]},data:function(){return{inviteCode:null}},mounted:function(){var e=window.USER_INFO.userName+"邀请你加入Ledge同声翻译实战学习",t="http://wx.ledgetrans.com.cn/CommonImages/ledge_logo.png",n="http://wx.ledgetrans.com.cn/home/autologin?returnUrl="+encodeURIComponent("http://wx.ledgetrans.com.cn/index.html#/signup?inviteCode="+this.inviteCode);(0,i.share)({title:e,desc:"你的好多朋友都在这里！完成注册即可获得1000积分。",link:n,imgUrl:t})},created:function(){var e=this;u.send({url:"getWechatInviteCode",success:function(t){e.inviteCode=t.item}})}}},94:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"page pg-invite"},[n("header",{staticClass:"gb-header"},[n("NavTab"),e._v(" "),n("h1",{staticClass:"has-icon"},[e._v("邀请同学")])],1),e._v(" "),e._m(0)])},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mainview"},[n("section",{staticClass:"invitation-detail"},[n("h2",[e._v("邀请同学获得奖励")]),e._v(" "),n("p",[e._v("同学只需要完成注册，即可获得1000积分，"),n("br"),e._v("同时你也获得500积分，积分可以用来抵扣消费。")])]),e._v(" "),n("section",{staticClass:"how-to-do"},[n("h3",[e._v("如何邀请")]),e._v(" "),n("p",[e._v("很简单！你只需要点击右上角“分享给朋友”或“分享到朋友圈”就搞定了。坐等赚积分吧~")])])])}]},e.exports.render._withStripped=!0}});