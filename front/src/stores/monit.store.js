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
        this.landing = res.data.landing;
        this.theme = res.data.theme;
        this.load = true;
      } catch (error) {
        return error
      }
    },

    async editStatusLanding(bool) {
      try {
        const res = await api.put('/landing', { landing: bool })
        this.landing = res.data.landing
        this.load = true
      } catch (error) {
        return error
      }
    },

    async editThemeAPI(form) {
      try {
        const res = await api.put('/theme', { theme: form })
        this.theme = res.data.dbTheme
        this.load = true
      } catch (error) {
        return error
      }
    },

    async getPagesAPI() {
      try {
        const res = await api.get('/pages')
        this.pages = res.data.dbPages
        this.load = true
      } catch (error) {
        return error
      }
    },

    async getPageAPI(name) {
      if (!new RegExp("[a-zA]").test(name)) name = "home"
      try {
        const res = await api.get(`/page/${name}`)
        this.page = res.data.dbPage
        this.load = true
      } catch (error) {
        return error
      }
    },

    async createPage(form) {
      try {
        const res = api.post('/page', { page: form })
        this.pages = res.data.dbPages
        this.load = true
      } catch (error) {
        return error
      }
    },
    async editPage(form) {
      try {
        const res = api.put('/page', { page: form })
        this.pages = res.data.dbPages
        this.load = true
      } catch (error) {
        return error
      }
    },
    async deletePage(form) {
      try {
        const res = api.delete('/page/' + form.oldName)
        this.pages = res.data.dbPages
        this.load = true
      } catch (error) {
        return error
      }
    },
    async editSection(form) {
      try {
        const res = api.put('/section', { page: form.page, section: form.section })
        this.pages = res.data.dbPages
        this.load = true
      } catch (error) {
        return error
      }
    },
    async getSectionsAPI() {
      try {
        const res = api.get('/sections')
        this.pages = res.data.dbPages
        this.sections = res.data.dbSections
        this.load = true
      } catch (error) {
        return error
      }
    },
    async addSectionToPage(form) {
      try {
        const res = await api.post('/sectiontopage', { page: form.page, section: form.section })
        this.pages = res.data.dbPages
        this.sections = res.data.dbSections
        this.load = true
      } catch (error) {
        return error
      }
    },
    async deleteSectionToPage(form) {
      try {
        await api.put('/sectiontopage', { page: form.page, section: form.section })
        this.pages = res.data.dbPages
        this.load = true
      } catch (error) {
        return error
      }
    },
    async editOrderSectionPage(page) {
      try {
        await api.put('/ordersectiontopage', { page })
        this.load = true
      } catch (error) {
        return error
      }
    },
  },
});
