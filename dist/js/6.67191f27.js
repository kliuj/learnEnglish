/*! k.liu */
webpackJsonp([6],{

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

/***/ 95:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(37)(
	  /* script */
	  __webpack_require__(96),
	  /* template */
	  __webpack_require__(100),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/pages/courses/details.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] details.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7a324c00", Component.options)
	  } else {
	    hotAPI.reload("data-v-7a324c00", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
		value: true
	});

	var _HeaderView = __webpack_require__(88);

	var _HeaderView2 = _interopRequireDefault(_HeaderView);

	var _api = __webpack_require__(7);

	var _api2 = _interopRequireDefault(_api);

	var _Audio = __webpack_require__(97);

	var _Audio2 = _interopRequireDefault(_Audio);

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

	var Models = new _api2.default();
	exports.default = {
		data: function data() {
			return {
				modalVisiable: false,
				id: 0,
				data: null,
				audioList: []
			};
		},

		components: {
			HeaderView: _HeaderView2.default, Audio: _Audio2.default
		},
		beforeRouteEnter: function beforeRouteEnter(to, from, next) {
			var query = to.query;

			next(function (vm) {
				vm.id = query.id;
				vm.getData();
				vm.getAudioList();
			});
		},

		methods: {
			getData: function getData() {
				var _this = this;

				//post
				Models.send({
					url: 'getWechatCourse',
					params: {
						id: this.id
					},
					success: function success(d) {
						_this.data = d.item;
					}
				});
			},
			getAudioList: function getAudioList() {
				var _this2 = this;

				Models.send({
					url: 'getWechatCourseAudio',
					params: {
						id: this.id
					},
					success: function success(d) {
						_this2.audioList = d.items;
					}
				});
			},
			hideModal: function hideModal() {
				this.modalVisiable = false;
			}
		}
	};

/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	var Component = __webpack_require__(37)(
	  /* script */
	  __webpack_require__(98),
	  /* template */
	  __webpack_require__(99),
	  /* styles */
	  null,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/components/Audio.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Audio.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-7ddf61cd", Component.options)
	  } else {
	    hotAPI.reload("data-v-7ddf61cd", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 98:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _fun = __webpack_require__(30);

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

	var Model = new _api2.default();
	exports.default = {
	    props: {
	        src: {
	            type: String,
	            default: ''
	        },
	        label: {
	            type: String,
	            default: ''
	        },
	        intro: {
	            type: String,
	            default: ''
	        },
	        onplay: {
	            type: Function,
	            default: function _default() {}
	        },
	        onpause: {
	            type: Function,
	            default: function _default() {}
	        },
	        text: {
	            type: String,
	            default: '免费试听'
	        },
	        audioid: {
	            type: Number,
	            default: 0
	        }
	    },
	    data: function data() {
	        return {
	            playState: 0, // 0 暂停 ，1 播放  2 缓冲中
	            loadFailed: false //资源下载
	        };
	    },

	    computed: {
	        classObject: function classObject() {
	            return {
	                'fa-play-circle': this.playState === 0,
	                'fa-stop-circle': this.playState === 1
	            };
	        }
	    },
	    methods: {
	        clickAction: function clickAction(e) {
	            if (this.loadFailed) {
	                (0, _fun.showAlert)(this.label + '课程下载失败');
	                return false;
	            }
	            var dom = e.currentTarget.childNodes[0];
	            if (this.playState !== 0) {
	                this.playState = 0;
	                dom.pause();
	            } else {
	                this.closeAll();
	                this.playState = 1;
	                dom.play();
	            }
	        },
	        closeAll: function closeAll() {
	            var ele = document.getElementsByTagName('audio');
	            console.log(ele);
	            for (var i = 0; i < ele.length; i++) {
	                ele[i].pause();
	            }
	        },
	        onerror: function onerror(e) {
	            console.log(e);
	            console.log(this.label + '课程下载失败');
	            // showAlert(this.label+'课程下载失败')
	            //资源失败时候点击无效
	            this.loadFailed = true;
	        },
	        pauseListener: function pauseListener(e) {
	            //被其他任务暂停时候修改状态
	            this.playState = 0;
	        },
	        playing: function playing(e) {
	            console.log(e);
	        },
	        sendApi: function sendApi() {
	            Models.send({
	                url: 'getWechatPlayAudio',
	                params: {
	                    audioId: this.audioId
	                },
	                success: function success(data) {}
	            });
	        }
	    }
	};

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', [_c('label', {
	    attrs: {
	      "for": ""
	    }
	  }, [_vm._v("L-" + _vm._s(_vm.label))]), _vm._v(" "), _c('span', [_c('a', {
	    attrs: {
	      "href": "javascript:void(0);"
	    },
	    on: {
	      "click": _vm.clickAction
	    }
	  }, [_c('audio', {
	    attrs: {
	      "src": _vm.src
	    },
	    on: {
	      "error": _vm.onerror,
	      "playing": _vm.playing,
	      "waiting": _vm.playing,
	      "pause": _vm.pauseListener
	    }
	  }, [_vm._v("\n                Your browser does not support the audio element.\n            ")]), _vm._v(" "), _c('i', {
	    staticClass: "fa",
	    class: _vm.classObject
	  }), _vm._v(" \n            " + _vm._s(!_vm.playState ? _vm.text : '停止') + "\n        ")])]), _vm._v(" "), _c('em', [_vm._v(_vm._s(_vm.intro))])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-7ddf61cd", module.exports)
	  }
	}

