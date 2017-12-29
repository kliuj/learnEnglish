'use strict'

// import api from './model/api.js'
// let baseApi = new api ();
import {hideLoading} from './model/fun.js'
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);


const routes = [
	{
		path:'/timeline',//学习时间轴
		name:'timeline',
		meta: { 
			needRequiresAuth: true
		},
		component:function (resolve) {
			require(['./pages/timeline/timeline.vue'], resolve)
		}
	},
	{
    	path:'/ivite',//邀请好友
    	name:'ivite',
		meta: { 
			needRequiresAuth: true
		},
    	component:function (resolve) {
	      require(['./pages/ivite/ivite.vue'], resolve)
	    }
	},
	{
    	path:'/courseIndex',//优选课程
    	name:'courseIndex',
		meta: { 
			needRequiresAuth: true
		},
    	component:function (resolve) {
	      require(['./pages/courses/index.vue'], resolve)
	    }
	},
    {
        path:'/courseDetail',//课程详情
        name:'courseDetail',
        meta: {
            needRequiresAuth: true
        },
        component:function (resolve) {
            require(['./pages/courses/details.vue'], resolve)
        }
    },
    {
        path:'/allCourses',//所有课程
        name:'allCourses',
        meta: {
            needRequiresAuth: true
        },
        component:function (resolve) {
            require(['./pages/courses/all.vue'], resolve)
        }
    },
    {
        path:'/categories',//课程类别
        name:'categories',
        meta: {
            needRequiresAuth: true
        },
        component:function (resolve) {
            require(['./pages/courses/categories.vue'], resolve)
        }
    },
	{
    	path:'/upgrade',//升级账户
    	name:'upgrade',
		meta: { 
			needRequiresAuth: true
		},
    	component:function (resolve) {
	      require(['./pages/account/upgrade.vue'], resolve)
	    }
	},
    {
        path:'/login',//登录
        name:'login',
        component:function (resolve) {
            require(['./pages/account/login.vue'], resolve)
        }
    },
    {
        path:'/signup',//注册
        name:'signup',
        component:function (resolve) {
            require(['./pages/account/signup.vue'], resolve)
        }
    },
	{
    	path:'/activity',//实战活动
    	name:'activity',
		meta: { 
			needRequiresAuth: true
		},
    	component:function (resolve) {
	      require(['./pages/activities/index.vue'], resolve)
	    }
	},
	{
    	path:'/credits',//我的积分
    	name:'credits',
		meta: { 
			needRequiresAuth: true
		},
    	component:function (resolve) {
	      require(['./pages/account/credits.vue'], resolve)
	    }
	},
	{
    	path:'/activityDetail',//活动详情
    	name:'activityDetail',
		meta: { 
			needRequiresAuth: true
		},
    	component:function (resolve) {
	      require(['./pages/activities/details.vue'], resolve)
	    }
	},
	{
    	path:'/about',
    	name:'about',
		meta: { 
			needRequiresAuth: true
		},
    	component:function (resolve) {
	      require(['./pages/about/about.vue'], resolve)
	    }
	},
	{
    	path:'/testlogin',
    	name:'testlogin',
		meta: { 
			needRequiresAuth: true
		},
    	component:function (resolve) {
	      require(['./pages/account/testlogin.vue'], resolve)
	    }
	},
	{
    	path:'/test',
    	name:'test',
    	component:function (resolve) {
	      require(['./pages/test/test.vue'], resolve)
	    }
	},
    {
        path: '*',
        redirect: { name: 'courseIndex' }
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
    hideLoading()
    window.scrollTo(0,0);
})



console.log(router.options.routes.length + '个页面')


export default router