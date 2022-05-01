<template>
  <q-page class="q-pa-md">
    <h2 class="q-ma-none">Admin Profil</h2>
    <p>(in progress ...)</p>
    <CardProfil />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import CardProfil from "../../components/admin/CardProfil.vue";

export default defineComponent({
  name: "IndexPage",
  components: { CardProfil },
  setup() {
    return {};
  },
});
</script>
