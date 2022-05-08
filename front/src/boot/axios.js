import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { URL } from '../utils'

console.log('AXIOS BOOT', localStorage.getItem('user_token'))

if (!localStorage.getItem('user_token')) {
  console.log('LS user_token NOT', localStorage.getItem('user_token'))
  localStorage.setItem('user_token', 'visitor')
}

const api = axios.create({
  baseURL: URL.split('"').join(''),
  timeout: 5000,
  headers: {
    'X-WEBAPP': 'visitor',
    'authorization': localStorage.getItem('user_token'),
    'Content-Type': 'application/json'
  }
})

export default boot(({ app, store }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api, axios }
