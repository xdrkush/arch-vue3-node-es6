<template>
  <div>
    <div v-if="data.type === 'bannerDefault'">
      <BannerDefault :data="data" :demo="demo" />
    </div>
    <div v-else>
      <p>Une erreur de composant est survenu !</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import BannerDefault from "./BannerDefault.vue";

export default defineComponent({
  name: "DynamicBanner",

  props: ['data', 'demo'],

  components: {
    BannerDefault,
  },

});
</script>
