<template>
  <div>
    <q-expansion-item
      dense-toggle
      dense
      class="shadow-1 overflow-hidden fixed text-center"
      style="border-radius: 30px; top: 9vh; z-index: 1; right: 5px"
      header-class="bg-accent text-white"
      expand-icon-class="text-white"
      label="Suivez-nous"
      expand-icon="share"
    >
      <q-card class="text-center q-pa-xs" v-if="data">
        <div
          :key="index"
          v-for="(social, index) in arrayObjEnt(data)"
        >
          <q-btn
            rounded
            tag="a"
            v-if="social.value"
            @click="() => openURL(social.value)"
            :href="social.value"
            class="q-ma-xs"
            text-color="primary"
            color="black"
            size="md"
            :icon="`fa-brands fa-${social.key}`"
            :label="social.key"
            style="width: 96%"
          />
        </div>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
import { arrayObjEnt } from 'src/utils'

export default {
    name: "ButtonSocialFixedTop",
    
    props: {
        data: Object
    },
    
    setup() {
        return {
            arrayObjEnt
        }
    }
}
</script>