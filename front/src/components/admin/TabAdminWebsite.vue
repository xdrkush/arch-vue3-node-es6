<template>
  <div>
    <!-- Page /p/:name -->
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
      <div v-else :key="page" v-for="page in monitStore.getPages">
        <div v-if="page.isSecondary" />
        <q-tab
          v-else
          :name="page.name"
          @click="() => loadPage(page)"
          :icon="page.icon"
          :label="page.name"
        />
      </div>

      <!-- Create Page -->
      <ModalPage v-if="!monitStore.getLanding" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <!-- Template tab -->
      <q-tab-panel name="template">
        <q-list bordered class="rounded-borders">
          <!-- Gestion Template -->
          <q-expansion-item
            expand-separator
            icon="perm_identity"
            label="Template"
            caption="Configuration themes"
          >
            <q-card>
              <q-card-section class="row justify-center">
                <!-- Modal Layout -->
                <ModalLayout />
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
                  :btnSave="true"
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
        <!-- Page référencer /p/:name/:title/:index -->
        <q-tabs
          v-if="page.references"
          v-model="tabReference"
          inline-label
          class="bg-secondary text-white shadow-2"
          style="min-width: 70vw"
        >
          <!-- For :: All References -->
          <q-tab
            :key="p + index"
            v-for="(p, index) in page.references"
            :name="index"
            :icon="p.icon"
            :label="p.name"
            @click="() => loadPage(p)"
          />
        </q-tabs>

        <!-- Global Page -->
        <q-expansion-item
          expand-separator
          class="q-mt-md"
          icon="perm_identity"
          :label="'Global ' + pageLoad.name"
          caption="Configuration page"
        >
          <q-card>
            <q-card-section>
              <FormEdit
                :btnSave="true"
                :data="pageLoad"
                :editFn="monitStore.editPage"
                :delete="true"
                :deleteFn="monitStore.deletePage"
              />
            </q-card-section>
          </q-card>
        </q-expansion-item>

        <!-- Test Drag order -->
        <DragOrder
          v-if="pageLoad.sections.length > 0"
          :page="pageLoad"
          :array="pageLoad.sections"
        />

        <!-- Modal Add Section to page -->
        <ModalSection :page="pageLoad" />
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { ref, watch } from "vue";
import FormEdit from "components/admin/FormEdit.vue";
import LandingPage from "pages/website/LandingPage.vue";
import ModalPage from "./ModalPage.vue";
import ModalSection from "./ModalSection.vue";
import DragOrder from "./DragOrder.vue";
import { useMonitStore } from "../../stores/monit.store";
import { useProfileStore } from "../../stores/profile.store";
import ModalLayout from "./ModalLayout.vue";

export default {
  components: {
    FormEdit,
    LandingPage,
    ModalPage,
    ModalSection,
    DragOrder,
    ModalLayout,
  },
  setup() {
    const monitStore = useMonitStore();
    const profileStore = useProfileStore();
    const drawer = ref(false);
    const pageLoad = ref({});

    const loadPage = (page) => {
      // console.log("loadPage", page);
      pageLoad.value = page;
    };

    return {
      drawer,
      pageLoad,
      loadPage,
      tab: ref("template"),
      tabReference: ref("1"),
      splitterModel: ref(20),
      switchDrawer() {
        drawer.value = !drawer.value;
      },
      monitStore,
      profileStore,
    };
  },
};
</script>
