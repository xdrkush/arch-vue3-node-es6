<template>
  <div class="q-my-xl text-center">
    <div class="row justify-center items-center">
      <div style="max-width: 1024px">
        <h6 class="q-my-md">{{ parent.title }}</h6>
        <h3 class="q-my-md">
          {{ parent.subtitle || "fzefezfezzq zgzgze ze fzeez" }}
        </h3>
        <q-card flat class="bg-transparent">
          <q-card-section v-html="parent.description" />
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { model } from "../model";

export default {
  name: "TextDefault",
  props: ["data", "demo"],
  setup(props) {
    const parent = ref(props.demo ? model : props.data);

    return {
      parent,
    };
  },
};
</script>

<style lang="scss" scoped>
.elipse-min {
  border: 1px solid $light;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  max-height: 100px;
  max-width: 100px;
}
</style>