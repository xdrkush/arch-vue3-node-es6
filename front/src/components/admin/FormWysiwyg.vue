<template>
  <div class="q-pa-md q-gutter-sm">
    <q-editor v-model="parent" min-height="5rem" />

    <q-card flat bordered>
      <q-card-section>
        <pre style="white-space: pre-line">{{ parent }}</pre>
      </q-card-section>
    </q-card>

    <q-card flat bordered>
      <q-card-section v-html="parent" />
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  props: ["data"],

  watch: {
    data() {
      this.parent = this.data;
    },
  },

  setup(props) {
    const parent = ref(props.data);
    return {
      parent
    };
  },
};
</script>
