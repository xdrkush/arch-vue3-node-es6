<template>
  <div>
    <h5>Edit</h5>
    <div :key="slide" v-for="slide in array">
      <p>Item {{ slide.label + ": " + slide.value }}</p>
      <FormEdit :data="slide" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import FormEdit from "components/admin/FormEdit.vue";

export default {
  name: "EditComp",
  components: {
    FormEdit,
  },
  props: ["data"],
  setup(props) {
    const data = ref(props.data);
    // console.log("edit comp", data);
    return {
      array: data,
    };
  },
};
</script>
