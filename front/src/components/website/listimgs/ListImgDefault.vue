<template>
  <div class="q-my-xl text-center q-pa-md q-mx-auto" style="max-width: 1280px">
    <h2 v-if="parent.title || title" class="q-my-md">
      {{ parent.title || title }}
    </h2>

    <h6 v-if="parent.title || title" class="q-mb-xl q-mt-xs">
      {{ parent.description || description }}
    </h6>

    <div>
      <q-card
        flat
        :key="index"
        v-for="(obj, index) in parent.arch.array"
        class="row justify-around q-my-xl items-center shadow-10"
      >
        <!-- Image Left -->
        <div
          v-if="obj.align === 'left'"
          class="col-12 col-md-6 row justify-center"
        >
          <q-img
            class="shadow-10 border-radius-inherit"
            :src="obj.image"
            :ratio="
              obj.ratio === '16/9' ? 16 / 9 : obj.ratio === '4/3' ? 4 / 3 : 1
            "
          />
        </div>
        <div
          v-else-if="obj.align === 'right'"
          class="col-12 col-md-6 row justify-center lt-md"
        >
          <q-img
            class="shadow-10 border-radius-inherit	"
            :src="obj.image"
            :ratio="
              obj.ratio === '16/9' ? 16 / 9 : obj.ratio === '4/3' ? 4 / 3 : 1
            "
          />
        </div>

        <!-- Image Text -->
        <div class="col-md-6">
          <h4>{{ obj.title }}</h4>
          <p>{{ obj.description }}</p>
        </div>

        <!-- Image Left -->
        <div
          v-if="obj.align === 'right'"
          class="col-12 col-md-6 row justify-center gt-sm"
        >
          <q-img
            class="shadow-10 border-radius-inherit	"
            :src="obj.image"
            :ratio="
              obj.ratio === '16/9' ? 16 / 9 : obj.ratio === '4/3' ? 4 / 3 : 1
            "
          />
        </div>
      </q-card>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { model } from "../model";

export default {
  name: "ListImgDefault",
  props: ["data", "demo"],
  setup(props) {
    const parent = ref(props.demo ? model : props.data);

    return {
      parent,
    };
  },
};
</script>
