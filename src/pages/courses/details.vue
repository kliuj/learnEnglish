<template>
<div class="page pg-courses pg-course-details">
	<HeaderView pageName="courseDetail" pageTitle="课程详情">
		<div class="header-right" v-if="data && !data.isPurchased && !data.isFree">
			<a href="javascript:void(0);" @click="buy">购买</a>
		</div>
	</HeaderView>
    <!-- //HEADER -->
    <!-- MAIN VIEW -->
    <div class="mainview">
    	<!-- COURSE DETAILS -->
    	<section class="course-details" v-if="data">
    		<div class="course-summary">
    			<div class="cover"><img v-lazy="data.courseImgUrl"></div>
    			<div class="title">{{data.courseName}}</div>
    			<div class="category">共{{data.coursePeriod}}课时&nbsp;&bull;&nbsp;{{data.courseClassifyName}}</div>
    			<div class="price" v-if="data.coursePrice !== 0">课程费 ￥{{data.coursePrice}}</div>
    			<div class="price" v-if="data.coursePrice === 0">免费课程</div>
    			
    		</div>
    		<div class="course-desc" v-html="data.courseIntroduce"></div>
	    	<div class="gb-listview" v-if="audioList.length > 0">
		        <div class="legend">课程</div>
		        <ul>
		            <li v-for="(item,index) in audioList" :key="index">
						<Audio 
							:audioId="item.PlayID"
							:label="index"
							:id="item.Id"
							:onSelected="onSelected"
							:text="(data.isPurchased || data.isFree) ? '播放' : '免费试听'"
							:intro="item.AudioName"/>
		            </li>
		        </ul>
		    </div>
    	</section>
		<section class="play-audio" v-if="showAudio">
    		<div class="player-box">
    			<div class="course-cover"><img src="../../../Assets/Images/temp_300x300.jpg" width="100%"></div>
    			<div class="lesson-name">{{selectSource.intro}}</div>
    			<audio :src="selectSource.src" controls="controls" controlsList="nodownload" :class="getClass()" id="audioplayer">

				</audio>
    			<span class="close" @click="closeAudio"><a href="javascript:void(0)"></a></span>
    		</div>
    	</section>
    	<!-- //COURSE DETAILS -->
    	<!-- BUY COURSE -->
		<template v-if="data && !data.isPurchased && !data.isFree">
			<section class="quick-buy" v-show="modalVisiable">
				<div class="modal"></div>
				<div class="container">
					<div class="hd">
						<div class="title">购买课程</div>
						<a href="javascript:void(0)" class="cancel" @click="hideModal">取消</a>
					</div>
					<div class="bd">
						<ul class="listview">
							<li>
								<label>课程</label>
								<span>{{data.courseName}}</span>
							</li>
							<li>
								<label>课程费</label>
								<span>￥{{data.coursePrice}}</span>
							</li>
							<li v-if="data.userValidCredit">
								<label for="">可用亮值</label>
								<span>{{data.userValidCredit}}</span>
								<span class="right">
									<input type="checkbox"  v-model="usercredit" class="ctrl-checkbox">
								</span>
							</li>
							<li>
								<label>获赠亮值</label>
								<span>{{getcredit}}</span>
							</li>
						</ul>
					</div>
					<div class="action">
						<a href="javascript:void(0);" class="button" @click="pay">去支付￥{{price}}</a>
					</div>
				</div>
			</section>
		</template>
    	<!-- //BUY COURSE -->
    </div>
    <!-- //MAIN VIEW -->
</div>
</template>
<script>
	import HeaderView from '../../components/HeaderView'
	import Api from '../../model/api'
	const Models = new Api()
	import Audio from '../../components/Audio.vue'
	import {
		wxPay,
		showAlert,
		routerUrl,
		Browser,
		jumpUrl
	} from '../../model/fun'
    export default{
        data(){
            return{
				modalVisiable:false,
				id:0,
				data:null,
				audioList:[],
				usercredit:true,
				showAudio:false,
				selectSource:{}
            }
        },
		components:{
            HeaderView,Audio
		},
		mounted(){
			this.playerListener = function () {
				setTimeout(()=>{
					var audio = document.getElementById('audioplayer');
					audio && audio.play();
				},100)
			}
			document.addEventListener('touchend',this.playerListener );
		},
		beforeRouteLeave: (to, from, next) => {
			// ...
			this.playerListener && document.removeEventListener('touchend',this.playerListener)
			next()
		},
		watch:{
			'usercredit'(){
				if(USER_SETTINGS.UsePrice){
					if(this.usercredit){
						this.price = this.data.coursePrice -  this.data.userValidCredit * parseInt(USER_SETTINGS.CostPrice)/parseInt(USER_SETTINGS.UseCredit)
					}else{
						this.price = this.data.coursePrice
					}
					this.getcredit = parseInt(this.price/parseInt(USER_SETTINGS.UsePrice)) * parseInt(USER_SETTINGS.UseGiveCredit)
				}
			}
		},
		beforeRouteEnter(to, from, next) {
			const {query} = to
			next(vm=>{
				vm.id = query.id
				vm.getData()
				vm.getAudioList()
			})
		},
        methods:{
			getClass(){
				if(Browser().versions.ios){
					return 'audio-player'
				}else{
					return 'audio-player-android'
				}
			},
			//选中音频
			onSelected(src,intro){
				this.showAudio = true
				this.selectSource = {
					src,
					intro
				}
				// document.getElementById('audioplayer').pause()
				// this.$nextTick(()=> {
				// 	document.getElementById('audioplayer').play()
				// });
				
			},
			closeAudio(){
				this.showAudio = false
				// document.getElementById('audioplayer').pause()
			},
			getData(){
				//post
				Models.send({
					url:'getWechatCourse',
					params:{
						id:this.id
					},
					success:(d)=>{
						this.data = d.item
						this.price = this.data.coursePrice -  this.data.userValidCredit * parseInt(USER_SETTINGS.CostPrice)/parseInt(USER_SETTINGS.UseCredit)
               			this.getcredit = parseInt(this.price/parseInt(USER_SETTINGS.UsePrice)) * parseInt(USER_SETTINGS.UseGiveCredit)
					}
				})
			},
			getAudioList(){
				Models.send({
					url:'getWechatCourseAudio',
					params:{
						id:this.id
					},
					success:(d)=>{
						wx.ready(()=> {
							this.audioList = d.items
						});
						
					}
				})
			},
            hideModal(){
                this.modalVisiable = false
			},
			buy(){
				Models.send({
					url:'getWechatIsLogin',
					type:'get',
					needLogin:false,
					success:({item})=>{
						if(item == true){
							this.modalVisiable = true
						}else{
							let toUrl= 'http://wx.ledgetrans.com.cn/index.html'+location.hash
							localStorage.setItem('loginBack',JSON.stringify(toUrl));
							jumpUrl('login')
						}
					}
				})
				
			},
			pay(){
				Models.send({
					url:'getWechatBuyCourse',
					type:'post',
					params:{
						CourseId:this.id,
						CreditPay:this.usercredit ? this.data.userValidCredit : 0
					},
					success:(d)=>{
						this.sendWxPay(d.item)
					}
				})
			},
			sendWxPay({orderNo}){
				Models.send({
					url:'getWechatConfig',
					type:'post',
					params:{
						orderNo
					},
					success:(d)=>{
						wxPay({
                            d,
                            success:()=>{
								// showAlert('购买成功')
								// this.modalVisiable = false
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