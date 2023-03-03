<template>
  <div class="container">
    <div>
      <a href="https://www.electronjs.org/" target="_blank">
        <img src="../assets/electron.svg" class="logo" alt="Electron logo" />
      </a>
    </div>
    <button type="button" @click="count++">count is {{ count }}</button>
    
    <p @click="sayHello">Say hello</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'

const router = useRouter()
const count = ref(0)

function sayHello() {
  router.push({
    name: 'hello', params: { name: 'world' }
  })
}
</script>

<style lang="scss" scoped>
.container {
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  p {
    color: blue;
  }
}

</style>
