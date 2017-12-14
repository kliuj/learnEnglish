/*封装localStorage*/
export default class Store {
  constructor() {

  }
  //存储信息
  setStore(name,value){
      localStorage.setItem(name,JSON.stringify(value))
  }
  //删除信息
  delStore(name){
      localStorage.removeItem(name)
  }
  //获取信息
  getStore(name){
      return localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : ''
  }
  //存储信息有效期
  setTimeStore(name,value,timeout){
      //默认有效期365天
      let now  = Date.now() ;
      timeout = timeout ? now + timeout : now + 365*24*60*60*1000;
      value = Object.assign(value,{
        'savedate':now,
        'timeout':timeout
      })
      localStorage.setItem(name,JSON.stringify(value))
  }
  //获取信息有效期
  getTimeStore(name){
      let data =  localStorage.getItem(name) ? JSON.parse(localStorage.getItem(name)) : {},
          now = Date.now();
      //获取超时时间,判断是否返回    
      if(data.timeout){
        if(data.timeout < now){
          return {}
        }else{
          return data
        }
      }else{
        return {}
      }
  }
  //批量获取信息
  getAllStore(nameList){
      let result = [],
          self = this;
      nameList.forEach(function(value){
        result.push(self.getStore(value))
      })
  }
  //批量删除信息
  delAllStore(nameList){
    nameList.forEach(function(value){
      result.push(self.delStore(value))
    })
  }
  //clear所有信息
  clearStore(){
      localStorage.clear()
  }
  // 自动存储浏览记录
  saveFrom(name,transit) {
    	var qhfrom = transit.query.qhfrom ;//默认全部返回首页
      var para = transit.query.para ? JSON.parse(transit.query.para) : '';
      if(!qhfrom) return false;
    	var paths  = localStorage.getItem("FromUrlStore") ? JSON.parse(localStorage.getItem("FromUrlStore")) : {};
      if (localStorage) {
      	paths[name] = {
          'name':qhfrom,
          'para':para
        }
      	localStorage.setItem("FromUrlStore", JSON.stringify(paths));

      }
  }

    // 返回localstorage存储的对应目录记录
  getBack(name) {
    	var paths = {};
      if (localStorage) {
          paths = localStorage.getItem("FromUrlStore") ? JSON.parse(localStorage.getItem("FromUrlStore")) :'';
          if(paths && paths[name]){
          	return paths[name];
          }else{
          	return {'name':'index'}
          }
      }
  }
}
