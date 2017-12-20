<template>
    <div class="page pg-timeline">
        <!-- HEADER -->
        <header class="gb-header">
            <Header />
            <h1 class="has-icon">我的学习时间轴</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="timeline">
                <p>学习时间轴自动记录您在 LEDGE 的学习过程，它以卡片的形式为您导航，在这里能找到您的每一次进步。</p>
                <ul class="timeline-cards">
                    <li>
                        <div class="datetime">2017-12-12 18:20</div>
                        <div class="card course-card">
                            <a href="../../../Views/Courses/Details.jsp">
                                <div class="course-cover"><img src="../../../Assets/Images/temp_128x128.jpg"></div>
                                <div class="course-title">课程名称占一行限制字数超过截断</div>
                                <div class="category">类别名称</div>
                                <div class="period">共18课时</div>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div class="datetime">2017-11-22 13:58</div>
                        <div class="card activity-card">
                            <a href="../../../Views/Activities/Details.jsp">
                                <div class="activity-title">
                                    活动主题
                                    <small>12月14日 星期四</small>
                                </div>
                                <div class="activity-poster"><img src="../../../Assets/Images/temp_900x500.jpg"></div>
                            </a>
                        </div>
                    </li>
                </ul>
                <div class="gb-blank">
                    <h3>没有相关联的学习计划</h3>
                    <p>去看看 <a href="../../../Views/Courses/Index.jsp">LEDGE课程</a> 或 <a href="../../../Views/Activities/Index.jsp">实战活动</a>，开启您的LEDGE学习</p>
                </div>
            </section>
        </div>
        <!-- //MAINVIEW -->
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
