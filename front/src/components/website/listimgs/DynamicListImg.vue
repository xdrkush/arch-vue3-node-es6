<template>
  <div>
    <div v-if="data.type === 'listImgDefault'">
      <ListImgDefault :data="data" :demo="demo" />
    </div>
    <div v-else-if="data.type === 'listImg5050'">
      <ListImg5050 :data="data" :demo="demo" />
    </div>
    <div v-else>
      <p>Une erreur de composant est survenu !</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ListImgDefault from "./ListImgDefault.vue";
import ListImg5050 from "./ListImg5050.vue";

export default defineComponent({
  name: "DynamicListImg",

  props: ['data', 'demo'],

  components: {
    ListImgDefault,
    ListImg5050,
  },

});
</script>
