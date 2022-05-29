<template>
  <div>
    <div class="q-gutter-md">
      <q-carousel
        v-model="slide"
        transition-prev="scale"
        transition-next="scale"
        swipeable
        animated
        control-color="white"
        navigation
        padding
        arrows
        height="80vh"
        class="bg-primary text-white shadow-1"
      >
        <q-carousel-slide name="style" class="column no-wrap flex-center">
          <q-icon name="style" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="tv" class="column no-wrap flex-center">
          <q-icon name="live_tv" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="layers" class="column no-wrap flex-center">
          <q-icon name="layers" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
        <q-carousel-slide name="map" class="column no-wrap flex-center">
          <q-icon name="terrain" size="56px" />
          <div class="q-mt-md text-center">
            {{ lorem }}
          </div>
        </q-carousel-slide>
      </q-carousel>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  name: "HeaderHome",
  props: {
    data: Object,
  },
  setup(props) {
    const parent = ref(props.data);
    const d = {
      title: "Default Header",
      description: "Default Description Header",
    };

    return {
      d,
      parent,
      slide: ref("style"),
      lorem:
        "lorem  ipsume fze zlorem  ipsume fze zlorem  ipsume fze zlorem  ipsume fze zlorem  ipsume fze z",
    };
  },
};
</script>
