/*! k.liu */
webpackJsonp([16],{

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

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	function injectStyle (ssrContext) {
	  if (disposed) return
	  __webpack_require__(133)
	}
	var Component = __webpack_require__(59)(
	  /* script */
	  __webpack_require__(135),
	  /* template */
	  __webpack_require__(146),
	  /* styles */
	  injectStyle,
	  /* scopeId */
	  null,
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/pages/test/test.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] test.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-31237ac4", Component.options)
	  } else {
	    hotAPI.reload("data-v-31237ac4", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 133:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(134);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-31237ac4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./test.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-31237ac4\",\"scoped\":false,\"hasInlineConfig\":false}!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./test.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports


	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n/*demo*/\n.flex{\n    box-sizing: border-box;\n    display: -webkit-box;\n    -webkit-box-pack: start;\n    -webkit-box-align: start;\n    display: -webkit-flex;\n    -webkit-justify-content: space-between;\n    -webkit-align-items: top;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: justify;\n        -ms-flex-pack: justify;\n            justify-content: space-between;\n    -webkit-box-align: top;\n        -ms-flex-align: top;\n            align-items: top;\n    -ms-flex-flow:row wrap;\n        flex-flow:row wrap\n}\n.flex>div{\n    margin:10px;\n    padding:20px;\n    width:25%;\n    min-width:300px;\n    border: 1px solid #eee;\n    border-radius: 2px;\n    position: relative;\n}\n.flex>div>span{\n    position: absolute;\n    left:0px;\n    top:0px;\n    padding:5px 10px;\n    font-family: \"PingFang SC\",\"Hiragino Sans GB\",\"STHeiti\",\"Microsoft YaHei\",\"WenQuanYi Micro Hei\",sans-serif;\n    font-size:10px;\n    border-radius:0 0 2px 0;\n    background:#ea6151;\n    color:#fff;\n}\n.flex>div>input{\n    box-sizing: border-box;\n    width:100%;\n    margin-top:20px;\n    border-radius: 2px;\n    border:1px solid #dedede;\n    padding:10px;\n    font-size: 16px;\n    background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj48ZGVmcz48c3R5bGUgdHlwZT0idGV4dC9jc3MiPjwhW0NEQVRBWwpAZm9udC1mYWNlIHsgZm9udC1mYW1pbHk6IGlmb250OyBzcmM6IHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUuZW90PyNpZWZpeCIpIGZvcm1hdCgiZW1iZWRkZWQtb3BlbnR5cGUiKSwgdXJsKCIvL2F0LmFsaWNkbi5jb20vdC9mb250XzE0NDIzNzM4OTZfNDc1NDQ1NS53b2ZmIikgZm9ybWF0KCJ3b2ZmIiksIHVybCgiLy9hdC5hbGljZG4uY29tL3QvZm9udF8xNDQyMzczODk2XzQ3NTQ0NTUudHRmIikgZm9ybWF0KCJ0cnVldHlwZSIpLCB1cmwoIi8vYXQuYWxpY2RuLmNvbS90L2ZvbnRfMTQ0MjM3Mzg5Nl80NzU0NDU1LnN2ZyNpZm9udCIpIGZvcm1hdCgic3ZnIik7IH0KCl1dPjwvc3R5bGU+PC9kZWZzPjxnIGNsYXNzPSJ0cmFuc2Zvcm0tZ3JvdXAiPjxnIHRyYW5zZm9ybT0ic2NhbGUoMC4wMTU2MjUsIDAuMDE1NjI1KSI+PHBhdGggZD0iTTcxMS4zMDYyIDI5MC42OTcyYzI0LjI4MjEgMCA0NS4zNzY1LTE5LjcwNjkgNDUuMzc2NS00NC4wMzJWNDYuNTYwMjU1OTk5OTk5OTk1YzAtMjQuMzI1MS0yMS4wOTU0LTQ0LjA1MzUtNDUuMzc2NS00NC4wNTM1LTI0LjMwMjYgMC00My45ODggMTkuNzI4NC00My45ODggNDQuMDUzNXYyMDAuMTA0OTZDNjY3LjMxODMgMjcwLjk5MDMgNjg3LjAwMzYgMjkwLjY5NzIgNzExLjMwNjIgMjkwLjY5NzJ6TTYyMy40ODA4IDExMy40MjAzSDQwMC43NjQ5Mjh2NjYuNTEzOTJoMjIyLjcxNTkwNDAwMDAwMDAyVjExMy40MjAyODh6TTg4NC4wNTMgMTEzLjQyMDNoLTgyLjc3NDAxNnY2Ni4xNDUyOGg4NS45NDAyMjRjMjUuMjc4NSAwIDQ2LjYxMTUgMjEuMzc2IDQ2LjYxMTUgNDYuNjc3djE1My45Mjc2OEg5MC40Mzg2NTYwMDAwMDAwMXYtMTUzLjkyNzY4YzAtMjUuMyAyMS4zMzMtNDYuNjc3IDQ2LjYxMTUtNDYuNjc3aDg2LjUwMzQyNFYxMTMuNDIwMjg4aC04Mi42NDI5NDRjLTY0LjA4NiAwLTExNi41MDc2IDUyLjUwODctMTE2LjUwNzYgMTE2LjcwMzJ2Njc2LjgwMTUzNTk5OTk5OTljMCA2NC4xNzQxIDUwLjQ5MTQgMTE2LjY4MDcgMTE0LjU3NzQgMTE2LjY4MDdIODg0LjA1Mjk5MmM2NC4wNjI1IDAgMTE2LjUwNjYtNTIuNTA2NiAxMTYuNTA2Ni0xMTYuNjgwN1YyMzAuMTIzNTE5OTk5OTk5OThDMTAwMC41NTk2IDE2NS45MjkgOTQ4LjExNDQgMTEzLjQyMDMgODg0LjA1MyAxMTMuNDIwM3pNOTMzLjgyOTYgOTEwLjM1MTRjMCAyNS4zLTIxLjMzMyA0Ni42NzYtNDYuNjExNSA0Ni42NzZIMTM3LjA1MDExMTk5OTk5OTk4Yy0yNS4yNzg1IDAtNDYuNjExNS0yMS4zNzYtNDYuNjExNS00Ni42NzZWNDQ2LjQ0NTU2OEg5MzMuODI5NjMyVjkxMC4zNTEzNnpNMjY3LjEwODQgNjQ2LjE4MTljMzYuODc3MyAwIDY2Ljc1MjUtMjkuOTM5NyA2Ni43NTI1LTY2Ljg4MTUgMC0zNi45MjI0LTI5Ljg3NTItNjYuODYxMS02Ni43NTI1LTY2Ljg2MTEtMzYuODU0OCAwLTY2Ljc1MjUgMjkuOTM5Ny02Ni43NTI1IDY2Ljg2MTFDMjAwLjM1NTggNjE2LjI0MjIgMjMwLjI1MjUgNjQ2LjE4MTkgMjY3LjEwODQgNjQ2LjE4MTl6TTUxMS41NDg0IDY0Ni4xODE5YzM2Ljg1NTggMCA2Ni43NTI1LTI5LjkzOTcgNjYuNzUyNS02Ni44ODE1IDAtMzYuOTIyNC0yOS44OTU3LTY2Ljg2MTEtNjYuNzUyNS02Ni44NjExLTM2Ljg3NzMgMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44NjExQzQ0NC43OTU5IDYxNi4yNDIyIDQ3NC42NzExIDY0Ni4xODE5IDUxMS41NDg0IDY0Ni4xODE5ek0yNjUuOTE2NCA4OTAuNzA5YzM2Ljg3NzMgMCA2Ni43NTE1LTI5LjkzOTcgNjYuNzUxNS02Ni44NjExIDAtMzYuOTQyOC0yOS44NzQyLTY2Ljg4MjYtNjYuNzUxNS02Ni44ODI2LTM2Ljg1NTggMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44ODI2QzE5OS4xNjM5IDg2MC43NjkzIDIyOS4wNTk2IDg5MC43MDkgMjY1LjkxNjQgODkwLjcwOXpNNTExLjU0ODQgODkwLjcwOWMzNi44NTU4IDAgNjYuNzUyNS0yOS45Mzk3IDY2Ljc1MjUtNjYuODYxMSAwLTM2Ljk0MjgtMjkuODk1Ny02Ni44ODI2LTY2Ljc1MjUtNjYuODgyNi0zNi44NzczIDAtNjYuNzUyNSAyOS45Mzk3LTY2Ljc1MjUgNjYuODgyNkM0NDQuNzk1OSA4NjAuNzY5MyA0NzQuNjcxMSA4OTAuNzA5IDUxMS41NDg0IDg5MC43MDl6TTc1NS42NDEzIDY0Ni4xODE5YzM2Ljg1NjggMCA2Ni43NTM1LTI5LjkzOTcgNjYuNzUzNS02Ni44ODE1IDAtMzYuOTIyNC0yOS44OTY3LTY2Ljg2MTEtNjYuNzUzNS02Ni44NjExLTM2Ljg3NzMgMC02Ni43NTI1IDI5LjkzOTctNjYuNzUyNSA2Ni44NjExQzY4OC44ODk5IDYxNi4yNDIyIDcxOC43NjQgNjQ2LjE4MTkgNzU1LjY0MTMgNjQ2LjE4MTl6TTMxMS43MDM2IDI5MC42OTcyYzI0LjI4MTEgMCA0NS4zNzY1LTE5LjcwNjkgNDUuMzc2NS00NC4wMzJWNDYuNTYwMjU1OTk5OTk5OTk1YzAtMjQuMzI1MS0yMS4wOTQ0LTQ0LjA1MzUtNDUuMzc2NS00NC4wNTM1LTI0LjMwMTYgMC00My45ODkgMTkuNzI4NC00My45ODkgNDQuMDUzNXYyMDAuMTA0OTZDMjY3LjcxNDYgMjcwLjk5MDMgMjg3LjQwMiAyOTAuNjk3MiAzMTEuNzAzNiAyOTAuNjk3MnoiIGZpbGw9IiM1ZTdhODgiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==) no-repeat 8px 10px;\n        padding-left: 36px;\n        color:#666;\n}\n/*transition*/\n.fade-enter-active,\n.fade-leave-active {\n    transition: all .5s ease-in-out;\n}\n.fade-enter,.fade-leave-active{\n    opacity: 0;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n}\n/*下拉框*/\n.calendar-dropdown{\n    background: #fff;\n    position: absolute;\n    left:0;\n    top:0;\n    padding:20px;\n    border: 1px solid #eee;\n    border-radius: 2px;\n}\n.calendar-dropdown:before {\n    position: absolute;\n    left:30px;\n    top: -10px;\n    content: \"\";\n    border:5px solid rgba(0, 0, 0, 0);\n    border-bottom-color: #DEDEDE;\n}\n.calendar-dropdown:after {\n    position: absolute;\n    left:30px;\n    top: -9px;\n    content: \"\";\n    border:5px solid rgba(0, 0, 0, 0);\n    border-bottom-color: #fff;\n}\n/*弹出框*/\n.calendar-dialog{\n    position: absolute;\n    left:0;\n    top:0;\n    right:0;\n    bottom:0;\n}\n.calendar-dialog-mask{\n    background:rgba(255,255,255,.5);\n    width:100%;\n    height:100%;\n}\n.calendar-dialog-body{\n    background: #fff;\n    position: absolute;\n    left:50%;\n    top:50%;\n    -webkit-transform: translate(-50%,-50%);\n            transform: translate(-50%,-50%);\n    padding:20px;\n    border: 1px solid #eee;\n    border-radius: 2px;\n}\n", ""]);

	// exports


/***/ }),

/***/ 135:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _calendar = __webpack_require__(136);

	var _calendar2 = _interopRequireDefault(_calendar);

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


	exports.default = {
	    name: 'app',
	    components: {
	        calendar: _calendar2.default, list: _list2.default
	    },
	    data: function data() {
	        return {
	            calendar2: {
	                range: true,
	                value: [[2017, 12, 1], [2019, 2, 16]], //默认日期
	                lunar: true, //显示农历
	                begin: [2017, 2, 16], //可选开始日期
	                end: [2019, 2, 16], //可选结束日期
	                select: function select(begin, end) {
	                    // console.log(begin.toString(),end.toString());
	                }
	            },
	            currentpage: 0,
	            size: 10,
	            data: [1, 2, 3],
	            state: false
	        };
	    },

	    methods: {
	        onscroll: function onscroll() {
	            console.log(1);
	        },
	        onloadmore: function onloadmore(callback) {
	            this.currentpage++;
	            console.log(this.currentpage);
	            if (this.currentpage <= 4) {
	                this.data = this.data.concat([1, 2, 3]);
	                this.$nextTick(function () {
	                    callback && callback();
	                });
	            }
	        },
	        play: function play() {
	            var dom = document.getElementById("test");
	            if (this.state) {
	                this.state = false;
	                dom.pause();
	            } else {
	                this.state = true;
	                dom.play();
	            }
	        }
	    }
	};

/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

	var disposed = false
	function injectStyle (ssrContext) {
	  if (disposed) return
	  __webpack_require__(137)
	}
	var Component = __webpack_require__(59)(
	  /* script */
	  __webpack_require__(139),
	  /* template */
	  __webpack_require__(145),
	  /* styles */
	  injectStyle,
	  /* scopeId */
	  "data-v-1541d206",
	  /* moduleIdentifier (server only) */
	  null
	)
	Component.options.__file = "/Users/kerwinliu/Documents/code/code/learnEnglish/src/components/calendar/calendar.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] calendar.vue: functional components are not supported with templates, they should use render functions.")}

	/* hot reload */
	if (false) {(function () {
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), false)
	  if (!hotAPI.compatible) return
	  module.hot.accept()
	  if (!module.hot.data) {
	    hotAPI.createRecord("data-v-1541d206", Component.options)
	  } else {
	    hotAPI.reload("data-v-1541d206", Component.options)
	  }
	  module.hot.dispose(function (data) {
	    disposed = true
	  })
	})()}

	module.exports = Component.exports


