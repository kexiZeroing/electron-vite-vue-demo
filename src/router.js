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
      path: '/three-model',
      name: 'three-model',
      component: () => import('@/components/ThreeModel.vue'),
    },
  ]
})

export default router;
