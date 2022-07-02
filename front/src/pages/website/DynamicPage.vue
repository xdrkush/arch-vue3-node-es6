<template>
  <q-page>
    <!-- Page Dynamic -->
    <div v-if="monitStore.getPage.sections">
      <div :key="section" v-for="section in monitStore.getPage.sections">
        <!-- Component Dynamic -->
        <DynamicComponent :data="section" :demo="false" />
      </div>
    </div>
  </q-page>
</template>

<script>
// import { useMeta, createMetaMixin } from "quasar";
import { defineComponent, watch, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useMonitStore } from "../../stores/monit.store";
// import { useProfileStore } from "../../stores/profile.store";
import DynamicComponent from "../../components/website/DynamicComponent";
// import meta from "../../boot/meta";

export default defineComponent({
  name: "DynamicPage",
  components: { DynamicComponent },

  // mixins: [
  //   createMetaMixin(function () {
  //     return meta({
  //       title: "Davroot",
  //       description: "Ma super description ...",
  //       route: "Oops",
  //     });
  //   }),
  // ],

  setup() {
    const monitStore = useMonitStore();
    // const { getPage, getPageAPI } = monitStore;
    const route = useRoute();

    // console.log("dynamicPage", route.params);

    onMounted(async () => {
      if (route.fullPath === "/") {
        monitStore.getPageAPI("home");
      } else if (route.params.name) {
        monitStore.getPageAPI(route.params.name);
      } else if (route.params.title) {
        monitStore.getPageAPI(route.params.title);
      }
    });

    // watch(
    //   () => monitStore.getPage,
    //   (val) => {
    //     // console.log("watch getPage", getPage);
    //   }
    // );

    return { monitStore };
  },

  watch: {
    $route: {
      deep: true,
      handler(to, from) {
        const monitStore = useMonitStore();
        // const profileStore = useProfileStore();

        if (to.fullPath === "/") {
          monitStore.getPageAPI("home");
        } else {
          monitStore.getPageAPI(to.path.replace("/p/", ""));
        }

        // console.log("meta dynamics");
        // Meta Default
        // useMeta(() => {
        //   return meta({
        //     title: profileStore.getProfile.nameCompany,
        //     description: profileStore.getProfile.description,
        //     route: to.fullPath,
        //   });
        // });
      },
    },
  },
});
</script>
