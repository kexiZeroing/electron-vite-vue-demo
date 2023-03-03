import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
window.Vue = Vue;

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('@/components/Index.vue'),
    },
    {
      path: '/hello/:name',
      name: 'hello',
      component: () => import('@/components/Hello.vue'),
    },
  ]
})

export default router;
