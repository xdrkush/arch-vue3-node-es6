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
    getSessionUx: (state) => state.session,
    getLoggedIn: (state) => state.loggedIn,
    getHostLoaded: (state) => state.hostLoaded,
    getIP: (state) => state.ip,
    getSoonSessionExpired: (state) => state.soonSessionExpired,
    getTokenExp: (state) => state.tokenExp
  },
  actions: {
    loginAuth(form) {
      try {
        api.put('/auth', { ...form })
          .then(res => {
            // console.log('res login', res.data)
            const { token } = res.data;
            let decoded;

            if (token) {
              localStorage.setItem("user_token", token);
              decoded = jwt_decode(token)
            }
            if (decoded.auth) {
              this.loggedIn = decoded.auth
            } else {
              this.loggedIn = false
              window.reload()
            }
          })
      } catch (error) {
        return error
      }
    },

    getSession() {
      try {
        if (!localStorage.getItem("user_token")) {
          localStorage.setItem("user_token", "visitor")
        }
        // if (!localStorage.getItem("ip") || !localStorage.getItem('user_token')) {
        let ls_token = localStorage.getItem('user_token')

        api.get('/session', {
          headers: {
            'X-WEBAPP': 'visitor',
            'authorization': "Bearer " + ls_token,
            'Content-Type': 'application/json'
          }
        }).then(res => {
          const { token, soonTokenExp } = res.data;
          localStorage.setItem('user_token', (token) ? token : 'visitor');
          let decoded = jwt_decode(token);

          this.soonSessionExpired = soonTokenExp

          if (res.data.tokenExp && decoded.auth) {
            this.tokenExp = res.data.tokenExp
          } else if (token && decoded.auth) {
            this.loggedIn = decoded.auth
            this.session = decoded
            this.hostLoaded = true
          }
        })
      } catch (error) {
        return error
      }
    },

    logout() {
      try {
        api.get('/logout', {
          headers: {
            'X-WEBAPP': 'visitor',
            'authorization': "Bearer " + localStorage.getItem('user_token'),
            'Content-Type': 'application/json'
          }
        })
          .then(res => {
            // console.log('res LOGOUT', res.data)
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

    extendSession() {
      // console.log('extendSession store')
      try {
        api
          .get('/extendsession')
          .then(res => {
            const { token, soonTokenExp } = res.data
            // console.log('response extend session', res.data)
            localStorage.setItem('user_token', token)
            this.soonSessionExpired = soonTokenExp
            this.hostLoaded = true
          })
      } catch (error) {
        return error
      }
    }
  },
});

