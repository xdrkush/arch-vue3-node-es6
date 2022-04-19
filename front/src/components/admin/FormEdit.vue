<template>
  <div>
    <div class="q-gutter-md q-my-xs row items-start">
      <q-input square filled v-model="item.value" label="Value" />
      <q-input square filled v-model="item.icon" label="Icon" />
    </div>
    <q-input
      v-model="item.description"
      filled
      type="textarea"
      label="Description"
    />
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FormEdit",
  props: ["data"],
  setup(props) {
    const data = ref(props.data);
    return {
      item: data,
    };
  },
};
</script>