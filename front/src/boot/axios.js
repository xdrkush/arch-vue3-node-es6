import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { URL } from '../utils'


if (!localStorage.getItem('user_token')) {
  localStorage.setItem('user_token', 'visitor')
}
  
let api = axios.create({
  baseURL: URL.split('"').join(''),
  timeout: 5000,
  headers: {
    'X-WEBAPP': 'visitor',
    'authorization': 'Bearer ' + localStorage.getItem('user_token'),
    'Content-Type': 'application/json'
  }
})

export default boot(({ app, store }) => {
  // Global variable
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api, axios }
