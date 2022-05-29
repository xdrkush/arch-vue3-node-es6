<template>
  <div class="q-pa-md">
      <h2>{{ parent.title || title }}</h2>
      <p>{{ parent.description || description }}</p>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ListComp",
  props: {
    data: Object,
  },
  setup(props) {
    const parent = ref(props.data)

    return {
      title: "Default List",
      description: 'Default Description List',
      parent
    };
  },
};
</script>
