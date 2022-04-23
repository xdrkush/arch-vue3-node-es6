<template>
  <q-page>
    <LandingComponent />
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import LandingComponent from "components/website/LandingComponent";

export default defineComponent({
  name: "IndexPage",
  components: {
    LandingComponent,
  },
});
</script>
