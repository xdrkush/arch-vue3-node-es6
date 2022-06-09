import { defineStore } from 'pinia';
import { api } from 'boot/axios'
import axios from 'axios';
import { URL } from '../utils'

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {},
    profileLoaded: false,
    ip: ''
  }),
  getters: {
    getProfile: (state) => state.profile,
    getProfileLoaded: (state) => state.profileLoaded,
    getIP: (state) => state.ip,
  },
  actions: {
    async getProfileApi() {
      const ls_token = localStorage.getItem('user_token')
      try {
        await axios
          .get(URL.split('"').join('') + '/profile', {
            headers: {
              'X-WEBAPP': 'visitor',
              'Authorization': "Bearer " + ls_token,
              'Content-Type': 'application/json'
            }
          }).then(res => {
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
