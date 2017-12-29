<template>
    <div class="page pg-account pg-account-login">
        <HeaderView pageName="login" pageTitle="登录" iconName="close">
            <div class="header-right">
                <a href="javascript:void(0);" @click="gotoSignUp">还不是会员？注册</a>
            </div>
        </HeaderView>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="login">
                <h2><img src="../../../Assets/Images/ledge_logo.png"></h2>
                <div class="login-form">
                    <div class="row"><input type="tel" id="" name="" value="" maxlength="11" placeholder="手机号码"></div>
                    <div class="row"><input type="text" id="" name="" value="" maxlength="6" placeholder="短信验证码"></div>
                    <div class="row"><a href="javascript:void(0);" class="get-sms-code">获取验证码</a></div>
                    <div class="row">
                        <a href="javascript:void(0);" class="button primary-button" @click="login">登录</a>
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
        setStore
    }from '../../model/store'
    import Api from '../../model/api'
    const Models = new Api()
    export default{
        components:{
            HeaderView
        },
        methods:{
            gotoSignUp(){
                this.$router.replace({name:'signup'})
            },
            login(){
                Models.send({
                    url:'setWechatLogin',
                    type:'post',
                    params:{
                        openId:123,
                        code:111111,
                        phone:13795329019
                    },
                    success:(data)=>{
                        setStore('userInfo',{
                            Ticket:data.Ticket
                        })
                        this.$router.push({name:'index'})
                    },
                    error:(data)=>{

                    }
                })
            }
        }
    }
</script>
