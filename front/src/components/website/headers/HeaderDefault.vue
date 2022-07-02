<template>
  <div class="q-gutter-md" style="position: relative">
    <!-- <q-responsive
      :ratio="parent.ratio === '16/9' ? 16 / 9 : parent.ratio === '4/3' ? 4 / 3 : 1"
    > -->
    <q-responsive
      :ratio="16 / 9"
      class="gradient-vertical"
      style="height: 60vh; max-height: 80vh"
    >
      <q-img
        style="max-height: 60vh; max-height: 80vh"
        class="border-radius-inherit"
        :src="parent.arch.image"
      >
        <div class="full-width full-height row items-center">
          <div class="col-8 col-md-8 col-sm-8 col-xs-12">
            <div class="text-h1 text-bold">{{ parent.title }}</div>
            <div class="text-h6">{{ parent.description }}</div>
            <q-btn
              v-if="parent.isRefer"
              tag="a"
              :href="parent.refer"
              label="C'est partit !"
              color="accent"
              class="q-mt-md"
            />
          </div>
        </div>
      </q-img>
    </q-responsive>
  </div>
</template>

<script>
import { ref } from "vue";
import { model } from "../model";

export default {
  name: "HeaderDefault",
  props: ["data", "demo"],
  setup(props) {
    const parent = ref(props.demo ? model : props.data);

    return {
      parent,
    };
  },
};
</script>

<style lang="scss">
.elipse {
  border: 1px solid $dark;
  border-radius: 50%;
  height: 80vw;
  width: 80vw;
  max-height: 500px;
  max-width: 500px;
  margin: auto;
}

.gradient-vertical {
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.3),
    rgba(0, 0, 0, 0.3),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.4),
    rgba(0, 0, 0, 0.3),
    rgba(255, 255, 255, 0.3)
  );
  background-blend-mode: multiply, normal;
}
</style>  