/*! k.liu */
webpackJsonp([10],{

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

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(37)(
	  /* script */
	  __webpack_require__(118),
	  /* template */
	  __webpack_require__(119),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/pages/account/signup.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] signup.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-5aa9c335", Component.options)
	  } else {
	    hotAPI.reload("data-v-5aa9c335", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _HeaderView = __webpack_require__(88);

	var _HeaderView2 = _interopRequireDefault(_HeaderView);

	var _fun = __webpack_require__(30);

	var _store = __webpack_require__(27);

	var _api = __webpack_require__(7);

	var _api2 = _interopRequireDefault(_api);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	//
	//
	//
	//
	//
	//
	//
	//

	var Models = new _api2.default();
	exports.default = {
	    components: {
	        HeaderView: _HeaderView2.default
	    },
	    data: function data() {
	        return {
	            countDown: null,
	            second: 0,
	            phone: 13795329019,
	            verifyCode: null,
	            iviteCode: null,
	            backUrl: ''
	        };
	    },
	    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	        next(function (vm) {
	            vm.backurl = to.query.returnUrl, vm.iviteCode = to.query.iviteCode;
	        });
	    },
	    beforeRouteLeave: function beforeRouteLeave(to, from, next) {
	        this.countDown && window.clearInterval(this.countDown);
	        next();
	    },

	    methods: {
	        //倒计时
	        countTime: function countTime() {
	            var _this = this;

	            this.countDown && window.clearInterval(this.countDown);
	            this.second = 60;
	            this.countDown = window.setInterval(function () {
	                if (_this.second > 0) {
	                    _this.second = _this.second - 1;
	                } else {
	                    _this.countDown && window.clearInterval(_this.countDown);
	                }
	            }, 1000);
	        },
	        signup: function signup() {
	            var _this2 = this;

	            if (!this.checkPhone()) {
	                return false;
	            }
	            if (!this.verifyCode) {
	                (0, _fun.showAlert)('请输入验证码');
	                return false;
	            }
	            Models.send({
	                url: 'setWechatLogin',
	                type: 'post',
	                params: {
	                    Phone: this.phone,
	                    InviteCode: this.inviteCode,
	                    VerifyCode: this.verifyCode
	                },
	                success: function success(d) {
	                    (0, _fun.setCookie)({
	                        name: 'ticket',
	                        value: d.Ticket
	                    });
	                    _this2.getUserInfo();
	                },
	                error: function error(d) {
	                    (0, _fun.showAlert)(d.errorMsg);
	                }
	            });
	        },
	        checkPhone: function checkPhone() {
	            if (/^1\d{10}$/.test(this.phone)) {
	                return true;
	            } else {
	                (0, _fun.showAlert)('请输入正确的手机号');
	                return false;
	            }
	        },
	        getCode: function getCode() {
	            var _this3 = this;

	            if (!this.checkPhone()) {
	                return false;
	            }
	            Models.send({
	                url: 'setWechatLogin',
	                type: 'put',
	                params: {
	                    Phone: this.phone,
	                    InviteCode: this.inviteCode
	                },
	                success: function success() {
	                    _this3.countTime();
	                },
	                error: function error(d) {
	                    (0, _fun.showAlert)(d.errorMsg);
	                }
	            });
	        },
	        getUserInfo: function getUserInfo() {
	            var _this4 = this;

	            Models.send({
	                url: 'getWechatUser',
	                type: 'get',
	                params: {},
	                success: function success(_ref) {
	                    var _ref$item = _ref.item,
	                        item = _ref$item === undefined ? {} : _ref$item;

	                    (0, _store.setStore)('userInfo', item);
	                    _this4.goBack(item);
	                },
	                error: function error() {
	                    console.log('获取用户信息失败');
	                }
	            });
	        },
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
	        }
	    }
	};

/***/ }),

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page pg-account pg-account-signup"
	  }, [_c('HeaderView', {
	    attrs: {
	      "pageName": "signup",
	      "pageTitle": "创建帐户",
	      "iconName": "close"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "mainview"
	  }, [_c('section', {
	    staticClass: "create"
	  }, [_vm._m(0), _vm._v(" "), _c('p', [_vm._v("只需一步即可完成注册，超简单！")]), _vm._v(" "), _c('div', {
	    staticClass: "signup-form"
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.phone),
	      expression: "phone"
	    }],
	    attrs: {
	      "type": "tel",
	      "maxlength": "11",
	      "placeholder": "手机号码"
	    },
	    domProps: {
	      "value": (_vm.phone)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.phone = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.verifyCode),
	      expression: "verifyCode"
	    }],
	    attrs: {
	      "type": "text",
	      "maxlength": "6",
	      "placeholder": "短信验证码"
	    },
	    domProps: {
	      "value": (_vm.verifyCode)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.verifyCode = $event.target.value
	      }
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [(_vm.second === 0) ? _c('a', {
	    staticClass: "get-sms-code",
	    attrs: {
	      "href": "javascript:void(0);"
	    },
	    on: {
	      "click": _vm.getCode
	    }
	  }, [_vm._v("获取验证码")]) : _vm._e(), _vm._v(" "), (_vm.second > 0) ? _c('a', {
	    staticClass: "get-sms-code",
	    attrs: {
	      "href": "javascript:void(0);"
	    }
	  }, [_vm._v(_vm._s(_vm.second) + "秒后重新获取")]) : _vm._e()]), _vm._v(" "), _c('div', {
	    staticClass: "row"
	  }, [_c('a', {
	    staticClass: "button primary-button",
	    attrs: {
	      "href": "javascript:void(0);"
	    },
	    on: {
	      "click": _vm.signup
	    }
	  }, [_vm._v("注册")])])])])])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('h2', [_c('img', {
	    attrs: {
	      "src": __webpack_require__(120)
	    }
	  })])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-5aa9c335", module.exports)
	  }
	}

/***/ })

});