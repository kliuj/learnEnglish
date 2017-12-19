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

export default class Fun {
  constructor() {

  }
  showLoading(){
    const state = document.getElementById("qhCommonLoading").style.display;
    if(state !== 'block'){
        document.getElementById("qhCommonLoading").style.display = 'block'
    }
  }
  hideLoading(){
    document.getElementById("qhCommonLoading").style.display = 'none'
  }
  showAlert(msg,success,okName){
      VueMessageMask.showVMaskMultiMsg({
          message:msg,
          showOkButton:true,
          okText:okName,
          okAction:success
      })
  }
  showConfirm(msg,success,error,okName,cancelName){
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
  hideMessage(_self_){
      VueMessageMask.closeVMask()
  }
  //校验表单
  verifyForm(field,msg,start,okName){
    let self = this;
    start = start ? '':'请输入';
    //传入需要检验的字段和提示信息
    for(var i =0;i<field.length;i++){
        if(!field[i]){
            self.showAlert(start+msg[i],'',okName);
            return false
        }
    }
    return true
  }
  //身份证
  IdentityCodeValid(code) {
      var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
      var tip = "";
      var pass= true;

      if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
          tip = "身份证号格式错误";
          pass = false;
      }

     else if(!city[code.substr(0,2)]){
          tip = "地址编码错误";
          pass = false;
      }
      else{
          //18位身份证需要验证最后一位校验位
          if(code.length == 18){
              code = code.split('');
              //∑(ai×Wi)(mod 11)
              //加权因子
              var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ];
              //校验位
              var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];
              var sum = 0;
              var ai = 0;
              var wi = 0;
              for (var i = 0; i < 17; i++)
              {
                  ai = code[i];
                  wi = factor[i];
                  sum += ai * wi;
              }
              var last = parity[sum % 11];
              if(parity[sum % 11] != code[17]){
                  tip = "校验位错误";
                  pass =false;
              }
          }
      }
      if(!pass) alert(tip);
      return pass;
  }
  getTimeTransform(time,type){
    //时间格式的处理
    let self = this,
        result = '';
    switch (type) {
        case 1:
          result =  time.split('T')[0];//年月日
          break;
        case 2:
          result =  time.split('.')[0].replace(/T/g," ");//时分秒
          break;
        case 3:
          result =  self.compareTime(time);
          break;
        default:
          result = time
          break;
    }
    return result
  }
  compareTime(time){
    //计算时间差
    time = time.split('.')[0].replace(/T/g," ").replace(/-/g,"/");
    let tips = '',
        loacalTime = Date.now(),
        serverTime= new Date(time),
        num = loacalTime - serverTime;
    if(num < 0){
      return time
    }else{
      let day  = (num/(1000*60*60*24)) > 1 ? Math.floor(num/(1000*60*60*24)) : 0,
          hour = (num - day*1000*60*60*24)/(1000*60*60) > 1 ? Math.floor((num - day*1000*60*60*24)/(1000*60*60)) : 0,
          minute = (num - day*1000*60*60*24 - hour*1000*60*60)/(1000*60)  > 1 ? Math.floor((num - day*1000*60*60*24 - hour*1000*60*60)/(1000*60))  : 0;
      if(day){
        tips +=day+'天'
      }
      if(hour){
        tips +=hour+'小时'
      }
      tips +=minute+'分钟前'
      return tips
    }
  }
  //不保存历史记录刷新页面，解决自带回退按钮的回退问题
  /*
  1 replace跳转
  2 href刷新
  */
  jumpUrl(replaceUrl,type){
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
  routerUrl(url,router){
      router.replace(url)
  }
  //获取星期几
  /*
  *
  *当年本周：12月1日 星期一 晚上19:00
  *当年跨周：12月1日 晚上19:00
  *跨年：2016年12月31日 晚上19:00
  *清晨 00:00:00-05:59:59
  *上午 06:00:00-11:59:59
  *下午 12:00:00-17:59:59
  *晚上 18:00:00-23:59:59
  */
  getDateText(time){
    let str = "星期" + "日一二三四五六".charAt(new Date(time).getDay());
    return str
  }
  //微拍首页上时间特殊处理
  getScheduleTimeString(time){
    let curDate = this.getWeekNumber(),
        itemDate = this.getWeekNumber(time),
        noonTime = null,
        timeString = null;
    const {week,year,month,date,weekDay} = itemDate
    if(curDate.year === itemDate.year){
      timeString = `${month+1}月${date}日`
      if(curDate.week === week && month === curDate.month){
        //本周
        timeString = `${timeString} ${weekDay}`
      }
    }else{
      timeString = `${year}年${month+1}月${date}日`
    }
    //获取小时对比时刻
    const moment = parseInt(time.split(" ")[1].split(":")[0])
    if(moment >= 0 && moment < 6){
      noonTime = '清晨'
    }else if(moment >= 6 && moment < 12){
      noonTime = '上午'
    }else if(moment >= 12 && moment < 18){
      noonTime = '下午'
    }else if(moment >= 18 && moment < 24){
      noonTime = '晚上'
    }
    return `${timeString} ${noonTime}${time.split(" ")[1]}`
  }
  //获取周数
  /**
 * 获取某年的某天是第几周
 * @param {Number} y
 * @param {Number} m
 * @param {Number} d
 * @returns {Number}
 */
 getWeekNumber(time) {
    var now = time ? new Date(time) : new Date(),
        year = now.getFullYear(),
        month = now.getMonth(),
        weekDay =  "星期" + "日一二三四五六".charAt(now.getDay()),
        date = now.getDate(),
        days = now.getDate();
    //那一天是那一年中的第多少天
    for (var i = 0; i < month; i++) {
        days += this.getMonthDays(year, i);
    }

    //那一年第一天是星期几
    var yearFirstDay = new Date(year, 0, 1).getDay() || 7;

    var week = null;
    if (yearFirstDay == 1) {
        week = Math.ceil(days / yearFirstDay);
    } else {
        days -= (7 - yearFirstDay + 1);
        week = Math.ceil(days / 7) + 1;
    }

    return {week,year,month,date,weekDay};
  }
  /**
   * 判断年份是否为润年
   *
   * @param {Number} year
   */
  isLeapYear(year) {
    return (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0);
  }
  /**
  * 获取某一年份的某一月份的天数
  *
  * @param {Number} year
  * @param {Number} month
  */
  getMonthDays(year, month) {
    return [31, null, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][month] || (this.isLeapYear(year) ? 29 : 28);
  }
}
