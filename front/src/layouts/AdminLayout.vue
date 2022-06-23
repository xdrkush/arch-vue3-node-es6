<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn
          flat dense round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title v-if="profileStore.getProfile.nameCompany">
          Admin :: {{ profileStore.getProfile.nameCompany }}
        </q-toolbar-title>

        <q-space />

        <q-btn
          label="recharger (F5)"
          icon="refresh"
          color="accent"
          class="q-mx-xs"
          disabled
          @click="forceToRefresh"
        />
        <q-btn
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          :color="$q.dark.isActive ? 'accent' : 'dark'"
          class="q-mx-xs"
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
        />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>
          Dashboard Admin :: <strong>{{ authStore.getUser.name }}</strong>
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref, watch, onMounted, beforeMount } from "vue";
import EssentialLink from "src/components/website/sidebars/EssentialLink.vue";
import { useAuthStore } from "../stores/auth.store";
import { useMonitStore } from "../stores/monit.store";
import { useProfileStore } from "../stores/profile.store";
import { useRouter } from "vue-router";

const linksList = [
  {
    title: "Home",
    caption: "home",
    icon: "visibility",
    link: "/",
  },
  {
    title: "Dashboard",
    caption: "Check your stats",
    icon: "apps",
    link: "/admin",
  },
  {
    title: "Profil",
    caption: "Edit your profil",
    icon: "person",
    link: "/admin/profil",
  },
  {
    title: "Article",
    caption: "Edit your article",
    icon: "add",
    link: "/admin/article",
  },
  {
    title: "Website",
    caption: "Edit your site",
    icon: "edit",
    link: "/admin/website",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const authStore = useAuthStore();
    const monitStore = useMonitStore();
    const profileStore = useProfileStore();
    const router = useRouter();
    const leftDrawerOpen = ref(false);

    onMounted(() => {
      if (!authStore.getLoggedIn) router.push({ path: "/auth/login" });
    })

    // Check isLoggedIn
    watch(
      () => authStore.getLoggedIn,
      (val) => {
        if (!authStore.getLoggedIn) router.push({ path: "/" });
      }
    );

    return {
      authStore,
      monitStore,
      profileStore,
      essentialLinks: linksList,
      leftDrawerOpen,
      forceToRefresh() {
        location.reload();
      },
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
