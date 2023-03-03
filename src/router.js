import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
window.Vue = Vue;

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'count',
      component: () => import('@/components/Count.vue'),
    },
    {
      path: '/hello/:name',
      name: 'hello',
      component: () => import('@/components/Hello.vue'),
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('@/components/About.vue'),
    },
  ]
})

export default router;
