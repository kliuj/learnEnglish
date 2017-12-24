<template>
    <div class="page pg-activities pg-activity-details">
        <!-- HEADER -->
        <HeaderView pageName="activityDetail" pageTitle="活动详情"/>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview">
            <!-- ACTIVITY DETAILS -->
            <section class="activity-details" v-if="data">
                <div class="activity-summary">
                    <div class="activity-poster"><img :src="data.ActivityImgUrl"></div>
                </div>
                <div class="gb-listview">
                    <ul>
                        <li>
                            <div>
                                <label for="">主题</label>
                                <span>{{data.ActivityTitle}}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label for="">时间</label>
                                <span>{{data.ActivityDate}}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label for="">地点</label>
                                <span>{{data.ActivityAddress}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="activity-desc" v-html="data.ActivityContent"></div>
                <div class="gb-listview">
                    <div class="legend">入场券</div>
                    <ul>
                        <li v-for="(item ,index ) in tickets" :key="item.id"> 
                            <div>
                                <label for="">{{item.TicketClass}}</label>
                                <span><a href="javascript:void(0)" @click="showModal">购买</a></span>
                                <em>{{data.ticketIntro}}</em>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
            <!-- //ACTIVITY DETAILS -->
            <!-- BUY ACTIVITY -->
            <section class="quick-buy" v-show="modalVisiable">
                <div class="modal"></div>
                <div class="container">
                    <div class="hd">
                        <div class="title">购买入场券</div>
                        <a href="javascript:void(0)" class="cancel" @click="hideModal">取消</a>
                    </div>
                    <div class="bd">
                        <ul class="listview">
                            <li>
                                <label>入场券</label>
                                <span>票种名称</span>
                            </li>
                            <li>
                                <label>价格</label>
                                <span>￥100.00</span>
                            </li>
                            <li>
                                <label for="">可用积分</label>
                                <span>100</span>
                                <span class="right"><input type="checkbox" id="" name="" value="" checked class="ctrl-checkbox"></span>
                            </li>
                            <li>
                                <label>获赠积分</label>
                                <span>990</span>
                            </li>
                        </ul>
                    </div>
                    <div class="action"><a href="" class="button">去支付￥99.00</a></div>
                </div>
            </section>
            <!-- //BUY ACTIVITY -->
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
            return{
                id:null,
                modalVisiable:false,
                data:{
                    "Id": 1,
                    "ActivityTitle": "sample string 2",
                    "ActivityDate": "2017-12-24 08:32:57",
                    "ActivityAddress": "sample string 4",
                    "ActivityContent": "sample string 5",
                    "ActivityImgUrl": "sample string 6",
                    "ActivityNotice": "sample string 7",
                    "ClickNum": 8,
                    "JoinNum": 9
                },
                tickets:[]
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
                vm.id = to.query.id
            })
        },
        methods:{
            getDetail(){
                //get
                Models.send('getWechatActivity',{
                    id:this.id
                })
                Models.send('getWechatActivityTicket',{
                    id:this.id
                })
            },
            hideModal(){
                this.modalVisiable = false
            },
            showModal(){
                this.modalVisiable = true
            }
        }
    }
</script>
