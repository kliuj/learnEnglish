<template>
    <div id="app">
      <nav id="menu" class="mm-menu mm-theme-dark mm-pageshadow mm-offcanvas mm-current mm-opened" style="display:none">
      <div class="mm-panels">
        <div  class="mm-panel mm-hasnavbar mm-opened mm-current" id="mainMenu">
          <div class="mm-navbar">
            <a class="mm-title">泉亨&nbsp;&bull;&nbsp;钱钞邮品藏家社群</a>
          </div>
          <ul class="mm-listview">
              <template v-if="profileInfo">
                <li data-name='userinfo' class="user-bar" v-if="profileInfo" @click="changeTab">
                    <span class="user-profile-photo">
                      <img :src="profileInfo.HeadImageUrl" width="40" height="40">
                    </span>
                    <span class="nickname">
                      <a  class="ui-link" href="javascrip:void(0);">{{profileInfo.Nickname}}</a>
                    </span>
                    <span class="account-id">ID {{profileInfo.UniqueId}}</span>
                </li>

              </template>
              <li v-if="!profileInfo"><a data-name='wxPrepare' @click="gotoLogo">登录/注册</a></li>
              <li class="mm-divider">收藏</li>
              <li><a data-name='index' @click="changeTab">微拍图录</a></li>
              <li><a data-name='songping' @click="changeTab">钱币评级</a></li>
              <!-- <li><a data-name='duobaoindex' @click="changeTab">众筹夺宝</a></li> -->
              
              <li class="mm-divider">泉付通</li>
              <li>
                  <a class="mm-next mm-fullsubopen" @click="openSubMenu" data-num="0"></a>
                  <span>钱包</span>
              </li>
              <li><a data-name='traderecord' @click="changeTab">交易记录</a></li>
              <li><a data-name='pay' @click="changeTab">支付设置</a></li>
              <li class="mm-divider">我</li>
              <li><a data-name='cards' @click="changeTab">我的银行卡</a></li>
              <li><a data-name='address' @click="changeTab">收货信息</a></li>
              <li><a data-name='uniformIdentity' @click="changeTab">身份认证</a></li>
              <li class="mm-divider">泉亨商户</li>
              <li><a data-name='start' @click="changeTab">微拍助手</a></li>
              <li class="mm-divider">更多</li>
              <li><a data-name='question' @click="changeTab">常见问题</a></li>
              <li><a data-name='service' @click="changeTab">联系客服</a></li>
              <li>
                  <a class="mm-next mm-fullsubopen" @click="openSubMenu" data-num="1"></a>
                  <span>关于</span>
              </li>
          </ul>
        </div>
        <div class="mm-panel mm-hasnavbar  mm-notopen subMenuBar">
            <div class="mm-navbar" @click="hideSub">
                <back :sub-title="wallet"></back>
            </div>
            <ul class="mm-listview">
              <li><a class="ui-link" data-name='balance' @click="changeTab">余额</a></li>
              <li><a class="ui-link" data-name='deposit' @click="changeTab">存款</a></li>
              <li><a class="ui-link" data-name='withdraw' @click="changeTab">提款</a></li>
          </ul>
        </div>
        <div class="mm-panel mm-hasnavbar mm-notopen subMenuBar">
            <div class="mm-navbar" @click="hideSub">
                <back :sub-title="gy"></back>
            </div>
            <ul class="mm-listview">
                <li><a data-name='terms' @click="changeTab" class="ui-link">法律声明</a></li>
                <li><a class="ui-link" data-name='aboutapp' @click="changeTab">应用软件</a></li>
            </ul>
        </div>
      </div>
      </nav>
      <div  class="mm-page mm-slideout">
          <div class="ui-page ui-page-theme-a ui-page-active containPage " id="containPage" >
              <div class="subroutepage staticPos"  >
                    <router-view>
                    
                    </router-view> 
              </div>
          </div>
      </div>
       <div  class="mm-slideout" v-show="isOpenTap" id="mm-blocker"></div>
</div>
</template>
<script>
    import { mapActions } from 'vuex'
    import back from './back.vue' // 返回按钮
    import localstore from '../model/store.js'
    let baseStore = new localstore();//本地存储信息
    import api from '../model/api.js'
    let models = new api();//发送接口
    export default{
         data () {
            return {
                isSubMenu:false, //是否打开子菜单
                wallet:'钱包',//钱包名称
                qhId:'泉亨 ID',
                gy:'关于',
                profileInfo:''//用户信息
            }
         },
         watch:{
           'userStateTime' () {
              this.getInfo()
           },
             '$route'(){
            //    console.log('test')
             }
         },
        computed: {
            'isOpenTap' () {
                return this.$store.state.isOpenTap
            },
            'userStateTime' (){
                return this.$store.state.userStateTime
            }
        },
        created(){
            this.init()
        },
        mounted(){
          //  let height = $("#menu").height();
           window.winheight = $(window).height() ;
           window.winwidth = $(window).width() ;
           $('#containPage').css("min-height",winheight+'px');
           // 设置main的高度样式
           var sheet = (function() {
              // 创建 <style> 标签
              var style = document.createElement("style");
              style.appendChild(document.createTextNode(""));
              // 将 <style> 元素加到页面中
              document.head.appendChild(style);
              return style.sheet;
            })();

           sheet.addRule(".main", "min-height: "+(winheight - 44)+"px;", 0);
           
           //蒙版触摸事件
           $("#mm-blocker").on("touchstart",(e)=>{
             e.preventDefault();
             this.changeOpenTap()
           })
         },
         methods:{
             changeOpenTap(){
                 this.$store.dispatch('changeOpenTap')
             },
           //做一些初始化
           init(){
             //存设备信息
              let deviceInfo = {
                   "Version": baseStore.getStore('appVersion'),
                   "Platform": 1,
                   "DeviceInfo": {
                     "DeviceId":baseStore.getStore('generateDeviceId'),
                     "UserAgent":navigator.userAgent
                   }
                 };
               //存储登录信息
               baseStore.setStore('deviceInfo',deviceInfo);
               //登录页面不需要请求信息
               this.getInfo()
             } ,
             //获取用户信息
             getInfo(){
               if(baseStore.getStore('userinfo').AccountId > 0){
                 //防止注册时候刷新信息
                 this.profileInfo = baseStore.getStore('userinfo') ;
                  console.debug("成功获取用户信息");
               }else{
                 this.profileInfo = '' ;
                  // console.debug("暂无用户信息");
               }
             },
             //手动登录需要删除之前的返回信息
             gotoLogo(e){
               baseStore.delStore('loginBack');
               this.changeTab(e)
             },
             //切换tab
            changeTab(e){
              let name = $(e.currentTarget).data("name");
              this.changeOpenTap()
              setTimeout(() => {
                  this.$router.push({ name: name});
              },400);
            },
            //打开菜单
            openSubMenu (e){
                //修改样式动画
                let _target = $(e.currentTarget),
                    num = _target.data("num");
                $($(".subMenuBar")[num]).removeClass("mm-notopen").addClass("mm-opened");
                $("#mainMenu").removeClass("mm-current").addClass("mm-subopened");
            },
            hideSub:function(e){
                let _target = $(e.currentTarget);
                _target.parent().removeClass("mm-opened").addClass("mm-notopen");
                $("#mainMenu").removeClass("mm-subopened").addClass("mm-current");
            }
         },
         components:{
            back
         }
    }

</script>
<style>
  .containPage{
    z-index:999;
    background-color:#efeff8
  }
</style>
