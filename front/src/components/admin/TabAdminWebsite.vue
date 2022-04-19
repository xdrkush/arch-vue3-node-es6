<template>
  <div>
    <q-tabs
      v-model="tab"
      inline-label
      class="bg-purple text-white shadow-2"
      style="min-width: 70vw"
    >
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
import { useMainStore } from "../../stores/rootState";

export default {
  components: {
    Header,
    EditArray,
  },
  setup() {
    const mainStore = useMainStore();
    // console.log("Admin Website mainStore", store);

    return {
      tab: ref("home"),
      splitterModel: ref(20),
      sliders: mainStore.sliders,
    };
  },
};
</script>
