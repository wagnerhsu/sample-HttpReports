import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/view/login'
import Index from '@/view/index'
import Basic from '@/view/basic'
import Service from '@/view/service'
import Detail from '@/view/detail'
import Monitor from '@/view/monitor'   

Vue.use(Router) 

//push 
const VueRouterPush = Router.prototype.push 
Router.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
}

//replace
const VueRouterReplace = Router.prototype.replace
Router.prototype.replace = function replace (to) {
  return VueRouterReplace.call(this, to).catch(err => err)
}


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children: [
        {
          path: '/',
          component: Basic
        },  
        {
          path: '/service',
          component: Service
        },
        {
          path: '/detail',
          component: Detail
        },
        {
          path: '/monitor',
          component: Monitor
        } 
      ] 
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }, 
  ]
})

 