/***/ }),

/***/ 137:
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(138);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(97)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1541d206\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./calendar.vue", function() {
				var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-1541d206\",\"scoped\":true,\"hasInlineConfig\":false}!../../../node_modules/autoprefixer-loader/index.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./calendar.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),

/***/ 138:
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(96)();
	// imports


	// module
	exports.push([module.id, "\n.calendar[data-v-1541d206] {\n    margin:auto;\n    width: 100%;\n    min-width:300px;\n    background: #fff;\n    font-family: \"PingFang SC\",\"Hiragino Sans GB\",\"STHeiti\",\"Microsoft YaHei\",\"WenQuanYi Micro Hei\",sans-serif;\n    -webkit-user-select:none;\n       -moz-user-select:none;\n        -ms-user-select:none;\n            user-select:none;\n}\n.calendar-tools[data-v-1541d206]{\n    height:40px;\n    font-size: 20px;\n    line-height: 40px;\n    color:#5e7a88;\n}\n.calendar-tools span[data-v-1541d206]{\n    cursor: pointer;\n}\n.calendar-prev[data-v-1541d206]{\n    width: 14.28571429%;\n    float:left;\n    text-align: center;\n}\n.calendar-info[data-v-1541d206]{\n    padding-top: 3px;\n    font-size:16px;\n    line-height: 1.3;\n    text-align: center;\n}\n.calendar-info>div.month[data-v-1541d206]{\n    margin:auto;\n    height:20px;\n    width:100px;\n    text-align: center;\n    color:#5e7a88;\n    overflow: hidden;\n    position: relative;\n}\n.calendar-info>div.month .month-inner[data-v-1541d206]{\n    position: absolute;\n    left:0;\n    top:0;\n    height:240px;\n    transition:top .5s cubic-bezier(0.075, 0.82, 0.165, 1);\n}\n.calendar-info>div.month .month-inner>span[data-v-1541d206]{\n    display: block;\n    font-size: 14px;\n    height:20px;\n    width:100px;\n    overflow: hidden;\n    text-align: center;\n}\n.calendar-info>div.year[data-v-1541d206]{\n   font-size:10px;\n   line-height: 1;\n   color:#999;\n}\n.calendar-next[data-v-1541d206]{\n    width: 14.28571429%;\n    float:right;\n    text-align: center;\n}\n.calendar table[data-v-1541d206] {\n    clear: both;\n    width: 100%;\n    margin-bottom:10px;\n    border-collapse: collapse;\n    color: #444444;\n}\n.calendar td[data-v-1541d206] {\n    margin:2px !important;\n    padding:0px 0;\n    width: 14.28571429%;\n    height:44px;\n    text-align: center;\n    vertical-align: middle;\n    font-size:14px;\n    line-height: 125%;\n    cursor: pointer;\n    position: relative;\n    vertical-align: top;\n}\n.calendar td.week[data-v-1541d206]{\n    font-size:10px;\n    pointer-events:none !important;\n    cursor: default !important;\n}\n.calendar td.disabled[data-v-1541d206] {\n    color: #ccc;\n    pointer-events:none !important;\n    cursor: default !important;\n}\n.calendar td.disabled div[data-v-1541d206]{\n    color: #ccc;\n}\n.calendar td span[data-v-1541d206]{\n    display:block;\n    max-width:40px;\n    height:26px;\n    font-size: 16px;\n    line-height:26px;\n    margin:0px auto;\n    border-radius:20px;\n}\n.calendar td:not(.selected) span[data-v-1541d206]:not(.red):hover{\n    background:#f3f8fa;\n    color:#444;\n}\n.calendar td:not(.selected) span.red[data-v-1541d206]:hover{\n    background:#f9efef;\n}\n.calendar td:not(.disabled) span.red[data-v-1541d206]{\n    color:#ea6151;\n}\n.calendar td.selected span[data-v-1541d206]{\n    background-color: #5e7a88;\n    color: #fff;\n}\n.calendar td .text[data-v-1541d206]{\n    position: absolute;\n    top:28px;\n    left:0;\n    right:0;\n    text-align: center;\n    \n    padding:2px;\n    font-size:8px;\n    line-height: 1.2;\n    color:#444;\n}\n.calendar td .isGregorianFestival[data-v-1541d206],\n.calendar td .isLunarFestival[data-v-1541d206]{\n    color:#ea6151;\n}\n.calendar td.selected span.red[data-v-1541d206]{\n    background-color: #ea6151;\n    color: #fff;\n}\n.calendar td.selected span.red[data-v-1541d206]:hover{\n    background-color: #ea6151;\n    color: #fff;\n}\n.calendar thead td[data-v-1541d206] {\n  text-transform: uppercase;\n  height:30px;\n  vertical-align: middle;\n}\n.calendar-button[data-v-1541d206]{\n    text-align: center;\n}\n.calendar-button span[data-v-1541d206]{\n    cursor: pointer;\n    display: inline-block;\n    min-height: 1em;\n    min-width: 5em;\n    vertical-align: baseline;\n    background:#5e7a88;\n    color:#fff;\n    margin: 0 .25em 0 0;\n    padding: .6em 2em;\n    font-size: 1em;\n    line-height: 1em;\n    text-align: center;\n    border-radius: .3em;\n}\n.calendar-button span.cancel[data-v-1541d206]{\n    background:#efefef;\n    color:#666;\n}\n.calendar-years[data-v-1541d206]{\n    position: absolute;\n    left:0px;\n    top:60px;\n    right:0px;\n    bottom:0px;\n    background:#fff;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    -ms-flex-wrap:wrap;\n        flex-wrap:wrap;\n    overflow: auto;\n    transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);\n    opacity: 0;\n    pointer-events: none;\n    -webkit-transform: translateY(-10px);\n            transform: translateY(-10px);\n}\n.calendar-years.show[data-v-1541d206]{\n    opacity: 1;\n    pointer-events: auto;\n    -webkit-transform: translateY(0px);\n            transform: translateY(0px);\n}\n.calendar-years>span[data-v-1541d206]{\n    margin:1px 5px;\n    display: inline-block;\n    width:60px;\n    line-height: 30px;\n    border-radius: 20px;\n    text-align:center;\n    border:1px solid #fbfbfb;\n    color:#999;\n}\n.calendar-years>span.active[data-v-1541d206]{\n    border:1px solid #5e7a88;\n    background-color: #5e7a88;\n    color:#fff;\n}\n", ""]);

	// exports


