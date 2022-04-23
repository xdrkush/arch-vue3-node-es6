import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useTestStore = defineStore('monit', {
  state: () => ({
    landing: true
  }),
  getters: {
    getLanding: (state) => state.landing
  },
  actions: {
    testFn() {
      api.get('http://localhost:8088/api/landing').then(res => {
        console.log('landing response', res)
        this.landing = res.data.landing;
      })
    },
  },
});
