<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navbar -->
    <q-header v-if="!getLanding" elevated>
      <q-toolbar>
        <q-item clickable tag="a" to="/">
          <q-avatar>
            <q-icon name="fa-solid fa-house" color="accent" />
          </q-avatar>
        </q-item>

        <q-toolbar-title> {{ getProfile.nameCompany }} </q-toolbar-title>

        <q-btn
          class="q-ma-xs lt-sm"
          color="accent"
          icon="menu"
          @click="drawer = !drawer"
        />
        <div class="q-pa-none gt-xs" :key="page" v-for="page in getPages">
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

    <!-- Sidebar -->
    <q-drawer
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

          <q-item-label header> {{ getProfile.nameCompany }} </q-item-label>

          <q-item
            clickable
            tag="a"
            :to="page.name"
            :key="page"
            v-for="page in getPages"
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
    </q-drawer>

    <!-- Button Social -->
    <q-expansion-item
      dense-toggle
      dense
      class="shadow-1 overflow-hidden fixed text-center"
      style="border-radius: 30px; top: 9vh; z-index: 1; right: 5px"
      header-class="bg-accent text-white"
      expand-icon-class="text-white"
      label="Suivez-nous"
      expand-icon="share"
    >
      <q-card class="text-center q-pa-xs">
        <div
          :key="index"
          v-for="(social, index) in arrayObjEnt(profileStore.getProfile.social)"
        >
          <q-btn
            rounded
            tag="a"
            v-if="social.value"
            @click="() => openURL(social.value)"
            :href="social.value"
            class="q-ma-xs"
            text-color="accent"
            color="black"
            size="md"
            :icon="`fa-brands fa-${social.key}`"
            :label="social.key"
            style="width: 96%"
          />
        </div>
      </q-card>
    </q-expansion-item>

    <!-- Main (Body) -->
    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer -->
    <q-footer v-if="!getLanding">
      <q-toolbar class="row">
        <q-btn
          class="q-ma-xs gt-sm"
          color="accent"
          :label="getProfile.phone"
          icon="phone"
        />
        <q-btn
          class="q-ma-xs lt-md"
          tag="a"
          :href="'tel:' + getProfile.phone.replace('.', '')"
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
          class="q-ma-xs gt-sm"
          color="accent"
          :label="getProfile.mail"
          icon="mail"
          tag="a"
          :href="'mailto:' + getProfile.mail"
        />
        <q-btn
          class="q-ma-xs lt-md"
          color="accent"
          icon="mail"
          tag="a"
          :href="'mailto:' + getProfile.mail"
        />
        <q-btn
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          :color="$q.dark.isActive ? 'accent' : 'dark'"
          class="q-mx-xs gt-xs"
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
        />
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import { useMonitStore } from "src/stores/monit.store";
import { useProfileStore } from "src/stores/profile.store";
import { useRoute, useRouter } from "vue-router";
import { setCssVar } from "quasar";
import { arrayObjEnt } from "../utils";
// import { useMeta } from "quasar";

export default defineComponent({
  name: "MainLayout",

  components: {},

  beforeCreate() {
    const monitStore = useMonitStore();
    const router = useRouter();

    if (monitStore.getLanding) router.push({ path: "/landing" });
  },

  setup() {
    const monitStore = useMonitStore();
    const profileStore = useProfileStore();
    // const route = useRoute();

    const drawer = ref(false);
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

    // watch(
    //   () => route.fullPath,
    //   (val) => {
    //     console.log("$route value");
    //     useMeta(() => {
    //       return {
    //         title: profileStore.getProfile.nameCompany + " : " + route.fullPath,
    //         description: profileStore.getProfile.description
    //       }
    //     })
    //   }
    // );

    return {
      drawer,
      arrayObjEnt,
      getLanding: monitStore.getLanding,
      getPages: monitStore.getPages,
      getProfile: profileStore.getProfile,
      profileStore,
    };
  },
});
</script>