/***/ }),

/***/ 139:
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _keys = __webpack_require__(140);

	var _keys2 = _interopRequireDefault(_keys);

	var _assign = __webpack_require__(8);

	var _assign2 = _interopRequireDefault(_assign);

	var _calendar = __webpack_require__(144);

	var _calendar2 = _interopRequireDefault(_calendar);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    props: {
	        // 多选模式
	        multi: {
	            type: Boolean,
	            default: false
	        },
	        // 范围模式
	        range: {
	            type: Boolean,
	            default: false
	        },
	        // 默认日期
	        value: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        // 开始选择日期
	        begin: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        // 结束选择日期
	        end: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        // 是否小于10补零
	        zero: {
	            type: Boolean,
	            default: false
	        },
	        // 屏蔽的日期
	        disabled: {
	            type: Array,
	            default: function _default() {
	                return [];
	            }
	        },
	        // 是否显示农历
	        lunar: {
	            type: Boolean,
	            default: false
	        },
	        // 自定义星期名称
	        weeks: {
	            type: Array,
	            default: function _default() {
	                return window.navigator.language.toLowerCase() == "zh-cn" ? ['日', '一', '二', '三', '四', '五', '六'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
	            }
	        },
	        // 自定义月份
	        months: {
	            type: Array,
	            default: function _default() {
	                return window.navigator.language.toLowerCase() == "zh-cn" ? ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'] : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
	            }
	        },
	        // 自定义事件
	        events: {
	            type: Object,
	            default: function _default() {
	                return {};
	            }
	        }
	    },
	    data: function data() {
	        return {
	            years: [],
	            yearsShow: false,
	            year: 0,
	            month: 0,
	            day: 0,
	            days: [],
	            multiDays: [],
	            today: [],
	            festival: {
	                lunar: {
	                    "1-1": "春节",
	                    "1-15": "元宵节",
	                    "2-2": "龙头节",
	                    "5-5": "端午节",
	                    "7-7": "七夕节",
	                    "7-15": "中元节",
	                    "8-15": "中秋节",
	                    "9-9": "重阳节",
	                    "10-1": "寒衣节",
	                    "10-15": "下元节",
	                    "12-8": "腊八节",
	                    "12-23": "祭灶节"
	                },
	                gregorian: {
	                    "1-1": "元旦",
	                    "2-14": "情人节",
	                    "3-8": "妇女节",
	                    "3-12": "植树节",
	                    "4-5": "清明节",
	                    "5-1": "劳动节",
	                    "5-4": "青年节",
	                    "6-1": "儿童节",
	                    "7-1": "建党节",
	                    "8-1": "建军节",
	                    "9-10": "教师节",
	                    "10-1": "国庆节",
	                    "12-24": "平安夜",
	                    "12-25": "圣诞节"
	                }
	            },
	            rangeBegin: [],
	            rangeEnd: []
	        };
	    },

	    watch: {
	        events: function events() {
	            this.render(this.year, this.month);
	        },
	        value: function value() {
	            this.init();
	        }
	    },
	    mounted: function mounted() {
	        this.init();
	    },

	    methods: {
	        init: function init() {
	            var now = new Date();
	            this.year = now.getFullYear();
	            this.month = now.getMonth();
	            this.day = now.getDate();
	            if (this.value.length > 0) {
	                if (this.range) {
	                    //范围
	                    this.year = parseInt(this.value[0][0]);
	                    this.month = parseInt(this.value[0][1]) - 1;
	                    this.day = parseInt(this.value[0][2]);
	                    var year2 = parseInt(this.value[1][0]);
	                    var month2 = parseInt(this.value[1][1]) - 1;
	                    var day2 = parseInt(this.value[1][2]);
	                    this.rangeBegin = [this.year, this.month, this.day];
	                    this.rangeEnd = [year2, month2, day2];
	                } else if (this.multi) {
	                    //多选
	                    this.multiDays = this.value;
	                    this.year = parseInt(this.value[0][0]);
	                    this.month = parseInt(this.value[0][1]) - 1;
	                    this.day = parseInt(this.value[0][2]);
	                } else {
	                    //单选
	                    this.year = parseInt(this.value[0]);
	                    this.month = parseInt(this.value[1]) - 1;
	                    this.day = parseInt(this.value[2]);
	                }
	            }
	            this.render(this.year, this.month);
	        },

	        // 渲染日期
	        render: function render(y, m) {
	            var _this = this;

	            var firstDayOfMonth = new Date(y, m, 1).getDay(); //当月第一天
	            var lastDateOfMonth = new Date(y, m + 1, 0).getDate(); //当月最后一天
	            var lastDayOfLastMonth = new Date(y, m, 0).getDate(); //最后一月的最后一天
	            this.year = y;
	            var seletSplit = this.value;
	            var i = void 0,
	                line = 0,
	                temp = [],
	                nextMonthPushDays = 1;
	            for (i = 1; i <= lastDateOfMonth; i++) {
	                var day = new Date(y, m, i).getDay(); //返回星期几（0～6）
	                var k = void 0;
	                // 第一行
	                if (day == 0) {
	                    temp[line] = [];
	                } else if (i == 1) {
	                    temp[line] = [];
	                    k = lastDayOfLastMonth - firstDayOfMonth + 1;
	                    for (var j = 0; j < firstDayOfMonth; j++) {
	                        // console.log("第一行",lunarYear,lunarMonth,lunarValue,lunarInfo)
	                        temp[line].push((0, _assign2.default)({ day: k, disabled: true }, this.getLunarInfo(this.computedPrevYear(), this.computedPrevMonth(true), k), this.getEvents(this.computedPrevYear(), this.computedPrevMonth(true), k)));
	                        k++;
	                    }
	                }

	                if (this.range) {
	                    // 范围
	                    // console.log("日期范围",this.getLunarInfo(this.year,this.month+1,i))
	                    var options = (0, _assign2.default)({ day: i }, this.getLunarInfo(this.year, this.month + 1, i), this.getEvents(this.year, this.month + 1, i));
	                    if (this.rangeBegin.length > 0) {
	                        var beginTime = Number(new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2]));
	                        var endTime = Number(new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]));
	                        var stepTime = Number(new Date(this.year, this.month, i));
	                        if (beginTime <= stepTime && endTime >= stepTime) {
	                            options.selected = true;
	                        }
	                    }
	                    if (this.begin.length > 0) {
	                        var _beginTime = Number(new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2])));
	                        if (_beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true;
	                    }
	                    if (this.end.length > 0) {
	                        var _endTime = Number(new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2])));
	                        if (_endTime < Number(new Date(this.year, this.month, i))) options.disabled = true;
	                    }
	                    if (this.disabled.length > 0) {
	                        if (this.disabled.filter(function (v) {
	                            return _this.year === v[0] && _this.month === v[1] - 1 && i === v[2];
	                        }).length > 0) {
	                            options.disabled = true;
	                        }
	                    }
	                    temp[line].push(options);
	                } else if (this.multi) {
	                    //多选
	                    var _options = void 0;
	                    // 判断是否选中
	                    if (this.value.filter(function (v) {
	                        return _this.year === v[0] && _this.month === v[1] - 1 && i === v[2];
	                    }).length > 0) {
	                        _options = (0, _assign2.default)({ day: i, selected: true }, this.getLunarInfo(this.year, this.month + 1, i), this.getEvents(this.year, this.month + 1, i));
	                    } else {
	                        _options = (0, _assign2.default)({ day: i, selected: false }, this.getLunarInfo(this.year, this.month + 1, i), this.getEvents(this.year, this.month + 1, i));
	                        if (this.begin.length > 0) {
	                            var _beginTime2 = Number(new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2])));
	                            if (_beginTime2 > Number(new Date(this.year, this.month, i))) _options.disabled = true;
	                        }
	                        if (this.end.length > 0) {
	                            var _endTime2 = Number(new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2])));
	                            if (_endTime2 < Number(new Date(this.year, this.month, i))) _options.disabled = true;
	                        }
	                        if (this.disabled.length > 0) {
	                            if (this.disabled.filter(function (v) {
	                                return _this.year === v[0] && _this.month === v[1] - 1 && i === v[2];
	                            }).length > 0) {
	                                _options.disabled = true;
	                            }
	                        }
	                    }

	                    temp[line].push(_options);
	                } else {
	                    // 单选
	                    // console.log(this.lunar(this.year,this.month,i));

	                    var chk = new Date();
	                    var chkY = chk.getFullYear();
	                    var chkM = chk.getMonth();
	                    // 匹配上次选中的日期
	                    if (parseInt(seletSplit[0]) == this.year && parseInt(seletSplit[1]) - 1 == this.month && parseInt(seletSplit[2]) == i) {
	                        // console.log("匹配上次选中的日期",lunarYear,lunarMonth,lunarValue,lunarInfo)
	                        temp[line].push((0, _assign2.default)({ day: i, selected: true }, this.getLunarInfo(this.year, this.month + 1, i), this.getEvents(this.year, this.month + 1, i)));
	                        this.today = [line, temp[line].length - 1];
	                    }
	                    // 没有默认值的时候显示选中今天日期
	                    else if (chkY == this.year && chkM == this.month && i == this.day && this.value == "") {
	                            // console.log("今天",lunarYear,lunarMonth,lunarValue,lunarInfo)
	                            temp[line].push((0, _assign2.default)({ day: i, selected: true }, this.getLunarInfo(this.year, this.month + 1, i), this.getEvents(this.year, this.month + 1, i)));
	                            this.today = [line, temp[line].length - 1];
	                        } else {
	                            // 普通日期
	                            // console.log("设置可选范围",i,lunarYear,lunarMonth,lunarValue,lunarInfo)
	                            var _options2 = (0, _assign2.default)({ day: i, selected: false }, this.getLunarInfo(this.year, this.month + 1, i), this.getEvents(this.year, this.month + 1, i));
	                            if (this.begin.length > 0) {
	                                var _beginTime3 = Number(new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2])));
	                                if (_beginTime3 > Number(new Date(this.year, this.month, i))) _options2.disabled = true;
	                            }
	                            if (this.end.length > 0) {
	                                var _endTime3 = Number(new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2])));
	                                if (_endTime3 < Number(new Date(this.year, this.month, i))) _options2.disabled = true;
	                            }
	                            if (this.disabled.length > 0) {
	                                if (this.disabled.filter(function (v) {
	                                    return _this.year === v[0] && _this.month === v[1] - 1 && i === v[2];
	                                }).length > 0) {
	                                    _options2.disabled = true;
	                                }
	                            }
	                            temp[line].push(_options2);
	                        }
	                }
	                // 到周六换行
	                if (day == 6 && i < lastDateOfMonth) {
	                    line++;
	                } else if (i == lastDateOfMonth) {
	                    // line++
	                    var _k = 1;
	                    for (var d = day; d < 6; d++) {
	                        // console.log(this.computedNextYear()+"-"+this.computedNextMonth(true)+"-"+k)
	                        temp[line].push((0, _assign2.default)({ day: _k, disabled: true }, this.getLunarInfo(this.computedNextYear(), this.computedNextMonth(true), _k), this.getEvents(this.computedNextYear(), this.computedNextMonth(true), _k)));
	                        _k++;
	                    }
	                    // 下个月除了补充的前几天开始的日期
	                    nextMonthPushDays = _k;
	                }
	            } //end for
	            // console.log(this.year+"/"+this.month+"/"+this.day+":"+line)
	            // 补充第六行让视觉稳定
	            if (line <= 5 && nextMonthPushDays > 0) {
	                // console.log({nextMonthPushDays:nextMonthPushDays,line:line})
	                for (var _i = line + 1; _i <= 5; _i++) {
	                    temp[_i] = [];
	                    var start = nextMonthPushDays + (_i - line - 1) * 7;
	                    for (var _d = start; _d <= start + 6; _d++) {
	                        temp[_i].push((0, _assign2.default)({ day: _d, disabled: true }, this.getLunarInfo(this.computedNextYear(), this.computedNextMonth(true), _d), this.getEvents(this.computedNextYear(), this.computedNextMonth(true), _d)));
	                    }
	                }
	            }
	            this.days = temp;
	        },
	        computedPrevYear: function computedPrevYear() {
	            var value = this.year;
	            if (this.month - 1 < 0) {
	                value--;
	            }
	            return value;
	        },
	        computedPrevMonth: function computedPrevMonth(isString) {
	            var value = this.month;
	            if (this.month - 1 < 0) {
	                value = 11;
	            } else {
	                value--;
	            }
	            // 用于显示目的（一般月份是从0开始的）
	            if (isString) {
	                return value + 1;
	            }
	            return value;
	        },
	        computedNextYear: function computedNextYear() {
	            var value = this.year;
	            if (this.month + 1 > 11) {
	                value++;
	            }
	            return value;
	        },
	        computedNextMonth: function computedNextMonth(isString) {
	            var value = this.month;
	            if (this.month + 1 > 11) {
	                value = 0;
	            } else {
	                value++;
	            }
	            // 用于显示目的（一般月份是从0开始的）
	            if (isString) {
	                return value + 1;
	            }
	            return value;
	        },

	        // 获取农历信息
	        getLunarInfo: function getLunarInfo(y, m, d) {
	            var lunarInfo = _calendar2.default.solar2lunar(y, m, d);
	            var lunarValue = lunarInfo.IDayCn;
	            // console.log(lunarInfo)
	            var isLunarFestival = false;
	            var isGregorianFestival = false;
	            if (this.festival.lunar[lunarInfo.lMonth + "-" + lunarInfo.lDay] != undefined) {
	                lunarValue = this.festival.lunar[lunarInfo.lMonth + "-" + lunarInfo.lDay];
	                isLunarFestival = true;
	            } else if (this.festival.gregorian[m + "-" + d] != undefined) {
	                lunarValue = this.festival.gregorian[m + "-" + d];
	                isGregorianFestival = true;
	            }
	            return {
	                lunar: lunarValue,
	                isLunarFestival: isLunarFestival,
	                isGregorianFestival: isGregorianFestival
	            };
	        },

	        // 获取自定义事件
	        getEvents: function getEvents(y, m, d) {
	            if ((0, _keys2.default)(this.events).length == 0) return false;
	            var eventName = this.events[y + "-" + m + "-" + d];
	            var data = {};
	            if (eventName != undefined) {
	                data.eventName = eventName;
	            }
	            return data;
	        },

	        // 上月
	        prev: function prev(e) {
	            e.stopPropagation();
	            if (this.month == 0) {
	                this.month = 11;
	                this.year = parseInt(this.year) - 1;
	            } else {
	                this.month = parseInt(this.month) - 1;
	            }
	            this.render(this.year, this.month);
	            this.$emit('selectMonth', this.month + 1, this.year);
	            this.$emit('prev', this.month + 1, this.year);
	        },

	        //  下月
	        next: function next(e) {
	            e.stopPropagation();
	            if (this.month == 11) {
	                this.month = 0;
	                this.year = parseInt(this.year) + 1;
	            } else {
	                this.month = parseInt(this.month) + 1;
	            }
	            this.render(this.year, this.month);
	            this.$emit('selectMonth', this.month + 1, this.year);
	            this.$emit('next', this.month + 1, this.year);
	        },

	        // 选中日期
	        select: function select(k1, k2, e) {
	            var _this2 = this;

	            if (e != undefined) e.stopPropagation();
	            // 日期范围
	            if (this.range) {
	                if (this.rangeBegin.length == 0 || this.rangeEndTemp != 0) {
	                    this.rangeBegin = [this.year, this.month, this.days[k1][k2].day];
	                    this.rangeBeginTemp = this.rangeBegin;
	                    this.rangeEnd = [this.year, this.month, this.days[k1][k2].day];
	                    this.rangeEndTemp = 0;
	                } else {
	                    this.rangeEnd = [this.year, this.month, this.days[k1][k2].day];
	                    this.rangeEndTemp = 1;
	                    // 判断结束日期小于开始日期则自动颠倒过来
	                    if (+new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]) < +new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2])) {
	                        this.rangeBegin = this.rangeEnd;
	                        this.rangeEnd = this.rangeBeginTemp;
	                    }
	                    // 小于10左边打补丁
	                    var begin = [];
	                    var end = [];
	                    if (this.zero) {
	                        this.rangeBegin.forEach(function (v, k) {
	                            if (k == 1) v = v + 1;
	                            begin.push(_this2.zeroPad(v));
	                        });
	                        this.rangeEnd.forEach(function (v, k) {
	                            if (k == 1) v = v + 1;
	                            end.push(_this2.zeroPad(v));
	                        });
	                    } else {
	                        begin = this.rangeBegin;
	                        end = this.rangeEnd;
	                    }
	                    // console.log("选中日期",begin,end)
	                    this.$emit('select', begin, end);
	                }
	                this.render(this.year, this.month);
	            } else if (this.multi) {
	                // 如果已经选过则过滤掉
	                var filterDay = this.multiDays.filter(function (v) {
	                    return _this2.year === v[0] && _this2.month === v[1] - 1 && _this2.days[k1][k2].day === v[2];
	                });
	                if (filterDay.length > 0) {
	                    this.multiDays = this.multiDays.filter(function (v) {
	                        return _this2.year !== v[0] || _this2.month !== v[1] - 1 || _this2.days[k1][k2].day !== v[2];
	                    });
	                } else {
	                    this.multiDays.push([this.year, this.month + 1, this.days[k1][k2].day]);
	                }
	                this.days[k1][k2].selected = !this.days[k1][k2].selected;
	                this.$emit('select', this.multiDays);
	            } else {
	                // 取消上次选中
	                if (this.today.length > 0) {
	                    this.days.forEach(function (v) {
	                        v.forEach(function (vv) {
	                            vv.selected = false;
	                        });
	                    });
	                }
	                // 设置当前选中天
	                this.days[k1][k2].selected = true;
	                this.day = this.days[k1][k2].day;
	                this.today = [k1, k2];
	                this.$emit('select', [this.year, this.zero ? this.zeroPad(this.month + 1) : this.month + 1, this.zero ? this.zeroPad(this.days[k1][k2].day) : this.days[k1][k2].day]);
	            }
	        },
	        changeYear: function changeYear() {
	            if (this.yearsShow) {
	                this.yearsShow = false;
	                return false;
	            }
	            this.yearsShow = true;
	            this.years = [];
	            for (var i = ~~this.year - 10; i < ~~this.year + 10; i++) {
	                this.years.push(i);
	            }
	        },
	        selectYear: function selectYear(value) {
	            this.yearsShow = false;
	            this.year = value;
	            this.render(this.year, this.month);
	            this.$emit('selectYear', value);
	        },

	        // 返回今天
	        setToday: function setToday() {
	            var _this3 = this;

	            var now = new Date();
	            this.year = now.getFullYear();
	            this.month = now.getMonth();
	            this.day = now.getDate();
	            this.render(this.year, this.month);
	            // 遍历当前日找到选中
	            this.days.forEach(function (v) {
	                var day = v.find(function (vv) {
	                    return vv.day == _this3.day;
	                });
	                if (day != undefined) {
	                    day.selected = true;
	                }
	            });

	            this.$forceUpdate();
	        },

	        // 日期补零
	        zeroPad: function zeroPad(n) {
	            return String(n < 10 ? '0' + n : n);
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
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
	//
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

/***/ 144:
/***/ (function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	* @1900-2100区间内的公历、农历互转
	* @charset UTF-8
	* @Author  Jea杨(JJonline@JJonline.Cn) 
	* @Time    2014-7-21
	* @Time    2016-8-13 Fixed 2033hex、Attribution Annals
	* @Time    2016-9-25 Fixed lunar LeapMonth Param Bug
	* @Version 1.0.2
	* @公历转农历：calendar.solar2lunar(1987,11,01); //[you can ignore params of prefix 0]
	* @农历转公历：calendar.lunar2solar(1987,09,10); //[you can ignore params of prefix 0]
	*/
	var calendar = {

	    /**
	      * 农历1900-2100的润大小信息表
	      * @Array Of Property
	      * @return Hex 
	      */
	    lunarInfo: [0x04bd8, 0x04ae0, 0x0a570, 0x054d5, 0x0d260, 0x0d950, 0x16554, 0x056a0, 0x09ad0, 0x055d2, //1900-1909
	    0x04ae0, 0x0a5b6, 0x0a4d0, 0x0d250, 0x1d255, 0x0b540, 0x0d6a0, 0x0ada2, 0x095b0, 0x14977, //1910-1919
	    0x04970, 0x0a4b0, 0x0b4b5, 0x06a50, 0x06d40, 0x1ab54, 0x02b60, 0x09570, 0x052f2, 0x04970, //1920-1929
	    0x06566, 0x0d4a0, 0x0ea50, 0x06e95, 0x05ad0, 0x02b60, 0x186e3, 0x092e0, 0x1c8d7, 0x0c950, //1930-1939
	    0x0d4a0, 0x1d8a6, 0x0b550, 0x056a0, 0x1a5b4, 0x025d0, 0x092d0, 0x0d2b2, 0x0a950, 0x0b557, //1940-1949
	    0x06ca0, 0x0b550, 0x15355, 0x04da0, 0x0a5b0, 0x14573, 0x052b0, 0x0a9a8, 0x0e950, 0x06aa0, //1950-1959
	    0x0aea6, 0x0ab50, 0x04b60, 0x0aae4, 0x0a570, 0x05260, 0x0f263, 0x0d950, 0x05b57, 0x056a0, //1960-1969
	    0x096d0, 0x04dd5, 0x04ad0, 0x0a4d0, 0x0d4d4, 0x0d250, 0x0d558, 0x0b540, 0x0b6a0, 0x195a6, //1970-1979
	    0x095b0, 0x049b0, 0x0a974, 0x0a4b0, 0x0b27a, 0x06a50, 0x06d40, 0x0af46, 0x0ab60, 0x09570, //1980-1989
	    0x04af5, 0x04970, 0x064b0, 0x074a3, 0x0ea50, 0x06b58, 0x055c0, 0x0ab60, 0x096d5, 0x092e0, //1990-1999
	    0x0c960, 0x0d954, 0x0d4a0, 0x0da50, 0x07552, 0x056a0, 0x0abb7, 0x025d0, 0x092d0, 0x0cab5, //2000-2009
	    0x0a950, 0x0b4a0, 0x0baa4, 0x0ad50, 0x055d9, 0x04ba0, 0x0a5b0, 0x15176, 0x052b0, 0x0a930, //2010-2019
	    0x07954, 0x06aa0, 0x0ad50, 0x05b52, 0x04b60, 0x0a6e6, 0x0a4e0, 0x0d260, 0x0ea65, 0x0d530, //2020-2029
	    0x05aa0, 0x076a3, 0x096d0, 0x04afb, 0x04ad0, 0x0a4d0, 0x1d0b6, 0x0d250, 0x0d520, 0x0dd45, //2030-2039
	    0x0b5a0, 0x056d0, 0x055b2, 0x049b0, 0x0a577, 0x0a4b0, 0x0aa50, 0x1b255, 0x06d20, 0x0ada0, //2040-2049
	    /**Add By JJonline@JJonline.Cn**/
	    0x14b63, 0x09370, 0x049f8, 0x04970, 0x064b0, 0x168a6, 0x0ea50, 0x06b20, 0x1a6c4, 0x0aae0, //2050-2059
	    0x0a2e0, 0x0d2e3, 0x0c960, 0x0d557, 0x0d4a0, 0x0da50, 0x05d55, 0x056a0, 0x0a6d0, 0x055d4, //2060-2069
	    0x052d0, 0x0a9b8, 0x0a950, 0x0b4a0, 0x0b6a6, 0x0ad50, 0x055a0, 0x0aba4, 0x0a5b0, 0x052b0, //2070-2079
	    0x0b273, 0x06930, 0x07337, 0x06aa0, 0x0ad50, 0x14b55, 0x04b60, 0x0a570, 0x054e4, 0x0d160, //2080-2089
	    0x0e968, 0x0d520, 0x0daa0, 0x16aa6, 0x056d0, 0x04ae0, 0x0a9d4, 0x0a2d0, 0x0d150, 0x0f252, //2090-2099
	    0x0d520], //2100

	    /**
	      * 公历每个月份的天数普通表
	      * @Array Of Property
	      * @return Number 
	      */
	    solarMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],

	    /**
	      * 天干地支之天干速查表
	      * @Array Of Property trans["甲","乙","丙","丁","戊","己","庚","辛","壬","癸"]
	      * @return Cn string 
	      */
	    Gan: ["\u7532", "\u4E59", "\u4E19", "\u4E01", "\u620A", "\u5DF1", "\u5E9A", "\u8F9B", "\u58EC", "\u7678"],

	    /**
	      * 天干地支之地支速查表
	      * @Array Of Property 
	      * @trans["子","丑","寅","卯","辰","巳","午","未","申","酉","戌","亥"]
	      * @return Cn string 
	      */
	    Zhi: ["\u5B50", "\u4E11", "\u5BC5", "\u536F", "\u8FB0", "\u5DF3", "\u5348", "\u672A", "\u7533", "\u9149", "\u620C", "\u4EA5"],

	    /**
	      * 天干地支之地支速查表<=>生肖
	      * @Array Of Property 
	      * @trans["鼠","牛","虎","兔","龙","蛇","马","羊","猴","鸡","狗","猪"]
	      * @return Cn string 
	      */
	    Animals: ["\u9F20", "\u725B", "\u864E", "\u5154", "\u9F99", "\u86C7", "\u9A6C", "\u7F8A", "\u7334", "\u9E21", "\u72D7", "\u732A"],

	    /**
	      * 24节气速查表
	      * @Array Of Property 
	      * @trans["小寒","大寒","立春","雨水","惊蛰","春分","清明","谷雨","立夏","小满","芒种","夏至","小暑","大暑","立秋","处暑","白露","秋分","寒露","霜降","立冬","小雪","大雪","冬至"]
	      * @return Cn string 
	      */
	    solarTerm: ["\u5C0F\u5BD2", "\u5927\u5BD2", "\u7ACB\u6625", "\u96E8\u6C34", "\u60CA\u86F0", "\u6625\u5206", "\u6E05\u660E", "\u8C37\u96E8", "\u7ACB\u590F", "\u5C0F\u6EE1", "\u8292\u79CD", "\u590F\u81F3", "\u5C0F\u6691", "\u5927\u6691", "\u7ACB\u79CB", "\u5904\u6691", "\u767D\u9732", "\u79CB\u5206", "\u5BD2\u9732", "\u971C\u964D", "\u7ACB\u51AC", "\u5C0F\u96EA", "\u5927\u96EA", "\u51AC\u81F3"],

	    /**
	      * 1900-2100各年的24节气日期速查表
	      * @Array Of Property 
	      * @return 0x string For splice
	      */
	    sTermInfo: ['9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd0b06bdb0722c965ce1cfcc920f', 'b027097bd097c36b0b6fc9274c91aa', '9778397bd19801ec9210c965cc920e', '97b6b97bd19801ec95f8c965cc920f', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd197c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bd09801d98082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec95f8c965cc920e', '97bcf97c3598082c95f8e1cfcc920f', '97bd097bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c3598082c95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf97c359801ec95f8c965cc920f', '97bd097bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd19801ec9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b97bd19801ec95f8c965cc920f', '97bd07f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bd07f1487f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c965cc920e', '97bcf7f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b97bd19801ec9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b97bd197c36c9210c9274c920e', '97bcf7f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '9778397bd097c36c9210c9274c920e', '97b6b7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c36b0b6fc9210c8dc2', '9778397bd097c36b0b70c9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9274c91aa', '97b6b7f0e47f531b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c91aa', '97b6b7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '9778397bd097c36b0b6fc9210c8dc2', '977837f0e37f149b0723b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f5307f595b0b0bc920fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc9210c8dc2', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd097c35b0b6fc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0b0bb0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14998082b0723b06bd', '7f07e7f0e37f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e397bd07f595b0b0bc920fb0722', '977837f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f595b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e37f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f1487f531b0b0bb0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e47f149b0723b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14998082b0723b06bd', '7f07e7f0e37f14998083b0787b0721', '7f0e27f0e47f531b0723b0b6fb0722', '7f0e37f0e366aa89801eb072297c35', '7ec967f0e37f14898082b0723b02d5', '7f07e7f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66aa89801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b0721', '7f07e7f0e47f531b0723b0b6fb0722', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b0723b02d5', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e36665b66a449801e9808297c35', '665f67f0e37f14898082b072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e26665b66a449801e9808297c35', '665f67f0e37f1489801eb072297c35', '7ec967f0e37f14998082b0787b06bd', '7f07e7f0e47f531b0723b0b6fb0721', '7f0e27f1487f531b0b0bb0b6fb0722'],

	    /**
	      * 数字转中文速查表
	      * @Array Of Property 
	      * @trans ['日','一','二','三','四','五','六','七','八','九','十']
	      * @return Cn string 
	      */
	    nStr1: ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341"],

	    /**
	      * 日期转农历称呼速查表
	      * @Array Of Property 
	      * @trans ['初','十','廿','卅']
	      * @return Cn string 
	      */
	    nStr2: ["\u521D", "\u5341", "\u5EFF", "\u5345"],

	    /**
	      * 月份转农历称呼速查表
	      * @Array Of Property 
	      * @trans ['正','一','二','三','四','五','六','七','八','九','十','冬','腊']
	      * @return Cn string 
	      */
	    nStr3: ["\u6B63", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D", "\u4E03", "\u516B", "\u4E5D", "\u5341", "\u51AC", "\u814A"],

	    /**
	      * 返回农历y年一整年的总天数
	      * @param lunar Year
	      * @return Number
	      * @eg:var count = calendar.lYearDays(1987) ;//count=387
	      */
	    lYearDays: function lYearDays(y) {
	        var i,
	            sum = 348;
	        for (i = 0x8000; i > 0x8; i >>= 1) {
	            sum += calendar.lunarInfo[y - 1900] & i ? 1 : 0;
	        }
	        return sum + calendar.leapDays(y);
	    },

	    /**
	      * 返回农历y年闰月是哪个月；若y年没有闰月 则返回0
	      * @param lunar Year
	      * @return Number (0-12)
	      * @eg:var leapMonth = calendar.leapMonth(1987) ;//leapMonth=6
	      */
	    leapMonth: function leapMonth(y) {
	        //闰字编码 \u95f0
	        return calendar.lunarInfo[y - 1900] & 0xf;
	    },

	    /**
	      * 返回农历y年闰月的天数 若该年没有闰月则返回0
	      * @param lunar Year
	      * @return Number (0、29、30)
	      * @eg:var leapMonthDay = calendar.leapDays(1987) ;//leapMonthDay=29
	      */
	    leapDays: function leapDays(y) {
	        if (calendar.leapMonth(y)) {
	            return calendar.lunarInfo[y - 1900] & 0x10000 ? 30 : 29;
	        }
	        return 0;
	    },

	    /**
	      * 返回农历y年m月（非闰月）的总天数，计算m为闰月时的天数请使用leapDays方法
	      * @param lunar Year
	      * @return Number (-1、29、30)
	      * @eg:var MonthDay = calendar.monthDays(1987,9) ;//MonthDay=29
	      */
	    monthDays: function monthDays(y, m) {
	        if (m > 12 || m < 1) {
	            return -1;
	        } //月份参数从1至12，参数错误返回-1
	        return calendar.lunarInfo[y - 1900] & 0x10000 >> m ? 30 : 29;
	    },

	    /**
	      * 返回公历(!)y年m月的天数
	      * @param solar Year
	      * @return Number (-1、28、29、30、31)
	      * @eg:var solarMonthDay = calendar.leapDays(1987) ;//solarMonthDay=30
	      */
	    solarDays: function solarDays(y, m) {
	        if (m > 12 || m < 1) {
	            return -1;
	        } //若参数错误 返回-1
	        var ms = m - 1;
	        if (ms == 1) {
	            //2月份的闰平规律测算后确认返回28或29
	            return y % 4 == 0 && y % 100 != 0 || y % 400 == 0 ? 29 : 28;
	        } else {
	            return calendar.solarMonth[ms];
	        }
	    },

	    /**
	     * 农历年份转换为干支纪年
	     * @param  lYear 农历年的年份数
	     * @return Cn string
	     */
	    toGanZhiYear: function toGanZhiYear(lYear) {
	        var ganKey = (lYear - 3) % 10;
	        var zhiKey = (lYear - 3) % 12;
	        if (ganKey == 0) ganKey = 10; //如果余数为0则为最后一个天干
	        if (zhiKey == 0) zhiKey = 12; //如果余数为0则为最后一个地支
	        return calendar.Gan[ganKey - 1] + calendar.Zhi[zhiKey - 1];
	    },

	    /**
	     * 公历月、日判断所属星座
	     * @param  cMonth [description]
	     * @param  cDay [description]
	     * @return Cn string
	     */
	    toAstro: function toAstro(cMonth, cDay) {
	        var s = "\u9B54\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u9B54\u7FAF";
	        var arr = [20, 19, 21, 21, 21, 22, 23, 23, 23, 23, 22, 22];
	        return s.substr(cMonth * 2 - (cDay < arr[cMonth - 1] ? 2 : 0), 2) + "\u5EA7"; //座
	    },

	    /**
	      * 传入offset偏移量返回干支
	      * @param offset 相对甲子的偏移量
	      * @return Cn string
	      */
	    toGanZhi: function toGanZhi(offset) {
	        return calendar.Gan[offset % 10] + calendar.Zhi[offset % 12];
	    },

	    /**
	      * 传入公历(!)y年获得该年第n个节气的公历日期
	      * @param y公历年(1900-2100)；n二十四节气中的第几个节气(1~24)；从n=1(小寒)算起 
	      * @return day Number
	      * @eg:var _24 = calendar.getTerm(1987,3) ;//_24=4;意即1987年2月4日立春
	      */
	    getTerm: function getTerm(y, n) {
	        if (y < 1900 || y > 2100) {
	            return -1;
	        }
	        if (n < 1 || n > 24) {
	            return -1;
	        }
	        var _table = calendar.sTermInfo[y - 1900];
	        var _info = [parseInt('0x' + _table.substr(0, 5)).toString(), parseInt('0x' + _table.substr(5, 5)).toString(), parseInt('0x' + _table.substr(10, 5)).toString(), parseInt('0x' + _table.substr(15, 5)).toString(), parseInt('0x' + _table.substr(20, 5)).toString(), parseInt('0x' + _table.substr(25, 5)).toString()];
	        var _calday = [_info[0].substr(0, 1), _info[0].substr(1, 2), _info[0].substr(3, 1), _info[0].substr(4, 2), _info[1].substr(0, 1), _info[1].substr(1, 2), _info[1].substr(3, 1), _info[1].substr(4, 2), _info[2].substr(0, 1), _info[2].substr(1, 2), _info[2].substr(3, 1), _info[2].substr(4, 2), _info[3].substr(0, 1), _info[3].substr(1, 2), _info[3].substr(3, 1), _info[3].substr(4, 2), _info[4].substr(0, 1), _info[4].substr(1, 2), _info[4].substr(3, 1), _info[4].substr(4, 2), _info[5].substr(0, 1), _info[5].substr(1, 2), _info[5].substr(3, 1), _info[5].substr(4, 2)];
	        return parseInt(_calday[n - 1]);
	    },

	    /**
	      * 传入农历数字月份返回汉语通俗表示法
	      * @param lunar month
	      * @return Cn string
	      * @eg:var cnMonth = calendar.toChinaMonth(12) ;//cnMonth='腊月'
	      */
	    toChinaMonth: function toChinaMonth(m) {
	        // 月 => \u6708
	        if (m > 12 || m < 1) {
	            return -1;
	        } //若参数错误 返回-1
	        var s = calendar.nStr3[m - 1];
	        s += "\u6708"; //加上月字
	        return s;
	    },

	    /**
	      * 传入农历日期数字返回汉字表示法
	      * @param lunar day
	      * @return Cn string
	      * @eg:var cnDay = calendar.toChinaDay(21) ;//cnMonth='廿一'
	      */
	    toChinaDay: function toChinaDay(d) {
	        //日 => \u65e5
	        var s;
	        switch (d) {
	            case 10:
	                s = "\u521D\u5341";break;
	            case 20:
	                s = "\u4E8C\u5341";break;
	                break;
	            case 30:
	                s = "\u4E09\u5341";break;
	                break;
	            default:
	                s = calendar.nStr2[Math.floor(d / 10)];
	                s += calendar.nStr1[d % 10];
	        }
	        return s;
	    },

	    /**
	      * 年份转生肖[!仅能大致转换] => 精确划分生肖分界线是“立春”
	      * @param y year
	      * @return Cn string
	      * @eg:var animal = calendar.getAnimal(1987) ;//animal='兔'
	      */
	    getAnimal: function getAnimal(y) {
	        return calendar.Animals[(y - 4) % 12];
	    },

	    /**
	      * 传入阳历年月日获得详细的公历、农历object信息 <=>JSON
	      * @param y  solar year
	      * @param m  solar month
	      * @param d  solar day
	      * @return JSON object
	      * @eg:console.log(calendar.solar2lunar(1987,11,01));
	      */
	    solar2lunar: function solar2lunar(y, m, d) {
	        //参数区间1900.1.31~2100.12.31
	        if (y < 1900 || y > 2100) {
	            return -1;
	        } //年份限定、上限
	        if (y == 1900 && m == 1 && d < 31) {
	            return -1;
	        } //下限
	        if (!y) {
	            //未传参  获得当天
	            var objDate = new Date();
	        } else {
	            var objDate = new Date(y, parseInt(m) - 1, d);
	        }
	        var i,
	            leap = 0,
	            temp = 0;
	        //修正ymd参数
	        var y = objDate.getFullYear(),
	            m = objDate.getMonth() + 1,
	            d = objDate.getDate();
	        var offset = (Date.UTC(objDate.getFullYear(), objDate.getMonth(), objDate.getDate()) - Date.UTC(1900, 0, 31)) / 86400000;
	        for (i = 1900; i < 2101 && offset > 0; i++) {
	            temp = calendar.lYearDays(i);offset -= temp;
	        }
	        if (offset < 0) {
	            offset += temp;i--;
	        }

	        //是否今天
	        var isTodayObj = new Date(),
	            isToday = false;
	        if (isTodayObj.getFullYear() == y && isTodayObj.getMonth() + 1 == m && isTodayObj.getDate() == d) {
	            isToday = true;
	        }
	        //星期几
	        var nWeek = objDate.getDay(),
	            cWeek = calendar.nStr1[nWeek];
	        if (nWeek == 0) {
	            nWeek = 7;
	        } //数字表示周几顺应天朝周一开始的惯例
	        //农历年
	        var year = i;

	        var leap = calendar.leapMonth(i); //闰哪个月
	        var isLeap = false;

	        //效验闰月
	        for (i = 1; i < 13 && offset > 0; i++) {
	            //闰月
	            if (leap > 0 && i == leap + 1 && isLeap == false) {
	                --i;
	                isLeap = true;temp = calendar.leapDays(year); //计算农历闰月天数
	            } else {
	                temp = calendar.monthDays(year, i); //计算农历普通月天数
	            }
	            //解除闰月
	            if (isLeap == true && i == leap + 1) {
	                isLeap = false;
	            }
	            offset -= temp;
	        }

	        if (offset == 0 && leap > 0 && i == leap + 1) if (isLeap) {
	            isLeap = false;
	        } else {
	            isLeap = true;--i;
	        }
	        if (offset < 0) {
	            offset += temp;--i;
	        }
	        //农历月
	        var month = i;
	        //农历日
	        var day = offset + 1;

	        //天干地支处理
	        var sm = m - 1;
	        var gzY = calendar.toGanZhiYear(year);

	        //月柱 1900年1月小寒以前为 丙子月(60进制12)
	        var firstNode = calendar.getTerm(year, m * 2 - 1); //返回当月「节」为几日开始
	        var secondNode = calendar.getTerm(year, m * 2); //返回当月「节」为几日开始

	        //依据12节气修正干支月
	        var gzM = calendar.toGanZhi((y - 1900) * 12 + m + 11);
	        if (d >= firstNode) {
	            gzM = calendar.toGanZhi((y - 1900) * 12 + m + 12);
	        }

	        //传入的日期的节气与否
	        var isTerm = false;
	        var Term = null;
	        if (firstNode == d) {
	            isTerm = true;
	            Term = calendar.solarTerm[m * 2 - 2];
	        }
	        if (secondNode == d) {
	            isTerm = true;
	            Term = calendar.solarTerm[m * 2 - 1];
	        }
	        //日柱 当月一日与 1900/1/1 相差天数
	        var dayCyclical = Date.UTC(y, sm, 1, 0, 0, 0, 0) / 86400000 + 25567 + 10;
	        var gzD = calendar.toGanZhi(dayCyclical + d - 1);
	        //该日期所属的星座
	        var astro = calendar.toAstro(m, d);

	        return { 'lYear': year, 'lMonth': month, 'lDay': day, 'Animal': calendar.getAnimal(year), 'IMonthCn': (isLeap ? "\u95F0" : '') + calendar.toChinaMonth(month), 'IDayCn': calendar.toChinaDay(day), 'cYear': y, 'cMonth': m, 'cDay': d, 'gzYear': gzY, 'gzMonth': gzM, 'gzDay': gzD, 'isToday': isToday, 'isLeap': isLeap, 'nWeek': nWeek, 'ncWeek': "\u661F\u671F" + cWeek, 'isTerm': isTerm, 'Term': Term, 'astro': astro };
	    },

	    /**
	      * 传入农历年月日以及传入的月份是否闰月获得详细的公历、农历object信息 <=>JSON
	      * @param y  lunar year
	      * @param m  lunar month
	      * @param d  lunar day
	      * @param isLeapMonth  lunar month is leap or not.[如果是农历闰月第四个参数赋值true即可]
	      * @return JSON object
	      * @eg:console.log(calendar.lunar2solar(1987,9,10));
	      */
	    lunar2solar: function lunar2solar(y, m, d, isLeapMonth) {
	        //参数区间1900.1.31~2100.12.1
	        var isLeapMonth = !!isLeapMonth;
	        var leapOffset = 0;
	        var leapMonth = calendar.leapMonth(y);
	        var leapDay = calendar.leapDays(y);
	        if (isLeapMonth && leapMonth != m) {
	            return -1;
	        } //传参要求计算该闰月公历 但该年得出的闰月与传参的月份并不同
	        if (y == 2100 && m == 12 && d > 1 || y == 1900 && m == 1 && d < 31) {
	            return -1;
	        } //超出了最大极限值 
	        var day = calendar.monthDays(y, m);
	        var _day = day;
	        //bugFix 2016-9-25 
	        //if month is leap, _day use leapDays method 
	        if (isLeapMonth) {
	            _day = calendar.leapDays(y, m);
	        }
	        if (y < 1900 || y > 2100 || d > _day) {
	            return -1;
	        } //参数合法性效验

	        //计算农历的时间差
	        var offset = 0;
	        for (var i = 1900; i < y; i++) {
	            offset += calendar.lYearDays(i);
	        }
	        var leap = 0,
	            isAdd = false;
	        for (var i = 1; i < m; i++) {
	            leap = calendar.leapMonth(y);
	            if (!isAdd) {
	                //处理闰月
	                if (leap <= i && leap > 0) {
	                    offset += calendar.leapDays(y);isAdd = true;
	                }
	            }
	            offset += calendar.monthDays(y, i);
	        }
	        //转换闰月农历 需补充该年闰月的前一个月的时差
	        if (isLeapMonth) {
	            offset += day;
	        }
	        //1900年农历正月一日的公历时间为1900年1月30日0时0分0秒(该时间也是本农历的最开始起始点)
	        var stmap = Date.UTC(1900, 1, 30, 0, 0, 0);
	        var calObj = new Date((offset + d - 31) * 86400000 + stmap);
	        var cY = calObj.getUTCFullYear();
	        var cM = calObj.getUTCMonth() + 1;
	        var cD = calObj.getUTCDate();

	        return calendar.solar2lunar(cY, cM, cD);
	    }
	};

	exports.default = calendar;

/***/ }),

