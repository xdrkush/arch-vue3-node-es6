import { defineStore } from 'pinia';
import jwt_decode from "jwt-decode";
import { api } from 'boot/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    loggedIn: false
  }),
  getters: {
    getLoggedIn: (state) => state.loggedIn,
  },
  actions: {
    async loginAuth(form) {
      console.log('Store Login', form)
      try {
        await api
          .put('/auth', { ...form })
          .then(res => {
            setTimeout(() => {
              let token = res.data.token;
              if (res.data.token) localStorage.setItem("user_token", token);

              const value_t = jwt_decode(token)
              if (value_t.loggedIn) this.loggedIn = value_t.loggedIn
              else this.loggedIn = false

              console.log('response getProfile', token, value_t)


            }, 500)
          })
      } catch (error) {
        return error
      }
    },
  },
});
