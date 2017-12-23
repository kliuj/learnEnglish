<template>
<div class="page pg-courses pg-course-details">
	<BackButton pageName="courseDetail" pageTitle="课程详情">
		<div class="header-right"><a href="">购买</a></div>
	</BackButton>
    <!-- //HEADER -->
    <!-- MAIN VIEW -->
    <div class="mainview">
    	<!-- COURSE DETAILS -->
    	<section class="course-details">
    		<div class="course-summary">
    			<div class="cover"><img src="../../../Assets/Images/temp_128x128.jpg"></div>
    			<div class="title">课程名称</div>
    			<div class="category">共18课时&nbsp;&bull;&nbsp;类别名称</div>
    			<div class="price">课程费 ￥100</div>
    			
    		</div>
    		<div class="course-desc">
    			<p>Ledge为前沿国际会议提供专业语言服务和同声翻译解决方案，致力于打造中高端口译人才和行业领域专业人才学习、交流及跨界合作的平台，我们的核心理念是：社群学习、深挖行业、实战为王。</p>
    			<p>Ledge provides Simultaneous Interpreting and other language solutions for leading edge international conferences. Combining community learning，industry research with onsite case study，together we are building a training and collaboration platform for professional interpreters and talents from all industries to share and grow.</p>
    		</div>
	    	<div class="gb-listview">
		        <div class="legend">课程</div>
		        <ul>
		            <li>
						<div>
		            		<label for="">L-1</label>
		                    <span><a href=""><i class="fa fa-play-circle"></i> 免费试听</a></span>
		                    <em>这个课时的一段介绍</em>
						</div>
		            </li>
		            <li>
						<div>
		            		<label for="">L-2</label>
		                    <span><a href=""><i class="fa fa-play-circle"></i> 免费试听</a></span>
		                    <em>这个课时的一段介绍</em>
						</div>
		            </li>
		            <li>
						<div>
		            		<label for="">L-3</label>
		                    <span><i class="fa fa-lock"></i></span>
		                    <em>这个课时的一段介绍</em>
						</div>
		            </li>
		            <li>
						<div>
		            		<label for="">L-4</label>
		                    <span><a href=""><i class="fa fa-play-circle"></i> 播放</a></span>
		                    <em>这个课时的一段介绍</em>
						</div>
		            </li>
		            <li>
						<div>
		            		<label for="">L-4</label>
		                    <span><a href=""><i class="fa fa-stop-circle"></i> 停止</a></span>
		                    <em>这个课时的一段介绍</em>
						</div>
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
	    		<div class="action"><a href="" class="button">去支付￥99.00</a></div>
    		</div>
    	</section>
    	<!-- //BUY COURSE -->
    </div>
    <!-- //MAIN VIEW -->
</div>
</template>
<script>
	import BackButton from '../../components/BackButton'
    export default{
        data(){
            return{
                modalVisiable:false
            }
        },
		components:{
            BackButton
		},
        methods:{
            hideModal(){
                this.modalVisiable = false
            }
        }
    }
</script>