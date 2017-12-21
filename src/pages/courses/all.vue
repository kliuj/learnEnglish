<template>
    <div class="page pg-courses pg-courses-all">
        <!-- HEADER -->
        <header class="gb-header">
            <div class="header-left">
                <a href="javascript:;" class="icon back" @click="goback"></a>
            </div>
            <h1 class="has-icon">全部课程</h1>
            <div class="header-right"><a href="Categories.jsp">类别筛选</a></div>
        </header>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview">
            <!-- TAB -->
            <div class="tab-bar-2">
                <div class="tabs col2">
                <div id="tab-1" class="tab cur"><a href="#">付费课程</a></div>
                <div id="tab-2" class="tab"><a href="#">免费课程</a></div>
                </div>
            </div>
            <!-- //TAB -->
            <section id="paid-courses" class="courses-group">
                <ul class="courses-list">
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="<%=basePath%>Webapp/Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </a>
                    </li>
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="<%=basePath%>Webapp/Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </a>
                    </li>
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="<%=basePath%>Webapp/Assets/Images/temp_128x128.jpg"></div>
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
                            <div class="course-cover"><img src="<%=basePath%>Webapp/Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </a>
                    </li>
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="<%=basePath%>Webapp/Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </a>
                    </li>
                    <li>
                        <a href="Details.jsp">
                            <div class="course-cover"><img src="<%=basePath%>Webapp/Assets/Images/temp_128x128.jpg"></div>
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
    import {
        saveFrom,
        getBack
    } from '../../model/store'
    export default{
        data(){
            return{

            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
                saveFrom('allCourses',to)
            })
        },
        methods:{
            goback(){
                let qhfrom = getBack("allCourses");
                this.$router.push({'name':qhfrom.name,query:qhfrom.para})
            }
        }
    }
</script>