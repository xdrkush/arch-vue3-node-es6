<template>
  <div>
    <!-- Modal Session Soon Expired -->
    <q-dialog v-model="modalSession" persistent>
      <q-card style="min-width: 50vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Votre session va expirée !</div>
          <q-space />
          <!-- <q-btn icon="close" flat round dense v-close-popup /> -->
        </q-card-section>

        <q-card-section class="q-pa-md">
          <div class="q-gutter-md text-center" style="width: 100%">
            <q-btn
              label="Logout"
              color="negative"
              v-close-popup
              @click="() => logoutSession()"
            />
            <q-btn
              label="Extend session"
              color="primary"
              v-close-popup
              @click="() => extendSession()"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth.store";

export default defineComponent({
  name: "ModalSession",
  setup() {
    const $q = useQuasar();
    const authStore = useAuthStore();
    const router = useRouter();
    const modalSession = ref(true);

    const logoutSession = () => {
      authStore.logout();
      setTimeout(() => router.push({ path: "/" }), 777);
      localStorage.removeItem("user_token");
      modalSession.value = false;
    };

    const extendSession = () => {
      authStore.extendSession()
      $q.notify({
        icon: "thumb_up",
        caption: `Votre session à été prolonger !`,
        message: "Success !",
        color: "positive",
      });
      // location.reload()
    }

    return {
      authStore,
      modalSession,
      logoutSession,
      extendSession
    };
  },
});
</script>
