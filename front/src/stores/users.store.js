import { defineStore } from 'pinia';
import jwt_decode from "jwt-decode";
import { api } from 'boot/axios'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    checkPasswordAccount: false,
    checkPasswordEditPassword: false,
  }),
  getters: {
    getUser: (state) => state.user,
    getCheckPasswordAccount: (state) => state.checkPasswordAccount,
    getCheckPasswordEditPassword: (state) => state.checkPasswordEditPassword,
  },
  actions: {
    async editAccountUserApi(form) {
      // console.log('editAccountUserApi', form)
      try {
        await api
          .post('/account', { ...form })
          .then(res => {
            setTimeout(() => {
              // console.log('response editAccountUserApi', res.data)
            }, 500)
          })
      } catch (error) {
        return error
      }
    },
    async checkPasswordEditAccountApi(form) {
      // console.log('STORE checkPassword', form)
      try {
        await api
          .put('/check/password', { ...form })
          .then(res => {
            setTimeout(() => {
              // console.log('response editPasswordUserApi', res.data)
              this.checkPasswordAccount = res.data.checked
            }, 500)
          })
      } catch (error) {
        return error
      }
    },
    async checkPasswordEditPasswordApi(form) {
      // console.log('STORE checkPassword', form)
      try {
        await api
          .put('/check/password', { ...form })
          .then(res => {
            setTimeout(() => {
              // console.log('response editPasswordUserApi', res.data)
              this.checkPasswordEditPassword = res.data.checked
            }, 500)
          })
      } catch (error) {
        return error
      }
    },
    async editPasswordUserApi(form) {
      // console.log('editPasswordUserApi', form)
      try {
        await api
          .put('/account', { ...form })
          .then(res => {
            setTimeout(() => {
              // console.log('response editPasswordUserApi', res.data)
            }, 500)
          })
      } catch (error) {
        return error
      }
    },
  },
});
