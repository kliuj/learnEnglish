<template>
    <div class="page pg-account pg-account-signup">
        <HeaderView pageName="signup" pageTitle="内部登录入口" iconName="close" />
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="create">
                <div class="signup-form">
                    <div class="row">
                        <input type="tel" id="" name="" value="" maxlength="11" placeholder="">
                    </div>
                     <div class="row"><a href="javascript:void(0);" class="button primary-button" @click="login">登录</a></div>
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
            gotoLogin(){
                this.$router.replace({name:'login'})
            },
            login(){
                Models.send({
                    url:'setWechatLogin',
                    type:'get',
                    params:{
                        openId:123,
                        code:111111
                    },
                    success:(data)=>{
                             
                    }
                })
            }
        }
    }
</script>
