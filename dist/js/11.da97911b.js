/*! k.liu */
webpackJsonp([11],{

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(37)(
	  /* script */
	  __webpack_require__(89),
	  /* template */
	  __webpack_require__(90),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/components/HeaderView.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] HeaderView.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-34869d2a", Component.options)
	  } else {
	    hotAPI.reload("data-v-34869d2a", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _store = __webpack_require__(27);

	exports.default = {
	    props: {
	        beforeBack: {
	            type: Function,
	            default: null
	        },
	        pageName: {
	            type: String,
	            default: 'index'
	        },
	        pageTitle: {
	            type: String,
	            default: 'index'
	        },
	        iconName: {
	            type: String,
	            default: 'back'
	        }
	    },
	    mounted: function mounted() {
	        (0, _store.saveFrom)(this.pageName, this.$router.history.current);
	    },

	    methods: {
	        goBack: function goBack() {
	            if (this.beforeBack) {
	                this.beforeBack(this.backToLastPage);
	            } else {
	                this.backToLastPage();
	            }
	        },
	        backToLastPage: function backToLastPage() {
	            var qhfrom = (0, _store.getBack)(this.pageName);
	            this.$router.push({ 'name': qhfrom.name, query: qhfrom.para });
	        }
	    }
	}; //
	//
	//
	//
	//
	//
	//
	//
	//
	//

/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('header', {
	    staticClass: "gb-header"
	  }, [_c('div', {
	    staticClass: "header-left"
	  }, [_c('a', {
	    staticClass: "icon",
	    class: _vm.iconName,
	    attrs: {
	      "href": "javascript:void (0);"
	    },
	    on: {
	      "click": _vm.goBack
	    }
	  })]), _vm._v(" "), _c('h1', {
	    staticClass: "has-icon"
	  }, [_vm._v(_vm._s(_vm.pageTitle))]), _vm._v(" "), _vm._t("default")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-34869d2a", module.exports)
	  }
	}

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(37)(
	  /* script */
	  __webpack_require__(122),
	  /* template */
	  __webpack_require__(123),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/pages/account/login.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-530ad55c", Component.options)
	  } else {
	    hotAPI.reload("data-v-530ad55c", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _HeaderView = __webpack_require__(88);

	var _HeaderView2 = _interopRequireDefault(_HeaderView);

	var _store = __webpack_require__(27);

	var _fun = __webpack_require__(30);

	var _api = __webpack_require__(7);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	//
	//
	//
	//

	var Models = new _api2.default();
	exports.default = {
	    data: function data() {
	        return {
	            backurl: ''
	        };
	    },

	    components: {
	        HeaderView: _HeaderView2.default
	    },
	    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	        next(function (vm) {
	            vm.backurl = to.query.returnUrl;
	        });
	    },
	    created: function created() {
	        this.getUserInfo();
	    },

	    methods: {
	        goBack: function goBack(data) {
	            var loginBack = (0, _store.getStore)('loginBack');
	            //强制更新用户信息
	            this.$store.dispatch('getNewUserInfo');
	            if (this.backurl && this.backurl != 'undefined') {
	                location.replace(this.backurl);
	            } else {
	                if (loginBack) {
	                    (0, _store.delStore)('loginBack');
	                    location.replace(loginBack);
	                } else {
	                    (0, _fun.routerUrl)('index', this.$router);
	                }
	            }
	        },
	        getUserInfo: function getUserInfo() {
	            var _this = this;

	            Models.send({
	                url: 'getWechatUser',
	                type: 'get',
	                params: {},
	                success: function success(_ref) {
	                    var _ref$item = _ref.item,
	                        item = _ref$item === undefined ? {} : _ref$item;

	                    (0, _store.setStore)('userInfo', item);
	                    _this.goBack(item);
	                },
	                error: function error(d) {
	                    console.log('获取用户信息失败');
	                    if (d.errorCode === -7) {
	                        (0, _fun.routerUrl)('signUp', _this.$router);
	                    }
	                }
	            });
	        }
	    }
	};

/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div')
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-530ad55c", module.exports)
	  }
	}

/***/ })

});