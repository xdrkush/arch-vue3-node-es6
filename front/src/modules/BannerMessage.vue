<template>
  <div>
    <q-page-sticky
      position="top"
      style="z-index: 1"
      expand
      class="bg-accent text-white"
      v-if="opened"
    >
      <q-toolbar class="shadow-10">
        <q-btn flat round dense icon="map" />
        <p class="q-mb-none">{{ data.message }}</p>
        <q-space/>
        <q-btn flat round dense icon="close" @click="opened = !opened" />
      </q-toolbar>
    </q-page-sticky>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "BannerMessage",

  props: ['data'],

  setup () {
    return {
      opened: ref(true)
    }
  }
};
</script>