/***/ }),

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "page pg-courses pg-course-details"
	  }, [_c('HeaderView', {
	    attrs: {
	      "pageName": "courseDetail",
	      "pageTitle": "课程详情"
	    }
	  }, [_c('div', {
	    staticClass: "header-right"
	  }, [_c('a', {
	    attrs: {
	      "href": "javascript:void(0);"
	    }
	  }, [_vm._v("购买")])])]), _vm._v(" "), _c('div', {
	    staticClass: "mainview"
	  }, [(_vm.data) ? _c('section', {
	    staticClass: "course-details"
	  }, [_c('div', {
	    staticClass: "course-summary"
	  }, [_c('div', {
	    staticClass: "cover"
	  }, [_c('img', {
	    attrs: {
	      "src": _vm.data.courseImgUrl
	    }
	  })]), _vm._v(" "), _c('div', {
	    staticClass: "title"
	  }, [_vm._v(_vm._s(_vm.data.courseName))]), _vm._v(" "), _c('div', {
	    staticClass: "category"
	  }, [_vm._v("共" + _vm._s(_vm.data.coursePeriod) + "课时 • " + _vm._s(_vm.data.courseClassifyName))]), _vm._v(" "), _c('div', {
	    staticClass: "price"
	  }, [_vm._v("课程费 ￥" + _vm._s(_vm.data.coursePrice))])]), _vm._v(" "), _c('div', {
	    staticClass: "course-desc",
	    domProps: {
	      "innerHTML": _vm._s(_vm.data.courseIntroduce)
	    }
	  }), _vm._v(" "), (_vm.audioList.length > 0) ? _c('div', {
	    staticClass: "gb-listview"
	  }, [_c('div', {
	    staticClass: "legend"
	  }, [_vm._v("课程")]), _vm._v(" "), _c('ul', _vm._l((_vm.audioList), function(item, index) {
	    return _c('li', {
	      key: index
	    }, [_vm._v("=`http://wx.ledgetrans.com.cn/api/wechatcoursePlay/${item.Id}`\n\t\t\t\t\t\t\t:label=\"index\"\n\t\t\t\t\t\t\t:id=\"item.Id\"\n\t\t\t\t\t\t\t:intro=\"item.AudioName\"/>\n\t\t            ")])
	  }))]) : _vm._e()]) : _vm._e(), _vm._v(" "), _c('section', {
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
	  }, [_vm._v("购买课程")]), _vm._v(" "), _c('a', {
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
	  }, [_c('li', [_c('label', [_vm._v("课程")]), _vm._v(" "), _c('span', [_vm._v("课程名称字数再长也不截断")])]), _vm._v(" "), _c('li', [_c('label', [_vm._v("课程费")]), _vm._v(" "), _c('span', [_vm._v("￥100.00")])]), _vm._v(" "), _c('li', [_c('label', {
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
	     require("vue-hot-reload-api").rerender("data-v-7a324c00", module.exports)
	  }
	}

/***/ })

});