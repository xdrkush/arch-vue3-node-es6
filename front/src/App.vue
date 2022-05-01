<template>
  <div>
    <q-inner-loading
      :showing="!profileStore.getProfileLoaded"
      label="Chargement ..."
      label-class="text-primary"
      label-style="font-size: 1.5em"
    />
    <div v-if="profileStore.getProfileLoaded" v-show="profileStore.getProfileLoaded">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useProfileStore } from "./stores/profile.store";

export default defineComponent({
  name: "App",
  setup() {
    const profileStore = useProfileStore();
    if (!profileStore.getProfileLoaded) profileStore.getProfileApi();

    return {
      profileStore
    };
  },
});
</script>
