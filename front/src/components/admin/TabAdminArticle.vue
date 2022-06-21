<template>
  <div>
    <q-tabs
      v-model="tab"
      inline-label
      class="bg-primary text-white shadow-2"
      style="min-width: 70vw"
    >
      <!-- Blog -->
      <q-tab name="blog" icon="newspaper" label="blog" />
      <!-- Vendors -->
      <q-tab name="vendors" icon="feed" label="vendors" />
    </q-tabs>

    <q-tab-panels v-model="tab" animated>
      <!-- Blog tab -->
      <q-tab-panel name="blog">
        <TableArticle/>
      </q-tab-panel>

      <!-- Vendors tab -->
      <q-tab-panel name="vendors">
        <TableArticle/>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMonitStore } from "../../stores/monit.store";
import { useProfileStore } from "../../stores/profile.store";
import TableArticle from "./TableArticle.vue";

export default {
  components: { TableArticle },
  setup() {
    const monitStore = useMonitStore();
    const profileStore = useProfileStore();

    return {
      tab: ref("blog"),
      splitterModel: ref(20),
      monitStore,
      profileStore,
    };
  },
};
</script>
