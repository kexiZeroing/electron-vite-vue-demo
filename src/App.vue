<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="scss" scoped>

</style>

<script setup>
console.log("[App.vue]", `Hello world from Electron ${process.versions.electron}!`)
</script>
