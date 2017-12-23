<template>
    <div class="page pg-courses pg-courses-all">
        <BackButton pageName="allCourses" pageTitle="全部课程">
            <div class="header-right">
                <router-link :to="{'name':'categories',query:{para:JSON.stringify({'fee':fee}),qhfrom:'allCourses'}}">类别筛选</router-link>
            </div>
        </BackButton>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview">
            <!-- TAB -->
            <div class="tab-bar-2">
                <div class="tabs col2">
                    <div id="tab-1" class="tab" :class="{'cur':fee}" @click="showFee">
                        <a href="javascript:void(0);">付费课程</a>
                    </div>
                    <div id="tab-2" class="tab" :class="{'cur':!fee}" @click="showNoFee">
                        <a href="javascript:void(0);">免费课程</a>
                    </div>
                </div>
            </div>
            <!-- //TAB -->
            <section id="paid-courses" class="courses-group">
                <ul class="courses-list">
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="../../../Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </a>
                    </li>
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="../../../Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </a>
                    </li>
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="../../../Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </a>
                    </li>
                </ul>
            </section>
            <section id="free-courses" class="courses-group">
                <ul class="courses-list">
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="../../../Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </a>
                    </li>
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="../../../Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </a>
                    </li>
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="../../../Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
        <!-- //MAIN VIEW -->
    </div>
</template>
<script>
    import BackButton from '../../components/BackButton'
    export default{
        components:{
            BackButton
        },
        data(){
            return{
                fee:true,//是否付费
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
                vm.fee = to.query.fee
            })
        },
        methods:{
            showFee(){
                this.fee = true
            },
            showNoFee(){
                this.fee = false
            }
        }
    }
</script>