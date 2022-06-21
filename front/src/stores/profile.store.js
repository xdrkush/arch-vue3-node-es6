import { defineStore } from 'pinia';
import { api } from 'boot/axios'
import axios from 'axios';
import { URL } from '../utils'
import { LocalStorage } from 'quasar';

export const useProfileStore = defineStore('profile', {
  state: () => ({
    profile: {},
  }),
  getters: {
    getProfile: (state) => state.profile
  },
  actions: {
    async getProfileApi() {
      try {
        const res = await api.get('/profile')
        // .then(res => {
        // setTimeout(() => {
        console.log('response getProfile', res.data.profile)
        if (res.data.profile) {
          this.profile = res.data.profile
        }
        // }, 500)
        // }).catch(err => {
        // console.log('fzefezg')
        // console.log(err)
        // })
      } catch (error) {
        return error
      }
    },
    // getProfileApi() {
    //   return new Promise((resolve, reject) => {
    //     api
    //       .get('/profile')
    //       .then(res => {
    //         if (res.data.profile) {
    //           this.profile = res.data.profile
    //           this.profileLoaded = true
    //           resolve(res.data.profile)
    //         }
    //       }).catch(err => {
    //         reject(err)
    //       })
    //   })
    // },
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
  },
});
