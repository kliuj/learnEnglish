<template>
    <div class="page pg-account pg-account-credits">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">我的亮值</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="credits-balance">
                <h2 v-if="credit">{{credit}}</h2>
                <p>{{settings.UseCredit}}亮值抵扣人民币{{settings.CostPrice}}元，适用所有消费<br>新注册会员即获赠{{settings.NewUserCredit}}亮值，邀请朋友注册会员可获赠{{settings.InvitationUserCredit}}亮值，每消费{{settings.UsePrice}}元可获赠{{settings.UseGiveCredit}}亮值</p>
            </section>
            <section class="gb-listview" v-if="list && list.length > 0">
                <div class="legend">亮值明细</div>
                <ul>
                    <li v-for="(item ,index ) in list" :key="index">
                        <div>
                            <label for="">{{item.logTime.split(" ")[0]}}</label>
                            <span>{{getNum(item.creditNum)}}</span>
                            <em>{{item.creditTypeName}}</em>
                        </div>
                    </li>
                </ul>
            </section>
            <EmptyPage v-if="list && list.length === 0" info="暂无亮值信息"/>
        </div>
        <!-- //MAINVIEW -->
    </div>
</template>
<script>
    import NavTab from '../../components/NavTab'
    import EmptyPage from '../../components/EmptyPage'
    import { CREDITSTYPES } from '../../const/constTypes'
    import Api from '../../model/api'
    const Models = new Api()
    export default{
        data(){
            return{
                list:null,
                credit:null,
                settings:USER_SETTINGS,
            }
        },
        components:{
            NavTab,EmptyPage
        },
        mounted(){
            this.getData()
        },
        methods:{
            getData(){
                Models.send({
                    url:'getWechatCreditLog',
                    success:(data)=>{
                        this.list = data.items
                        this.credit = data.total
                    }
                })
            },
            getTypeName(type){
                return CREDITSTYPES[type]
            },
            getNum(num){
                if(num < 0) {
                    return '抵扣 ' + num 
                }else{
                    return '获得 ' + num 
                }
            }
        }
    }
</script>