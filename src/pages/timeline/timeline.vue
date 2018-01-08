<template>
    <div class="page pg-timeline pg-timeline-hp">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">我的学习时间轴</h1>
            <div class="header-right">
                <a href="javascript:void(0)" @click="gotoCheck">打卡</a>
            </div>
        </header>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="timeline">
                <p>学习时间轴自动记录您在 LEDGE 的学习过程，它以卡片的形式为您导航，在这里能找到您的每一次进步。</p>
                <ul class="timeline-cards" v-if="list">
                    <li v-for="(item,index) in list" :key="index">
                        <div class="datetime">{{item.Time}}</div>
                        <div class="card course-card" v-if="item.Course" @click="gotoCourseDetail(item)">
                            <a href="javasrcipt:void(0)">
                                <div class="course-cover">
                                    <img :src="getImgUrl(item.Course.courseImgUrl)" @error="error">
                                </div>
                                <div class="course-title">{{item.Course.courseName}}</div>
                                <div class="category">{{item.Course.courseClassifyName}}</div>
                                <div class="period">共{{item.Course.coursePeriod}}课时</div>
                            </a>
                        </div>
                        <div class="card activity-card" v-if="item.Activity" @click="gotoActivityDetail(item)">
                            <a href="javascript:void(0)">
                                <div class="activity-title">
                                    {{item.Activity.activityTitle}}
                                    <small>{{item.Activity.activityDate}}</small>
                                </div>
                                <div class="activity-poster"><img :src="getImgUrl(item.Activity.activityImgUrl)" @error="error"></div>
                            </a>
                        </div>
                    </li>
                </ul>
                <div class="gb-blank"  v-if="list && list.length === 0">
                    <h3>没有相关联的学习计划</h3>
                    <p>去看看 <router-link :to="{'name':'index'}">LEDGE课程</router-link> 或 <router-link :to="{'name':'activity'}">实战活动</router-link>，开启您的LEDGE学习</p>
                </div>
            </section>
        </div>
        <!-- //MAINVIEW -->
    </div>
</template>
<script>
    import NavTab from '../../components/NavTab'
    import Api from '../../model/api'
    const Model = new Api()
    export default{
        components:{
            NavTab
        },
        data(){
            return{
                list:null
            }
        },
        mounted(){
            this.getTimeLine()
        },
        methods:{
            gotoCourseDetail(item){
                this.$router.push({name:'coursedetail',query:{'id':item.Course.id,'qhfrom':'timeline'}})
            },
            gotoActivityDetail(item){
                this.$router.push({'name':'activitydetail',query:{'qhfrom':'timeline','id':item.Activity.id}})
            },
            getTimeLine(){
                Model.send({
                    url:'getWechatTimeLine',
                    success:(d)=>{
                        this.list = d.items
                    }
                })
            },
            gotoCheck(){
                this.$router.push({'name':'check',query:{'qhfrom':'timeline','uid':USER_INFO.id}})
            },
            error(e){
               e.target.setAttribute("src",'./CommonImages/loading.jpg')
            },
            getImgUrl(uri){
                return uri || './CommonImages/loading.jpg'
            }
        }
    }
</script>
