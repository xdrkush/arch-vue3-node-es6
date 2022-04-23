<template>
  <q-layout view="lHh Lpr lFf">
    <q-footer elevated>
      <q-toolbar class="glossy">
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <q-page-container>
      <!-- Main -->
      <img :src="UnicornCircle" alt="my-logo" />


      <!-- / Main -->
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import UnicornCircle from "../assets/Unicorn-circle.svg";

// import EssentialLink from "components/website/EssentialLink.vue";
import { useTestStore } from "../stores/test.store";

const linksList = [
  {
    title: "Home",
    caption: "home",
    icon: "code",
    link: "/",
  },
  {
    title: "Article",
    caption: "Article",
    icon: "code",
    link: "/article",
  },
  {
    title: "Contact",
    caption: "Contact",
    icon: "code",
    link: "/contact",
  },
  {
    title: "Login",
    caption: "authentification",
    icon: "code",
    link: "/login",
  },
  {
    title: "Admin",
    caption: "admin",
    icon: "code",
    link: "/admin",
  },
];

export default defineComponent({
  name: "MainLayout",

  components: {
    // EssentialLink,
  },

  setup() {
    const leftDrawerOpen = ref(false);
    const store = useTestStore();
    store.testFn();
    console.log("Admin Website mainStore", store.title);

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      store,UnicornCircle
    };
  },
});
</script>
