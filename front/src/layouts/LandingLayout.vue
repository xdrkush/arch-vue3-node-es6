<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer elevated>
      <q-toolbar class="glossy text-center">
        <q-toolbar-title
          >Écrivez-moi: {{ profileStore.profile.mail }}
          <q-icon name="mail" />
        </q-toolbar-title>
        <q-toolbar-title
          >Appellez-moi: {{ profileStore.profile.phone }}
          <q-icon name="phone" />
        </q-toolbar-title>
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
import LandingPage from "../pages/website/LandingPage.vue";
import { useProfileStore } from "../stores/profile.store";
export default defineComponent({
  name: "LandingLayout",

  components: {
    LandingPage,
  },

  setup() {
    const profileStore = useProfileStore();
    return {
      profileStore,
    };
  },
});
</script>
