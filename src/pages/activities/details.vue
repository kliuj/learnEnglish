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
                    <div class="activity-poster"><img :src="getImgUrl(data.activityImgUrl)" @error="error"></div>
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
                                <span>{{data.activityDate.split(" ")[0]}}</span>
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
                            <li v-if="orderInfo.userValidCredit">
                                <label for="">可用亮值</label>
                                <span>{{orderInfo.userValidCredit}}</span>
                                <span class="right">
                                    <input type="checkbox" v-model="usercredit" class="ctrl-checkbox">
                                </span>
                            </li>
                            <li>
                                <label>获赠亮值</label>
                                <span>{{getcredit}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="action" @click="pay">
                        <a href="javascript:void(0);" class="button">去支付￥{{price.toFixed(2)}}</a>
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
        routerUrl,
        jumpUrl,
        share
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
                getcredit:0,//获赠亮值
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
                vm.id = to.query.id
                vm.getDetail()
            })
        },
        watch:{
            'usercredit'(){
                this.caculetePrice()    
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
                        const info = d.item;
                        this.data = info
                        share({
                            title:info.activityTitle,
                            desc:info.activityDate.split(" ")[0] + ',' +info.activityAddress,
                            link:'http://wx.ledgetrans.com.cn/index.html#/activitydetail?id='+this.id ,
                            imgUrl:info.activityImgUrl.indexOf('http') < 0 ? 'http://wx.ledgetrans.com.cn'+info.activityImgUrl :info.activityImgUrl 
                        })
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
            showModal(data){
                Models.send({
					url:'getWechatIsLogin',
					type:'get',
					needLogin:false,
					success:({item})=>{
						if(item == true){
							this.successShowModal(data)
						}else{
							let toUrl= 'http://wx.ledgetrans.com.cn/index.html'+location.hash
							localStorage.setItem('loginBack',JSON.stringify(toUrl));
							jumpUrl('login')
						}
					}
				})
            },
            successShowModal(item){
                this.modalVisiable = true
                this.orderInfo = item
                this.caculetePrice()    
            },
            caculetePrice(){
                if(USER_SETTINGS.UsePrice){
                    if(this.usercredit){
                        let _price_ =  this.orderInfo.ticketPrice -  this.orderInfo.userValidCredit * parseInt(USER_SETTINGS.CostPrice)/parseInt(USER_SETTINGS.UseCredit)   
                        this.price = _price_ > 0 ? _price_ : 0 ;
                    }else{
                        this.price = this.orderInfo.ticketPrice
                    }
                    this.getcredit = parseInt(this.price/parseInt(USER_SETTINGS.UsePrice)) * parseInt(USER_SETTINGS.UseGiveCredit)
                }
            },
            pay(){
				Models.send({
					url:'wechatBuyActivity',
					type:'post',
					params:{
						ActivityTicketId:this.orderInfo.id,
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
                                this.$router.replace({ name: 'timeline' })
                                console.log('支付成功')
                            },
                            cancel:()=>{
                                this.cancelPay(activityOrderNo)
                                console.log('支付取消')
                            },
                            fail:()=>{
                                console.log('支付失败')
                            }
                        })
					}
				})
            },
			cancelPay({activityOrderNo}){
				Models.send({
					url:'wechatBuyActivity',
					type:'put',
					params:{
						activityOrderNo
					}
				})
            },
            error(e){
               e.target.setAttribute("src",'./CommonImages/default.png')
            },
            getImgUrl(uri){
                return uri || './CommonImages/default.png'
            }
        }
    }
</script>
