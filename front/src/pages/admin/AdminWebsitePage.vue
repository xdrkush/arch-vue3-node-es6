<template>
  <q-page class="flex flex-center column">
    <h2>Admin Website Page</h2>
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
