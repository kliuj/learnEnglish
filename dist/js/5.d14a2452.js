/*! k.liu */
webpackJsonp([5],{

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(59)(
	  /* script */
	  __webpack_require__(62),
	  /* template */
	  __webpack_require__(64),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/components/NavTab.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] NavTab.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1b8d22ea", Component.options)
	  } else {
	    hotAPI.reload("data-v-1b8d22ea", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _vuex = __webpack_require__(63);

	exports.default = {
	    methods: (0, _vuex.mapActions)(['changeOpenTap'])
	}; //
	//
	//
	//
	//
	//

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "header-left"
	  }, [_c('a', {
	    staticClass: "icon menu toggle",
	    attrs: {
	      "href": "javascript:void(0);"
	    },
	    on: {
	      "click": _vm.changeOpenTap
	    }
	  })])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1b8d22ea", module.exports)
	  }
	}

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(59)(
	  /* script */
	  __webpack_require__(83),
	  /* template */
	  __webpack_require__(84),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/pages/ivite/ivite.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] ivite.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-dbf5e4c0", Component.options)
	  } else {
	    hotAPI.reload("data-v-dbf5e4c0", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _NavTab = __webpack_require__(61);

	var _NavTab2 = _interopRequireDefault(_NavTab);

	var _fun = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"../../model/fun\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

	var _api = __webpack_require__(7);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var Models = new _api2.default(); //
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    components: {
	        NavTab: _NavTab2.default
	    },
	    data: function data() {
	        return {
	            iviteCode: null
	        };
	    },
	    mounted: function mounted() {
	        var title = window.USER_INFO.userName + '邀请你加入Ledge同声翻译实战学习',
	            imgUrl = 'http://wx.ledgetrans.com.cn/CommonImages/ledge_logo.png',
	            link = 'http://wx.ledgetrans.com.cn/home/autologin?returnUrl=http://wx.ledgetrans.com.cn/index.html#/index?iviteCode=' + this.iviteCode;
	        (0, _fun.share)({
	            title: title,
	            desc: '你的好多朋友都在这里！完成注册即可获得1000积分。',
	            link: link,
	            imgUrl: imgUrl
	        });
	    },
	    created: function created() {
	        var _this = this;

	        Models.send({
	            url: 'getWechatInviteCode',
	            success: function success(d) {
	                _this.iviteCode = d.item;
	            }
	        });
	    }
	};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page pg-invite"
	  }, [_c('header', {
	    staticClass: "gb-header"
	  }, [_c('NavTab'), _vm._v(" "), _c('h1', {
	    staticClass: "has-icon"
	  }, [_vm._v("邀请同学")])], 1), _vm._v(" "), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "mainview"
	  }, [_c('section', {
	    staticClass: "invitation-detail"
	  }, [_c('h2', [_vm._v("邀请同学获得奖励")]), _vm._v(" "), _c('p', [_vm._v("同学只需要完成注册，即可获得1000积分，"), _c('br'), _vm._v("同时你也获得500积分，积分可以用来抵扣消费。")])]), _vm._v(" "), _c('section', {
	    staticClass: "how-to-do"
	  }, [_c('h3', [_vm._v("如何邀请")]), _vm._v(" "), _c('p', [_vm._v("很简单！你只需要点击右上角“分享给朋友”或“分享到朋友圈”就搞定了。坐等赚积分吧~")])])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-dbf5e4c0", module.exports)
	  }
	}

/***/ })

});