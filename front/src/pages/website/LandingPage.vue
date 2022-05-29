<template>
  <q-page>
    <LandingComponent v-if="user" :data="user" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import LandingComponent from "components/website/LandingComponent";
import { useProfileStore } from "../../stores/profile.store";
import { useRouter } from "vue-router";
import { useMonitStore } from "src/stores/monit.store";

export default defineComponent({
  name: "IndexPage",
  components: {
    LandingComponent,
  },

  beforeCreate() {
    const monitStore = useMonitStore();
    const router = useRouter();
    console.log("beforeCreate LandingLayout");
    if (!monitStore.getLanding) router.push({ path: "/" });
  },

  setup() {
    const profileStore = useProfileStore();
    if (!profileStore.getProfileLoaded) profileStore.getProfileApi();

    const user = ref(profileStore.getProfile);

    // console.log("userProfile", profileStore);
    return { user };
  },
});
</script>
