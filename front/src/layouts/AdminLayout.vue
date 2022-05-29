<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Admin :: {{ profileStore.getProfile.nameCompany }}
        </q-toolbar-title>

        <q-space />

        <q-btn
          label="recharger (F5)"
          icon="refresh"
          color="accent"
          class="q-mx-xs"
          @click="forceToRefresh"
        />
        <q-btn
          :icon="($q.dark.isActive) ? 'light_mode' : 'dark_mode'"
          :color="$q.dark.isActive ? 'accent' : 'dark'"
          class="q-mx-xs"
          @click="($q.dark.isActive) ? $q.dark.set(false) : $q.dark.set(true)"
        />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header> Dashboard Admin </q-item-label>

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
import { defineComponent, ref } from "vue";
import EssentialLink from "src/components/website/EssentialLink.vue";
import { useAuthStore } from "../stores/auth.store";
import { useMonitStore } from "../stores/monit.store";
import { useProfileStore } from "../stores/profile.store";
import { setCssVar } from "quasar";

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

    const leftDrawerOpen = ref(false);
    const theme = ref(monitStore.getTheme);

    monitStore.getLandingStatus();

    setCssVar("primary", theme.value.color.primary);
    setCssVar("secondary", theme.value.color.secondary);
    setCssVar("accent", theme.value.color.accent);
    setCssVar("positive", theme.value.color.positive);
    setCssVar("negative", theme.value.color.negative);
    setCssVar("warning", theme.value.color.warning);
    setCssVar("info", theme.value.color.info);
    setCssVar("dark", theme.value.color.dark);
    setCssVar("light", theme.value.color.light);
    setCssVar("secondary", theme.value.color.secondary);

    return {
      authStore, monitStore, profileStore,
      essentialLinks: linksList,
      leftDrawerOpen,
      forceToRefresh() {
        location.reload();
      },
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
    };
  },
});
</script>
