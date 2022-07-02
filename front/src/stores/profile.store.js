import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {},
    sessions: [],
    session: {},
    chart: {}
  }),
  getters: {
    getProfile: (state) => state.profile,
    getSessions: (state) => state.sessions,
    getSession: (state) => state.session,
    getChart: (state) => state.chart,
  },
  actions: {
    getProfileApi() {
      try {
        return new Promise(async (resolve, reject) => {
          const res = await api.get('/profile')
          if (res.data.profile) {
            this.profile = res.data.profile
          }
          resolve(res.data.profile)
        })
      } catch (error) {
        return error
      }
    },

    editProfileApi(form) {
      try {
        api
          .put('/profile', { ...form })
          .then(res => {
            setTimeout(() => {
              // console.log('response getProfile', res.data.profile)
              this.profile = res.data.profile
            }, 500)
          }).catch(err => {
            // console.log('fzefezg')
            // console.log(err)
          })
      } catch (error) {
        return error
      }
    },

    async getSessionsAPI() {
      try {
        const res = await api.get('/sessions')
        this.sessions = res.data.dbSessions
        this.session = res.data.session
      } catch (error) {
        return error
      }
    },

    async getSessionsWithDelayAPI(delay) {
      try {
        const res = await api.get('/sessions/' + delay)
        // console.log('res, getSessionWithDelay', res)
        this.chart = res.data.chart
      } catch (error) {
        return error
      }

    },
  },
});
