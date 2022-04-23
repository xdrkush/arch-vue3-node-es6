import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useMonitStore = defineStore('monit', {
  state: () => ({
    load: false,
    landing: null
  }),
  getters: {
    getLoad: (state) => state.load,
    getLanding: (state) => state.landing
  },
  actions: {
    async getLandingStatus() {
      try {
        await api
          .get('http://localhost:8088/api/landing')
          .then(res => {
            setTimeout(() => {
              console.log('response getLandingStatus', res.data.landing)
              this.landing = res.data.landing
              this.load = true
            }, 500)
          })
      } catch (error) {
        return error
      }
    },
  },
});
