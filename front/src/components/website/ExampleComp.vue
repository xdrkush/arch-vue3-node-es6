<template>
  <div class="q-my-xl text-center">
    <h2 class="q-my-md">{{ parent.title || model.title }}</h2>
    <h6 class="q-my-xl">{{ parent.description || model.description }}</h6>

    <div class="row justify-around q-gutter-xs">
      <!-- Your Code -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "YourComp",
  props: {
    data: Object,
  },
  setup(props) {
    const parent = ref(props.data);

    return {
      model: {
        title: "Default Your Comp",
        description: "Default Description Your Comp",
      },
      parent,
    };
  },
};
</script>
