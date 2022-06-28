<template>
  <div class="q-my-xl text-center">
    <div class="row justify-around bg-primary items-center shadow-10">

      <div class="col-5 col-md-5 col-sm-12">
        <h4 class="q-my-md ">{{ parent.title }}</h4>
      </div>

      <div class="col-1 col-md-1 col-sm-12 elipse-min q-ma-none q-my-md bg-accent row items-center text-center shadow-10">
        <q-icon name="home" size="xl" class="q-ma-none q-mx-auto"></q-icon>
      </div>

      <div class="col-6 col-md-6 col-sm-12 q-my-md">
        {{ parent.title }}
      </div>

    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import { model } from "../model";

export default {
  name: "BannerDefault",
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