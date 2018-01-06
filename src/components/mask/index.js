/**
 * Created by kerwinliu on 2017/8/25.
 */
import Vue from 'vue'
import Mask from './mask.vue'
import DEFAULT_DATA from './default_data'
let vmaskInstance , currentMsg = null ,MaskContainerConstructor


let merge = function(target){
    for (let i = 1, j = arguments.length; i < j; i++) {
        let source = arguments[i];
        for (let prop in source) {
            if (source.hasOwnProperty(prop)) {
                let value = source[prop];
                if (value !== undefined) {
                    target[prop] = value;
                }
            }
        }
    }
    return target;
};

let closeMaskContainer  = ()=>{
    currentMsg = null
    for (var prop in DEFAULT_DATA) {
        if (DEFAULT_DATA.hasOwnProperty(prop)) {
            vmaskInstance[prop] = DEFAULT_DATA[prop];
        }
    }
}

let defaultCallback = ()=>{

}


let initInstance = ()=> {
    vmaskInstance = new MaskContainerConstructor({
        el: document.createElement('div')
    });
    //组件添加到body
    document.body.appendChild(vmaskInstance.$el)
    vmaskInstance.callback = defaultCallback;
};

let showMaskContainer = (state = true)=> {
    if (!vmaskInstance.showMask || vmaskInstance.closeTimer) {
        var options = currentMsg;
        for (var prop in options) {
            if (options.hasOwnProperty(prop)) {
                vmaskInstance[prop] = options[prop];
            }
        }
        if (options.callback === undefined) {
            vmaskInstance.callback = defaultCallback;
        }

        Vue.nextTick(() => {
            vmaskInstance['showMask'] = state
        });
    }
};
function init() {
    MaskContainerConstructor = Vue.extend(Mask)
    if (!vmaskInstance) {
        initInstance();
    }
}
init()
const VueMessageMask = {
    showVMaskLoading (options) {
        closeMaskContainer()
        currentMsg = merge({
            showLoading:true
        },options)
        showMaskContainer()
    },
    closeVMask (cb) {
        closeMaskContainer()
        cb && cb()
    },
    //普通信息提示
    showVMaskMsg(text){
        closeMaskContainer()
        currentMsg = merge({
            showMessage:true,
            message:text,
            showOkButton:true,
        })
        showMaskContainer()
    },
    //自定义按钮信息类型提示
    showVMaskMultiMsg(options){
        closeMaskContainer()
        currentMsg = merge({
            showMessage:true
        },options)
        showMaskContainer()
    },
    showVMaskConfirm(options){
        closeMaskContainer()
        currentMsg = merge({
            showMessage:true
        },options)
        showMaskContainer()
    },
    //diy弹框
    showDiyVMask(source){
        closeMaskContainer()
        currentMsg = merge({
            diyComponent:source
        })
        showMaskContainer()
    },
    //toast 普通信息提示
    showVMToast(text){
        closeMaskContainer()
        currentMsg = merge({
            showToast:true,
            toastMessage:text
        })
        showMaskContainer()
        window.hideToad && clearTimeout(window.hideToad)
        window.hideToad = setTimeout(()=>{
            closeMaskContainer()
        },2000)
    },
}

export default VueMessageMask