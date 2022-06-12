<template>
  <q-page>
    <!-- Page Dynamic -->

    <!-- {{ monitStore.getPage }} -->
    <!-- <div v-if="monitStore.getPage.sections"> -->
    <div :key="section" v-for="section in monitStore.getPage.sections">
      <!-- Component Dynamic -->
      <DynamicComponent :data="section" />
    </div>
    <!-- </div> -->
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRoute } from "vue-router";
import { useMonitStore } from "../../stores/monit.store";
import DynamicComponent from "./DynamicComponent";

export default defineComponent({
  name: "DynamicPage",
  components: { DynamicComponent },
  setup() {
    const monitStore = useMonitStore();
    const route = useRoute();

    monitStore.getPageAPI(route.path.replace("/", ""));

    return { monitStore };
  },
  watch: {
    $route: {
      deep: true,
      handler(to, from) {
        const monitStore = useMonitStore();

        if (to.fullPath === "/") {
          monitStore.getPageAPI("home");
        } else {
          monitStore.getPageAPI(to.path.replace("/", ""));
        }
      },
    },
  },
});
</script>
