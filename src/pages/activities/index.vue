<template>
    <div class="page pg-activities pg-activities-hp">
        <!-- HEADER -->
        <header class="gb-header">
            <Header />
            <h1 class="has-icon">LEDGE 实战活动</h1>
        </header>
        <!-- //HEADER -->
        <!-- MAIN -->
        <div class="mainview">
            <section class="activity-list">
                <ul>
                    <li>
                        <router-link :to="{'name':'activityDetail',query:{'qhfrom':'activity'}}">
                            <div class="activity-title">
                                活动主题
                                <small>12月14日 星期四</small>
                            </div>
                            <div class="activity-poster"><img src="../../../Assets/Images/temp_900x500.jpg"></div>
                        </router-link>
                    </li>
                    <li>
                        <router-link :to="{'name':'activityDetail'}">
                            <div class="activity-title">
                                活动主题
                                <small>12月12日 星期二</small>
                            </div>
                            <div class="activity-poster"><img src="../../../Assets/Images/temp_900x500.jpg"></div>
                        </router-link>
                    </li>
                </ul>
            </section>
        </div>
        <!-- //MAIN -->
    </div>
</template>
<script>
    import Header from '../../components/Header'

    export default{
        data(){
            return{
                
            }
        },
        components:{
            Header
        },
    }
</script>
