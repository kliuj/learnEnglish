<template>
    <div class="page pg-courses pg-courses-categories">
        <!-- HEADER -->
        <header class="gb-header">
            <div class="header-left">
                <a href="javascript:void(0);" @click="goback" class="icon back"></a>
            </div>
            <h1 class="has-icon">按类别筛选课程</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAIN VIEW -->
        <div class="mainview">
            <section class="gb-listview">
                <ul>
                    <li>
                        <a href="All.jsp">所有类别</a>
                    </li>
                    <li>
                        <a href="All.jsp">类别名-1</a>
                    </li>
                    <li>
                        <a href="All.jsp">类别名-2</a>
                    </li>
                    <li>
                        <a href="All.jsp">类别名-3</a>
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
                saveFrom('categories',to)
            })
        },
        methods:{
            goback(){
                let qhfrom = getBack("categories");
                this.$router.push({'name':qhfrom.name,query:qhfrom.para})
            }
        }
    }
</script>