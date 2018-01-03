/*! k.liu */
webpackJsonp([1],{

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(59)(
	  /* script */
	  __webpack_require__(60),
	  /* template */
	  __webpack_require__(65),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/pages/courses/index.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-052acbe0", Component.options)
	  } else {
	    hotAPI.reload("data-v-052acbe0", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _NavTab = __webpack_require__(61);

	var _NavTab2 = _interopRequireDefault(_NavTab);

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

	var Models = new _api2.default();
	exports.default = {
	    components: {
	        NavTab: _NavTab2.default
	    },
	    data: function data() {
	        return {
	            recommend: [],
	            free: [],
	            fee: [],
	            clockInfo: []
	        };
	    },
	    mounted: function mounted() {
	        this.getInitData();
	        this.getWechatClockIn();
	    },

	    methods: {
	        getInitData: function getInitData() {
	            var _this = this;

	            //post
	            Models.send({
	                url: 'getWechatCourseIndex',
	                success: function success(d) {
	                    _this.free = d.free;
	                    _this.fee = d.fee;
	                    _this.recommend = d.recommend;
	                }
	            });
	        },
	        getWechatClockIn: function getWechatClockIn() {
	            Models.send({
	                url: 'getWechatClockIn',
	                params: {
	                    top: 5
	                },
	                success: function success(d) {}
	            });
	        },
	        gotoCourseDetail: function gotoCourseDetail(params) {
	            this.$router.push({ name: 'coursedetail', query: { 'id': params.id, 'qhfrom': 'index' } });
	        }
	    }
	};

/***/ }),

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

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page pg-courses pg-courses-hp"
	  }, [_c('header', {
	    staticClass: "gb-header"
	  }, [_c('NavTab'), _vm._v(" "), _c('h1', {
	    staticClass: "has-icon"
	  }, [_vm._v("LEDGE 优选课程")])], 1), _vm._v(" "), _c('div', {
	    staticClass: "mainview"
	  }, [(_vm.clockInfo.length > 0) ? _c('section', {
	    staticClass: "today-checks"
	  }, [_c('div', {
	    staticClass: "today-checks-title"
	  }, [_vm._v("今日打卡会员")]), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": {
	        'name': 'todaycheck',
	        query: {
	          'qhfrom': 'index'
	        }
	      }
	    }
	  }, [_c('ul', _vm._l((_vm.clockInfo), function(item, index) {
	    return _c('li', {
	      key: index
	    }, [_c('img', {
	      attrs: {
	        "src": item.UserHeadImgUrl
	      }
	    })])
	  }))])], 1) : _vm._e(), _vm._v(" "), (_vm.recommend.length) ? _c('section', {
	    staticClass: "courses-group"
	  }, [_vm._m(0), _vm._v(" "), _c('ul', {
	    staticClass: "courses-list"
	  }, _vm._l((_vm.recommend), function(item, index) {
	    return _c('li', {
	      key: item.id,
	      on: {
	        "click": function($event) {
	          _vm.gotoCourseDetail(item)
	        }
	      }
	    }, [_c('a', {
	      attrs: {
	        "href": "javascript:void(0);"
	      }
	    }, [_c('div', {
	      staticClass: "course-cover"
	    }, [_c('img', {
	      directives: [{
	        name: "lazy",
	        rawName: "v-lazy",
	        value: (item.courseImgUrl),
	        expression: "item.courseImgUrl"
	      }]
	    })]), _vm._v(" "), _c('div', {
	      staticClass: "course-title"
	    }, [_vm._v(_vm._s(item.courseName))]), _vm._v(" "), _c('div', {
	      staticClass: "category"
	    }, [_vm._v(_vm._s(item.classifyId))]), _vm._v(" "), _c('div', {
	      staticClass: "read"
	    }, [_vm._v(_vm._s(item.hisStudyNum) + "人学习")])])])
	  }))]) : _vm._e(), _vm._v(" "), (_vm.fee.length) ? _c('section', {
	    staticClass: "courses-group"
	  }, [_vm._m(1), _vm._v(" "), _c('ul', {
	    staticClass: "courses-list"
	  }, _vm._l((_vm.fee), function(item, index) {
	    return _c('li', {
	      key: item.id,
	      on: {
	        "click": function($event) {
	          _vm.gotoCourseDetail(item)
	        }
	      }
	    }, [_c('a', {
	      attrs: {
	        "href": "javascript:void(0);"
	      }
	    }, [_c('div', {
	      staticClass: "course-cover"
	    }, [_c('img', {
	      directives: [{
	        name: "lazy",
	        rawName: "v-lazy",
	        value: (item.courseImgUrl),
	        expression: "item.courseImgUrl"
	      }]
	    })]), _vm._v(" "), _c('div', {
	      staticClass: "course-title"
	    }, [_vm._v(_vm._s(item.courseName))]), _vm._v(" "), _c('div', {
	      staticClass: "category"
	    }, [_vm._v(_vm._s(item.classifyId))]), _vm._v(" "), _c('div', {
	      staticClass: "read"
	    }, [_vm._v(_vm._s(item.hisStudyNum) + "人学习")])])])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "more"
	  }, [_c('router-link', {
	    attrs: {
	      "to": {
	        'name': 'allcourses',
	        query: {
	          'qhfrom': 'index',
	          fee: true
	        }
	      }
	    }
	  }, [_vm._v("查看全部")])], 1)]) : _vm._e(), _vm._v(" "), (_vm.free.length) ? _c('section', {
	    staticClass: "courses-group"
	  }, [_vm._m(2), _vm._v(" "), _c('ul', {
	    staticClass: "courses-list"
	  }, _vm._l((_vm.free), function(item, index) {
	    return _c('li', {
	      key: item.id,
	      on: {
	        "click": function($event) {
	          _vm.gotoCourseDetail(item)
	        }
	      }
	    }, [_c('a', {
	      attrs: {
	        "href": "javascript:void(0);"
	      }
	    }, [_c('div', {
	      staticClass: "course-cover"
	    }, [_c('img', {
	      directives: [{
	        name: "lazy",
	        rawName: "v-lazy",
	        value: (item.courseImgUrl),
	        expression: "item.courseImgUrl"
	      }]
	    })]), _vm._v(" "), _c('div', {
	      staticClass: "course-title"
	    }, [_vm._v(_vm._s(item.courseName))]), _vm._v(" "), _c('div', {
	      staticClass: "category"
	    }, [_vm._v(_vm._s(item.classifyId))]), _vm._v(" "), _c('div', {
	      staticClass: "read"
	    }, [_vm._v(_vm._s(item.hisStudyNum) + "人学习")])])])
	  })), _vm._v(" "), _c('div', {
	    staticClass: "more"
	  }, [_c('router-link', {
	    attrs: {
	      "to": {
	        'name': 'allcourses',
	        query: {
	          'qhfrom': 'index',
	          fee: false
	        }
	      }
	    }
	  }, [_vm._v("\n                    查看全部\n                ")])], 1)]) : _vm._e()])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "hd"
	  }, [_c('div', {
	    staticClass: "group-name"
	  }, [_vm._v("精选课程")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "hd"
	  }, [_c('div', {
	    staticClass: "group-name"
	  }, [_vm._v("付费课程")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "hd"
	  }, [_c('div', {
	    staticClass: "group-name"
	  }, [_vm._v("免费课程")])])
	}]}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-052acbe0", module.exports)
	  }
	}

/***/ })

});