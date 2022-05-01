<template>
  <q-page class="q-pa-md">
    <h2 class="q-ma-none">Admin Website</h2>
    <p>(in progress ...)</p>
    <TabAdminWebsite />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TabAdminWebsite from "components/admin/TabAdminWebsite.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    TabAdminWebsite,
  },
  setup() {
    return {};
  },
});
</script>
