/*! k.liu */
webpackJsonp([12],{

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

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	function injectStyle (ssrContext) {
	  if (disposed) return
	  __webpack_require__(94)
	}
	var Component = __webpack_require__(59)(
	  /* script */
	  __webpack_require__(98),
	  /* template */
	  __webpack_require__(99),
	  /* styles */
	  injectStyle,
	  /* scopeId */
	  "data-v-2a08dd86",
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/components/list/list.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] list.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-2a08dd86", Component.options)
	  } else {
	    hotAPI.reload("data-v-2a08dd86", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(95);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a08dd86\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-2a08dd86\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./list.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports


	// module
	exports.push([module.id, "\n.scrolllist-container[data-v-2a08dd86]{\n    background-color: 'res'\n}\n", ""]);

	// exports


/***/ }),

/***/ 98:
/***/ (function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	//
	//
	//
	//
	//
	//
	//

	exports.default = {
	    props: {
	        id: {
	            type: String,
	            default: 'scroll-list-view'
	        },
	        onloadmore: {
	            type: Function,
	            default: function _default() {}
	        }
	    },
	    data: function data() {
	        return {
	            currentDom: null,
	            busy: false
	        };
	    },
	    mounted: function mounted() {
	        this.currentDom = document.getElementById(this.id);
	        window.addEventListener("scroll", this.loadBottom);
	    },
	    beforeDestroy: function beforeDestroy() {
	        window.removeEventListener('scroll', this.loadBottom);
	    },

	    methods: {
	        //加载更多
	        loadBottom: function loadBottom() {
	            //结构限制，实际滚动的是  $(window);文档高度是$(".scrolllist-container").height()
	            if (!this.busy) {
	                var totalheight = parseFloat(window.innerHeight) + parseFloat(window.scrollY);
	                //提前100px开始加载
	                if (this.currentDom.offsetHeight <= totalheight + 200) {
	                    this.busy = true;
	                    this.onloadmore(this.resetState);
	                }
	            }
	        },
	        resetState: function resetState() {
	            this.busy = false;
	        }
	    }
	};

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "scrolllist-container",
	    attrs: {
	      "id": _vm.id
	    }
	  }, [_vm._t("list")], 2)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-2a08dd86", module.exports)
	  }
	}

/***/ }),

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(59)(
	  /* script */
	  __webpack_require__(116),
	  /* template */
	  __webpack_require__(117),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/pages/activities/index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-72b0b72a", Component.options)
	  } else {
	    hotAPI.reload("data-v-72b0b72a", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _NavTab = __webpack_require__(61);

	var _NavTab2 = _interopRequireDefault(_NavTab);

	var _list = __webpack_require__(93);

	var _list2 = _interopRequireDefault(_list);

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

	exports.default = {
	    data: function data() {
	        return {
	            list: [{
	                id: 1,
	                activityTitle: '第一条标题',
	                activityDate: '12月14日 星期四',
	                activityImgUrl: 'https://car2.autoimg.cn/cardfs/product/g6/M01/83/90/t_autohomecar__wKgHzVnGd3CABqWjAAo58Wwkur0549.jpg'
	            }]
	        };
	    },

	    components: {
	        NavTab: _NavTab2.default,
	        List: _list2.default
	    },
	    methods: {
	        onloadmore: function onloadmore() {}
	    }

	};

/***/ }),

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page pg-activities pg-activities-hp"
	  }, [_c('header', {
	    staticClass: "gb-header"
	  }, [_c('NavTab'), _vm._v(" "), _c('h1', {
	    staticClass: "has-icon"
	  }, [_vm._v("LEDGE 实战活动")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "mainview"
	  }, [_c('List', {
	    attrs: {
	      "onloadmore": _vm.onloadmore
	    }
	  }, [_c('section', {
	    staticClass: "activity-list",
	    attrs: {
	      "slot": "list"
	    },
	    slot: "list"
	  }, [(_vm.list.length) ? _c('ul', _vm._l((_vm.list), function(item, index) {
	    return _c('li', {
	      key: item.id
	    }, [_c('router-link', {
	      attrs: {
	        "to": {
	          'name': 'activitydetail',
	          query: {
	            'qhfrom': 'activity',
	            'id': item.id
	          }
	        }
	      }
	    }, [_c('div', {
	      staticClass: "activity-title"
	    }, [_vm._v("\n                                " + _vm._s(item.activityTitle) + "\n                                "), _c('small', [_vm._v(_vm._s(item.activityDate))])]), _vm._v(" "), _c('div', {
	      staticClass: "activity-poster"
	    }, [_c('img', {
	      directives: [{
	        name: "lazy",
	        rawName: "v-lazy",
	        value: (item.activityImgUrl),
	        expression: "item.activityImgUrl"
	      }]
	    })])])], 1)
	  })) : _vm._e()])])], 1)])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-72b0b72a", module.exports)
	  }
	}

/***/ })

});