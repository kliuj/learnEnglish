<template>
    <div class="page pg-account pg-account-credits">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">我的积分</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="credits-balance">
                <h2>0</h2>
                <p>100积分抵扣人民币1元，适用所有消费<br>新注册会员即获赠1000积分，邀请同学注册会员可获赠500积分，每消费10元可获赠100积分</p>
            </section>
            <section class="gb-listview" v-if="list && list.length > 0">
                <div class="legend">积分明细</div>
                <ul>
                    <li v-for="(item ,index ) in list" :key="index">
                        <div>
                            <label for="">{{item.logTime}}</label>
                            <span>{{getNum(item.creditNum)}}</span>
                            <em>{{getTypeName(item.creditType)}}</em>
                        </div>
                    </li>
                </ul>
            </section>
            <EmptyPage v-if="list && list.length === 0" info="暂无积分信息"/>
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
                list:null
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
                    }
                })
            },
            getTypeName(type){
                return CREDITSTYPES[type]
            },
            getNum(num){
                if(num < 0) {
                    return '增加 ' + num 
                }else{
                    return '抵扣 ' + num * -1
                }
            }
        }
    }
</script>