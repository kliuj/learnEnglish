<template>
    <div  class="slider-container" v-if="dataList.length > 0">
        <ul ref="swiperWrap"
            class="item-photos"
            :style="{
                'width':containerWidth * 100 +'%',
                'height':domHeight +'px',
                'transform' : 'translate3d(' + translateX + 'px,' + translateY + 'px, 0)',
                'transition-duration': transitionDuration + 'ms'
             }"
            @touchstart="_onTouchStart"
            @transitionend="_Transitionend" v-if="dataList.length > 1">
            <template v-for="(item,index) in newList" >
                <li
                    :style="{
                        'width':itemWidth *100+'%',
                        'height':domHeight+'px',
                        'position':position,
                        'backgroundColor':backgroundColor
                    }"
                    :class="animationType === 'FADE_IN' ? ((index + 1 ) == currentPage  ? 'slideLiShow' : 'slideLiHide') :''"
                    @click="outLink(item.LinkUrl)"
                >
                    <img  :style="{
                                'width':animationType === 'SCROLL_TYPE' ? '100%' :'auto',
                            }"
                            :src="item.ImageUrl"/>
                </li>
            </template>
        </ul>
        <ul ref="swiperWrap"
            class="item-photos"
            :style="{
                'width':'100%',
                'height':domHeight +'px',
             }" v-if="dataList.length === 1">
            <template >
                <li :style="{
                        'width': '100%',
                        'height':domHeight+'px',
                        'position':position,
                        'backgroundColor':backgroundColor
                    }"
                    @click="outLink(dataList[0].LinkUrl)">
                    <img  :src="dataList[0].ImageUrl"/>
                </li>
            </template>
        </ul>
        <div v-if="dataList.length > 1" class="dot" :style="{'display': pagerShow ? 'block':'none'}">
            <template  v-for="(item,index) in dataList">
                <span v-if="(index + 1) == currentPage" class="cur"></span>
                <span v-else></span>
            </template>
        </div>
    </div>
