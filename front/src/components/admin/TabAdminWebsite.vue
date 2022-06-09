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

    <q-tab-panels v-model="tab" animated>
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
                  :data="monitStore.getTheme"
                  :editFn="monitStore.editThemeAPI"
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
                <FormEdit
                  :data="profileStore.getProfile"
                  :editFn="profileStore.editProfileApi"
                />
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
              <FormEdit
                :data="page"
                :editFn="monitStore.editPage"
                :delete="true"
                :deleteFn="monitStore.deletePage"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- Test Drag order -->
        <DragOrder :page="page" :array="page.sections" />

        <!-- Modal Add Section to page -->
        <ModalSection :page="page" />
      
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { ref } from "vue";
import FormEdit from "components/admin/FormEdit.vue";
import LandingPage from "pages/website/LandingPage.vue";
import ModalPage from "./ModalPage.vue";
import ModalSection from "./ModalSection.vue";
import DragOrder from "./DragOrder.vue";
import { useMonitStore } from "../../stores/monit.store";
import { useProfileStore } from "../../stores/profile.store";

export default {
  components: {
    FormEdit,
    LandingPage,
    ModalPage,
    ModalSection,
    DragOrder,
  },
  setup() {
    const monitStore = useMonitStore();
    const profileStore = useProfileStore();

    return {
      tab: ref("template"),
      splitterModel: ref(20),
      monitStore,
      profileStore,
    };
  },
};
</script>
