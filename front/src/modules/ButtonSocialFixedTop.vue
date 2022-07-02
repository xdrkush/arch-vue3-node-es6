<template>
  <div>
    <q-page-sticky position="top-right" style="z-index: 1" :offset="[18, 68]">
      <q-fab
        v-model="action"
        class="q-pa-xs"
        label="Suivez-nous"
        label-position="bottom"
        glossy
        color="accent"
        icon="keyboard_arrow_down"
        direction="down"
        padding="xs"
        style="min-width: 150px"
      >
        <div :key="index" v-for="(social, index) in arrayObjEnt(data)">
          <q-btn
            rounded
            tag="a"
            target="_blank"
            v-if="social.value"
            @click="() => openURL(social.value)"
            :href="social.value"
            class="q-ma-xs"
            text-color="accent"
            color="white"
            size="md"
            :icon="`fa-brands fa-${social.key}`"
            :label="social.key"
            style="min-width: 150px"
          />
        </div>
      </q-fab>
    </q-page-sticky>
  </div>
</template>

<script>
import { ref } from "vue";
import { arrayObjEnt } from "src/utils";
import { openURL } from "quasar";

export default {
  name: "ButtonSocialFixedTop",

  props: {
    data: Object,
  },

  setup() {
    return {
      action: ref(false),
      arrayObjEnt,
      openURL
    };
  },
};
</script>