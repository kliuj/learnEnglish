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
            <section class="activity-list" v-if="list">
                <ul v-if="list.length">
                    <li v-for="(item,index) in list"  :key="item.id">
                        <router-link :to="{'name':'activitydetail',query:{'qhfrom':'activity','id':item.id}}">
                            <div class="activity-title">
                                {{item.activityTitle}}
                                <small>{{item.activityDate}}</small>
                            </div>
                            <div class="activity-poster"><img :src="getImgUrl(item.activityImgUrl)" @error="error"></div>
                        </router-link>
                    </li>
                </ul>
            </section>
            <EmptyPage v-if="list && list.length === 0" info="没有相关联的实战活动"/>
        </div>
        <!-- //MAIN -->
    </div>
</template>
<script>
    import NavTab from '../../components/NavTab'
    import Api from '../../model/api'
    const Models = new Api()
    import EmptyPage from '../../components/EmptyPage'
    export default{
        data(){
            return{
                list:null
            }
        },
        components:{
            NavTab,
            EmptyPage
        },
        mounted(){
            this.getData()
        },
        methods:{
            getData(){
                Models.send({
                    url:'getWechatActivity',
                    success:(d)=>{
                        this.list = d.items
                    }
                })
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
