import Vue from 'vue'
// import router from './router'
import "./style.css"
import App from './App.vue'
import './samples/node-api'

new Vue({
  // router,
  render: h => h(App)
})
  .$mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
