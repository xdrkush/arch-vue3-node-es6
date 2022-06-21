import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useMonitStore = defineStore('monit', {
  state: () => ({
    load: false,
    landing: null,
    theme: {},
    page: {},
    pages: [],
    sections: []
  }),
  getters: {
    getLoad: (state) => state.load,
    getLanding: (state) => state.landing,
    getPages: (state) => state.pages,
    getPage: (state) => state.page,
    getTheme: (state) => state.theme
  },
  actions: {
    async getLandingStatus() {
      try {
        const res = await api.get('/landing')
        // console.log('res getLandingStatus', res)
        // .then(res => {
        // console.log('response getLandingStatus', res.data.landing)
        this.landing = res.data.landing;
        this.theme = res.data.theme;
        this.load = true;
        // })
        // .catch(e => { })
      } catch (error) {
        return error
      }
    },

    editStatusLanding(bool) {
      // console.log('bool', bool)
      try {
        api
          .put('/landing', { landing: bool })
          .then(res => {
            // console.log('response editStatusLanding', res.data.landing)
            this.landing = res.data.landing
            this.load = true
          })
          .catch(e => { })
      } catch (error) {
        return error
      }
    },

    editThemeAPI(form) {
      // console.log('edit theme', form)
      try {
        api
          .put('/theme', { theme: form })
          .then(res => {
            // console.log('response edit theme', res.data)
            this.theme = res.data.dbTheme
            this.load = true
          })
          .catch(e => { })
      } catch (error) {
        return error
      }
    },

    async getPagesAPI() {
      // console.log('get pages store')
      try {
        const res = await api.get('/pages')
        // .then(res => {
        // console.log('response get Pages', res)
        this.pages = res.data.dbPages
        this.load = true
        // })
        // .catch(e => { })
      } catch (error) {
        return error
      }
    },

    async getPageAPI(name) {
      // console.log('get page store', (new RegExp("[a-zA]").test(name)), name)
      if (!new RegExp("[a-zA]").test(name)) name = "home"
      try {
        const res = await api.get(`/page/${name}`)
        // .then(res => {
        // console.log('response get Page', res)
        this.page = res.data.dbPage
        this.load = true
        // })
        // .catch(e => { })
      } catch (error) {
        return error
      }
    },

    createPage(form) {
      // console.log('create page', form)
      try {
        api
          .post('/page', { page: form })
          .then(res => {
            // console.log('response create Page', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
          .catch(e => { })
      } catch (error) {
        return error
      }
    },
    editPage(form) {
      // console.log('edit page', form)
      try {
        api
          .put('/page', { page: form })
          .then(res => {
            // console.log('response edit Page', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
          .catch(e => { })
      } catch (error) {
        return error
      }
    },
    deletePage(form) {
      // console.log('delete page', form)
      try {
        api
          .delete('/page/' + form.oldName)
          .then(res => {
            // console.log('response delete Page', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
          .catch(e => { })
      } catch (error) {
        return error
      }
    },
    editSection(form) {
      // console.log('edit section', form)
      try {
        api
          .put('/section', { page: form.page, section: form.section })
          .then(res => {
            // console.log('response edit Section', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
          .catch(e => { })
      } catch (error) {
        return error
      }
    },
    getSectionsAPI() {
      // console.log('get sections')
      try {
        api
          .get('/sections')
          .then(res => {
            // console.log('response get Sections', res.data)
            this.pages = res.data.dbPages
            this.sections = res.data.dbSections
            this.load = true
          })
          .catch(e => { })
      } catch (error) {
        return error
      }
    },
    addSectionToPage(form) {
      // console.log('add section to page', form)
      try {
        api
          .post('/sectiontopage', { page: form.page, section: form.section })
          .then(res => {
            // console.log('response add section to Page', res.data.landing)
            this.pages = res.data.dbPages
            this.sections = res.data.dbSections
            this.load = true
          })
          .catch(e => { })
      } catch (error) {
        return error
      }
    },
    deleteSectionToPage(form) {
      // console.log('delete section', form)
      try {
        api
          .put('/sectiontopage', { page: form.page, section: form.section })
          .then(res => {
            // console.log('response delete Section to page', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
          .catch(e => { })
      } catch (error) {
        return error
      }
    },
    editOrderSectionPage(page) {
      try {
        api
          .put('/ordersectiontopage', { page })
          .then(res => {
            // console.log('response order sections to page', res.data)
            // this.pages = res.data.dbPages
            this.load = true
          })
          .catch(e => { })
      } catch (error) {
        return error
      }
    }
  },
});
