<template>
  <div class="q-my-xl text-center q-pa-md">
    <h2 v-if="parent.title || title" class="q-my-md">
      {{ parent.title || title }}
    </h2>

    <h6 v-if="parent.title || title" class="q-my-xl">
      {{ parent.description || description }}
    </h6>

    <div v-if="parent.arch.array">
      <div
        :key="index"
        v-for="(obj, index) in parent.arch.array"
        class="row justify-around q-my-md"
      >
        <!-- Image Left -->
        <div
          v-if="obj.align === 'left'"
          class="col-12 col-md-6 row justify-center"
        >
          <q-img :src="obj.image" :ratio="obj.ratio" />
        </div>
        <div
          v-else-if="obj.align === 'right'"
          class="col-12 col-md-6 row justify-center lt-md"
        >
          <q-img :src="obj.image" :ratio="obj.ratio" />
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
          <q-img :src="obj.image" :ratio="obj.ratio" />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ImgLeftComp",
  props: {
    data: Object,
  },
  setup(props) {
    const parent = ref(props.data);

    return {
      title: "Title ImgLeftComp",
      description: "Description ImgLeftComp",
      obj: {
        ratio: 16 / 9,
        image:
          "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
        title: "Default title ImgLeftComp",
        description: "Default Description ImgLeftComp",
      },
      parent,
    };
  },
};
</script>
