<template>
    <div>
        <nav class="sidenav" :class="{'show':isOpenTap}" data-sidenav data-sidenav-toggle="#sidenav-toggle">
            <div class="sidenav-brand"><img src="../../Assets/Images/ledge_logo.png" class="logo"></div>
            <div class="sidenav-header">
                <div class="user-profile-photo"><img src="../../Assets/Images/temp_user.png"></div>
                <span class="nickname">微信昵称</span>
                <span class="join-in">2017年12月加入</span>
            </div>
            <ul class="sidenav-menu">
                <li>
                    <a href="../../Views/Timeline/Index.jsp">
                        <span class="sidenav-link-title">学习时间轴</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/Courses/Index.jsp">
                        <span class="sidenav-link-title">优选课程</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/Activities/Index.jsp">
                        <span class="sidenav-link-title">实战活动</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/Account/Upgrade.jsp">
                        <span class="sidenav-link-title">升级帐户</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/Account/Credits.jsp">
                        <span class="sidenav-link-title">我的积分</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/Invite/Index.jsp">
                        <span class="sidenav-link-title">邀请同学</span>
                    </a>
                </li>
                <li>
                    <a href="../../Views/About/Index.jsp">
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
                    this.animate(document.getElementById("mask-blocker"));
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
            animate(obj) {
                let i = 1
                function timerInterval() {
                    setTimeout(()=>{
                        i++
                        if(i < 21){
                            obj.style.opacity = 1/20 * i ;
                            timerInterval()
                        }
                    },10)
                }
                timerInterval()
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
