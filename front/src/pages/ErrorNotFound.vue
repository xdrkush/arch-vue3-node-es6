<template>
  <div class="fullscreen bg-primary text-white text-center q-pa-md flex flex-center">
    <div>
      <div style="font-size: 30vh">
        404
      </div>

      <div class="text-h2 text-accent">
        Oops. Nothing here...
      </div>

      <q-btn
        class="q-mt-xl"
        color="accent"
        text-color="white"
        unelevated
        to="/"
        label="retour à l'acceuill"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ErrorNotFound'
})
</script>
