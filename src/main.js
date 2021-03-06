// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'styles/reset.css'
// 1像素边框方案
import 'styles/border.css'
// click事件导致300ms
import fastClick from 'fastclick'
// 引入iconfont
import 'styles/iconfont.css'
// 引入swiper
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 引入 swiper要求的css
import 'swiper/dist/css/swiper.css'

fastClick.attach(document.body)
//USE swiper//在全局中配置
Vue.use(VueAwesomeSwiper,)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App }, // 键和值一样可以只写一个
  template: '<App/>'
})
