<template>
  <div class="q-pa-md">
    <q-carousel
      v-model="slide"
      transition-prev="slide-right"
      transition-next="slide-left"
      animated
      control-color="primary"
      class="rounded-borders"
    >
      <q-carousel-slide
        :key="slide"
        v-for="slide in sliderHome"
        :name="slide.value"
        class="column no-wrap flex-center"
      >
        <q-icon :name="slide.icon" color="primary" size="56px" />
        <div class="q-mt-md text-center">
          {{ slide.description }}
        </div>
      </q-carousel-slide>
    </q-carousel>

    <div class="row justify-center">
      <q-btn-toggle glossy v-model="slide" :options="sliderHome" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useMainStore } from "stores/rootState";

export default {
  name: "SliderDefault",
  setup() {
    const mainStore = useMainStore();
    // console.log("useMainStore", mainStore.sliders);
    return {
      sliderHome: mainStore.sliders,
      slide: ref(mainStore.sliders[0].value),
      lorem:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque voluptatem totam, architecto cupiditate officia rerum, error dignissimos praesentium libero ab nemo provident incidunt ducimus iusto perferendis porro earum. Totam, numquam?",
    };
  },
};
</script>
