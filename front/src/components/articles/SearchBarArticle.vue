<template>
  <div>
    <h2>SearchBar Article</h2>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "CardProfil",
  props: ["data"],
  setup(props) {
    const data = ref(props.data);
    return {
      item: data,
    };
  },
};
</script>