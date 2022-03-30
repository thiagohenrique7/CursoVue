import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'
import Contatos from '@/views/contatos/Contatos.vue'

Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    linkActiveClass: 'active',
    routes: [
    { path: '/contatos', // meus-contatos.com/contatos
    // name: 'home',
    component: Contatos},
    { path: '/',  // meus-contatos.com/
    // name: 'about',
    component: Home }
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    ]

    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  })
