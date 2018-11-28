import Vue from 'vue'
import Router from 'vue-router'

import MainScreen from './views/MainScreen'
import MapViewer from './views/MapViewer'
import MapCreation from './views/MapCreation'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainScreen
    },
    {
      path: '/map/:id',
      name: 'map',
      component: MapViewer
    },
    {
      path: '/map/:id/:regId',
      name: 'mapReg',
      component: MapViewer
    },
    {
      path: '/creation',
      name: 'creation',
      component: MapCreation
    }
  ]
})
