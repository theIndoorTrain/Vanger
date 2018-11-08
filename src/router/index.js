import Vue from 'vue'
import Router from 'vue-router'


import Index from '@/page/index'
import Main from '@/page/index/main'

import bbs from '@/page/index/bbs'

import task from '@/page/index/task'
import task_main from '@/page/task/main'
import task_details from '@/page/task/details'

import source from '@/page/index/source'
import source_main from '@/page/source/main'
import source_details from '@/page/source/details'


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
          children:[
            {
              path: '/',
              name: 'task_main',
              component: task_main,
            },
            {
              path: 'details',
              name: 'task_details',
              component: task_details,
            }
          ]
        },
        {
          path: 'source',
          name: 'source',
          component: source,
          children:[
            {
              path: '/',
              name: 'source_main',
              component: source_main,
            },
            {
              path: 'details',
              name: 'source_details',
              component: source_details,
            }
          ]
        },
        {
          path: 'bbs',
          name: 'bbs',
          component: bbs,
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
