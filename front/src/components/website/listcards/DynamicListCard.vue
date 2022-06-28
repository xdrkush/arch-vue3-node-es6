<template>
  <div>
    <div v-if="data.type === 'listCardDefault'">
      <ListCardDefault :data="data" :demo="demo" />
    </div>
    <div v-else>
      <p>Une erreur de composant est survenu !</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ListCardDefault from "./ListCardDefault.vue";

export default defineComponent({
  name: "DynamicListImg",

  props: ['data', 'demo'],

  components: {
    ListCardDefault,
  },

});
</script>
