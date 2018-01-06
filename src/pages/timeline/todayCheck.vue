<template>
    <div class="page pg-timeline pg-timeline-todaychecks">
        <!-- HEADER -->
        <HeaderView pageName="todaycheck" pageTitle="今日打卡会员"/>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview" v-if="clockInfo">
            <section class="today-checks">
                <ul>
                    <li v-for="(item,index) in clockInfo" :key="index" @click="gotoCheck(item.Id)">
                            <img :src="item.UserHeadImgUrl">
                    </li>
                </ul>
            </section>
        </div>
        <!-- //MAIN VIEW -->
    </div>
</template>
<script>
    import HeaderView from '../../components/HeaderView'
    import Api from '../../model/api'
    const Models = new Api()
    export default{
        components:{
            HeaderView
        },
        data(){
            return {
                clockInfo:null
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
                vm.getWechatClockIn()
            })
        },
        methods:{
             //获取打卡记录的人
            getWechatClockIn(){
                Models.send({
                    url:'getWechatClockIn',
                    params:{
                        top:0,
                    },
                    success:(d)=>{
                        this.clockInfo = d.items
                    }
                })
            },
            gotoCheck(id){
                this.$router.push({'name':'check',query:{'qhfrom':'todaycheck','uid':id}})
            }
        }
    }
</script>
