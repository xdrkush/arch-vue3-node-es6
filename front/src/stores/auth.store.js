import { defineStore } from 'pinia';
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
          .post('/auth', { ...form })
          .then(res => {
            setTimeout(() => {
              console.log('response getProfile', res.data)
              this.loggedIn = res.data.loggedIn
            }, 500)
          })
      } catch (error) {
        return error
      }
    },
  },
});
