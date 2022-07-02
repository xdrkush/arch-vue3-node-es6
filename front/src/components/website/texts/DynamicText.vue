<template>
  <div>
    <div v-if="data.type === 'textDefault'">
      <TextDefault :data="data" :demo="demo" />
    </div>
    <div v-else>
      <p>Une erreur de composant est survenu !</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TextDefault from "./TextDefault.vue";

export default defineComponent({
  name: "DynamicText",

  props: ['data', 'demo'],

  components: {
    TextDefault,
  },

});
</script>
