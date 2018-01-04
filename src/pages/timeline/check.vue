<template>
  <div class="page pg-timeline pg-timeline-check">
        <!-- HEADER -->
        <HeaderView pageName="check" pageTitle="打卡记录">
            <div class="header-right">
                <a href="javascript:void(0);" class="icon calendar"></a>
                <a href="javascript:void(0);" class="icon list hidden"></a>
            </div>
        </HeaderView>
        <!-- //HEADER -->
        <!-- MAINVIEW -->
        <div class="mainview">
            <section class="check-summary">
                <div class="profile-photo">
                    <img src="../../../Assets/Images/temp_user.png">
                </div>
                <div class="check-stat">2017.01.18 ~ 至今</div>
                <div class="goto-check hidden"><a href="Check.jsp">打卡</a></div>
                <div class="thumbs-up"><a href=""><i class="fa fa-thumbs-o-up"></i> 555</a></div>
            </section>
            <section class="gb-listview">
                <div class="legend">打卡216天</div>
                <ul>
                    <li>
                        <div>
                            <label for="">第222天打卡</label>
                            <span>聆听了2节课</span>
                            <em>2017-12-31，用户录入的100字以内学习心得...</em>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="calendar-view">	    	
                <div class="legend">打卡216天</div>
                <div class="c"><img src="../../../Assets/Images/temp_calendar.png" width="100%"></div>
            </section>
            <!-- CHECK -->
            <section class="quick-check" v-show="visable">
                <div class="modal"></div>
                <div class="container">
                    <div class="hd">
                        <div class="title">今日打卡</div>
                        <a href="javascript:void(0)" class="cancel" @click="cancel">取消</a>
                    </div>
                    <div class="bd">
                        <ul class="listview">
                            <li>
                                <div class="textarea">
                                    <span>
                                        <textarea id="WhatsUp" rows="5" maxlength="30" placeholder="学习心得（100字以内）" ></textarea></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="action"><a href="" class="button">打卡</a></div>
                </div>
            </section>
            <!-- //CHECK -->
        </div>
        <!-- //MAINVIEW -->
    </div>
</template>
<script>
    import HeaderView from '../../components/HeaderView'
    export default{
        components:{
            HeaderView
        },
        data(){
            return {
                visable:false,
                isowner:false
            }
        },
        beforeRouteEnter(to, from, next){
            // ...
        },
        methods:{
            cancel(){
                this.visable = false
            }
        }
    }
</script>
