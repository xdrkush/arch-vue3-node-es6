<template>
  <div class="q-pa-md">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMainStore } from "stores/rootState";

export default {
  name: "HeaderHome",
  setup() {
    const mainStore = useMainStore();
    // console.log("useMainStore", mainStore.sliders);
    return {
      title: "Home",
      description: 'Description'
    };
  },
};
</script>
