<template>
  <div>
    <q-inner-loading
      :showing="
        !profileStore.getProfile.nameCompany ||
        !monitStore.getPages ||
        !monitStore.getTheme.color ||
        !monitStore.getPage
      "
      label="Chargement..."
      label-style="font-size: 1.5em"
    />
    <div
      v-if="
        profileStore.getProfile.nameCompany &&
        monitStore.getPages &&
        monitStore.getTheme.color &&
        monitStore.getPage
      "
      v-show="profileStore.getProfile"
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
import { defineComponent, watch, ref, onMounted } from "vue";
import { useProfileStore } from "./stores/profile.store";
import { useAuthStore } from "./stores/auth.store";
import { useMonitStore } from "./stores/monit.store";
import ModalSession from "./components/auth/ModalSession.vue";
import ModalTokenExp from "./components/auth/ModalTokenExp.vue";
import { useMeta, useQuasar, setCssVar, createMetaMixin } from "quasar";
import meta from "./boot/meta.js";

export default defineComponent({
  name: "App",

  components: { ModalSession, ModalTokenExp },

  // mixins: [
  //   createMetaMixin(function () {
  //     return meta({
  //       title: "Davroot",
  //       description: "Ma super description ...",
  //       route: "Oops",
  //     });
  //   }),
  // ],

  setup() {
    const authStore = useAuthStore();
    const profileStore = useProfileStore();
    const monitStore = useMonitStore();
    const $q = useQuasar();

    onMounted(() => {
      profileStore.getProfileApi();
      authStore.getSession();
      monitStore.getPagesAPI();
      monitStore.getLandingStatus();
      console.log('onMounted APP', profileStore.getProfile.nameCompany)
      // Check Session
      setInterval(() => authStore.getSession(), 1 * 60 * 1000); // 1 minute
    });

    // Watch Darkmode
    watch(
      () => $q.dark.isActive,
      (val) => {
        // console.log(val ? "On dark mode" : "On light mode");
        $q.localStorage.set("darkmode", val);
      }
    );

    console.log("APP", monitStore.getTheme);

    // Meta Default
    useMeta(
      meta({
        title: "Title setup",
        description: "Description setup",
        route: "Oops",
      })
    );

    // Set theme with data on DB
    watch(
      () => monitStore.getTheme,
      (val) => {
        // console.log("W monitStore.getTheme", val, monitStore.getTheme, val.color.primary);
        setCssVar("primary", val.color.primary);
        setCssVar("secondary", val.color.secondary);
        setCssVar("accent", val.color.accent);
        setCssVar("positive", val.color.positive);
        setCssVar("negative", val.color.negative);
        setCssVar("warning", val.color.warning);
        setCssVar("info", val.color.info);
        setCssVar("dark", val.color.dark);
        setCssVar("light", val.color.light);
        setCssVar("bg-light", val.color.light);
        setCssVar("text-light", val.color.light);
        setCssVar("custom", val.color.custom);
      }
    );

    // Check status darkmode (reload)
    const storage_darkmode = $q.localStorage.getItem("darkmode") || false;
    $q.dark.set(storage_darkmode);

    return {
      // Store
      profileStore, authStore, monitStore,
    };
  },
});
</script>
