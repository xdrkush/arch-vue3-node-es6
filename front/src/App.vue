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
      <div v-if="authStore.getTokenExp && authStore.getLoggedIn">
        <ModalTokenExp />
      </div>
      <div v-if="authStore.getSoonSessionExpired && authStore.getLoggedIn">
        <ModalSession />
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProfileStore } from "./stores/profile.store";
import { useAuthStore } from "./stores/auth.store";
import ModalSession from "./components/auth/ModalSession.vue";
import ModalTokenExp from "./components/auth/ModalTokenExp.vue";

export default defineComponent({
  name: "App",
  components: { ModalSession, ModalTokenExp},
  setup() {
    const authStore = useAuthStore();
    const profileStore = useProfileStore();
    
    if (!profileStore.getProfileLoaded) profileStore.getProfileApi();
    authStore.getSession();

    setInterval(() => authStore.getSession(), 1 * 60 * 1000);

    return {
      profileStore,
      authStore,
    };
  },
});
</script>
