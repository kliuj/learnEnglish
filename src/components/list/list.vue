<template>
  <div :id="id" class="scrolllist-container">
        <slot name="list">
          <div class="al-c pdt3 gray">暂无数据！</div>
        </slot>
  </div>
</template>
<script>
    export default{
        props: {
            id: {
                type: String,
                default:'scroll-list-view'
            },
            onloadmore:{
                type:Function,
                default:()=>{
                    
                }
            },
        },
        data(){
            return{
                currentDom:null,
                busy:false
            }
        },
        mounted(){
            this.currentDom = document.getElementById(this.id)
            window.addEventListener("scroll",this.loadBottom)
        },
        beforeDestroy(){
            window.removeEventListener('scroll',this.loadBottom)
        },
        methods:{
            //加载更多
            loadBottom(){
                //结构限制，实际滚动的是  $(window);文档高度是$(".scrolllist-container").height()
                if(!this.busy){
                    let totalheight = parseFloat(window.innerHeight) + parseFloat(window.scrollY);
                    //提前100px开始加载
                    if (this.currentDom.offsetHeight <= totalheight + 200) {
                        this.busy = true;
                        this.onloadmore(this.resetState);
                    }
                }
            },
            resetState(){
                this.busy = false
            }
        }
    }
</script>
<style scoped>
    .scrolllist-container{
        background-color: 'res'
    }
</style>

