<template>
  <div>
    <q-tabs
      v-model="tab"
      inline-label
      class="bg-primary text-white shadow-2"
      style="min-width: 70vw"
    >
      <!-- Template -->
      <q-tab name="template" icon="palette" label="template" />

      <!-- Landing Page -->
      <q-tab
        v-if="monitStore.getLanding"
        name="landing"
        icon="home"
        label="landing"
      />

      <!-- For :: All Pages -->
      <q-tab
        v-else
        :key="page"
        v-for="page in monitStore.getPages"
        :name="page.name"
        :icon="page.icon"
        :label="page.name"
      />

      <!-- Create Page -->
      <ModalPage v-if="!monitStore.getLanding" />
    </q-tabs>

    <q-tab-panels
      v-model="tab"
      animated
      swipeable
      vertical
      transition-prev="jump-up"
      transition-next="jump-up"
    >
      <!-- Template tab -->
      <q-tab-panel name="template">
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Template"
            caption="Configuration themes"
          >
            <q-card>
              <q-card-section>
                <FormEdit
                  :data="{
                    title: 'title admin',
                    description: 'description admin',
                  }"
                />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-tab-panel>

      <!-- Landing tab -->
      <q-tab-panel v-if="monitStore.getLanding" name="landing">
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

      <!-- All Pages tab -->
      <q-tab-panel
        v-else
        :key="page"
        v-for="page in monitStore.getPages"
        :name="page.name"
      >
        <!-- Global Page -->
        <q-expansion-item
          expand-separator
          icon="perm_identity"
          :label="'Global ' + page.name"
          caption="Configuration page"
        >
          <q-card>
            <q-card-section>
              <FormEdit :data="page" :fn="monitStore.editPage" />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- List Section -->
        <q-list bordered class="rounded-borders">
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Header"
            caption="section"
          >
            <q-card>
              <q-card-section>
                <Header />
                <FormEdit
                  :data="{
                    title: 'title admin',
                    description: 'description admin',
                  }"
                />
              </q-card-section>
            </q-card>
          </q-expansion-item>
        </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { ref } from "vue";
import Header from "components/website/Header.vue";
import FormEdit from "components/admin/FormEdit.vue";
import LandingPage from "pages/website/LandingPage.vue";
import ModalPage from "./ModalPage.vue";
import { useMonitStore } from "../../stores/monit.store";

export default {
  components: {
    Header,
    FormEdit,
    LandingPage,
    ModalPage,
  },
  setup() {
    const monitStore = useMonitStore();

    return {
      tab: ref("template"),
      splitterModel: ref(20),
      monitStore
    };
  },
};
</script>
