<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navbar -->
    <DynamicNavbar
      :switchDrawer="switchDrawer"
      :component="{
        title: 'navbarDefault',
        name: 'navbarDefault',
        type: 'navbarDefault',
      }"
      :profile="profileStore.getProfile"
      :pages="monitStore.getPages"
    />

    <!-- Sidebar -->
    <DynamicSidebar
      :drawer="drawer"
      :component="{
        title: 'sidebarDefault',
        name: 'sidebarDefault',
        type: 'sidebarDefault',
      }"
      :profile="profileStore.getProfile"
      :pages="monitStore.getPages"
    />
    <!-- <q-drawer
      v-model="drawer"
      :width="200"
      :breakpoint="500"
      overlay
      bordered
      class="lt-sm"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-btn
            :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
            :color="$q.dark.isActive ? 'accent' : 'dark'"
            class="q-mx-xs full-width q-ma-xs"
            rounded
            @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
          />

          <q-item-label header> {{ profileStore.getProfile.nameCompany }} </q-item-label>

          <q-item
            clickable
            tag="a"
            :to="'/p/' + page.name"
            :key="page"
            v-for="page in monitStore.getPages"
          >
            <q-item-section v-if="page.icon" avatar>
              <q-icon :name="page.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ page.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer> -->

    <!-- Button Social (Modules) -->
    <ButtonSocialFixedTop
      :active="true"
      :data="profileStore.getProfile.social"
      :config="{}"
    />

    <!-- Main (Body) -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <DynamicFooter
      :component="{
        title: 'footerDefault',
        name: 'footerDefault',
        type: 'footerDefault',
      }"
      :profile="profileStore.getProfile"
    />
    <!-- <q-footer>
      <q-toolbar class="row">
        <q-btn
          v-if="profileStore.getProfile.phone"
          class="q-ma-xs gt-sm"
          color="accent"
          :label="profileStore.getProfile.phone"
          icon="phone"
        />
        <q-btn
          v-if="profileStore.getProfile.phone"
          class="q-ma-xs lt-md"
          tag="a"
          :href="'tel:' + profileStore.getProfile.phone.replace('.', '')"
          color="accent"
          icon="phone"
        />

        <q-space />

        <div class="text-center">
          <p class="text-white q-ma-none">
            <strong>©️ 2022 Davroot Team ❤️</strong>
          </p>
          <p class="q-ma-none">Tous droits réservés</p>
        </div>

        <q-space />

        <q-btn
          v-if="profileStore.getProfile.mail"
          class="q-ma-xs gt-sm"
          color="accent"
          :label="profileStore.getProfile.mail"
          icon="mail"
          tag="a"
          :href="'mailto:' + profileStore.getProfile.mail"
        />
        <q-btn
          v-if="profileStore.getProfile.mail"
          class="q-ma-xs lt-md"
          color="accent"
          icon="mail"
          tag="a"
          :href="'mailto:' + profileStore.getProfile.mail"
        />
        <q-btn
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          :color="$q.dark.isActive ? 'accent' : 'dark'"
          class="q-mx-xs gt-xs"
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
        />
      </q-toolbar>
    </q-footer> -->
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

export default defineComponent({
  name: "MainLayout",

  components: {
    // Components
    DynamicNavbar,
    DynamicFooter,
    DynamicSidebar,
    // Modules
    ButtonSocialFixedTop
  },

  setup() {
    const monitStore = useMonitStore();
    const profileStore = useProfileStore();
    const router = useRouter();
    const drawer = ref(false)

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
