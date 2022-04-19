<template>
  <q-page class="">
    <h2>Contact Page</h2>
    <CardProfil />
    <FormContact />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import CardProfil from "components/admin/CardProfil.vue";
import FormContact from "components/messages/FormContact.vue";

export default defineComponent({
  name: "IndexPage",
  components: { CardProfil, FormContact },
});
</script>
