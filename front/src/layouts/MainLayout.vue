<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Navbar -->
    <q-header elevated>
      <q-toolbar>
        <q-item clickable tag="a" to="/">
          <q-avatar>
            <q-icon name="fa-solid fa-house" color="accent" />
          </q-avatar>
        </q-item>

        <q-toolbar-title v-if="profileStore.getProfile.nameCompany">
          {{ profileStore.getProfile.nameCompany }}
        </q-toolbar-title>

        <q-btn
          class="q-ma-xs lt-sm"
          color="accent"
          icon="menu"
          @click="drawer = !drawer"
        />
        <div
          class="q-pa-none gt-xs"
          :key="page"
          v-for="page in monitStore.getPages"
        >
          <q-btn
            v-if="page.name !== 'home'"
            stretch
            flat
            tag="a"
            class="text-white"
            :to="'/p/' + page.name.toLowerCase()"
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

          <!-- <q-item-label header> {{ profileStore.getProfile.nameCompany }} </q-item-label> -->

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
      <q-card class="text-center q-pa-xs" v-if="profileStore.getProfile.social">
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
    <q-footer>
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
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, onMounted, ref } from "vue";
import { setCssVar } from "quasar";
import { useMonitStore } from "src/stores/monit.store";
import { useProfileStore } from "src/stores/profile.store";
import { useRouter } from "vue-router";
import { arrayObjEnt } from "../utils";

export default defineComponent({
  name: "MainLayout",

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
      arrayObjEnt,
      // Store
      monitStore,
      profileStore,
    };
  },
});
</script>
