<template>
  <div class="container">
    <div>
      <a href="https://www.electronjs.org/" target="_blank">
        <img src="../assets/electron.svg" class="logo" alt="Electron logo" />
      </a>
    </div>
    
    <button type="button" @click="count++">count is {{ count }}</button>
    <br />
    <button type="button" @click="incStoreCount">Store count is {{ store.count }}</button>

    <div>
      <button type="button" @click="getTimeFromMain">Get the time: </button>
      <p>{{ currentTime }}</p>
    </div>

    <div @click="sayHello" class="link">Go to another page</div>
    <button type="button" @click="goThreeDemo">Threejs Demo</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router/composables'
import { useCountStore } from '@/stores/count'
import { ipcRenderer } from 'electron';

const router = useRouter()
const store = useCountStore()

const count = ref(0)
const currentTime = ref('')

function sayHello() {
  router.push({
    name: 'hello', params: { name: 'world' }
  })
}

function getTimeFromMain() {
  ipcRenderer.send('get-time')
}

function goThreeDemo() {
  ipcRenderer.invoke('open-win', 'three-model')
}

function incStoreCount() {
  store.increment()
}

ipcRenderer.on('set-time', (event, data) => {
  currentTime.value = data
})
</script>

<style lang="scss" scoped>
.container {
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }

  button {
    margin: 3px 0;
  }
  p {
    color: blue;
  }
  .link {
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
  }
}
</style>
