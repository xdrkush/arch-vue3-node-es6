<template>
  <q-page class="q-pa-md">
    <h2 class="q-ma-none text-h2">Admin Article</h2>
    <p>(in progress ...)</p>
    <TabAdminArticle />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import TabAdminArticle from "components/admin/TabAdminArticle.vue";

export default defineComponent({
  name: "IndexPage",
  components: {
    TabAdminArticle,
  },
  setup() {
    return {};
  },
});
</script>
