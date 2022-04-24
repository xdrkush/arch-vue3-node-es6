<template>
  <div>
    <q-inner-loading
      :showing="visible"
      label="Chargement ..."
      label-class="text-primary"
      label-style="font-size: 1.5em"
    />
    <div v-if="!visible" v-show="!visible">
      <router-view />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import { useMonitStore } from "./stores/monit.store";
import { useProfileStore } from "./stores/profile.store";
import { ref } from "vue";
// require('dotenv').config()
// console.log('process.env', process.env)

export default defineComponent({
  name: "App",
  setup() {
    const monitStore = useMonitStore();
    const profileStore = useProfileStore();
    profileStore.getProfileApi()

    const Router = useRouter()
    const visible = ref(true);

    setTimeout(() => {
      visible.value = false
      // if (monitStore.getLanding) Router.push({path: "/landing"})
    }, 2000);

    return {
      monitStore,
      visible,
    };
  },
});
</script>
