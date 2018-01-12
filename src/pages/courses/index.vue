<template>
    <div class="page pg-courses pg-courses-hp">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">LEDGE 优选课程</h1>
            <div class="header-right">
                <a href="javascript:void(0)" @click="gotoCheck">打卡</a>
            </div>
        </header>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview">
            <section class="today-checks" v-if="clockInfo && clockInfo.length > 0">
                <div class="today-checks-title">今日打卡会员</div>
                <router-link :to="{'name':'todaycheck',query:{'qhfrom':'index'}}">
                    <ul>
                        <li v-for="(item,index) in clockInfo" :key="index">
                            <img :src="item.UserHeadImgUrl">
                        </li>
                    </ul>
                </router-link>
            </section>
            <section class="courses-group" v-if="recommend.length">
                <div class="hd">
                    <div class="group-name">精选课程</div>
                </div>
                <ul class="courses-list">
                    <li v-for="(item,index) in recommend" :key="item.id" @click="gotoCourseDetail(item)">
                        <a href="javascript:void(0);">
                            <div class="course-cover"><img v-lazy="item.courseImgUrl"></div>
                            <div class="course-title">{{item.courseName}}</div>
                            <div class="category">{{item.courseClassifyName}}</div>
                            <div class="read">{{item.hisStudyNum}}人学习</div>
                        </a>
                    </li>
                </ul>
            </section>
            <section class="courses-group"  v-if="fee.length">
                <div class="hd">
                    <div class="group-name">付费课程</div>
                </div>
                <ul class="courses-list">
                    <li v-for="(item,index) in fee" :key="item.id" @click="gotoCourseDetail(item)">
                        <a href="javascript:void(0);">
                            <div class="course-cover"><img v-lazy="item.courseImgUrl"></div>
                            <div class="course-title">{{item.courseName}}</div>
                            <div class="category">{{item.courseClassifyName}}</div>
                            <div class="read"  v-if="item.hisStudyNum">{{item.hisStudyNum}}人学习</div>
                        </a>
                    </li>
                </ul>
                <div class="more"><router-link :to="{'name':'allcourses',query:{'qhfrom':'index',fee:true}}">查看全部</router-link></div>
            </section>
            <section class="courses-group" v-if="free.length">
                <div class="hd">
                    <div class="group-name">免费课程</div>
                </div>
                <ul class="courses-list">
                    <li v-for="(item,index) in free" :key="item.id" @click="gotoCourseDetail(item)">
                        <a href="javascript:void(0);">
                            <div class="course-cover"><img v-lazy="item.courseImgUrl"></div>
                            <div class="course-title">{{item.courseName}}</div>
                            <div class="category">{{item.courseClassifyName}}</div>
                            <div class="read" v-if="item.hisStudyNum">{{item.hisStudyNum}}人学习</div>
                        </a>
                    </li>
                </ul>
                <div class="more" @click="gotoAll">
                    <a href="javascript:void(0)">
                        查看全部
                    </a>
                </div>
            </section>
            <EmptyPage v-if="recommend.length === 0 && free.length === 0 && fee.length ===0" info="没有相关联的课程"/>
        </div>
        <!-- //MAIN VIEW -->
    </div>
</template>
<script>
    import NavTab from '../../components/NavTab'
    import Api from '../../model/api'
    const Models = new Api()
    import {
        routerUrl
    }from '../../model/fun'
    import EmptyPage from '../../components/EmptyPage'
    export default{
        components:{
            NavTab,
            EmptyPage
        },
        data(){
            return{
                recommend:[],
                free:[],
                fee:[],
                clockInfo:null
            }
        },
        mounted(){
            this.getInitData()
            this.getWechatClockIn()
            
        },
        methods:{
            gotoAll(){
                this.$router.push({'name':'allcourses',query:{'qhfrom':'index',fee:false}})
            },
            getInitData(){
                //post
                Models.send({
                    url:'getWechatCourseIndex',
                    success:(d)=>{
                        this.free = d.free;
                        this.fee = d.fee;
                        this.recommend = d.recommend;
                    }
                })
            },
            //获取打卡记录的人
            getWechatClockIn(){
                Models.send({
                    url:'getWechatClockIn',
                    params:{
                        top:6,
                    },
                    success:(d)=>{
                        this.clockInfo = d.items
                    }
                })
            },
            gotoCourseDetail (params){
                this.$router.push({name:'coursedetail',query:{'id':params.id,'qhfrom':'index'}})
            },
            gotoCheck(){
                this.$router.push({'name':'check',query:{'qhfrom':'index','uid':USER_INFO.id}})
            },
        }
    }
</script>
