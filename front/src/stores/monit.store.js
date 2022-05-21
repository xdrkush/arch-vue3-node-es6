import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useMonitStore = defineStore('monit', {
  state: () => ({
    load: false,
    landing: true,
    pages: [
      { name: 'home', icon: 'home', title: 'home page', description: 'Ma super description page home' },
      { name: 'contact', icon: 'phone', title: 'contact page', description: 'Ma super description page contact' }
    ]
  }),
  getters: {
    getLoad: (state) => state.load,
    getLanding: (state) => state.landing,
    getPages: (state) => state.pages
  },
  actions: {
    async getLandingStatus() {
      try {
        await api
          .get('/landing')
          .then(res => {
            console.log('response getLandingStatus', res.data.landing)
            this.landing = res.data.landing
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async editStatusLanding(bool) {
      console.log('bool', bool)
      try {
        await api
          .put('/landing', { landing: bool })
          .then(res => {
            console.log('response editStatusLanding', res.data.landing)
            this.landing = res.data.landing
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async getPagesAPI(form) {
      console.log('create page', form)
      try {
        await api
          .get('/pages', { page: form })
          .then(res => {
            console.log('response get Pages', res.data.landing)
            this.pages = res.data.dbPages
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async createPage(form) {
      console.log('create page', form)
      try {
        await api
          .post('/page', { page: form })
          .then(res => {
            console.log('response create Page', res.data.landing)
            this.pages = res.data.dbPages
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async editPage(form) {
      console.log('edit page', form)
      try {
        await api
          .put('/page', { page: form })
          .then(res => {
            console.log('response edit Page', res.data.landing)
            // this.pages = res.data.dbPages
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
  },
});
