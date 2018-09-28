import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Main from '@/page/index/main'
import bbs from '@/page/index/bbs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      children:[
        {
          path: '/',
          name: 'main',
          component: Main,
        },
        {
          path: 'bbs',
          name: 'bbs',
          component: bbs,
        }
      ]
    }
  ]
})
