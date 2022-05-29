<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container class="row items-center justify-center text-center">
      <!-- Main -->

      <q-page-container>
        <router-view />
      </q-page-container>

      <!-- / Main -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "LandingLayout",

  components: {},

  setup() {
    return {};
  },
});
</script>
