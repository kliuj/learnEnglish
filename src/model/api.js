import store from "./store.js"
let stores = new store()
import fun from './fun.js'
let baseFun = new fun()
import axios from 'axios'
export default class Api {
  constructor() {
    //path可配置
    let origin = location.origin.indexOf("localhost") > -1 ? '//www.chuenhang.com' : location.origin;
    this.path = origin + '/DuoBao';
  }
  //设置api接口
  setModel(url){
      return this.path + url
  }
  models(){
    let _ret ={};
    //模拟登录
    _ret.simulateUserLogin = this.setModel('/api/Account/SimulateUserLogin');
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
      baseFun.showLoading()
    }
    let apiType = typeof postData == "string" ? 'get' : 'post';
    if(!withUserInfo){
        postData  = Object.assign(postData,{"UserInfo":stores.getStore('userinfo')},stores.getStore('deviceInfo'));
    }
    let self= this;
        // jdata = JSON.stringify(postData);

    //回调函数
    function callbackFun(successCallback,errorCallback,nocheck,notShowLoading,data){
       if(!notShowLoading){
           baseFun.hideLoading()
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
                  baseFun.showAlert(data.Message,errorCallback);
                  return false;
                }else if(data.LoginStatus && data.LoginStatus['IsLogin']){
                  //如果存在LoginStatus ！= null 且已经登录，一般是其他错误
                    baseFun.showAlert(data.Message,errorCallback);
                    return false;
                }else if(data.LoginStatus && !data.LoginStatus['IsLogin']){
                    //立即去登录
                    stores.setStore('loginBack',location.href);
                    baseFun.jumpUrl('wxPrepare')
                }
              }else{
                baseFun.showAlert(data.Message,errorCallback);
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
        baseFun.showAlert("网络异常");
        return false;
    });
  }
}
