import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/page/index'
import Main from '@/page/index/main'
import bbs from '@/page/index/bbs'
import bbs_main from '@/page/bbs/main'
import bbs_create from '@/page/bbs/create'

import Home from '@/page/home'

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
          children:[
            {
              path: '/',
              name: 'bbs_main',
              component: bbs_main,
            },
            {
              path: 'create',
              name: 'bbs_create',
              component: bbs_create,
            }
          ]
        }
      ]
    },
    {
      path: '/home',
      name: 'home',
      component: Home

    }
  ]
})