</template>
<script>
    const VERTICAL = 'vertical';
    const HORIZONTAL = 'horizontal';
    export default{
        props: {
            dataList: {
                type: Array,
                default: function () {
                    return []
                }
            },
            animationType:{
                type:String,
                default:'SCROLL_TYPE'
            },
            backgroundColor:{
                type:String,
                default:'#262626'
            },
            squareRatio:{
                type:Number,
                default:0  //长宽高比例
            },
            curPage:{
                type:Number,
                default:0  //页码从标准的0开始 ，
            },
            randomStart:{
                type:Boolean,
                default:false  //随机轮播
            },
            pagerShow:{
                type:Boolean,
                default:true  //关闭pager下标
            }
        },
        data () {
            return {
                delta:0,
                containerWidth:0,
                itemWidth:0,
                newList:[],
                transitionDuration:0,
                loop:true,
                autoplay:true,
                translateX:0,
                direction:HORIZONTAL,
                currentPage:this.curPage,
                translateY:0,
                clientWidth:0,
                position:'static',
                domHeight:0,
                timerIntervalLoop:null,
                originDataLength:0,
                timerOutLoop:null
            }
        },
        created(){
            if(this.animationType === 'SCROLL_TYPE'){
                this.position = 'relative'
            }else if(this.animationType === 'FADE_IN'){
                this.position = 'absolute'
            }
            if(this.dataList.length <= 1){
                return false
            }

            if(this.randomStart){
                this.dataList = this.random(this.dataList)
            }
            if(this.dataList.length > 1){
                this.originDataLength = this.dataList.length
                if(this.animationType === 'SCROLL_TYPE'){
                    //连续滚动类型需要最前最后clone两条数据
                    const _cloneDomPrev = this.dataList[0],
                        _cloneDomLast = [this.dataList[this.originDataLength - 1]]
                    this.newList = _cloneDomLast.concat(this.dataList,_cloneDomPrev)
                    this.containerWidth = this.newList.length
                    this.itemWidth = 1/this.containerWidth
                }else if(this.animationType === 'FADE_IN'){
                    this.newList = this.dataList
                    this.containerWidth = 1
                    this.itemWidth = 1
                }
            }
            
        },
        beforeDestroy(){
            this.clearTimer()
        },
        mounted() {

            this.clientWidth = document.body.clientWidth;
            if(this.dataList.length === 1){
                this.domHeight = this.clientWidth * this.squareRatio
                return false
            }
            this._onTouchMove = this._onTouchMove.bind(this);
            this._onTouchEnd = this._onTouchEnd.bind(this);
            if(this.squareRatio){
                this.domHeight = this.clientWidth * this.squareRatio
                this.startAuto()
            }else{
                this.loadImg(this.dataList[0]['ImageUrl'])
            }
            
        },
        methods: {
            //动画结束处理
            _Transitionend(){
                if(this.currentPage > this.dataList.length){
                    this.currentPage = 1
                    this.setPage(1,true)    
                }else if(this.currentPage === 0){
                    this.currentPage = this.dataList.length
                    this.setPage(this.dataList.length,true)  
                }
                this.onAnimating = false
            },
            //随机排序
            random(list){
                function randomsort(a, b) {
                    return Math.random() >= 0.5 ? -1 : 1; //通过随机产生0到1的数，然后判断是否大于0.5从而影响排序，产生随机性的效果。
                }
                return list.sort(randomsort);
            },
            startAuto(){
                if(this.animationType === 'SCROLL_TYPE'){
                    if (this.loop) {
                        this.$nextTick(function () {
                            this.transitionDuration = 500;
                            this._createScrollLoop();
                            this.setPage(this.currentPage, true);
                        });
                    } else {
                        this.setPage(this.currentPage);
                    }
                }else if(this.animationType === 'FADE_IN'){
                    if (this.loop) {
                        this.$nextTick(function () {
                            // this.transitionDuration = 500;
                            this._createFadeInLoop()
                        });
                    } else {
                        this.setPage(this.currentPage);
                    }
                }
            },
            //滑动过程中或者关闭页面时候清除定时器
            clearTimer(){
                this.timerIntervalLoop && clearInterval(this.timerIntervalLoop)
            },
            loadImg(url){
                //修复图片尺寸问题，默认每个图大小一致，以第一个图为标准
                var img = new Image();
                img.src = url
                img.onload = (e)=>{
                    this.domHeight = img.height/img.width  *  this.clientWidth
                    if(this.dataList.length > 1){
                        this.startAuto()
                    }
                };
            },
            //渐隐渐现循环
            _createFadeInLoop(){
                this.timerIntervalLoop = setInterval(()=>{
                    if(this.currentPage === this.originDataLength){
                        this.currentPage = 1
                    }else{
                        this.currentPage ++
                    }
                },3000)
            },
            setFadeInPage(){
                if(this.delta > 0){
                    //向右滑动数据变大 上一页
                    if(this.currentPage == 1){
                        this.currentPage  = this.originDataLength
                    }else{
                        this.currentPage --
                    }
                }else{
                    //向右滑动数据小 下一页
                    if(this.currentPage === this.originDataLength){
                        this.currentPage = 1
                    }else{
                        this.currentPage ++
                    }
                }
            },
            setPage(page,noAnimation){
                this.transitionDuration = noAnimation ? 0 : 500
                this.translateX = - page * this.clientWidth

            },
            _onTouchStart(e) {
                if(!this.onAnimating){
                this.startPos = this._getTouchPos(e);
                this.clearTimer()
                this.onTouchDistance = this.translateX
                document.addEventListener('touchmove', this._onTouchMove, false);
                document.addEventListener('touchend', this._onTouchEnd, false);
                }
            },
            _onTouchMove(e) {
                if(!this.onAnimating){
                if(this.animationType === 'SCROLL_TYPE'){
                    this.delta = this._getTouchPos(e) - this.startPos;
                    if(this.onTouchDistance + this.delta >= 0){
                        this.translateX = 0
                    }else if(this.onTouchDistance + this.delta <=  -(this.originDataLength + 1) * this.clientWidth){
                        this.translateX = -(this.originDataLength + 1) * this.clientWidth
                    }else{
                        this.translateX = this.onTouchDistance + this.delta
                    }
                }
                }
            },
            _onTouchEnd(e) {
                if(!this.onAnimating){
                this.delta = this._getTouchPos(e) - this.startPos;
                if(this.pureNum(this.delta)){
                    if(this.animationType === 'FADE_IN'){
                        this.setFadeInPage()
                    }else if(this.animationType === 'SCROLL_TYPE'){
                        if(this.delta > 0){
                            //上一页
                            this.currentPage --
                        }else{
                            this.currentPage ++
                        }
                        this._moveScroll()
                    }
                }
                this.timerOutLoop && clearTimeout(this.timerOutLoop)
                this.timerOutLoop = setTimeout(()=>{
                    this.startAuto()
                },this.transitionDuration)
                document.removeEventListener('touchmove', this._onTouchMove, false);
                document.removeEventListener('touchend', this._onTouchEnd, false);
                }
            },
            _moveScroll(){
                if(!this.onAnimating){
                    this.onAnimating = true; 
                    this.setPage(this.currentPage)   
                }

                    
            },
            _scrollLoop(){
                this.setPage(this.currentPage)
            },
            _createScrollLoop() {
                this.clearTimer()
                this.timerIntervalLoop = setInterval(()=>{
                    this.currentPage ++
                    this._scrollLoop()
                },8000)
            },
            _getTouchPos(e) {
                var key = this.isHorizontal() ? 'pageX' : 'pageY';
                return e.changedTouches ? e.changedTouches[0][key] : e[key];
            },
            isHorizontal() {
                return this.direction === HORIZONTAL;
            },
            isVertical() {
                return this.direction === VERTICAL;
            },
            pureNum(num){
                return Math.abs(num) > 50
            },
            outLink(url){
                if(url) location.href=url
            }
        }
    }
