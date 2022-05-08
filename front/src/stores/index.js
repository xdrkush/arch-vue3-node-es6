import { markRaw } from 'vue';
import { store } from 'quasar/wrappers'
import { createPinia } from 'pinia'
import { router } from '../router/index'
/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default store((/* { ssrContext } */) => {
  const pinia = createPinia()

  return pinia
})
