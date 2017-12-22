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
            <section class="courses-group" v-if="selectedList.length">
                <div class="hd">
                    <div class="group-name">精选课程</div>
                </div>
                <ul class="courses-list">
                    <li v-for="(item,index) in selectedList" :key="item.id">
                        <router-link :to="{'name':'courseDetail'}">
                            <div class="course-cover"><img src="../../../Assets/Images/temp_128x128.jpg"></div>
                            <div class="course-title">课程名称占一行限制字数超过截断</div>
                            <div class="category">类别名称</div>
                            <div class="read">666人学习</div>
                        </router-link>
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
                </ul>
                <div class="more"><router-link :to="{'name':'allCourses',query:{'qhfrom':'courseIndex',fee:true}}">查看全部</router-link></div>
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
                </ul>
                <div class="more"><router-link :to="{'name':'allCourses',query:{'qhfrom':'courseIndex',fee:false}}">查看全部</router-link></div>
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
        },
        data(){
            return{
                selectedList:[
                    {
                        id:1,
                        courseName:'精选课程',
                        classifyId:1,
                        hisStudyNum:100,

                    }
                ]
            }
        }
    }
</script>
