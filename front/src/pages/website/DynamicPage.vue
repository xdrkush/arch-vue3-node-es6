<template>
  <q-page >
    <!-- Page Dynamic -->

    <!-- {{ monitStore.getPage }} -->

    <div :key="section" v-for="section in monitStore.getPage.sections">
    
      <!-- Component Dynamic -->
      <DynamicComponent :data="section" />

    </div>

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

    console.log('Dynamic Page', monitStore.getPage)

    monitStore.getPageAPI(route.path.replace("/", ""));

    return { monitStore };
  },
  watch: {
    $route: {
      deep: true,
      handler(to, from) {
        const monitStore = useMonitStore();
        console.log('Watch dynamic page', from, to)
        if (to.fullPath === '/') {
          console.log('watch page home condition')
          monitStore.getPageAPI("home");
        }
        else monitStore.getPageAPI(to.path.replace("/", ""));
      },
    },
  },
});
</script>
