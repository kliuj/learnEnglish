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
                    <a href="javascript:void(0);" @click="upgrade" v-if="!isVip">年费￥{{vipPrice}} 成为VIP会员</a>
                    <a href="javascript:void(0);"  v-if="isVip">VIP会员，有效期至{{vipEndTime}}</a>
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
        wxPay,
        getNow,
        transdate
    }from '../../model/fun'
    export default{
        components:{
            NavTab
        },
        data(){
            return{
                vipPrice:USER_SETTINGS.VIPPrice,
                isVip:false,
                vipEndTime:0
            }
        },
        created(){
            this.checkVip()
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
                                this.getVipTime()
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
            },
            getVipTime(){
                const time = getNow();  
                this.vipEndTime = `${ time.year + 1 }年${time.month}月${time.date}日`
                this.isVip = true
            },
            checkVip(){
                const time = USER_INFO.userVipEndTime.split(" ")[0].split("-"),
                      vipTime = transdate(USER_INFO.userVipEndTime),  
                      now = Date.now();    
                if(vipTime > now) {
                    this.isVip = true
                    this.vipEndTime = `${ time[0] }年${ time[1] }月${ time[2]}日`
                }
            }
        }
    }
</script>