import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {
      name: false,
      mail: null,
      phone: null,
      description: null
    }
  }),
  getters: {
    getProfile: (state) => state.profile,
  },
  actions: {
    async getProfileApi() {
      try {
        await api
          .get('/profile')
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
