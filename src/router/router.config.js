//配置路由
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter) //注册VueRouter

import routes from './routes' //引入

//实例化路由
var router = new VueRouter({
    routes: routes
})

export default router