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
        <div class="mainview" v-if="data">
            <section class="check-summary">
                <div class="profile-photo">
                    <img :src="icon">
                </div>
                <div class="check-stat" v-if="beginDate">{{beginDate}} ~ 至今</div>
                <div class="goto-check" v-if="isowner">
                    <a href="javascript:void(0)" @click="checkData">打卡</a>
                </div>
                <div class="thumbs-up" v-if="!isowner">
                    <a href="javascript:void(0)" @click="thumbUp">
                        <i class="fa fa-thumbs-o-up"></i>
                        {{thumbUpCount || ''}}
                    </a>
                </div>
            </section>
            <section class="gb-listview" v-if="!isCalendar">
                <div class="legend">打卡{{data.Total}}天</div>
                <ul>
                    <li v-for="(item,index) in checkedDates" :key="index">
                        <div>
                            <label for="">第{{checkedDates.length - index}}天打卡</label>
                            <span>聆听了{{item.LearnCourseNum}}次课</span>
                            <em>{{item.ClockInDate.split(" ")[0]}}{{'，'+item.StudyNotes}}</em>
                        </div>
                    </li>
                </ul>
            </section>
            <section class="calendar-view" v-if="isCalendar">	    	
                <div class="legend">打卡{{data.Total}}天</div>
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
                                        <textarea v-model="studyNotes" rows="5" maxlength="30" placeholder="学习心得（100字以内）" ></textarea></span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class="action"><a href="javascript:void(0)" class="button" @click="goCheck">打卡</a></div>
                </div>
            </section> 
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
    import{
        showToast
    }from '../../model/fun'
    export default{
        components:{
            HeaderView,Calendar
        },
        data(){
            return {
                beginDate:null,
                visable:false,
                isowner:false,
                isCalendar:false,
                uid:0,
                thumbUpCount:0,
                icon:'',
                data:null,
                calendar2:{
                    range:true,
                    value:[[2017,12,1],[2019,2,16]], //默认日期
                    lunar:false, //显示农历
                    begin:[2017,1,19], //可选开始日期
                    end:[2019,2,16], //可选结束日期
                    selectCheckDate:{},
                    select(begin,end){
                        // console.log(begin.toString(),end.toString());
                    }
                },
                studyNotes:null,
                checkedDates:[]
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
                this.cancel()
                Models.send({
                    url:'WechatClockIn',
                    type:'get',
                    params:{
                        from:'',
                        to:'',
                        userId:this.uid
                    },
                    success:(d)=>{
                        this.data = d.item
                        let begin = d.item.BindingDate.split(" ")[0]
                        this.calendar2.value[0] = begin.split("-")
                        this.beginDate = begin
                        this.thumbUpCount = d.item.ThumbUpCount
                        this.icon = d.item.UserHeadImgUrl
                        this.setCalendarData(d.item.Details)
                        this.checkedDates = d.item.Details
                    }
                })
            },
            //设置日历数据
            setCalendarData(details){
                if(details[0]){
                    this.calendar2.value[0] = details[0].ClockInDate.split(" ")[0].split("-")
                }
                for(let i of details){
                    let value = i.ClockInDate.split(" ")[0]
                    this.calendar2.selectCheckDate[value] = true
                }
            },
            checkData(){
                Models.send({
                    url:'WechatClockIn',
                    type:'get',
                    params:{
                        id:this.uid
                    },
                    success:(d)=>{
                        if(d.item){
                            this.visable = true
                        }else{
                            showToast(d.errorMsg)
                        }
                    },
                    error:()=>{
                        // this.visable = true
                    }
                })
            },
            goCheck(){
                Models.send({
                    url:'WechatClockIn',
                    type:'post',
                    params:{
                        StudyNotes:this.studyNotes
                    },
                    success:(d)=>{
                        if(d.errorCode === -1){
                            showToast(d.errorMsg)
                        }else{
                            this.getCheckList()
                        } 
                    },
                    error:(d)=>{
                        // showToast(d.errorMsg)
                    }
                })
            },
            changeCalendar(state){
                this.isCalendar = state
            },
            //点赞
            thumbUp(){
                Models.send({
                    url:'getWechatThumbUp',
                    type:'post',
                    params:{
                        Id:this.uid
                    },
                    success:(d)=>{
                        this.thumbUpCount = this.thumbUpCount + 1
                    },
                    error:(d)=>{
                        showToast(d.errorMsg)
                    }
                })
            }
        }
    }
</script>