/***/ 145:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "calendar"
	  }, [_c('div', {
	    staticClass: "calendar-tools"
	  }, [_c('span', {
	    staticClass: "calendar-prev",
	    on: {
	      "click": _vm.prev
	    }
	  }, [_c('svg', {
	    attrs: {
	      "width": "20",
	      "height": "20",
	      "viewBox": "0 0 16 16",
	      "version": "1.1",
	      "xmlns": "http://www.w3.org/2000/svg",
	      "xmlns:xlink": "http://www.w3.org/1999/xlink"
	    }
	  }, [_c('g', {
	    staticClass: "transform-group"
	  }, [_c('g', {
	    attrs: {
	      "transform": "scale(0.015625, 0.015625)"
	    }
	  }, [_c('path', {
	    attrs: {
	      "d": "M671.968 912c-12.288 0-24.576-4.672-33.952-14.048L286.048 545.984c-18.752-18.72-18.752-49.12 0-67.872l351.968-352c18.752-18.752 49.12-18.752 67.872 0 18.752 18.72 18.752 49.12 0 67.872l-318.016 318.048 318.016 318.016c18.752 18.752 18.752 49.12 0 67.872C696.544 907.328 684.256 912 671.968 912z",
	      "fill": "#5e7a88"
	    }
	  })])])])]), _vm._v(" "), _c('span', {
	    staticClass: "calendar-next",
	    on: {
	      "click": _vm.next
	    }
	  }, [_c('svg', {
	    attrs: {
	      "width": "20",
	      "height": "20",
	      "viewBox": "0 0 16 16",
	      "version": "1.1",
	      "xmlns": "http://www.w3.org/2000/svg",
	      "xmlns:xlink": "http://www.w3.org/1999/xlink"
	    }
	  }, [_c('g', {
	    staticClass: "transform-group"
	  }, [_c('g', {
	    attrs: {
	      "transform": "scale(0.015625, 0.015625)"
	    }
	  }, [_c('path', {
	    attrs: {
	      "d": "M761.056 532.128c0.512-0.992 1.344-1.824 1.792-2.848 8.8-18.304 5.92-40.704-9.664-55.424L399.936 139.744c-19.264-18.208-49.632-17.344-67.872 1.888-18.208 19.264-17.376 49.632 1.888 67.872l316.96 299.84-315.712 304.288c-19.072 18.4-19.648 48.768-1.248 67.872 9.408 9.792 21.984 14.688 34.56 14.688 12 0 24-4.48 33.312-13.44l350.048-337.376c0.672-0.672 0.928-1.6 1.6-2.304 0.512-0.48 1.056-0.832 1.568-1.344C757.76 538.88 759.2 535.392 761.056 532.128z",
	      "fill": "#5e7a88"
	    }
	  })])])])]), _vm._v(" "), _c('div', {
	    staticClass: "calendar-info",
	    on: {
	      "click": function($event) {
	        $event.stopPropagation();
	        _vm.changeYear($event)
	      }
	    }
	  }, [_c('div', {
	    staticClass: "month"
	  }, [_c('div', {
	    staticClass: "month-inner",
	    style: ({
	      'top': -(this.month * 20) + 'px'
	    })
	  }, _vm._l((_vm.months), function(m) {
	    return _c('span', [_vm._v(_vm._s(m))])
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "year"
	  }, [_vm._v(_vm._s(_vm.year))])])]), _vm._v(" "), _c('table', {
	    attrs: {
	      "cellpadding": "5"
	    }
	  }, [_c('thead', [_c('tr', _vm._l((_vm.weeks), function(week) {
	    return _c('td', {
	      staticClass: "week"
	    }, [_vm._v(_vm._s(week))])
	  }))]), _vm._v(" "), _c('tbody', _vm._l((_vm.days), function(day, k1) {
	    return _c('tr', {
	      staticStyle: {}
	    }, _vm._l((day), function(child, k2) {
	      return _c('td', {
	        class: {
	          'selected': child.selected, 'disabled': child.disabled
	        },
	        on: {
	          "click": function($event) {
	            _vm.select(k1, k2, $event)
	          }
	        }
	      }, [_c('span', {
	        class: {
	          'red': k2 == 0 || k2 == 6 || ((child.isLunarFestival || child.isGregorianFestival) && _vm.lunar)
	        }
	      }, [_vm._v(_vm._s(child.day))]), _vm._v(" "), (child.eventName != undefined) ? _c('div', {
	        staticClass: "text"
	      }, [_vm._v(_vm._s(child.eventName))]) : _vm._e(), _vm._v(" "), (_vm.lunar) ? _c('div', {
	        staticClass: "text",
	        class: {
	          'isLunarFestival': child.isLunarFestival, 'isGregorianFestival': child.isGregorianFestival
	        }
	      }, [_vm._v(_vm._s(child.lunar))]) : _vm._e()])
	    }))
	  }))]), _vm._v(" "), _c('div', {
	    staticClass: "calendar-years",
	    class: {
	      'show': _vm.yearsShow
	    }
	  }, _vm._l((_vm.years), function(y) {
	    return _c('span', {
	      class: {
	        'active': y == _vm.year
	      },
	      on: {
	        "click": function($event) {
	          $event.stopPropagation();
	          _vm.selectYear(y)
	        }
	      }
	    }, [_vm._v(_vm._s(y))])
	  }))])
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-1541d206", module.exports)
	  }
	}

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "app"
	    }
	  }, [_c('audio', {
	    attrs: {
	      "src": "http://65.ierge.cn/8/126/252123.mp3",
	      "id": "test"
	    }
	  }, [_vm._v("\n    Your browser does not support the audio element.\n    ")]), _vm._v(" "), _c('div', {
	    staticStyle: {
	      "background-color": "red",
	      "width": "100px",
	      "height": "100px"
	    },
	    on: {
	      "click": _vm.play
	    }
	  }, [_vm._v("\n        音频播放\n    ")]), _vm._v(" "), _c('list', {
	    attrs: {
	      "id": "list-one",
	      "onloadmore": _vm.onloadmore
	    }
	  }, [_c('div', {
	    staticClass: "flex",
	    attrs: {
	      "slot": "list"
	    },
	    slot: "list"
	  }, _vm._l((_vm.data), function(item, index) {
	    return _c('div', {
	      key: index
	    }, [_c('calendar', {
	      attrs: {
	        "range": _vm.calendar2.range,
	        "lunar": _vm.calendar2.lunar,
	        "value": _vm.calendar2.value,
	        "begin": _vm.calendar2.begin,
	        "end": _vm.calendar2.end
	      },
	      on: {
	        "select": _vm.calendar2.select
	      }
	    })], 1)
	  }))])], 1)
	},staticRenderFns: []}
	module.exports.render._withStripped = true
	if (false) {
	  module.hot.accept()
	  if (module.hot.data) {
	     require("vue-hot-reload-api").rerender("data-v-31237ac4", module.exports)
	  }
	}

/***/ })

});