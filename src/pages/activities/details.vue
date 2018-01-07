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
                    <div class="activity-poster"><img v-lazy="data.activityImgUrl[0]"></div>
                </div>
                <div class="gb-listview">
                    <ul>
                        <li>
                            <div>
                                <label for="">主题</label>
                                <span>{{data.activityTitle}}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label for="">时间</label>
                                <span>{{data.activityDate}}</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label for="">地点</label>
                                <span>{{data.activityAddress}}</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="activity-desc" v-html="data.activityContent"></div>
                <div class="gb-listview" v-if="tickets.length">
                    <div class="legend">入场券</div>
                    <ul>
                        <li v-for="(item ,index ) in tickets" :key="item.id"> 
                            <div>
                                <label for="">{{item.ticketClass}}</label>
                                <span @click="showModal(item)"><a href="javascript:void(0)" >购买</a></span>
                                <em>{{item.ticketIntro}}</em>
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
                                <span>{{orderInfo.ticketClass}}</span>
                            </li>
                            <li>
                                <label>价格</label>
                                <span>￥{{orderInfo.ticketPrice}}</span>
                            </li>
                            <li>
                                <label for="">可用积分</label>
                                <span>{{orderInfo.userValidCredit}}</span>
                                <span class="right">
                                    <input type="checkbox" v-model="usercredit" class="ctrl-checkbox">
                                </span>
                            </li>
                            <li>
                                <label>获赠积分</label>
                                <span>{{getcredit}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="action" @click="pay">
                        <a href="javascript:void(0);" class="button">去支付￥{{price}}</a>
                    </div>
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
    import Swiper from '../../components/swiper/vue-swiper'
    import{
        wxPay,
        routerUrl
    }from '../../model/fun'
    export default{
        components:{
            HeaderView,Swiper
        },
        data(){
            return{
                id:null,
                modalVisiable:false,
                data:null,
                tickets:[],
                orderInfo:{},
                price:0,
                usercredit:true,
                getcredit:0,//获赠积分
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
                vm.id = to.query.id
                vm.getDetail()
            })
        },
        watch:{
            'checked'(){
                if(this.checked){
                    this.price = this.orderInfo.ticketPrice -  this.orderInfo.userValidCredit * parseInt(USER_SETTINGS.CostPrice)/parseInt(USER_SETTINGS.UseCredit)
                }else{
                    this.price = this.orderInfo.ticketPrice
                }
                this.getcredit = this.orderInfo.price * parseInt(USER_SETTINGS.UseGiveCredit)/parseInt(USER_SETTINGS.UsePrice)
            }
        },
        methods:{
            getDetail(){
                //get
                Models.send({
                    url:'getWechatActivity',
                    params:{
                        id:this.id
                    },
                    success:(d)=>{
                        this.data = d.item
                    }
                })
                Models.send({
                    url:'getWechatActivityTicket',
                    params:{
                        id:this.id
                    },
                    success:(d)=>{
                        this.tickets = d.items
                    }
                })
            },
            hideModal(){
                this.modalVisiable = false
            },
            showModal(item){
                this.modalVisiable = true
                this.orderInfo = item
                this.price = this.orderInfo.ticketPrice -  this.orderInfo.userValidCredit * parseInt(USER_SETTINGS.CostPrice)/parseInt(USER_SETTINGS.UseCredit)
                this.getcredit = this.price * parseInt(USER_SETTINGS.UseGiveCredit)/parseInt(USER_SETTINGS.UsePrice)
            },
            pay(){
				Models.send({
					url:'wechatBuyActivity',
					type:'post',
					params:{
						ActivityTicketId:this.id,
						CreditPay:this.usercredit ? this.orderInfo.userValidCredit : 0
					},
					success:(d)=>{
						this.sendWxPay(d.item)
					}
				})
			},
			sendWxPay({activityOrderNo}){
				Models.send({
					url:'getWechatConfig',
					type:'post',
					params:{
						orderNo:activityOrderNo
					},
					success:(d)=>{
						wxPay({
                            d,
                            success:()=>{
								// showAlert('购买成功')
								// this.modalVisiable = false
                                // routerUrl('index',this.$router)
                                alert('ok')
                                this.$router.replace({ name: 'timeline' })
                                console.log('支付成功')
                            },
                            cancel:()=>{
                                console.log('支付取消')
                            },
                            fail:()=>{
                                console.log('支付失败')
                            }
                        })
					}
				})
			},
        }
    }
</script>
