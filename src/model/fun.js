/*
*
* Description: 一些公共方法处理
* @author  k.liu
  MessageBox.alert(msg).then(function() {
      success && success()
      //成功回调，可不传
  });
  MessageBox.confirm(msg).then(function() {
    success && success()
    //成功回调，比传
  },function(){
    error && error()
    //失败回调。可不传，但是这个function必须写，不然promise 的reject会报错
  });
*/
import VueMessageMask from '../components/mask';

export function  showLoading(){
  const state = document.getElementById("qhCommonLoading").style.display;
  if(state !== 'block'){
      document.getElementById("qhCommonLoading").style.display = 'block'
  }
}
export function  hideLoading(){
  document.getElementById("qhCommonLoading").style.display = 'none'
}
export function  showAlert(msg,success,okName){
    VueMessageMask.showVMaskMultiMsg({
        message:msg,
        showOkButton:true,
        okText:okName,
        okAction:success
    })
}

export function  showToast(text){
    VueMessageMask.showVMToast(text)
}

export function  showConfirm(msg,success,error,okName,cancelName){
    VueMessageMask.showVMaskMultiMsg({
        message:msg,
        showOkButton:true,
        showCancelButton:true,
        okText:okName,
        cancelText:cancelName,
        okAction:success,
        cancelAction:error
    })
}
//统一关闭
export function  hideMessage(_self_){
    VueMessageMask.closeVMask()
}
//校验表单
export function  verifyForm(field,msg,start,okName){
  start = start ? '':'请输入';
  //传入需要检验的字段和提示信息
  for(var i =0;i<field.length;i++){
      if(!field[i]){
          showAlert(start+msg[i],'',okName);
          return false
      }
  }
  return true
}
function setOpacity(elem, opacity) {
    /*
    * elem : The id of the element; 
    * opacity: The value of alpha, which is a decimals.
    */
    if(elem.style.filter) {   //IE
        elem.style.filter = 'alpha(opacity:' + opacity * 100 + ')';
    } else {
        elem.style.opacity = opacity;    
    }
}
export function fadeIn(elem, speed, callback) {
    /* 
    * elem, the id of the element;
    * speed, the speed for the fadeIn.(The value lower, the less time needs)
    * opacity, the target opacity will be reach, 0.0 to 1.0
    */
    elem.style.display = "block";
    setOpacity(elem, 0);

    let tempOpacity = 0;
    function start(){
        setOpacity(elem, tempOpacity);
        tempOpacity += 0.05;
        if(tempOpacity <= 1) {
            setTimeout(()=>{
              start()
            }, speed);
            //tempOpacity += 0.05;
        }else{
          setOpacity(elem, 1);
          callback && callback()
        }
    }
    start()
}
export function fadeOut(elem, speed, callback) {
  /* 
   * elem, the id of the element;
   * speed, the speed for the fadeout;
   speed, the speed for the fadein.(The value lower, the less time needs);
   */
   elem.style.display="block";
   let tempOpacity = 1;
   function start(){
        setOpacity(elem, tempOpacity);
        tempOpacity -= 0.05;
        if(tempOpacity >= 0) {
            setTimeout(()=>{
              start()
            }, speed);
            //tempOpacity += 0.05;
        }else{
          setOpacity(elem, 0);
          callback && callback()
        }
    }
    start()
   //elem.style.display = "none";
}
//不保存历史记录刷新页面，解决自带回退按钮的回退问题
  /*
  1 replace跳转
  2 href刷新
  */
export function  jumpUrl(replaceUrl,type){
    type = type || 1;
    if(type == 2){
        //微信支付页面比较特殊,ios判断页面方式在spa页面只会记录最开始的页面
        replaceUrl = encodeURIComponent('http://wx.ledgetrans.com.cn/index.html?#/'+replaceUrl)
        // location.href =  replaceUrl ;
    }else{
        replaceUrl = encodeURIComponent('http://wx.ledgetrans.com.cn/index.html#/'+replaceUrl)
    }
    console.log(replaceUrl)
    location.replace('http://wx.ledgetrans.com.cn/home/autologin?returnUrl='+replaceUrl);
}

