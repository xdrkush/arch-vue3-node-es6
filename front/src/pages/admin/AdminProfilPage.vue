<template>
  <q-page class="q-pa-md">
    <h2>admin profil Page</h2>
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
    return {
    };
  },
});
</script>
