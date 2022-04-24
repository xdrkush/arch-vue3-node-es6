import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useTestStore = defineStore('test', {
  state: () => ({
    title: ""
  }),
  getters: {
    getTitle: (state) => state.title
  },
  actions: {
    testFn() {
      api.get('/').then(res => {
        console.log('response', res)
        this.title = res.data.message;
      })
    },
  },
});
