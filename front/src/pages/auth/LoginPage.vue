<template>
  <q-page class="">
    <div
      class="q-gutter-md row text-center justify-center items-center"
      style="width: 100vw; height: 80vh"
    >
      <div>
        <h4>Connectez-vous:</h4>
        <q-input outlined v-model="form.mail" label="E-mail" class="q-ma-md" />
        <q-input
          outlined
          class="q-ma-md"
          v-model="form.password"
          label="Password"
          type="password"
        />
        <q-btn
          label="Mot de passe oublier ?"
          class="q-ma-md"
          color="warning"
        />
        <q-btn
          label="Confirmez"
          class="q-ma-md"
          color="positive"
          @click="loginSubmit({ ...form })"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useAuthStore } from "../../stores/auth.store";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const authStore = useAuthStore();
    const form = ref({ mail: "", password: "" });

    const loginSubmit = (obj) => {
      console.log("login", obj);
      authStore.loginAuth(obj);
    };

    return { form, loginSubmit };
  },
});
</script>
