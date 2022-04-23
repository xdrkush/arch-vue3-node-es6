<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer elevated>
      <q-toolbar class="glossy">
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container class="row items-center justify-center text-center">
      <!-- Main -->

      <LandingPage />

      <!-- / Main -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import LandingPage from '../pages/website/LandingPage.vue'

export default defineComponent({
  name: "LandingLayout",

  components: {
    LandingPage
  },

  setup() {
    return {
    };
  },
});
</script>
