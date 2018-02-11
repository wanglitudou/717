import './common/reset.css'
import './font/iconfont.css'

import Vue from 'vue'
import axios from './axios/axios'
import App from './App.vue'
import router from './router/router.config'
import './common/swiper.min.css'
import './common/swiper.min.js'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'


Vue.use(MintUI)

new Vue({
    el: '#app',
    router: router,
    render: h => h(App) 
})