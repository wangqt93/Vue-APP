import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import FastClick from 'fastclick'
FastClick.attach(document.body)
import VueAwesomeSwiper from 'vue-awesome-swiper'

import './assets/reset1.css'
import 'swiper/css/swiper.css'

Vue.use(VueAwesomeSwiper, /* { default options with global component } */)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app1')
