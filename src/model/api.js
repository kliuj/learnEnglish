import {
  setStore,
  getStore
} from "./store.js"
import {
  showAlert,
  showLoading,
  hideLoading,
  jumpUrl,
  getCookie,
  showToast
} from './fun.js'
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json'

export default class Api {
  constructor() {
    //path可配置
    let origin = location.origin.indexOf("localhost") > -1 ? '//wx.ledgetrans.com.cn' : location.origin;
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
    //课程详情 post
    _ret.getWechatCourse = this.setModel('WechatCourse');
    //活动详情 和获取所有当前有效的活动
    _ret.getWechatActivity = this.setModel('WechatActivity');
    //根据活动ID得到所有有效的入场券信息
    _ret.getWechatActivityTicket = this.setModel('WechatActivityTicket');
    //登录 注册  发短信
    _ret.setWechatLogin = this.setModel('WechatLogin');
    //判断是否登录
    _ret.getWechatIsLogin = this.setModel('WechatIsLogin');
    //获取用户信息 get
    _ret.getWechatUser = this.setModel('WechatUser')
    //获取亮值信息
    _ret.getWechatCreditLog = this.setModel('WechatCreditLog')
    //记录开始播放音频
    _ret.getWechatPlayAudio = this.setModel('WechatPlayAudio')
    //获取当天打卡的top条打卡记录
    _ret.getWechatClockIn = this.setModel('WechatClockIn')
    //获取邀请码
    _ret.getWechatInviteCode = this.setModel('WechatInviteCode')
    //获取用户时间轴
    _ret.getWechatTimeLine = this.setModel('WechatTimeLine')
    //根据活动ID得到所有有效的入场券信息
    _ret.getWechatCourseAudio = this.setModel('WechatCourseAudio')
    //vip支付
    _ret.getWechatVipPay = this.setModel('WechatVipPay')
    //打卡
    _ret.WechatClockIn = this.setModel('WechatClockIn')
    //购买课程
    _ret.getWechatBuyCourse = this.setModel('WechatBuyCourse')    
    //微信支付订单
    _ret.getWechatConfig = this.setModel('WechatConfig')  
    //点赞用户结果
    _ret.getWechatThumbUp = this.setModel('WechatThumbUp')
    //课程分类
    _ret.getWechatCourseCategory = this.setModel('WechatCourseCategory')
    //免费课程
    _ret.getWechatFreeCourseList = this.setModel('WechatFreeCourseList')
    //收费课程
    _ret.getWechatFeeCourseList = this.setModel('WechatFeeCourseList')
    //购买活动
    _ret.wechatBuyActivity = this.setModel('WechatBuyActivity')
    //后台设置
    _ret.wechatSystemSetting = this.setModel('WechatSystemSetting')
    return _ret;
  }
  //发送请求
  /*
  * @author  k.liu
  * Description: 通用的api接口调用
  * @param url [必选]		[url信息，从上面的key匹配]
  * @param params      [必选]		[post参数]
  * @param successCallback        [必选]		[成功回调]
  * @param errorCallback        [可以传空]		[失败的回调]
  * @param nocheck	 [可选]		[是否需要验证登录信息]
  */
  send({url,params = {},type = 'get' ,success = ()=>{},error=()=>{},nocheck,notShowLoading,withOutUserInfo,backUrl,needLogin=true}){
    if(!notShowLoading){
      //自定义是否showloading
      showLoading()
    }
    if(!withOutUserInfo){
        params  = Object.assign(params,getStore('deviceInfo'));
    }
    let self= this;
        // jdata = JSON.stringify(params);
    //axios api
    //登录的ticket
    axios.defaults.headers.common['ticket'] = getCookie('ticket');
    if(type.toLocaleLowerCase() === 'get'){
      //get 请求需要 params key
      params = { params }
    }
    //每次都获取设置
    axios.get(self.models()['wechatSystemSetting']).then((settings)=>{
        setStore('settings',settings.data.item)
        window.USER_SETTINGS = getStore('settings')
        //真正发送接口
        axios[type](self.models()[url],params)
        .then(({data})=>{
            this.preCallback({success,error,nocheck,notShowLoading,data,backUrl,needLogin})
        })
        .catch((err)=>{
            hideLoading()
            console.dir(err)
            // showAlert("网络异常");
            return false;
        });
    }).catch(()=>{
        axios[type](self.models()[url],params)
        .then(({data})=>{
            this.preCallback({success,error,nocheck,notShowLoading,data,backUrl,needLogin})
        })
        .catch((err)=>{
            hideLoading()
            console.dir(err)
            // showAlert("网络异常");
            return false;
        });
    })
  }
  //接口回调函数
  /*
  * - 8表示未登录
  */
  preCallback({success,error,nocheck,notShowLoading,data,backUrl,needLogin}){
    hideLoading()
    if(data.errorCode === -8 && needLogin){
        setStore('loginBack',backUrl || location.href.replace(/open/ig,'notopen'))
        jumpUrl('login')
        return false
    }
    if(data.success || data.appId){
      success(data)
    }else{
      showToast(data.errorMsg)
      error(data)
    }
  }
  // 后台接口有bug，post get 所有的参数都需要拼接在url上面
  buildParams(obj) {
      const new_arr = [];
      for (const key in obj) {
          new_arr.push(`${key}=${obj[key]}`)
      }
      return new_arr.join('&')
  }
}
