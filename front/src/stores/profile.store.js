import { defineStore } from 'pinia';
import { api } from 'boot/axios'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {
      name: "Hi, i'm Dr Kush,",
      mail: "drkushikush@protomail.com",
      phone: '+336XXXXXXXXX',
      description: "I'm a french Developper, i like the open-source project, & the hamburgers !"
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
              if (res.data.profile === true) this.profile = res.data.profile

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
