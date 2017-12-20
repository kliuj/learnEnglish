<template>
    <div>
        <nav class="sidenav" :class="{'show':isOpenTap}" >
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
    export default{
        data(){
            return{

            }
        },
        watch:{
            'userStateTime' () {
                this.getInfo()
            },
            'isOpenTap' (){
                console.log(this.isOpenTap)
                if(this.isOpenTap){
                    console.log('ok')
                    //展示
                    this.fadein(document.getElementById("mask-blocker"),1,1);
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

            },
            getInfo(){

            },
            //切换tab
            changeTab(e){
              let name = e.currentTarget.getAttribute("target-name");
              this.changeOpenTap()
              setTimeout(() => {
                  this.$router.push({ name: name});
              },400);
            },
            setOpacity(ele, opacity) {
                if (ele.style.opacity != undefined) {
                    ///兼容FF和GG和新版本IE
                    ele.style.opacity = opacity / 100;
                } else {
                    ///兼容老版本ie
                    ele.style.filter = "alpha(opacity=" + opacity + ")";
                }
            },
            fadein(ele, opacity, speed) {
                if (ele) {
                    var v = ele.style.filter.replace("alpha(opacity=", "").replace(")", "") || ele.style.opacity;
                    v < 1 && (v = v * 100);
                    var count = speed / 1000;
                    var avg = count < 2 ? (opacity / count) : (opacity / count - 1);
                    var timer = null;
                    timer = setInterval(() =>{
                        if (v < opacity) {
                            v += avg;
                            this.setOpacity(ele, v);
                        } else {
                            clearInterval(timer);
                        }
                    }, 500);
                }
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
