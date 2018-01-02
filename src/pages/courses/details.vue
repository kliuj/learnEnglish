<template>
<div class="page pg-courses pg-course-details">
	<HeaderView pageName="courseDetail" pageTitle="课程详情">
		<div class="header-right"><a href="javascript:void(0);">购买</a></div>
	</HeaderView>
    <!-- //HEADER -->
    <!-- MAIN VIEW -->
    <div class="mainview">
    	<!-- COURSE DETAILS -->
    	<section class="course-details" v-if="data">
    		<div class="course-summary">
    			<div class="cover"><img :src="data.courseImgUrl"></div>
    			<div class="title">{{data.courseName}}</div>
    			<div class="category">共{{data.coursePeriod}}课时&nbsp;&bull;&nbsp;{{data.courseClassifyName}}</div>
    			<div class="price">课程费 ￥{{data.coursePrice}}</div>
    			
    		</div>
    		<div class="course-desc" v-html="data.courseIntroduce"></div>
	    	<div class="gb-listview" v-if="audioList.length > 0">
		        <div class="legend">课程</div>
		        <ul>
		            <li v-for="(item,index) in audioList" :key="index">
						<Audio 
							:audioid=`http://wx.ledgetrans.com.cn/api/wechatcoursePlay/${item.Id}`
							:label="index"
							:id="item.Id"
							:intro="item.AudioName"/>
		            </li>
		        </ul>
		    </div>
    	</section>
    	<!-- //COURSE DETAILS -->
    	<!-- BUY COURSE -->
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
	    					<span>课程名称字数再长也不截断</span>
	    				</li>
	    				<li>
	    					<label>课程费</label>
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
	    		<div class="action"><a href="javascript:void(0);" class="button">去支付￥99.00</a></div>
    		</div>
    	</section>
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
    export default{
        data(){
            return{
				modalVisiable:false,
				id:0,
				data:null,
				audioList:[]
            }
        },
		components:{
            HeaderView,Audio
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
			getData(){
				//post
				Models.send({
					url:'getWechatCourse',
					params:{
						id:this.id
					},
					success:(d)=>{
						this.data = d.item
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
						this.audioList = d.items
					}
				})
			},
            hideModal(){
                this.modalVisiable = false
            }
        }
    }
</script>