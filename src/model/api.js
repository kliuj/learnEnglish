import {
  setStore,
  getStore
} from "./store.js"
import {
  showAlert,
  showLoading,
  hideLoading,
  jumpUrl
} from './fun.js'
import axios from 'axios'
export default class Api {
  constructor() {
    //path可配置
    let origin = location.origin.indexOf("localhost") > -1 ? '//101.132.185.126:8080' : location.origin;
    this.path = origin + '/api/';
  }
  //设置api接口
  setModel(url){
      return this.path + url
  }
  models(){
    let _ret ={};
    //课程首页
    _ret.getWechatCourseIndex = this.setModel('WechatCourseIndex');
    //活动详情
    _ret.getWechatActivity = this.setModel('WechatActivity');
    //根据活动ID得到所有有效的入场券信息
    _ret.getWechatActivityTicket = this.setModel('WechatActivityTicket');
    return _ret;
  }
  //发送请求
  /*
  * @author  k.liu
  * Description: 通用的api接口调用
  * @param url [必选]		[url信息，从上面的key匹配]
  * @param postData      [必选]		[post参数]
  * @param successCallback        [必选]		[成功回调]
  * @param errorCallback        [可以传空]		[失败的回调]
  * @param nocheck	 [可选]		[是否需要验证登录信息]
  */
  send(url,postData,successCallback,errorCallback,nocheck,notShowLoading,withUserInfo){
    if(!notShowLoading){
      //自定义是否showloading
      showLoading()
    }
    let apiType = typeof postData == "string" ? 'get' : 'post';
    if(!withUserInfo){
        postData  = Object.assign(postData,{"UserInfo":getStore('userinfo')},getStore('deviceInfo'));
    }
    let self= this;
        // jdata = JSON.stringify(postData);

    //回调函数
    function callbackFun(successCallback,errorCallback,nocheck,notShowLoading,data){
       if(!notShowLoading){
           hideLoading()
        }
        if(data.Success){
          if(nocheck){
            //登录接口不需要判断是否需要登录
            // console.warn("登录接口不需要判断是否需要登录");
            successCallback && successCallback(data)
          }else if(data.LoginStatus){
                if(data.LoginStatus.IsLogin && data.LoginStatus.NeedLogin ){
                      // console.warn("需要登录并且已经登录");
                      successCallback && successCallback(data)
                }else{
                      // console.warn("返回IsLogin但是不需要登录");
                      successCallback && successCallback(data)
                }
          }else if(!data.LoginStatus ){
              // console.warn("不返回IsLogin不需要登录");
              successCallback && successCallback(data)
          }
        }else{
              // console.error('错误信息=='+data.Message+'          错误code=='+data.RetCode);
              if(data.hasOwnProperty('LoginStatus')){
                if(!data.LoginStatus){
                  showAlert(data.Message,errorCallback);
                  return false;
                }else if(data.LoginStatus && data.LoginStatus['IsLogin']){
                  //如果存在LoginStatus ！= null 且已经登录，一般是其他错误
                    showAlert(data.Message,errorCallback);
                    return false;
                }else if(data.LoginStatus && !data.LoginStatus['IsLogin']){
                    //立即去登录
                    setStore('loginBack',location.href);
                    jumpUrl('wxPrepare')
                }
              }else{
                showAlert(data.Message,errorCallback);
                return false;
              }
        }
     }
    //axios api
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    axios.post(self.models()[url],postData)
    .then(({data})=>{
        callbackFun(successCallback,errorCallback,nocheck,notShowLoading,data)
    })
    .catch(function(err){
        $("#qhCommonLoading").hide();
        console.dir(err)
        // if(!notShowLoading){
        //   $("#qhCommonLoading").hide();
        // }
        showAlert("网络异常");
        return false;
    });
  }
}
