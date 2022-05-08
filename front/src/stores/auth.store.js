import { defineStore } from 'pinia';
import jwt_decode from "jwt-decode";
import { api } from 'boot/axios'
import axios from 'axios'
import { URL } from '../utils'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    hostLoaded: false,
    session: {},
    soonSessionExpired: false,
    ip: "",
    tokenExp: false
  }),
  getters: {
    getLoggedIn: (state) => state.loggedIn,
    getHostLoaded: (state) => state.hostLoaded,
    getIP: (state) => state.ip,
    getSoonSessionExpired: (state) => state.soonSessionExpired,
    getTokenExp: (state) => state.tokenExp
  },
  actions: {
    async loginAuth(form) {
      // console.log('Store Login', form)
      try {
        await api
          .put('/auth', { ...form })
          .then(res => {
            console.log('res login', res.data)
            const { token } = res.data;
            let value_t;

            if (res.data.token) {
              localStorage.setItem("user_token", token);
              value_t = jwt_decode(token)
            }
            if (value_t.auth) this.loggedIn = value_t.auth
            else this.loggedIn = false
          })
      } catch (error) {
        return error
      }
    },

    getSession() {
      console.log('store auth getsession 1')

      try {
        if (localStorage.getItem("user_token") === (undefined || 'undefined')) localStorage.setItem("user_token", "visitor")
        if (!localStorage.getItem("ip") || !localStorage.getItem('user_token')) {
          console.log('new visitor')

          axios.get(URL.split('"').join('') + '/session', {
            headers: {
              'X-WEBAPP': 'visitor',
              'authorization': localStorage.getItem('user_token'),
              'Content-Type': 'application/json'
            }
          }).then(res => {
            const { token } = res.data;
            localStorage.setItem('user_token', token);
            let decoded = jwt_decode(token);
            this.loggedIn = decoded.auth
            this.hostLoaded = true
            console.log('res.data.session 2.1', res.data, decoded)
          })

        } else if (localStorage.getItem("ip") && localStorage.getItem("user_token")) {
          console.log('old visitor')
          axios.get(URL.split('"').join('') + '/session', {
            headers: {
              'X-WEBAPP': 'visitor',
              'authorization': localStorage.getItem('user_token'),
              'Content-Type': 'application/json'
            }
          }).then(res => {
            const { token } = res.data
            let decoded;

            if (res.data.tokenExp) {
              this.tokenExp = res.data.tokenExp
              localStorage.removeItem('user_token')
            } else {
              localStorage.setItem('user_token', token)
              decoded = jwt_decode(token)
              this.loggedIn = decoded.auth
              this.soonSessionExpired = res.data.soonTokenExp
              this.hostLoaded = true
            }
            console.log('res.data.session 2.2', decoded)

          })
        }
      } catch (error) {
        return error
      }
    },

    logout() {
      try {
        axios.get(URL.split('"').join('') + '/logout', {
          headers: {
            'X-WEBAPP': 'visitor',
            'authorization': localStorage.getItem('user_token'),
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            console.log('res LOGOUT', res.data)
            if (res.data.success) {
              this.loggedIn = false
              localStorage.removeItem('user_token')
              localStorage.setItem('user_token', res.data.token)
            }
          })
      } catch (error) {
        throw error
      }
    },

    // extendSession() {
    //   try {
    //     api
    //       .get('/session')
    //       .then(res => {
    //         console.log('response extend session', res.data)
    //         localStorage.setItem('user_token', res.data.session.token)
    //         this.soonSessionExpired = res.data.soonTokenExp
    //         this.hostLoaded = true
    //       })
    //   } catch (error) {
    //     return error
    //   }
    // }
  },
});

