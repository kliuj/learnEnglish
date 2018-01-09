'use strict'

import Api from './model/api.js'
let Models = new Api ();
import {
	showLoading,
	hideLoading,
	hideMessage,
    routerUrl,
    jumpUrl
} from './model/fun.js'
import VueRouter from "vue-router";
import Vue from "vue";

Vue.use(VueRouter);

const routes = [
	{
    	path:'/index',//优选课程
    	name:'index',
    	component:function (resolve) {
	      require(['./pages/courses/index.vue'], resolve)
	    }
	},
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
		path:'/check',//打卡记录
		name:'check',
		meta: { 
			needRequiresAuth: true
		},
		component:function (resolve) {
			require(['./pages/timeline/check.vue'], resolve)
		}
	},
	{
		path:'/todaycheck',//今日打卡会员
		name:'todaycheck',
		meta: { 
			needRequiresAuth: true
		},
		component:function (resolve) {
			require(['./pages/timeline/todayCheck.vue'], resolve)
		}
	},
	{
    	path:'/invite',//邀请好友
    	name:'invite',
		meta: { 
			needRequiresAuth: true
		},
    	component:function (resolve) {
	      require(['./pages/invite/invite.vue'], resolve)
	    }
	},
	// {
    // 	path:'/courseIndex',//优选课程
    // 	name:'courseIndex',
	// 	meta: { 
	// 		needRequiresAuth: true
	// 	},
    // 	component:function (resolve) {
	//       require(['./pages/courses/index.vue'], resolve)
	//     }
	// },
    {
        path:'/coursedetail',//课程详情
        name:'coursedetail',
        component:function (resolve) {
            require(['./pages/courses/details.vue'], resolve)
        }
    },
    {
        path:'/allcourses',//所有课程
        name:'allcourses',
        component:function (resolve) {
            require(['./pages/courses/all.vue'], resolve)
        }
    },
    {
        path:'/categories',//课程类别
        name:'categories',
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
        path:'/signup',//注册
        name:'signup',
        component:function (resolve) {
            require(['./pages/account/signup.vue'], resolve)
        }
	},
	{
        path:'/login',//注册
        name:'login',
        component:function (resolve) {
            require(['./pages/account/login.vue'], resolve)
        }
    },
	{
    	path:'/activity',//实战活动
    	name:'activity',
    	component:function (resolve) {
	      require(['./pages/activities/index.vue'], resolve)
	    }
	},
	{
    	path:'/credits',//我的亮值
    	name:'credits',
		meta: { 
			needRequiresAuth: true
		},
    	component:function (resolve) {
	      require(['./pages/account/credits.vue'], resolve)
	    }
	},
	{
    	path:'/activitydetail',//活动详情
    	name:'activitydetail',
    	component:function (resolve) {
	      require(['./pages/activities/details.vue'], resolve)
	    }
	},
	{
    	path:'/about',
    	name:'about',
    	component:function (resolve) {
	      require(['./pages/about/about.vue'], resolve)
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
        name: '*',
        redirect: { name: 'index' }
    }
]

let router = new VueRouter({
	routes:routes
});
router.beforeEach((to, from, next) => {
    wx && wx.hideOptionMenu();
    hideMessage();
	showLoading()
	if(to.query.force){
		//强制登录
		localStorage.setItem('loginBack',location.href.split('force')[0]);
        jumpUrl('login')
		// return false;
	}
	//验证后的回调
	let afterCheck = ()=>{
		//检查是否登录过
			Models.send({
                url:'getWechatIsLogin',
                type:'get',
                needLogin:false,
				success:({item})=>{
                    if(item == true){
                        next()
					}else{
						let toUrl= '/index.html#' + to.fullPath
						localStorage.setItem('loginBack',JSON.stringify(toUrl));
                        jumpUrl('login')
					}
				}
			})
	}
	if(to.meta.needRequiresAuth){
		afterCheck()
	}else{
		next()
	}
})
//
router.afterEach(route => {
	wx && wx.hideOptionMenu();
    hideLoading()
    window.scrollTo(0,0);
})



console.log(router.options.routes.length + '个页面')


export default router