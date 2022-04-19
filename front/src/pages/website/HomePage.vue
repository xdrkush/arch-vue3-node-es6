<template>
  <q-page class="flex flex-center">
    <Header />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import Header from "components/website/Header";

export default defineComponent({
  name: "IndexPage",
  components: {
    Header,
  },
});
</script>
