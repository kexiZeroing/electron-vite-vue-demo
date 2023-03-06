import { createFetch } from '@vueuse/core'

export const useMyFetch = createFetch({
  baseUrl: 'https://jsonplaceholder.typicode.com',
  options: {
    async beforeFetch({ options }) {
      // const myToken = await getMyToken()
      // options.headers.Authorization = `Bearer ${myToken}`
      options.headers['X-Client'] = 'desktop';
      return { options }
    },
  },
  fetchOptions: {
    mode: 'cors',
  },
})
