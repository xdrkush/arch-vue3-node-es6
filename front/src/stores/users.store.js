import { defineStore } from 'pinia';
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
    editAccountUserApi(form) {
      // console.log('editAccountUserApi', form)
      try {
        api
          .post('/account', { ...form })
          .then(res => {
            setTimeout(() => {
              // console.log('response editAccountUserApi', res.data)
            }, 500)
          })
          .catch(e => console.log(e))
      } catch (error) {
        return error
      }
    },
    checkPasswordEditAccountApi(form) {
      // console.log('STORE checkPassword', form)
      try {
        api
          .put('/check/password', { ...form })
          .then(res => {
            setTimeout(() => {
              // console.log('response editPasswordUserApi', res.data)
              this.checkPasswordAccount = res.data.checked
            }, 500)
          })
          .catch(e => console.log(e))
      } catch (error) {
        return error
      }
    },
    checkPasswordEditPasswordApi(form) {
      // console.log('STORE checkPassword', form)
      try {
        api
          .put('/check/password', { ...form })
          .then(res => {
            setTimeout(() => {
              // console.log('response editPasswordUserApi', res.data)
              this.checkPasswordEditPassword = res.data.checked
            }, 500)
          })
          .catch(e => console.log(e))
      } catch (error) {
        return error
      }
    },
    editPasswordUserApi(form) {
      // console.log('editPasswordUserApi', form)
      try {
        api
          .put('/account', { ...form })
          .then(res => {
            setTimeout(() => {
              // console.log('response editPasswordUserApi', res.data)
            }, 500)
          })
          .catch(e => console.log(e))
      } catch (error) {
        return error
      }
    },
  },
});
