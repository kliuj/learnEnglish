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
    if(location.origin.indexOf("localhost") > -1){
      replaceUrl = '#/' + replaceUrl
    }else{
      if(type == 2){
        //微信支付页面比较特殊,ios判断页面方式在spa页面只会记录最开始的页面
        replaceUrl =  '/weixin/index.html?#/'+replaceUrl
        // location.href =  replaceUrl ;
      }else{
        replaceUrl = '/weixin/index.html#/'+replaceUrl
      }
    }
    location.replace(replaceUrl);
}

//router 自带的 刷新页面
export function routerUrl(url,router){
  router.replace(url)
}

//跳转登录
export function goToLogin(toUrl){
  //http://wx.ledgetrans.com.cn/home/autologin?returnUrl=
  const url = encodeURIComponent(toUrl || location.href)
  location.replace('http://wx.ledgetrans.com.cn/home/autologin?returnUrl='+url)
}

//get  cookie

//JS get cookies方法!
export function getCookie(name){
  var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
  if(arr=document.cookie.match(reg))
  return unescape(arr[2]);
  else
  return null;
}

//微信分享
export function share({title,link,imgUrl,desc,success = ()=>{},cancel=()=>{}}){
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