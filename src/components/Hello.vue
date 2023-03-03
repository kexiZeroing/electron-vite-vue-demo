<template>
  <div>
    Hello {{ name }}
    <button type="button" @click="back">back</button>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router/composables'
const route = useRoute()
const router = useRouter()

const { name } = route.params
function back() {
  router.back()
}
</script>

<style lang="scss" scoped>

</style>