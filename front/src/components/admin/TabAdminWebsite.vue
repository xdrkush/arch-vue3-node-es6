<template>
  <div>
    <q-tabs
      v-model="tab"
      inline-label
      class="bg-purple text-white shadow-2"
      style="min-width: 70vw"
    >
      <q-tab name="landing" icon="home" label="landing" />
      <q-tab name="home" icon="home" label="home" />
      <q-tab name="contact" icon="phone" label="contact" />
    </q-tabs>

    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="jump-up"
      transition-next="jump-up"
    >

      <q-tab-panel name="landing">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Landing Page"
            caption="edit"
          >
            <q-card>
              <q-card-section>
                <LandingPage />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="home">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Header"
            caption="edit"
          >
            <q-card>
              <q-card-section>
                <Header />
                <EditArray :data="sliders" />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-tab-panel>

      <q-tab-panel name="contact">
        <div class="text-h4 q-mb-md">Contact</div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { ref } from "vue";
import Header from "components/website/Header.vue";
import EditArray from "components/admin/EditArray.vue";
import LandingPage from "pages/website/LandingPage.vue"
import { useMainStore } from "../../stores/rootState";
import { useMonitStore } from '../../stores/monit.store';

export default {
  components: {
    Header,
    EditArray,
    LandingPage
  },
  setup() {
    const mainStore = useMainStore();
    const monitStore = useMonitStore();
    // console.log("Admin Website mainStore", store);

    return {
      tab: ref("home"),
      splitterModel: ref(20),
      sliders: mainStore.sliders,
      monitStore
    };
  },
};
</script>
