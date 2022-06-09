<template>
  <div>
    <!-- Modal Token Expired -->
    <q-dialog v-model="modalExp" persistent>
      <q-card style="min-width: 50vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Votre session est expirée !</div>
          <q-space />
          <!-- <q-btn icon="close" flat round dense v-close-popup /> -->
        </q-card-section>

        <q-card-section class="q-pa-md">
          <div class="q-gutter-md text-center" style="width: 100%">
            <p class="text-body">Vous allez être rediriger !</p>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "../../stores/auth.store";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "ModalExp",
  setup() {
    const authStore = useAuthStore();
    const modalExp = ref(true);
    const Router = useRouter();

    setTimeout(() => {
      // console.log("redirection token expired");
      if (authStore.getTokenExp === true) authStore.getSession()
      Router.push({ path: "/" });
      modalExp.value = false;
    }, 3500);

    return {
      authStore,
      modalExp,
    };
  },
});
</script>
