<template>
    <div class="page pg-courses pg-courses-hp">
        <!-- HEADER -->
        <header class="gb-header">
            <Header />
            <h1 class="has-icon">LEDGE 优选课程</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview">
            <section class="courses-group">
                <div class="hd">
                    <div class="group-name">精选课程</div>
                </div>
                <ul class="courses-list">
                    <li>
                        <router-link :to="{'name':'courseDetail'}">
                            <div class="course-cover"><img src="../../../Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </router-link>
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
            <section class="courses-group">
                <div class="hd">
                    <div class="group-name">付费课程</div>
                </div>
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
                <div class="more"><a href="All.jsp">查看全部</a></div>
            </section>
            <section class="courses-group">
                <div class="hd">
                    <div class="group-name">免费课程</div>
                </div>
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
                <div class="more"><a href="All.jsp">查看全部</a></div>
            </section>
        </div>
        <!-- //MAIN VIEW -->
    </div>
</template>
<script>
    import Header from '../../components/Header'
    export default{
        components:{
            Header
        }
    }
</script>