//router 自带的 刷新页面
export function routerUrl(url,router){
    console.log(12)
  router.replace({ name: url })
  
}

//跳转登录
// export function goToLogin(toUrl){
//   //http://wx.ledgetrans.com.cn/home/autologin?returnUrl=
//   const url = encodeURIComponent(toUrl || location.href)
//   location.replace('http://wx.ledgetrans.com.cn/home/autologin?returnUrl='+url)
// }

//get  cookie

//JS get cookies方法!
export function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
  return unescape(arr[2]);
  else
  return null;
}

export function setCookie({name,value}) {
    document.cookie=name+"="+value;
}
//微信分享
export function share({title,link,imgUrl,desc,success = ()=>{},cancel=()=>{}}){
    console.log(link)
  if(wx){
    wx.showOptionMenu();
    //朋友圈
    wx.onMenuShareTimeline({
        title , // 分享标题
        link , // 分享链接
        imgUrl , // 分享图标
        success ,
        cancel
    });
    //“分享给朋友”
    wx.onMenuShareAppMessage({
        title, // 分享标题
        desc, // 分享描述
        link, // 分享链接
        imgUrl, // 分享图标
        success,
        cancel
    });
  }
}

//微信支付
export function wxPay ({d={},success=()=>{},cancel=()=>{},fail=()=>{}}){
    //发起一个微信支付请求
    wx.chooseWXPay({
        timestamp: d.timeStamp,
        nonceStr: d.nonceStr,
        package: d.package,
        signType: d.signType,
        paySign: d.paySign,
        success: function (res) {
            // 支付成功后的回调函数
            // alert("返回值描述"+JSON.stringify(res));
            if(res.errMsg == "chooseWXPay:ok" ) {
                success && success()
                console.log('支付成功')
            }else{
                console.log('支付失败')
                fail && fail()
            }
        },
        cancel:function(res){
            console.log('支付取消')
            cancel()
        }
    });
}

//时间
export function getNow (){
    const   time = new Date(),
            year = time.getFullYear() ,
            month = time.getMonth() + 1,
            date = time.getDate();  
    return{
        year,
        month:('0'+month).substr(-2),
        date:('0'+date).substr(-2)
    }        
}

//获取指定时间
export function transdate(endTime){
    var date=new Date();
    date.setFullYear(endTime.substring(0,4));
    date.setMonth(endTime.substring(5,7)-1);
    date.setDate(endTime.substring(8,10));
    date.setHours(endTime.substring(11,13));
    date.setMinutes(endTime.substring(14,16));
    date.setSeconds(endTime.substring(17,19));
    return Date.parse(date);
}

//浏览器内核

export function Browser(){
    const browser={
        versions:function(){
            var u = navigator.userAgent, app = navigator.appVersion;
            return{
                trident: u.indexOf('Trident') > -1,//IE内核
                presto: u.indexOf('Presto') > -1,//opera内核
                webKit: u.indexOf('AppleWebKit') > -1,//苹果、谷歌内核
                gecko: u.indexOf('Gecko') > -1&& u.indexOf('KHTML') == -1,//火狐内核
                mobile: !!u.match(/AppleWebKit.*Mobile.*/),//是否为移动终端
                ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),//ios终端
                android: u.indexOf('Android') > -1|| u.indexOf('Linux') > -1,//android终端或者uc浏览器
                iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
                iPad: u.indexOf('iPad') > -1,//是否iPad
                webApp: u.indexOf('Safari') == -1,//是否web应该程序，没有头部与底部
                weixin: u.indexOf('MicroMessenger') > -1,//是否微信 （2015-01-22新增）
                qq: u.match(/\sQQ/i) ==" qq" //是否QQ
            };
        }(),
        language:(navigator.browserLanguage || navigator.language).toLowerCase()
    }
    return browser
}

//查询当前页面是否可以打开侧边栏
export function checkNameCanOpen(name) {
    const nameObj = {
        // ''
        'timeline':true,
        'index':true,
        'activity':true,
        'upgrade':true
    }
}