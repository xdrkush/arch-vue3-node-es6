<template>
  <div>
    <!-- Modal Edit Social -->
    <q-btn
      label="Se déconnecter"
      class="q-ma-md"
      color="primary"
      icon="fa-solid fa-arrow-right-from-bracket"
      @click="modalLogout = true"
    />
    <q-dialog v-model="modalLogout" persistent>
      <q-card style="min-width: 50vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Êtes-vous sur ?</div>
          <q-space />
          <!-- <q-btn icon="close" flat round dense v-close-popup /> -->
        </q-card-section>

        <q-card-section class="q-pa-md">
          <div class="q-gutter-md text-center" style="width: 100%">
            <q-btn
              label="Me déconnecter"
              color="primary"
              @click="() => logoutSession()"
            />
            <q-btn label="Rester connecter" color="negative" v-close-popup />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth.store";

export default defineComponent({
  name: "ModalLogout",
  setup() {
    const authStore = useAuthStore();
    const router = useRouter()
    const modalLogout = ref(false);

    const logoutSession = () => {
      authStore.logout();
      setTimeout(() => router.push({ path: "/" }), 777);
      localStorage.removeItem('user_token')
      modalLogout.value = false;
    };

    return {
      authStore,
      modalLogout,
      logoutSession,
    };
  },
});
</script>
