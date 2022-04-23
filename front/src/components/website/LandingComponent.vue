<template>
  <div class="q-pa-md">
    <h2>LandingComponent</h2>
    <q-img
      :src="UnicornCircle"
      spinner-color="white"
    />
  </div>
</template>

<script>
import { ref } from 'vue'
import UnicornCircle from "../../assets/Unicorn-circle.svg";

export default {
  name: "LandingComponents",
  setup() {
    return { UnicornCircle };
  },
};
</script>
