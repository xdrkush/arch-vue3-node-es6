<template>
  <div>
    <q-inner-loading
      :showing="!profileStore.getProfileLoaded "
      label="Chargement ..."
      label-class="text-primary"
      label-style="font-size: 1.5em"
    />
    <div
      v-if="profileStore.getProfileLoaded"
      v-show="profileStore.getProfileLoaded"
    >
      <!-- <div v-if="authStore.getProfile">
        {{}}
      </div> -->
      <!-- <div v-if="authStore.getTokenExp">
        <ModalTokenExp />
      </div>
      <div v-if="authStore.getSoonSessionExpired">
        <ModalSession />
      </div> -->
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProfileStore } from "./stores/profile.store";
import { useAuthStore } from "./stores/auth.store";
// import ModalSession from "./components/auth/ModalSession.vue";
// import ModalTokenExp from "./components/auth/ModalTokenExp.vue";

export default defineComponent({
  name: "App",
  components: { },
  setup() {
    const authStore = useAuthStore();
    const profileStore = useProfileStore();
    if (!profileStore.getProfileLoaded) profileStore.getProfileApi();

    // authStore.fetchIP();
    setTimeout(() => authStore.getSession(), 700);

    // console.log("APP", authStore.getLoggedIn);
    setInterval(() => authStore.getSession(), 1 * 60 * 1000);

    return {
      profileStore,
      authStore,
    };
  },
});
</script>
