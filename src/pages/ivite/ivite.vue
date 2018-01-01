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
            share({
                title:'',
                desc:'',
                link:'',
                imgUrl:''
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
