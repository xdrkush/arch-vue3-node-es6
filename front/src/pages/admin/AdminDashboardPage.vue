<template>
  <q-page class="q-pa-md">
    <h2 class="q-ma-none">Admin Dashboard</h2>
    <p>(in progress ...)</p>

    <div class="row">
      <ChartSession />
      <ListSession />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ListSession from "../../components/admin/ListSession.vue";
import ChartSession from "../../components/admin/ChartSession.vue";

export default defineComponent({
  name: "IndexPage",
  components: { ListSession, ChartSession },
});
</script>
