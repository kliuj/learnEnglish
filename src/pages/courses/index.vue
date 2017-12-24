<template>
    <div class="page pg-courses pg-courses-hp">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">LEDGE 优选课程</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview">
            <section class="courses-group" v-if="recommand.length">
                <div class="hd">
                    <div class="group-name">精选课程</div>
                </div>
                <ul class="courses-list">
                    <li v-for="(item,index) in recommand" :key="item.id" @click="gotoCourseDetail(item)">
                        <a href="javascript:void(0);">
                            <div class="course-cover"><img v-lazy="item.courseImgUrl"></div>
                            <div class="course-title">{{item.courseName}}</div>
                            <div class="category">{{item.classifyId}}</div>
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
                            <div class="category">{{item.classifyId}}</div>
                            <div class="read">{{item.hisStudyNum}}人学习</div>
                        </a>
                    </li>
                </ul>
                <div class="more"><router-link :to="{'name':'allCourses',query:{'qhfrom':'courseIndex',fee:true}}">查看全部</router-link></div>
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
                            <div class="category">{{item.classifyId}}</div>
                            <div class="read">{{item.hisStudyNum}}人学习</div>
                        </a>
                    </li>
                </ul>
                <div class="more">
                    <router-link :to="{'name':'allCourses',query:{'qhfrom':'courseIndex',fee:false}}">
                        查看全部
                    </router-link>
                </div>
            </section>
        </div>
        <!-- //MAIN VIEW -->
    </div>
</template>
<script>
    //    {success:true, errorCode:0, errorMsg:null, recommand:[{name:'name1'},{name:'name2'}], free:[{name:'name1'},{name:'name2'}], fee:[{name:'name3'},{name:'name4'}]}
    const testData = {
        id:1,
        courseName:'精选课程',
        courseImgUrl:'https://car2.autoimg.cn/cardfs/product/g6/M01/83/90/t_autohomecar__wKgHzVnGd3CABqWjAAo58Wwkur0549.jpg',
        classifyId:1,
        hisStudyNum:100,

    }
    import NavTab from '../../components/NavTab'
    import Api from '../../model/api'
    const Models = new Api()
    export default{
        components:{
            NavTab
        },
        data(){
            return{
                recommand:[
                    testData
                ],
                free:[
                    testData
                ],
                fee:[
                    testData
                ]
            }
        },
        methods:{
            getInitData(){
                //post
                Models.send('getWechatCourseIndex',{})
            },
            gotoCourseDetail (params){
                this.$router.push({name:'courseDetail',query:{'id':params.id,'qhfrom':'courseIndex'}})
            }
        }
    }
</script>
