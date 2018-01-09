'use strict'
import Vue from "vue";

//自动配置debug模式
// const isDebug_mode = process.env.NODE_ENV !== 'production';
const isDebug_mode = location.origin.indexOf("localhost") > -1 ;
Vue.config.debug = isDebug_mode;
Vue.config.devtools = isDebug_mode;
Vue.config.productionTip = isDebug_mode;


import router from './routers';
import store from './store'

import VueLazyload  from './components/lazyLoad/vue-lazyload'

Vue.use(VueLazyload, {
  error: './CommonImages/loading.png',
  loading: './CommonImages/loading.png',
  try: 3 // default 1
})

// import VueMessageMask from 'vue-message-mask'
// VueMessageMask.install(Vue)
// Vue.use(VueMessageMask)

const App =Vue.extend(require('./pages/app.vue'))

const app = new Vue({
  el : '#app',
  router,
  store,
  render: h => h(App)
})
