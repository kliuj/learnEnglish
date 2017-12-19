'use strict'

import api from './model/api.js'
let baseApi = new api ();
import fun from './model/fun.js'
let baseFun = new fun ();
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);


const routes = [
	{
    	path:'/index',
    	name:'index',
		meta: { 
			notRequiresAuth: true
		},
    	component:function (resolve) {
				//打包分开的文件异步加载
	      require(['./pages/about/about.vue'], resolve)
	    }
    },
    {
        path: '*',
        redirect: { name: 'index' }
    }
]

let router = new VueRouter({
	routes:routes
});
// router.beforeEach((to, from, next) => {
//     baseFun.hideMessage();
// 	baseFun.showLoading()
// 	if(to.query.force){
// 		//强制登录
// 		localStorage.setItem('loginBack',location.href.split('force')[0]);
// 		baseFun.routerUrl('wxPrepare',router)
// 		// return false;
// 	}
// 	//验证后的回调
// 	let afterCheck = ()=>{
// 			// var toPath = transition.to.path;
// 			// //判断是否是一级目录
// 			// if(toPath.replace(/[^/]/g,"").length>1){`
// 			// 		router.app.isIndex = false;
// 			// }else{
// 			// 		router.app.isIndex = true;
// 			// }
// 			next()
// 	}
// 	if(to.meta.notRequiresAuth){
// 		afterCheck()
// 	}else{
// 		//需要登录的页面先判登录态，由于需要登录的页面很多，所以设置不需要登录的页面参数
// 		// 	baseApi.send('isUserLogin',{},(d)=>{
// 		// 		if(d.IsLogin){
// 		// 				afterCheck()
// 		// 		}else{
// 		// 			let toUrl= '/weixin/index.html#' + to.fullPath
// 		// 			localStorage.setItem('loginBack',JSON.stringify(toUrl));
// 		// 			//未绑定手机号，回退需要退到需要登录前一个页面
// 		// 			localStorage.setItem('loginBackForConnect',location.href);
// 		// 			baseFun.routerUrl('wxPrepare',router)
// 		// 		}
// 		// 	},'','',true)
// 	}
// })
//
router.afterEach(route => {
    // wx.hideOptionMenu();
    baseFun.hideLoading()
    window.scrollTo(0,0);
})



console.log(router.options.routes.length + '个页面')


export default router