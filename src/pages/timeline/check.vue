<template>
  <div class="page pg-timeline pg-timeline-check">
        <!-- HEADER -->
        <HeaderView pageName="check" pageTitle="打卡记录">
            <div class="header-right">
                <a href="javascript:void(0);" class="icon calendar" v-show="!isCalendar" @click="changeCalendar(true)"></a>
                <a href="javascript:void(0);" class="icon list " v-show="isCalendar" @click="changeCalendar(false)"></a>
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
                <div class="goto-check" v-if="isowner">
                    <a href="javascript:void(0)" @click="checkData">打卡</a>
                </div>
                <div class="thumbs-up" v-if="!isowner">
                    <a href="javascript:void(0)"><i class="fa fa-thumbs-o-up"></i> </a>
                </div>
            </section>
            <section class="gb-listview" v-show="!isCalendar">
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
            <div v-show="isCalendar">
                <section class="calendar-view">	    	
                    <div class="legend">打卡216天</div>
                    <div class="c">
                        <Calendar 
                            :range="calendar2.range" 
                            :lunar="calendar2.lunar" 
                            :value="calendar2.value" 
                            :begin="calendar2.begin" 
                            :end="calendar2.end" 
                            :selectcheckdate="calendar2.selectCheckDate"
                            @select="calendar2.select">
                        </Calendar>
                    </div>
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
            </div>    
            <!-- //CHECK -->
        </div>
        <!-- //MAINVIEW -->
    </div>
</template>
<script>
    import HeaderView from '../../components/HeaderView'
    import Calendar from '../../components/calendar/calendar.vue'
    import Api from '../../model/api'
    const Models = new Api()
    export default{
        components:{
            HeaderView,Calendar
        },
        data(){
            return {
                visable:false,
                isowner:false,
                isCalendar:false,
                uid:0,
                calendar2:{
                    range:true,
                    value:[[2017,12,1],[2019,2,16]], //默认日期
                    lunar:false, //显示农历
                    begin:[2017,2,16], //可选开始日期
                    end:[2019,2,16], //可选结束日期
                    selectCheckDate:{
                        '2017-12-02':true,
                        '2017-12-12':true,
                        '2017-12-22':true,
                        '2017-12-28':true
                    },
                    select(begin,end){
                        // console.log(begin.toString(),end.toString());
                    }
                },

            }
        },
        beforeRouteEnter(to, from, next){
            // ...
            next(vm=>{
                vm.uid = to.query.uid
                vm.isowner = vm.uid == USER_INFO.id,
                vm.getCheckList()
            })
        },
        methods:{
            cancel(){
                this.visable = false
            },
            getCheckList(){
                Models.send({
                    url:'WechatClockIn',
                    type:'get',
                    data:{
                        from:'2017-01-05 21:47:15',
                        to:'2019-01-05 21:47:15'
                    },
                    success:()=>{

                    }
                })
            },
            checkData(){
                Models.send({
                    url:'WechatClockIn',
                    type:'get',
                    data:{
                        id:this.uid
                    },
                    success:()=>{

                    }
                })
            },
            changeCalendar(state){
                this.isCalendar = state
            }
        }
    }
</script>
