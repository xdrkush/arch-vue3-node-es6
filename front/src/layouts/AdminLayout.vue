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

        <q-toolbar-title> Quasar App </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Essential Links </q-item-label>

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

const linksList = [
  {
    title: "Home",
    caption: "home",
    icon: "code",
    link: "/",
  },
  {
    title: "Dashboard",
    caption: "Check your stats",
    icon: "code",
    link: "/admin",
  },
  {
    title: "Profil",
    caption: "Edit your profil",
    icon: "code",
    link: "/admin/profil",
  },
  {
    title: "Article",
    caption: "Edit your article",
    icon: "code",
    link: "/admin/article",
  },
  {
    title: "Website",
    caption: "Edit your site",
    icon: "code",
    link: "/admin/website",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
    };
  },
});
</script>
