<template>
    <div>
        <label for="">{{label}}</label>
        <span @click="clickAction">
            <audio :src="src"   
                @error="onerror"
                @pause="pauseListener">
                Your browser does not support the audio element.
            </audio>
            <a href="javascript:void(0);">
                <i class="fa" :class="classObject"></i> 
                {{ !playState ? text : '停止'}}
            </a>
        </span>
        <em>{{intro}}</em>
    </div>
</template>
<script>
    import { showAlert } from '../model/fun'
    export default{
        props: {
            src:{
                type: String,
                default:''
            },
            label:{
                type: String,
                default:''
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
            }
        },
        data(){
            return{
                playState:false,
                loadFailed:false //资源下载
            }
        },
        computed: {
            classObject() {
                return {
                    'fa-play-circle': !this.playState,
                    'fa-stop-circle': this.playState
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
                if(this.playState){
                    this.playState = false
                    dom.pause()
                }else{
                    this.closeAll()
                    this.playState = true
                    dom.play()
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
                showAlert(this.label+'课程下载失败')
                //资源失败时候点击无效
                this.loadFailed = true
            },
            pauseListener(e){
                //被其他任务暂停时候修改状态
                this.playState = false
            }
        }
    }
</script>