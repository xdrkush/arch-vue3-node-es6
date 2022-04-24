<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="row items-center justify-center text-center">
      <!-- Main -->

      <LandingPage />

      <!-- / Main -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import LandingPage from "../pages/website/LandingPage.vue";

export default defineComponent({
  name: "LandingLayout",

  components: {
    LandingPage,
  },

  setup() {
    return {};
  },
});
</script>
