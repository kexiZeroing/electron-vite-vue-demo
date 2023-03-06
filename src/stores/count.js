import { defineStore } from 'pinia'

// https://github.com/piniajs/example-vue-2-vite
export const useCountStore = defineStore('count', {
  state: () => ({
    count: 0,
    name: '',
  }),
  getters: {
    // doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
    setName(val) {
      this.name = val
    }
  },
  // https://prazdevs.github.io/pinia-plugin-persistedstate/guide/config.html
  persist: true,
})
