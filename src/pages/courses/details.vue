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
	    	<div class="gb-listview">
		        <div class="legend">课程</div>
		        <ul>
		            <li>
						<Audio 
							src="http://res.webftp.bbs.hnol.net/zhangyu/music/cd100/03.mp3"
							label="花好月圆夜"
							intro="花好月圆夜"/>
		            </li>
		            <li>
						<Audio 
							src="http://m10.music.126.net/20171230162800/6c1a86ab8c2bd9eea67c1add1f37e65a/ymusic/5bf9/6b0a/182a/474be4d9aa58b11fd50725f8436b59da.mp3"
							label="青藏高原"
							intro="青藏高原"/>
		            </li>
		            <li>
						<Audio 
							src="http://m10.music.126.net/20171230163046/915b9ca0af3925a06f3277a2d23aee99/ymusic/e5bc/5e69/c1ee/a7a5b86767bcfe3ae7966ebb50b65175.mp3"
							label="五星红旗"
							intro="五星红旗"/>
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
	const test = {
			"id": 1,
			"courseClassifyId": 2,
			"courseClassifyName": "sample string 3",
			"courseName": "sample string 4",
			"courseIntroduce": "sample string 5",
			"courseTeacherId": 6,
			"courseTeacherName": "sample string 7",
			"coursePeriod": 8,
			"courseImgName": "sample string 9",
			"courseImgUrl": "sample string 10",
			"courseHisStudyNum": 11,
			"courseIsRecommend": 0,
			"coursePrice": 12.0,
			"courseVipPrice": 13.0,
			"courseGiveCredit": 14,
			"courseSellStatus": 0
		};
    export default{
        data(){
            return{
				modalVisiable:false,
				id:0,
				data:test
            }
        },
		components:{
            HeaderView,Audio
		},
		beforeRouteEnter(to, from, next) {
			const {query} = to
			next(vm=>{
				vm.id = query.id
				// vm.getData()
			})
		},
        methods:{
			getData(){
				//post
				Models.send('getWechatCourse',)
			},
            hideModal(){
                this.modalVisiable = false
            }
        }
    }
</script>