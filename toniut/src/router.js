import Vue from 'vue'
import Router from 'vue-router'

import Users from './views/Users'
import AddPerson from './views/AddPerson.vue'
import ListPersons from './views/ListPersons.vue'
import UpdatePerson from '@/views/UpdatePerson.vue' 
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: AddPerson
    },
    {
      path: '/add',
      name: 'add',
      component: AddPerson
    },
    {
      path: '/list',
      name: 'list',
      component: ListPersons
    },
    {
      path: '/update/:id',
      name: 'update',
      component: UpdatePerson
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
