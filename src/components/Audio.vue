<template>
    <div>
        <label for="">L-{{label}}</label>
        <span>
            <a href="javascript:void(0);" @click="clickAction">
                <audio 
                
                    @error="onerror"
                    @playing="playing"
                    @waiting="waiting"
                    @pause="pauseListener"
                    preload="none"
                    crossOrigin = "Anonymous">
                    <source :src="src">
                    </source>
                    Your browser does not support the audio element.
                </audio>
                <i class="fa" :class="classObject"></i> 
                {{ !playState ? text : '停止'}}
            </a>
        </span>
        <em>{{intro}}</em>
    </div>
</template>
<script>
    import { showAlert } from '../model/fun'
    import Api from '../model/api'
    const Models = new Api()
    export default{
        props: {
            label:{
                type: Number,
                default:0
            },
            intro:{
                type: String,
                default:''
            },
            onplay:{
                type:Function,
                default:()=>{
                }
            },
            onpause:{
                type:Function,
                default:()=>{
                }
            },
            text:{
                type:String,
                default:'免费试听'
            },
            audioId:{
                type:String,
                default:''
            },
            id:{
                type: Number,
                default:0
            },
            source:{
                type: String,
                default:''
            }
        },
        data(){
            return{
                src:'',
                playState: 0 , // 0 暂停 ，1 播放  2 缓冲中
                loadFailed:false //资源下载
            }
        },
        mounted(){
            this.src =this.source || 'http://wx.ledgetrans.com.cn/api/wechatcoursePlay/'+this.audioId
        },
        computed: {
            classObject() {
                return {
                    'fa-play-circle': this.playState === 0,
                    'fa-stop-circle': this.playState === 1
                }
            }
        },
        methods:{
            clickAction(e){
                if(this.loadFailed){
                    showAlert(this.label+'课程下载失败')
                    return false
                }
                const dom =  e.currentTarget.childNodes[0]
                if(this.playState !== 0){
                    this.playState = 0
                    dom.pause()
                }else{
                    this.closeAll()
                    this.playState = 1
                    dom.play()
                    this.sendApi()
                }
            },
            closeAll(){
                const ele = document.getElementsByTagName('audio');
                console.log(ele)
                for(let i = 0;i < ele.length ;i++){
                    ele[i].pause()
                }
            },
            onerror(e){
                console.log(e)
                console.log(this.label+'课程下载失败')
                // showAlert(this.label+'课程下载失败')
                //资源失败时候点击无效
                this.loadFailed = true
                this.playState = 0
            },
            pauseListener(e){
                //被其他任务暂停时候修改状态
                this.playState = 0
            },
            playing(e){
                console.log(e)
            },
            waiting(e){
                console.log(e)
            },
            sendApi(){
                Models.send({
                    url:'getWechatPlayAudio',
                    type:'get',
                    notShowLoading:true,
                    params:{
                        audioId:this.id
                    },
                    success:(data)=>{
                    }
                })
            }
        }
    }
</script>