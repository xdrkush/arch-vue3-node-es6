import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { URL } from '../utils'
import { LocalStorage } from 'quasar'

let ls_token = LocalStorage.getItem('user_token')

// console.log('BOOT axios', LocalStorage.getItem('user_token'), ls_token)

if (ls_token === 'null' || ls_token ===  null) {
  // console.log('set token axios')
  LocalStorage.set('user_token', 'visitor')
  ls_token = 'visitor'
}


let api = axios.create({
  baseURL: URL.split('"').join(''),
  timeout: 4500,
  headers: {
    'X-WEBAPP': 'visitor',
    'authorization': 'Bearer ' + ls_token,
    'Content-Type': 'application/json',
  },
  withCredentials: true,
})

export default boot(({ app, store }) => {
  // Global variable
  app.config.globalProperties.$axios = axios
  app.config.globalProperties.$api = api
})

export { api, axios }
