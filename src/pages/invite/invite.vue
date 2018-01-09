<template>
    <div class="page pg-invite">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">邀请朋友</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
         <div class="mainview">
            <section class="invitation-detail">
                <h2>邀请朋友获得奖励</h2>
                <p>朋友只需要完成注册，即可获得1000亮值，<br>同时你也获得500亮值，亮值可以用来抵扣消费。</p>
            </section>
            <section class="how-to-do">
                <h3>如何邀请</h3>
                <p>很简单！你只需要点击右上角“分享给朋友”或“分享到朋友圈”就搞定了。坐等赚亮值吧~</p>
            </section>
        </div>
        <!-- //MAINVIEW -->
    </div>
</template>
<script>
    import NavTab from '../../components/NavTab'
    import {
        share
    }from '../../model/fun'
    import Api from '../../model/api'
    const Models = new Api()
    export default{
        components:{
            NavTab
        },
        data(){
            return{
                inviteCode:null
            }
        },
        mounted(){
          this.getCode()
        },
        methods:{
            getCode(){
                Models.send({
                    url:'getWechatInviteCode',
                    success:(d)=>{
                        this.inviteCode = d.item
                        this.setConfig()
                    }
                })
            },
            setConfig(){
                const title =  window.USER_INFO.userName + '邀请你加入Ledge同声翻译实战学习',
                    imgUrl = 'http://wx.ledgetrans.com.cn/CommonImages/ledge_logo.png',
                    link =  'http://wx.ledgetrans.com.cn/home/autologin?returnUrl='+encodeURIComponent('http://wx.ledgetrans.com.cn/index.html#/signup?inviteCode='+this.inviteCode);
                share({
                    title ,
                    desc:'你的好多朋友都在这里！完成注册即可获得1000亮值。',
                    link ,
                    imgUrl
                })
            }
        }
    }
</script>
