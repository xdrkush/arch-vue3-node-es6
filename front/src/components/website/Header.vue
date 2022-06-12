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
      class="text-white"
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
        :name="slid.placement"
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
            <h3 class="q-ma-none q-mt-xl">{{ slid.subtitle }}</h3>
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

  </div>
</template>

<script>
import { ref } from "vue";
import { colors } from "quasar";
import { useProfileStore } from "../../stores/profile.store";

const { getPaletteColor, hexToRgb } = colors;

const model = {
  title: "title Default",
  type: "header",
  placement: "0",
  array: [
    {
      placement: "1",
      name: "montagne",
      image:
        "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
      title: "Super Titre",
      subtitle: "Super subtitle",
    },
    {
      placement: "2",
      name: "block",
      image:
        "https://cdn.pixabay.com/photo/2016/05/09/17/26/background-texture-1382002_960_720.jpg",
      title: "Super Titre",
      subtitle: "Super subtitle",
    },
    {
      placement: "3",
      name: "architecture",
      image:
        "https://cdn.pixabay.com/photo/2018/05/11/09/29/glass-3389935_960_720.jpg",
      title: "Super Titre",
      subtitle: "Super subtitle",
    },
    {
      placement: "4",
      name: "canna",
      image:
        "https://i1.wp.com/greenacresgroupca.com/wp-content/uploads/2018/05/istock-835508564.jpg?fit=724%2C483&ssl=1",
      title: "Super Titre",
      subtitle: "Super subtitle",
    },
  ],
};

export default {
  name: "HeaderHome",
  props: {
    data: Object,
  },
  setup(props) {
    const parent = ref(props.data);
    const profileStore = useProfileStore();
    const opacityToHex = (color, opacity) => {
      let c = hexToRgb(color);
      return `rgba(${c.r},${c.g},${c.b},${opacity})`;
    };

    // console.log("Header", parent);

    return {
      parent,
      opacityToHex,
      getPaletteColor,
      profileStore,
      autoplay: ref(true),
      slide: ref("1"),
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