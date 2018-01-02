<template>
    <div class="page pg-invite">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">邀请同学</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
         <div class="mainview">
            <section class="invitation-detail">
                <h2>邀请同学获得奖励</h2>
                <p>同学只需要完成注册，即可获得1000积分，<br>同时你也获得500积分，积分可以用来抵扣消费。</p>
            </section>
            <section class="how-to-do">
                <h3>如何邀请</h3>
                <p>很简单！你只需要点击右上角“分享给朋友”或“分享到朋友圈”就搞定了。坐等赚积分吧~</p>
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
                iviteCode:null
            }
        },
        mounted(){
            const title =  window.USER_INFO.userName + '邀请你加入Ledge同声翻译实战学习',
                  imgUrl = 'http://wx.ledgetrans.com.cn/CommonImages/ledge_logo.png',
                  link =  'http://wx.ledgetrans.com.cn/home/autologin?returnUrl=http://wx.ledgetrans.com.cn/index.html#/index?iviteCode='+this.iviteCode;
            share({
                title ,
                desc:'你的好多朋友都在这里！完成注册即可获得1000积分。',
                link ,
                imgUrl
            })
        },
        created(){
            Models.send({
                url:'getWechatInviteCode',
                success:(d)=>{
                    this.iviteCode = d.item
                }
            })
        }
    }
</script>
