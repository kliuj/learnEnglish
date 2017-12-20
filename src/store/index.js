/**
 * Created by kerwinliu on 2017/8/2.
 */

import  Vuex from 'vuex'
import  Vue from 'vue'

let togCls = () =>{
    window.scrollTo(0,0)
    // //统一操作一些样式
    // if($("#menu")[0].style.display == "none"){
    //     $("#menu")[0].style.display = 'block';
    // }else{
    //     window.setTimeout(()=>{
    //         $("#menu")[0].style.display = 'none';
    //     },400)
    // }
    // $('html').toggleClass("mm-opened mm-blocking mm-background mm-theme-dark mm-pageshadow mm-opening ");
    $("body").toggleClass("sidenav-no-scroll");
    // $("#mainMenu").removeClass("mm-subopened").addClass("mm-current");
    // $(".subMenuBar").removeClass("mm-opened").addClass("mm-notopen");
}
Vue.use(Vuex)

export  default  new Vuex.Store({
    state:{
        isOpenTap : false, //侧边栏打开
        changeState : true,//列表页添加修改是否刷新，第一次状态为true，要求刷新页面,后续如果是点击返回，则不刷新，如果是修改，删除，添加，则需要刷新列表页。比如地址信息的更新
        userStateTime : '' //用户信息更新时间，有变化则更新
    },
    mutations: {
        changeOpenTap (state) {
            togCls()
            state.isOpenTap = !state.isOpenTap;
            //有时候列表未更新的情况下直接打开侧边栏，需要统一初始化列表修改状态
            state.changeState = true;
        },
        changeListState(state){
            state.changeState = !state.changeState ;
        },
        getNewUserInfo(state){
            state.userStateTime = Date.now();
        }
    },
    actions: {
        changeOpenTap ({commit}) {
            commit('changeOpenTap')
        },
        changeListState ({commit}) {
            commit('changeListState')
        },
        getNewUserInfo ({commit}) {
            commit('getNewUserInfo')
        },
    }
})