<template>
  <div class="q-gutter-md" style="position: relative">
    <h1>dzefezf</h1>
    <h2>{{ parent.title }}</h2>
  </div>
</template>

<script>
import { ref } from "vue";
import { colors } from "quasar";
import { useProfileStore } from "../../../stores/profile.store";
import { model } from "../model";

const { getPaletteColor, hexToRgb } = colors;

export default {
  name: "HeaderDefault",
  props: ["data", "demo"],
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