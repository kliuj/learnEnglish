<template>
    <div class="page pg-account pg-account-upgrade">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">升级帐户</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section>
                <div class="upgrade-banner"><img src="../../../Assets/Images/upgrade_banner.png" width="100%"></div>
                <div class="pay-vip-fee">
                    <a href="javascript:void(0);" @click="upgrade" v-if="!isVip">年费￥1500 成为VIP会员</a>
                    <a href="javascript:void(0);" @click="upgrade" v-if="isVip">您已经是年费VIP会员</a>
                </div>
            </section>
        </div>
        <!-- //MAINVIEW -->
    </div>
</template>
<script>
    import NavTab from '../../components/NavTab'
    import Api from '../../model/api'
    const Models = new Api()
    import {
        showAlert,
        wxPay
    }from '../../model/fun'
    export default{
        components:{
            NavTab
        },
        data(){
            return{
                isVip:false
            }
        },
        methods:{
            upgrade(){
                Models.send({
                    url:'getWechatVipPay',
                    type:'post',
                    success:(d)=>{
                        wxPay({
                            d,
                            success:()=>{
                                this.isVip = true
                                console.log('支付成功')
                            },
                            cancel:()=>{
                                console.log('支付取消')
                            },
                            fail:()=>{
                                console.log('支付失败')
                            }
                        })
                    },
                    error:()=>{

                    }
                })
            }
        }
    }
</script>