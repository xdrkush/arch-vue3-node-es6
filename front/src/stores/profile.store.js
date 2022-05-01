import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {},
    profileLoaded: false
  }),
  getters: {
    getProfile: (state) => state.profile,
    getProfileLoaded: (state) => state.profileLoaded,
  },
  actions: {
    async getProfileApi() {
      try {
        await api
          .get('/profile')
          .then(res => {
            setTimeout(() => {
              // console.log('response getProfile', res.data.profile)
              if (res.data.profile) {
                this.profile = res.data.profile
                this.profileLoaded = true
              }
            }, 500)
          })
      } catch (error) {
        return error
      }
    },
    async editProfileApi(form) {
      try {
        await api
          .put('/profile', { ...form })
          .then(res => {
            setTimeout(() => {
              // console.log('response getProfile', res.data.profile)
              this.profile = res.data.profile
            }, 500)
          })
      } catch (error) {
        return error
      }
    },
  },
});
