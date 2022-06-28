<template>
  <div>
    <div v-if="data.type === 'headerDefault'">
      <HeaderDefault :data="data" :demo="demo"/>
    </div>
    <div v-else-if="data.type === 'headerSlider'">
      <HeaderSlider :data="data" :demo="demo"/>
    </div>
    <div v-else>
      <p>Une erreur de composant est survenu !</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import HeaderSlider from "./HeaderSlider.vue";
import HeaderDefault from "./HeaderDefault.vue";

export default defineComponent({
  name: "DynamicHeader",

  components: {
    HeaderDefault,
    HeaderSlider
  },

  props: ["data", "demo"],

});
</script>
