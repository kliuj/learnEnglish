<template>
    <div class="page pg-courses pg-courses-all">
        <HeaderView pageName="allcourses" pageTitle="全部课程">
            <div class="header-right">
                <router-link :to="{'name':'categories',query:{para:JSON.stringify({'fee':fee}),qhfrom:'allcourses'}}">类别筛选</router-link>
            </div>
        </HeaderView>
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
            <section id="paid-courses" class="courses-group" v-show="fee">
                <ul class="courses-list" slot="list">
                    <li v-for="(item,index) in feeList" :key="index" @click="gotoCourseDetail(item)">
                        <a href="javascript:void(0)" >
                            <div class="course-cover"><img :src="item.courseImgUrl"></div>
                            <div class="course-title">{{item.courseName}}</div>
                            <div class="category">{{item.courseClassifyName}}</div>
                            <div class="read">{{item.courseHisStudyNum}}人学习</div>
                        </a>
                    </li>
                </ul>  
            </section>
            <section id="free-courses" class="courses-group"  v-show="!fee">
                <ul class="courses-list" slot="list">
                    <li v-for="(item,index) in freeList" :key="index" @click="gotoCourseDetail(item)">
                        <a href="javascript:void(0)" >
                            <div class="course-cover"><img :src="item.courseImgUrl"></div>
                            <div class="course-title">{{item.courseName}}</div>
                            <div class="category">{{item.courseClassifyName}}</div>
                            <div class="read">{{item.courseHisStudyNum}}人学习</div>
                        </a>
                    </li>
                </ul>  
            </section>
        </div>
        <!-- //MAIN VIEW -->
    </div>
</template>
<script>
    import HeaderView from '../../components/HeaderView'
    import EmptyPage from '../../components/EmptyPage'
    import Api from '../../model/api'
    const Models = new Api()
    export default{
        components:{
            HeaderView,
            EmptyPage
        },
        data(){
            return{
                fee:true,//是否付费
                freeList:null,
                feeList:null
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
                vm.fee = to.query.fee
                if(vm.fee){
                    vm.getFeeList()
                }else{
                    vm.getFreeList()
                }
            })
        },
        methods:{
            showFee(){
                this.fee = true,
                this.getFeeList()
            },
            showNoFee(){
                this.fee = false
                this.getFreeList()
            },
            getFeeList(){
                Models.send({
                    url:'getWechatFeeCourseList',
                    params:{
                        categoryId:0
                    },
                    success:(d)=>{
                        this.feeList = d.items
                    }
                })
            },
            getFreeList(){
                Models.send({
                    url:'getWechatFreeCourseList',
                    params:{
                        categoryId:0
                    },
                    success:(d)=>{
                        this.freeList = d.items
                    }
                })
            },
            gotoCourseDetail (params){
                this.$router.push({name:'coursedetail',query:{'id':params.id,'qhfrom':'allcourses','para':JSON.stringify({'fee':this.fee}),}})
            }
        }
    }
</script>