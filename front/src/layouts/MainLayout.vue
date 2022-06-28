<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navbar -->
    <DynamicNavbar
      :switchDrawer="switchDrawer"
      :component="monitStore.getTheme.navbar"
      :profile="profileStore.getProfile"
      :pages="monitStore.getPages"
      :demo="false"
    />

    <!-- Sidebar -->
    <DynamicSidebar
      :drawer="drawer"
      :component="monitStore.getTheme.sidebar"
      :profile="profileStore.getProfile"
      :pages="monitStore.getPages"
      :demo="false"
    />

    <!-- Button Social (Modules) -->
    <ButtonSocialFixedTop
      v-if="monitStore.getTheme.modules.ButtonSocialFixedTop.actived"
      :data="profileStore.getProfile.social"
      :config="{}"
    />

    <!-- Button Back To Top (Modules) -->
    <ButtonBackToTop
      v-if="monitStore.getTheme.modules.ButtonBackToTop.actived"
      :config="{}"
    />

    <!-- Main (Body) -->
    <q-page-container>
      <!-- Banner Message (Modules) -->
      <BannerMessage
        v-if="monitStore.getTheme.modules.BannerMessage.actived"
        :data="monitStore.getTheme.modules.BannerMessage"
        :config="{}"
      />

      <router-view />
    </q-page-container>

    <!-- Footer -->
    <DynamicFooter
      :component="monitStore.getTheme.footer"
      :profile="profileStore.getProfile"
      :demo="false"
    />
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { useMonitStore } from "src/stores/monit.store";
import { useProfileStore } from "src/stores/profile.store";
import { useRouter } from "vue-router";
import { arrayObjEnt } from "../utils";
import DynamicNavbar from "../components/website/navbars/DynamicNavbar.vue";
import DynamicFooter from "../components/website/footers/DynamicFooter.vue";
import DynamicSidebar from "../components/website/sidebars/DynamicSidebar.vue";
import ButtonSocialFixedTop from "../modules/ButtonSocialFixedTop.vue";
import ButtonBackToTop from "../modules/ButtonBackToTop.vue";
import BannerMessage from "../modules/BannerMessage.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    // Components
    DynamicNavbar,
    DynamicFooter,
    DynamicSidebar,
    // Modules
    ButtonSocialFixedTop,
    ButtonBackToTop,
    BannerMessage,
  },

  setup() {
    const monitStore = useMonitStore();
    const profileStore = useProfileStore();
    const router = useRouter();
    const drawer = ref(false);

    onMounted(() => {
      if (monitStore.getLanding) router.push({ path: "/landing" });
    });

    return {
      // Local
      drawer,
      switchDrawer() {
        console.log("SwitchDrawer", drawer.value);
        drawer.value = !drawer.value;
      },
      arrayObjEnt,
      // Store
      monitStore,
      profileStore,
    };
  },
});
</script>
