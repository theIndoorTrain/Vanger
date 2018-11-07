import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/page/index'
import Main from '@/page/index/main'

import bbs from '@/page/index/bbs'
import bbs_main from '@/page/bbs/main'
import bbs_create from '@/page/bbs/create'

import task from '@/page/index/task'

import source from '@/page/index/source'


import home from '@/page/home'
import home_bbs from '@/page/home/bbs.vue'
import home_task from '@/page/home/task.vue'
import home_source from '@/page/home/source.vue'
import home_message from '@/page/home/message.vue'
import home_interest from '@/page/home/interest.vue'
import home_create_bbs from '@/page/home/create/bbs'
import home_create_task from '@/page/home/create/task'
import home_create_source from '@/page/home/create/source'
import home_update_data from '@/page/home/update/data'
import home_update_pass from '@/page/home/update/password'


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
          path: 'task',
          name: 'task',
          component: task,
        },
        {
          path: 'source',
          name: 'source',
          component: source,
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
      component: home,
      children:[
        {
          path: '/',
          name: 'home_bbs',
          component:  home_bbs,
        },
        {
          path: 'task',
          name: 'home_task',
          component:  home_task,
        },
        {
          path: 'source',
          name: 'home_source',
          component:  home_source,
        },
        {
          path: 'interest',
          name: 'home_interest',
          component:  home_interest,
        },
        {
          path: 'message',
          name: 'home_message',
          component:  home_message,
        },
        {
          path: 'bbs_create',
          name: 'home_bbs_create',
          component:  home_create_bbs,
        },
        {
          path: 'task_create',
          name: 'home_task_create',
          component:  home_create_task,
        },
        {
          path: 'source_create',
          name: 'home_source_create',
          component:  home_create_source,
        },
        {
          path: 'data_update',
          name: 'home_data_update',
          component:  home_update_data,
        },
        {
          path: 'pass_update',
          name: 'home_pass_update',
          component:  home_update_pass,
        },
      ]
    }
  ]
})
