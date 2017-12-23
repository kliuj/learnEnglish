<template>
    <div class="page pg-courses pg-courses-categories">
        <HeaderView pageName="categories" pageTitle="按类别筛选课程"/>
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
    import HeaderView from '../../components/HeaderView'
    export default{
        components:{
            HeaderView
        },
        data(){
            return{
            }
        },
        beforeRouteEnter: (to, from, next) => {
            next(vm=>{
            })
        },
        methods:{
        }
    }
</script>