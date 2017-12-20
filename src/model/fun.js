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