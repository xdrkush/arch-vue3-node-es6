<template>
  <q-page>
    <LandingComponent v-if="user" :data="user" />
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import LandingComponent from "components/website/LandingComponent";
import { useProfileStore } from "../../stores/profile.store";

export default defineComponent({
  name: "IndexPage",
  components: {
    LandingComponent,
  },
  setup() {
    const profileStore = useProfileStore();
    profileStore.getProfileApi();

    const user = ref(profileStore.getProfile);

    // console.log("userProfile", profileStore);
    return { user };
  },
});
</script>
