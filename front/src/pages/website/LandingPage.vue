<template>
  <q-page>
    <LandingDefault v-if="user" :data="user" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import LandingDefault from "components/landings/LandingDefault";
import { useProfileStore } from "../../stores/profile.store";
import { useRouter } from "vue-router";
import { useMonitStore } from "src/stores/monit.store";

export default defineComponent({
  name: "IndexPage",
  components: {
    LandingDefault,
  },

  beforeCreate() {
    const monitStore = useMonitStore();
    const router = useRouter();
    // console.log("beforeCreate LandingLayout");
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
