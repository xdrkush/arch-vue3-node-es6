import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useMonitStore = defineStore('monit', {
  state: () => ({
    load: false,
    landing: null,
    theme: {
      color: {
        accent: "#9a63d4",
        dark: "#150429",
        info: "#5b868f",
        light: "#206b62",
        negative: "#8a0a19",
        positive: "#1e8f38",
        primary: "#3d2c4d",
        secondary: "#efebf5",
        warning: "#b39952"
      },
      icon: {
        name: '',
        path: ''
      }
    },
    page: {
      name: 'home', icon: 'home', title: 'home page', description: 'Ma super description page home', sections: [
        { name: 'header', title: "header", description: "Ma Description Header" },
        { name: 'list', title: "list", description: "Ma Description List" },
      ]
    },
    pages: [
      {
        name: 'home', icon: 'home', title: 'home page', description: 'Ma super description page home', sections: [
          { name: 'header', title: "header", description: "Ma Description Header" },
          { name: 'list', title: "list", description: "Ma Description List" },
        ]
      },
      { name: 'contact', icon: 'phone', title: 'contact page', description: 'Ma super description page contact' }
    ],
    sections: [
      { name: 'header', title: "header", description: "Ma Description Header" },
      { name: 'list', title: "list", description: "Ma Description List" },
    ]
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
        await api
          .get('/landing')
          .then(res => {
            // console.log('response getLandingStatus', res.data.landing)
            this.landing = res.data.landing;
            this.theme = res.data.theme;
            this.load = true;
          })
      } catch (error) {
        return error
      }
    },
    async editStatusLanding(bool) {
      // console.log('bool', bool)
      try {
        await api
          .put('/landing', { landing: bool })
          .then(res => {
            // console.log('response editStatusLanding', res.data.landing)
            this.landing = res.data.landing
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async editThemeAPI(form) {
      // console.log('edit theme', form)
      try {
        await api
          .put('/theme', { theme: form })
          .then(res => {
            // console.log('response edit theme', res.data)
            this.theme = res.data.dbTheme
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async getPagesAPI() {
      // console.log('get pages store')
      try {
        await api
          .get('/pages')
          .then(res => {
            // console.log('response get Pages', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async getPageAPI(name) {
      // console.log('get page store', (new RegExp("[a-zA]").test(name)), name)
      if (!new RegExp("[a-zA]").test(name)) name = "home"
      try {
        await api
          .get('/page/' + name)
          .then(res => {
            // console.log('response get Page', res.data)
            this.page = res.data.dbPage
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async createPage(form) {
      // console.log('create page', form)
      try {
        await api
          .post('/page', { page: form })
          .then(res => {
            console.log('response create Page', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async editPage(form) {
      // console.log('edit page', form)
      try {
        await api
          .put('/page', { page: form })
          .then(res => {
            // console.log('response edit Page', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async deletePage(form) {
      // console.log('delete page', form)
      try {
        await api
          .delete('/page/' + form.oldName)
          .then(res => {
            // console.log('response delete Page', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async editSection(form) {
      // console.log('edit section', form)
      try {
        await api
          .put('/section', { page: form.page, section: form.section })
          .then(res => {
            // console.log('response edit Section', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async getSectionsAPI() {
      // console.log('get sections')
      try {
        await api
          .get('/sections')
          .then(res => {
            // console.log('response get Sections', res.data)
            this.pages = res.data.dbPages
            this.sections = res.data.dbSections
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async addSectionToPage(form) {
      // console.log('add section to page', form)
      try {
        await api
          .post('/sectiontopage', { page: form.page, section: form.section })
          .then(res => {
            // console.log('response add section to Page', res.data.landing)
            this.pages = res.data.dbPages
            this.sections = res.data.dbSections
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async deleteSectionToPage(form) {
      // console.log('delete section', form)
      try {
        await api
          .put('/sectiontopage', { page: form.page, section: form.section })
          .then(res => {
            // console.log('response delete Section to page', res.data)
            this.pages = res.data.dbPages
            this.load = true
          })
      } catch (error) {
        return error
      }
    },
    async editOrderSectionPage(page) {
      try {
        await api
          .put('/ordersectiontopage', { page })
          .then(res => {
            console.log('response order sections to page', res.data)
            // this.pages = res.data.dbPages
            this.load = true
          })
      } catch (error) {
        return error
      }
    }
  },
});
