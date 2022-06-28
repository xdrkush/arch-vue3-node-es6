<template>
  <div>
    <div v-if="data.type === 'contactDefault'">
      <ContactDefault :data="data" :demo="demo" />
    </div>
    <div v-else-if="data.type === 'contactMap'">
      <ContactMap :data="data" :demo="demo" />
    </div>
    <div v-else>
      <p>Une erreur de composant est survenu !</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import ContactDefault from "./ContactDefault.vue";
import ContactMap from "./ContactMap.vue";

export default defineComponent({
  name: "DynamicContact",

  props: ['data', 'demo'],

  components: {
    ContactDefault,
    ContactMap,
  },

});
</script>
