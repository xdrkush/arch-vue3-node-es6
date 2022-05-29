<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navbar -->
    <q-header v-if="!getLanding" elevated>
      <q-toolbar>
        <q-item clickable tag="a" to="/">
          <q-avatar type="a" to="/">
            <q-icon name="fa-solid fa-house" color="accent" />
          </q-avatar>
        </q-item>

        <q-toolbar-title> {{ getProfile.nameCompany }} </q-toolbar-title>
        <div class="q-pa-none" :key="page" v-for="page in getPages">
          <q-btn
            v-if="page.name !== 'home'"
            stretch
            flat
            tag="a"
            class="text-white"
            @click="() => this.$router.push({ path: page.name.toLowerCase() })"
            :label="page.name"
            :icon="page.icon"
            color="accent"
          />
        </div>
      </q-toolbar>
    </q-header>

    <!-- Main (Body) -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer v-if="!getLanding">
      <q-toolbar>
        <q-btn :label="getProfile.phone" icon="phone" />
        <q-space />
        <div class="text-center">
          <p class="text-white q-ma-none">
            <strong>©️ 2022 Davroot Team ❤️</strong>
          </p>
          <p class="q-ma-none">Tous droits réservés</p>
        </div>
        <q-space />
        <q-btn :label="getProfile.mail" icon="mail" />
        <q-btn
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          :color="$q.dark.isActive ? 'accent' : 'dark'"
          class="q-mx-xs"
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
        />
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMonitStore } from "src/stores/monit.store";
import { useProfileStore } from "src/stores/profile.store";
import { useRouter } from "vue-router";
import { setCssVar } from "quasar";

export default defineComponent({
  name: "MainLayout",

  components: {},

  beforeCreate() {
    const monitStore = useMonitStore();
    const router = useRouter();
    console.log("beforeCreate MainLayout");
    if (monitStore.getLanding) router.push({ path: "/landing" });
  },

  setup() {
    const monitStore = useMonitStore();
    const profileStore = useProfileStore();

    const theme = ref(monitStore.getTheme);

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
      getLanding: monitStore.getLanding,
      getPages: monitStore.getPages,
      getProfile: profileStore.getProfile,
    };
  },
});
</script>
