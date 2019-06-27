// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// vueresource引入
import VueResource from 'vue-resource'

// axios引入
import axios from 'axios'
// 引入通用工具方法
import utils from './utils'
// 引入全局css样式
import '@/assets/style/index.less'
// /*使用VueResource插件*/
Vue.use(VueResource)
Vue.prototype.$axios = axios

Vue.prototype.$util = utils
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
