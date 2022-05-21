<template>
  <div class="q-py-md">
    <!-- <q-form class="q-gutter-md"> -->
    <div class="bg-grey-2 q-pa-sm rounded-borders">
      <q-toggle
        v-model="status"
        checked-icon="check"
        color="red"
        @click="(e) => changeValue(status)"
        :label="`Landing is ${status}`"
        unchecked-icon="clear"
      />
    </div>
    <!-- </q-form> -->
  </div>
</template>

<script>
import { ref, onBeforeMount } from "vue";
import { useQuasar } from "quasar";
import { useMonitStore } from "../../stores/monit.store";

export default {
  name: "ToggleLanding",
  setup() {
    const monitStore = useMonitStore();
    const $q = useQuasar();
    const status = monitStore.getLanding;

    let changeValue = (value) => {
      console.log("changeValue", value);
      monitStore.editStatusLanding(value)
      $q.notify({
        icon:  (value) ? "done" : "close",
        message: (value) ? "Landing Activé" : "Landing Désactivé",
        color: (value) ? "positive" : "negative",
      });
    };

    return {
      status: ref(status),
      landingStatus: status,
      changeValue,
    };
  },
};
</script>
