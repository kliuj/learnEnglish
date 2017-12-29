<template>
    <div>
        <nav class="sidenav" :class="{'show':tabVisiable}" >
            <div class="sidenav-brand"><img src="../../Assets/Images/ledge_logo.png" class="logo"></div>
            <div class="sidenav-header">
                <div class="user-profile-photo"><img src="../../Assets/Images/temp_user.png"></div>
                <span class="nickname">微信昵称</span>
                <span class="join-in">2017年12月加入</span>
            </div>
            <ul class="sidenav-menu">
                <li>
                    <a target-name='timeline' @click="changeTab">
                        <span class="sidenav-link-title">学习时间轴</span>
                    </a>
                </li>
                <li>
                    <a target-name='courseIndex' @click="changeTab">
                        <span class="sidenav-link-title">优选课程</span>
                    </a>
                </li>
                <li>
                    <a target-name='activity' @click="changeTab">
                        <span class="sidenav-link-title">实战活动</span>
                    </a>
                </li>
                <li>
                    <a target-name='upgrade' @click="changeTab">
                        <span class="sidenav-link-title">升级帐户</span>
                    </a>
                </li>
                <li>
                    <a target-name='credits' @click="changeTab">
                        <span class="sidenav-link-title">我的积分</span>
                    </a>
                </li>
                <li>
                    <a target-name='ivite' @click="changeTab">
                        <span class="sidenav-link-title">邀请同学</span>
                    </a>
                </li>
                <li>
                    <a target-name='about' @click="changeTab">
                        <span class="sidenav-link-title">关于 LEDGE</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div>
            <router-view>

            </router-view>
        </div>
        <div  class="sidenav-overlay" :style='{"display": isOpenTap ? "block" : "none"  }' id="mask-blocker"></div>
    </div>
</template>
<script>
    import { mapActions } from 'vuex'
    import { fadeIn ,showAlert } from '../model/fun'
    import { setStore } from '../model/store'
    import Api from '../model/api'
    const Models = new Api()
    export default{
        data(){
            return{
                tabVisiable:false
            }
        },
        watch:{
            'userStateTime' () {
                this.getInfo()
            },
            'isOpenTap' (){
                if(this.isOpenTap){
                    this.tabVisiable = true
                    //展示
                    fadeIn(document.getElementById("mask-blocker"),10);
                }else{
                    //关闭
                    this.tabVisiable = false
                    fadeIn(document.getElementById("mask-blocker"),10);
                }

            }
        },
        computed: {
            'isOpenTap' () {
                return this.$store.state.isOpenTap
            },
            'userStateTime' (){
                return this.$store.state.userStateTime
            },
            'opacity' (){
                //fast 时间为200毫秒

            }
        },
        created(){
            this.init()
        },
        mounted(){
            //蒙版触摸事件
            $("#mask-blocker").on("touchstart",(e)=>{
                e.preventDefault();
                this.changeOpenTap()
            })
        },
        methods:{
            changeOpenTap(){
                this.$store.dispatch('changeOpenTap')
            },
            //根组件初始化
            init(){
                //存设备信息
                // let deviceInfo = {
                //     "Version": baseStore.getStore('appVersion'),
                //     "Platform": 1,
                //     "DeviceInfo": {
                //         "DeviceId":baseStore.getStore('generateDeviceId'),
                //         "UserAgent":navigator.userAgent
                //     }
                //     };
                // //存储登录信息
                // setStore('deviceInfo',deviceInfo);
                this.getInfo()   
            },
            getInfo(){
                Models.send({
                    url:'getWechatUser',
                    type:'get',
                    params:{},
                    success:({item = {}})=>{
                        setStore('userInfo',item);
                    },
                    error:()=>{
                        console.log('获取用户信息失败')
                    }
                })
            },
            //切换tab
            changeTab(e){
              let name = e.currentTarget.getAttribute("target-name");
              this.changeOpenTap()
              setTimeout(() => {
                  this.$router.push({ name: name});
              },400);
            }
        }
    }

</script>
<style>
  .containPage{
    z-index:999;
    background-color:#efeff8
  }
</style>
