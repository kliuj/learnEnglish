<template>
    <div class="page pg-courses pg-courses-categories">
        <HeaderView pageName="categories" pageTitle="按类别筛选课程"/>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview">
            <section class="gb-listview" v-if="loaded">
                <ul>
                    <li v-for="(item,index) in categorylist" :key = "index">
                        <a href="javascript:void(0)" @click="gotoCateList(item.id)">{{item.categoryName}}</a>
                    </li>
                </ul>
            </section>
            <EmptyPage v-if="categorylist && categorylist.length === 0 && loaded" info="没有分类类别"/>
        </div>
        <!-- //MAIN VIEW -->
    </div>
</template>
<script>
    import HeaderView from '../../components/HeaderView'
    import Api from '../../model/api'
    const Models = new Api()
    import EmptyPage from '../../components/EmptyPage'
    export default{
        components:{
            HeaderView,EmptyPage
        },
        data(){
            return{
                categorylist:[],
                loaded:false
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
                vm.getWechatCourseCategory()
            })
        },
        methods:{
            getWechatCourseCategory(){
                Models.send({
                    url:'getWechatCourseCategory',
                    type:'get',
                    success:(d)=>{
                        this.categorylist = d.items
                        this.loaded = true
                    }
                })
            },
            gotoCateList(id){
                
            }
        }
    }
</script>