<template>
    <div class="page pg-account pg-account-signup">
        <HeaderView pageName="signup" pageTitle="创建帐户" iconName="close" />
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="create">
                <h2><img src="../../../Assets/Images/ledge_logo.png"></h2>
                <p>只需一步即可完成注册，超简单！</p>
                <div class="signup-form">
                    <div class="row">
                        <input type="tel" v-model="phone"  maxlength="11" placeholder="手机号码">
                    </div>
                    <div class="row">
                        <input type="text" v-model="verifyCode" maxlength="6" placeholder="短信验证码">
                    </div>
                    <div class="row">
                        <a href="javascript:void(0);" class="get-sms-code" @click="getCode" v-if="second === 0 ">获取验证码</a>
                        <a href="javascript:void(0);" class="get-sms-code"  v-if="second > 0 ">{{second}}秒后重新获取</a>
                    </div>
                    <div class="row">
                        <a href="javascript:void(0);" class="button primary-button" @click="signup">注册</a>
                    </div>
                </div>
            </section>
        </div>
        <!-- //MAINVIEW -->
    </div>
</template>
<script>
    import HeaderView from '../../components/HeaderView'
    import {
        showAlert,
        routerUrl
    }from '../../model/fun'
    import {
        setStore,
        getStore,
        delStore
    }from '../../model/store'
    import Api from '../../model/api'
    const Models = new Api()
    export default{
        components:{
            HeaderView
        },
        data(){
            return{
                countDown:null,
                second:0,
                phone:13795329019,
                verifyCode:null,
                iviteCode:null,
                backUrl:''
            }
        },
        beforeRouteEnter(to, from, next){
            next(vm=>{
                vm.backurl = to.query.returnUrl,
                vm.iviteCode = to.query.iviteCode
            })
        },
        beforeRouteLeave(){
            this.countDown && window.clearInterval(this.countDown);
        },
        methods:{
            //倒计时
            countTime(){
                this.countDown && window.clearInterval(this.countDown);
                this.second = 60
                this.countDown = window.setInterval(()=>{
                    if(this.second > 0){
                        this.second = this.second - 1
                    }else{
                        this.countDown && window.clearInterval(this.countDown);
                    }
                },1000)
            },
            signup(){
                if(!this.checkPhone()){
                    return false
                }
                if(!this.verifyCode){
                    showAlert('请输入验证码')
                    return false    
                }
                Models.send({
                    url:'setWechatLogin',
                    type:'post',
                    params:{
                        Phone:this.phone,
                        InviteCode:this.inviteCode,
                        VerifyCode:this.verifyCode
                    },
                    success:(d)=>{
                        this.getUserInfo()
                    },
                    error:(d)=>{
                        showAlert(d.errorMsg)
                    }
                })
            },
            checkPhone(){
                if(/^1\d{10}$/.test(this.phone)){
                    return true
                }else{
                    showAlert('请输入正确的手机号')
                    return false
                }
            },
            getCode(){
                if(!this.checkPhone()){
                    return false    
                }
                Models.send({
                    url:'setWechatLogin',
                    type:'put',
                    params:{
                        Phone:this.phone,
                        InviteCode:this.inviteCode
                    },
                    success:()=>{
                        this.countTime()
                    },
                    error:(d)=>{
                        showAlert(d.errorMsg)
                    }
                })
            },
            getUserInfo(){
                Models.send({
                    url:'getWechatUser',
                    type:'get',
                    params:{},
                    success:({item = {}})=>{
                        setStore('userInfo',item);
                        this.goBack(item)
                    },
                    error:()=>{
                        console.log('获取用户信息失败')
                    }
                })
            },
            goBack(data){
                let loginBack = getStore('loginBack');
                //强制更新用户信息
                this.$store.dispatch('getNewUserInfo')
                if(this.backurl && this.backurl != 'undefined'){
                    location.replace(this.backurl)
                }else{
                    if(loginBack){
                        delStore('loginBack')
                        location.replace(loginBack)
                    }else{
                        routerUrl('index',this.$router)
                    }
                }
            },
        }
    }
</script>
