import { defineStore } from 'pinia';
import jwt_decode from "jwt-decode";
import { api } from 'boot/axios'
import { LocalStorage } from 'quasar';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false,
    hostLoaded: false,
    session: {},
    user: {},
    soonSessionExpired: false,
    tokenExp: false
  }),
  getters: {
    getSessionUx: (state) => state.session,
    getLoggedIn: (state) => state.loggedIn,
    getHostLoaded: (state) => state.hostLoaded,
    getSoonSessionExpired: (state) => state.soonSessionExpired,
    getTokenExp: (state) => state.tokenExp,
    getUser: (state) => state.user
  },
  actions: {
    loginAuth(form) {
      try {
        api.put('/auth', { ...form })
          .then(res => {
            console.log('res login 1', res.data)
            const { token } = res.data;
            let decoded;

            if (token) {
              console.log('res login 2', res.data)
              LocalStorage.set("user_token", token);
              decoded = jwt_decode(token)
            }

            if (decoded.auth) {
              console.log('res login 3', decoded)
              this.loggedIn = decoded.auth
              this.user.name = decoded.name
              this.session = decoded
            } else {
              console.log('res login 4')
              this.loggedIn = false
            }

          }).catch(err => { })
      } catch (err) {
        console.error(err);
      }
    },

    async getSession() {
      try {
        // if (!LocalStorage.getItem("user_token")) {
        //   LocalStorage.set("user_token", "visitor")
        // }

        // console.log('before api getSession', api)

        const res = await api.get('/session')
        const { token, soonTokenExp, tokenExp } = res.data;

        LocalStorage.set('user_token', (token) ? token : 'visitor');
        let decoded = jwt_decode(token);

        console.log('session', res.data)

        if (soonTokenExp) this.soonSessionExpired = soonTokenExp

        if (tokenExp === true) {
          console.log('res session token expired')
          this.tokenExp = tokenExp
          this.loggedIn = false
          this.session = decoded
          this.hostLoaded = true
        } else if (token && decoded.auth) {
          console.log('res session token not expired')
          this.user.name = decoded.name
          this.loggedIn = decoded.auth
          this.session = decoded
          this.hostLoaded = true
        }

      } catch (error) {
        return error
      }
    },

    logout() {
      try {
        api.get('/logout')
          .then(res => {
            // console.log('res LOGOUT', res.data)
            if (res.data.success) {
              this.loggedIn = false
              LocalStorage.removeItem('user_token')
              LocalStorage.set('user_token', res.data.token)
            }
          }).catch(err => { })
      } catch (err) {
        throw error
      }
    },

    async extendSession() {
      // console.log('extendSession store')
      try {
        const res = await api.get('/extendsession')
        const { token } = res.data
        console.log('response extend session', res.data)
        LocalStorage.set('user_token', token)
      } catch (err) {
        console.error(err);
      }
    }
  },
});

