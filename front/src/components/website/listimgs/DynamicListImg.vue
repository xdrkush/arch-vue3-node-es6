<template>
  <div>
    <div v-if="data.type === 'listImgDefault'">
      <ImgListDefault :data="data" :demo="demo" />
    </div>
    <div v-else>
      <p>Une erreur de composant est survenu !</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ImgListDefault from "./ListImgDefault.vue";

export default defineComponent({
  name: "DynamicListImg",

  props: ['data', 'demo'],

  components: {
    ImgListDefault,
  },

});
</script>
