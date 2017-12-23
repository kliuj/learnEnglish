<template>
    <div class="page pg-activities pg-activities-hp">
        <!-- HEADER -->
        <header class="gb-header">
            <NavTab />
            <h1 class="has-icon">LEDGE 实战活动</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAIN -->
        <div class="mainview">
            <section class="activity-list">
                <ul v-if="list.length">
                    <li v-for="(item,index) in list"  :key="item.id">
                        <router-link :to="{'name':'activityDetail',query:{'qhfrom':'activity','id':item.id}}">
                            <div class="activity-title">
                                {{item.activityTitle}}
                                <small>{{item.activityDate}}</small>
                            </div>
                            <div class="activity-poster"><img v-lazy="item.activityImgUrl"></div>
                        </router-link>
                    </li>
                </ul>
            </section>
        </div>
        <!-- //MAIN -->
    </div>
</template>
<script>
    import NavTab from '../../components/NavTab'

    export default{
        data(){
            return{
                list:[
                    {
                        id:1,    
                        activityTitle:'第一条标题',
                        activityDate:'12月14日 星期四',
                        activityImgUrl:'https://car2.autoimg.cn/cardfs/product/g6/M01/83/90/t_autohomecar__wKgHzVnGd3CABqWjAAo58Wwkur0549.jpg'
                    }
                ]
            }
        },
        components:{
            NavTab
        },

    }
</script>
