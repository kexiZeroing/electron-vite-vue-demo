<template>
  <div>
    Hello {{ name }}
    <button type="button" @click="back">back</button>

    <div>
      <p v-if="isFetching">Loading some data...</p>
      <pre v-else>{{ data }}</pre>
    </div>
  </div>
</template>

<script setup>
import { useMyFetch } from '@/composables/useMyFetch'
import { useRoute, useRouter } from 'vue-router/composables'
const route = useRoute()
const router = useRouter()

const { name } = route.params
function back() {
  router.back()
}

// const { isFetching, error, data } = useFetch('/todos/1')
const { isFetching, error, data } = useMyFetch('/todos/1')

</script>

<style lang="scss" scoped>

</style>