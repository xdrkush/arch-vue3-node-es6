<template>
  <div class="q-my-xl text-center q-pa-md q-mx-auto" style="max-width: 1280px">
    <h2 v-if="parent.title" class="q-my-md">
      {{ parent.title }}
    </h2>

    <h6 v-if="parent.title" class="q-mb-xl q-mt-xs">
      {{ parent.description }}
    </h6>

    <div class="row justify-around items-center">
      <!-- Image Left -->
      <div
        :key="index"
        v-for="(obj, index) in parent.arch.array"
        class="col-6 col-md-6 col-xs-12 row justify-center q-pa-md"
      >
        <q-img
          class="shadow-10 border-radius-inherit"
          :src="obj.image"
          :ratio="
            obj.ratio === '16/9' ? 16 / 9 : obj.ratio === '4/3' ? 4 / 3 : 1
          "
        >
          <div class="full-width full-height row items-center">
            <q-item
              class="full-width full-height row items-center q-pa-none q-ma-none"
              tag="a"
              :href="`/p/${obj.refer}`"
            >
              <div class="col-12 col-md-12 col-sm-12 col-xs-12">
                <div class="text-h3 text-bold">{{ obj.title }}</div>
                <div class="text-h6">{{ obj.description }}</div>
              </div>
            </q-item>
          </div>
        </q-img>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { model } from "../model";

export default {
  name: "ListImg5050",
  props: ["data", "demo"],
  setup(props) {
    const parent = ref(props.demo ? model : props.data);

    return {
      parent,
    };
  },
};
</script>
