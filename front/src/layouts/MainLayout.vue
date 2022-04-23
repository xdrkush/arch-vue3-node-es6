<template>
  <q-layout v-if='!monitStore.getLanding' view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="glossy">
        <q-btn flat round dense icon="menu" class="q-mr-sm" />
        <q-avatar>
          <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
        </q-avatar>

        <q-toolbar-title>Quasar Framework</q-toolbar-title>

        <q-btn flat round dense icon="whatshot" />
      </q-toolbar>
    </q-header>

    <q-footer elevated>
      <q-toolbar class="glossy">
        <q-toolbar-title>Footer</q-toolbar-title>
      </q-toolbar>
    </q-footer>
    <!-- <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        /> -->

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, onBeforeMount } from "vue";
import { useMonitStore } from "src/stores/monit.store";

export default defineComponent({
  name: "MainLayout",

  components: {},

  setup() {
    const monitStore = useMonitStore();
    return {monitStore};
  },
});
</script>
