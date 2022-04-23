<template>
  <router-view />
</template>

<script>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup () {
    const Router = useRouter();
    localStorage.setItem('landing', true)
    console.log('App', localStorage.getItem('landing'))
    Router.push('/landing')
    // if (localStorage.getItem('landing')) this.$router.push({ name: '/landing' })
    return {
      landing: true
    }
  }
})
</script>
