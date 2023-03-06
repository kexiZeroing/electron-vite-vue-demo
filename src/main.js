import Vue from 'vue'
import router from './router'
import { createPinia, PiniaVuePlugin } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import "./style.css"
import App from './App.vue'

Vue.config.productionTip = false

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
Vue.use(PiniaVuePlugin)

new Vue({
  router,
  pinia,
  render: h => h(App)
})
  .$mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
