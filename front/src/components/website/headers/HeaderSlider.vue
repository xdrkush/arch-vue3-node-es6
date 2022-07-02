<template>
  <div class="q-gutter-md" style="position: relative">
    <q-carousel
      v-model="slide"
      ref="carousel"
      transition-prev="scale"
      transition-next="scale"
      swipeable
      animated
      :autoplay="autoplay"
      control-color="white"
      height="90vh"
      class="text-white shadow-10"
    >
      <!-- Controls carousel (button) -->
      <template v-slot:control>
        <q-carousel-control position="left">
          <q-btn
            round
            text-color="white"
            size="xl"
            icon="arrow_back_ios"
            style="top: 45%"
            @click="$refs.carousel.previous()"
          />
        </q-carousel-control>
        <q-carousel-control position="right">
          <q-btn
            round
            text-color="white"
            size="xl"
            icon="arrow_forward_ios"
            style="top: 45%"
            @click="$refs.carousel.next()"
          />
        </q-carousel-control>
      </template>

      <!-- Body (slide) -->
      <q-carousel-slide
        :key="slid.name"
        v-for="slid in parent.arch.array"
        :name="slid.name"
        class="column no-wrap flex-center q-pa-none"
        :img-src="slid.image"
      >
        <div class="gradient-vertical full-width full-height">
          <div
            class="elipse absolute-center"
            :style="`background-color: ${opacityToHex(
              getPaletteColor('primary'),
              0.7
            )}`"
          ></div>
          <div class="text-center absolute-center">
            <h2 class="q-ma-none">
              <strong>{{ slid.title }}</strong>
            </h2>
            <h3 class="q-ma-none q-mt-xl">{{ slid.description }}</h3>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>
  </div>
</template>

<script>
import { ref } from "vue";
import { colors } from "quasar";
import { useProfileStore } from "../../../stores/profile.store";
const { getPaletteColor, hexToRgb } = colors;
import { model } from "../model";

export default {
  name: "HeaderSlider",
  props: ['data', 'demo'],
  setup(props) {
    const parent = ref(props.demo ? model : props.data);
    const profileStore = useProfileStore();
    const opacityToHex = (color, opacity) => {
      let c = hexToRgb(color);
      return `rgba(${c.r},${c.g},${c.b},${opacity})`;
    };

    return {
      parent,
      opacityToHex,
      getPaletteColor,
      profileStore,
      autoplay: ref(true),
      slide: ref(parent.value.arch.array[0].name),
      lorem:
        "lorem  ipsume fze zlorem  ipsume fze zlorem  ipsume fze zlorem  ipsume fze zlorem  ipsume fze z",
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