/*! k.liu */
webpackJsonp([14],{

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

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(37)(
	  /* script */
	  __webpack_require__(132),
	  /* template */
	  __webpack_require__(133),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/pages/activities/details.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] details.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-310ab99b", Component.options)
	  } else {
	    hotAPI.reload("data-v-310ab99b", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _HeaderView = __webpack_require__(88);

	var _HeaderView2 = _interopRequireDefault(_HeaderView);

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
	            id: null,
	            modalVisiable: false,
	            data: {
	                "Id": 1,
	                "ActivityTitle": "sample string 2",
	                "ActivityDate": "2017-12-24 08:32:57",
	                "ActivityAddress": "sample string 4",
	                "ActivityContent": "sample string 5",
	                "ActivityImgUrl": "sample string 6",
	                "ActivityNotice": "sample string 7",
	                "ClickNum": 8,
	                "JoinNum": 9
	            },
	            tickets: []
	        };
	    },

	    beforeRouteEnter: function beforeRouteEnter(to, from, next) {
	        next(function (vm) {
	            vm.id = to.query.id;
	        });
	    },
	    methods: {
	        getDetail: function getDetail() {
	            //get
	            Models.send('getWechatActivity', {
	                id: this.id
	            });
	            Models.send('getWechatActivityTicket', {
	                id: this.id
	            });
	        },
	        hideModal: function hideModal() {
	            this.modalVisiable = false;
	        },
	        showModal: function showModal() {
	            this.modalVisiable = true;
	        }
	    }
	};

/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page pg-activities pg-activity-details"
	  }, [_c('HeaderView', {
	    attrs: {
	      "pageName": "activityDetail",
	      "pageTitle": "活动详情"
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "mainview"
	  }, [(_vm.data) ? _c('section', {
	    staticClass: "activity-details"
	  }, [_c('div', {
	    staticClass: "activity-summary"
	  }, [_c('div', {
	    staticClass: "activity-poster"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.data.ActivityImgUrl
	    }
	  })])]), _vm._v(" "), _c('div', {
	    staticClass: "gb-listview"
	  }, [_c('ul', [_c('li', [_c('div', [_c('label', {
	    attrs: {
	      "for": ""
	    }
	  }, [_vm._v("主题")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.data.ActivityTitle))])])]), _vm._v(" "), _c('li', [_c('div', [_c('label', {
	    attrs: {
	      "for": ""
	    }
	  }, [_vm._v("时间")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.data.ActivityDate))])])]), _vm._v(" "), _c('li', [_c('div', [_c('label', {
	    attrs: {
	      "for": ""
	    }
	  }, [_vm._v("地点")]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.data.ActivityAddress))])])])])]), _vm._v(" "), _c('div', {
	    staticClass: "activity-desc",
	    domProps: {
	      "innerHTML": _vm._s(_vm.data.ActivityContent)
	    }
	  }), _vm._v(" "), _c('div', {
	    staticClass: "gb-listview"
	  }, [_c('div', {
	    staticClass: "legend"
	  }, [_vm._v("入场券")]), _vm._v(" "), _c('ul', _vm._l((_vm.tickets), function(item, index) {
	    return _c('li', {
	      key: item.id
	    }, [_c('div', [_c('label', {
	      attrs: {
	        "for": ""
	      }
	    }, [_vm._v(_vm._s(item.TicketClass))]), _vm._v(" "), _c('span', [_c('a', {
	      attrs: {
	        "href": "javascript:void(0)"
	      },
	      on: {
	        "click": _vm.showModal
	      }
	    }, [_vm._v("购买")])]), _vm._v(" "), _c('em', [_vm._v(_vm._s(_vm.data.ticketIntro))])])])
	  }))])]) : _vm._e(), _vm._v(" "), _c('section', {
	    directives: [{
	      name: "show",
	      rawName: "v-show",
	      value: (_vm.modalVisiable),
	      expression: "modalVisiable"
	    }],
	    staticClass: "quick-buy"
	  }, [_c('div', {
	    staticClass: "modal"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "hd"
	  }, [_c('div', {
	    staticClass: "title"
	  }, [_vm._v("购买入场券")]), _vm._v(" "), _c('a', {
	    staticClass: "cancel",
	    attrs: {
	      "href": "javascript:void(0)"
	    },
	    on: {
	      "click": _vm.hideModal
	    }
	  }, [_vm._v("取消")])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _vm._m(1)])])])], 1)
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "bd"
	  }, [_c('ul', {
	    staticClass: "listview"
	  }, [_c('li', [_c('label', [_vm._v("入场券")]), _vm._v(" "), _c('span', [_vm._v("票种名称")])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("价格")]), _vm._v(" "), _c('span', [_vm._v("￥100.00")])]), _vm._v(" "), _c('li', [_c('label', {
	    attrs: {
	      "for": ""
	    }
	  }, [_vm._v("可用积分")]), _vm._v(" "), _c('span', [_vm._v("100")]), _vm._v(" "), _c('span', {
	    staticClass: "right"
	  }, [_c('input', {
	    staticClass: "ctrl-checkbox",
	    attrs: {
	      "type": "checkbox",
	      "id": "",
	      "name": "",
	      "value": "",
	      "checked": ""
	    }
	  })])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("获赠积分")]), _vm._v(" "), _c('span', [_vm._v("990")])])])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "action"
	  }, [_c('a', {
	    staticClass: "button",
	    attrs: {
	      "href": "javascript:void(0);"
	    }
	  }, [_vm._v("去支付￥99.00")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-310ab99b", module.exports)
	  }
	}

/***/ })

});