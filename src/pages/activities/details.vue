<template>
    <div class="page pg-activities pg-activity-details">
        <!-- HEADER -->
        <header class="gb-header">
            <div class="header-left"><a href="Index.jsp" class="icon back"></a></div>
            <h1 class="has-icon">活动详情</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview">
            <!-- ACTIVITY DETAILS -->
            <section class="activity-details">
                <div class="activity-summary">
                    <div class="activity-poster"><img src="../../../Assets/Images/temp_900x500.jpg"></div>
                </div>
                <div class="gb-listview">
                    <ul>
                        <li>
                            <div>
                                <label for="">主题</label>
                                <span>圣诞之夜</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label for="">时间</label>
                                <span>2017年12月14日 星期四 下午13:00</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label for="">地点</label>
                                <span>上海市黄浦区人民广场</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="activity-desc">
                    <p>Ledge为前沿国际会议提供专业语言服务和同声翻译解决方案，致力于打造中高端口译人才和行业领域专业人才学习、交流及跨界合作的平台，我们的核心理念是：社群学习、深挖行业、实战为王。</p>
                    <p>Ledge provides Simultaneous Interpreting and other language solutions for leading edge international conferences. Combining community learning，industry research with onsite case study，together we are building a training and collaboration platform for professional interpreters and talents from all industries to share and grow.</p>
                </div>
                <div class="gb-listview">
                    <div class="legend">入场券</div>
                    <ul>
                        <li>
                            <div>
                                <label for="">票种名称</label>
                                <span><a href="">购买</a></span>
                                <em>这里是一段票种介绍</em>
                            </div>
                        </li>
                        <li>
                            <div>
                                <label for="">票种名称</label>
                                <span><a href="">购买</a></span>
                                <em>这里是一段票种介绍</em>
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
export default{
    data(){
        return{
            modalVisiable:true
        }
    },
    methods:{
        hideModal(){
            this.modalVisiable = false
        }
    }
}
</script>
