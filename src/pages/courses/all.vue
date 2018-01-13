<template>
    <div class="page pg-courses" :class="{'pg-courses-categories':showCate,'pg-courses-all':!showCate}" >
        <HeaderView pageName="allcourses" :pageTitle="title" :beforeBack="beforeBack">
            <div class="header-right" v-show="!showCate">
                <a href="javascript:void(0)" @click="showcate">类别筛选</a>
            </div>
        </HeaderView>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview" v-show="!showCate">
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
                            <div class="course-cover"><img :src="getImgUrl(item.courseImgUrl)"    @error="error"></div>
                            <div class="course-title">{{item.courseName}}</div>
                            <div class="category">{{item.courseClassifyName}}</div>
                            <div class="read" v-if="item.courseHisStudyNum">{{item.courseHisStudyNum}}人学习</div>
                        </a>
                    </li>
                </ul>  
                <EmptyPage v-if="feeList && feeList.length === 0 && fee" info="暂无相关课程"/>
            </section>
            <section id="free-courses" class="courses-group"  v-show="!fee">
                <ul class="courses-list" slot="list">
                    <li v-for="(item,index) in freeList" :key="index" @click="gotoCourseDetail(item)">
                        <a href="javascript:void(0)" >
                            <div class="course-cover"><img :src="getImgUrl(item.courseImgUrl)"   @error="error"></div>
                            <div class="course-title">{{item.courseName}}</div>
                            <div class="category">{{item.courseClassifyName}}</div>
                            <div class="read" v-if="item.courseHisStudyNum">{{item.courseHisStudyNum}}人学习</div>
                        </a>
                    </li>
                </ul>  
                <EmptyPage v-if="freeList && freeList.length === 0 && !fee" info="暂无相关课程"/>
            </section>
        </div>
        <div class="mainview" v-show="showCate">
            <section class="gb-listview">
                <ul>
                    <li>
                        <a href="javascript:void(0)" @click="setcateList({id:0,categoryName:'全部'})">全部</a>
                    </li>
                    <li v-for="(item,index) in categorylist" :key = "index">
                        <a href="javascript:void(0)" @click="setcateList(item)">{{item.categoryName}}</a>
                    </li>
                </ul>
            </section>
            <EmptyPage v-if="categorylist && categorylist.length === 0 " info="没有分类类别"/>
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
                feeList:null,
                showCate:false,//是否展示类别
                categorylist:[],
                title:'全部',
                pageAlltitle:'全部',
                categoryId:0
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
                vm.fee = to.query.fee
                vm.title = to.query.pageAlltitle || '全部'
                vm.pageAlltitle = to.query.pageAlltitle || '全部'
                vm.categoryId = to.query.categoryId || 0
                if(vm.fee){
                    vm.getFeeList()
                }else{
                    vm.getFreeList()
                }
            })
        },
        watch:{
            'categoryId'(){
                if(this.fee){
                    this.getFeeList()
                }else{
                    this.getFreeList()
                }
            }
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
                        categoryId:this.categoryId
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
                        categoryId:this.categoryId
                    },
                    success:(d)=>{
                        this.freeList = d.items
                    }
                })
            },
            gotoCourseDetail (params){
                this.$router.push({name:'coursedetail',query:{'id':params.id,'qhfrom':'allcourses','para':JSON.stringify({'fee':this.fee,categoryId:this.categoryId,pageAlltitle:this.pageAlltitle}),}})
            },
            //类别
            getWechatCourseCategory(){
                Models.send({
                    url:'getWechatCourseCategory',
                    type:'get',
                    success:(d)=>{
                        this.categorylist = d.items
                    }
                })
            },
            showcate(){
                this.showCate = true;
                this.title = '按类别筛选课程'
                if(this.categorylist.length === 0){
                    this.getWechatCourseCategory()
                }
            },
            beforeBack(callback){
                if(this.showCate){
                    this.showCate = false
                    this.title = this.pageAlltitle
                }else{
                    callback && callback()
                }
            },
            setcateList({id,categoryName}){
                this.showCate = false
                this.title = categoryName
                this.pageAlltitle = categoryName
                this.categoryId = id
            },
            error(e){
               e.target.setAttribute("src",'./CommonImages/default.png')
            },
            getImgUrl(uri){
                return uri || './CommonImages/default.png'
            }
        }
    }
</script>