</script>
<style scoped>
    div,ul,li,span,img{
        margin:0;
        padding:0;

    }
    .slider-container{
        width: 100%;
        position: relative;
        overflow: hidden;
    }
    .slider-container ul li{
        list-style: none;
        display: inline-block;
        overflow: hidden;
    }
    .item-photos{
        position: relative;
    }
    .item-photos li img{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -ms--transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        -moz-transform: translate(-50%,-50%);
        -o-transform: translate(-50%,-50%);
        display: block;
        border: 0;
        height: 100%;
        vertical-align: top;
    }
    .dot{
        text-align: center;
        position: absolute;
        bottom:20px;
        height: 10px;
        width: 100%;
    }
    .dot span{
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        display: inline-block;
        margin:0 5px;
    }
    .dot span.cur{
         background: rgba(255,255,255,1);
    }
    .slideLiShow{
        display: block;
        animation:myanimationmyanimation 1s;
        -moz-animation:myanimation 1s; /* Firefox */
        -webkit-animation:myanimation 1s; /* Safari and Chrome */
        -o-animation:myanimation 1s; /* Opera */
    }
    .slideLiHide{
        /* display: none !important */
        opacity: 0;
    }
    @keyframes myanimation
    {
        from {opacity:0.2;}
        to {opacity:1;}
    }

    @-moz-keyframes myanimation /* Firefox */
    {
        from {opacity:0.2;}
        to {opacity:1;}
    }

    @-webkit-keyframes myanimation /* Safari and Chrome */
    {
        from {opacity:0.2;}
        to {opacity:1;}
    }

    @-o-keyframes myanimation /* Opera */
    {
        from {opacity:0.2;}
        to {opacity:1;}
    }
</style>