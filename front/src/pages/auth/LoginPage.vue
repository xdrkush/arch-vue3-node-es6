<template>
  <q-page class="">
    <q-inner-loading
      :showing="visible"
      label="Chargement ..."
      label-class="text-primary"
      label-style="font-size: 1.5em"
    />
    <div
      v-if="!visible"
      v-show="!visible"
      class="q-gutter-md row text-center justify-center items-center"
      style="width: 100vw; height: 80vh"
    >
      <div>
        <h4>Connectez-vous:</h4>
        <q-input outlined v-model="form.mail" label="E-mail ou name" class="q-ma-md" />
        <q-input
          outlined
          class="q-ma-md"
          v-model="form.password"
          label="Password"
          type="password"
        />
        <q-btn label="Mot de passe oublier ?" class="q-ma-md" color="warning" />
        <q-btn
          label="Confirmez"
          class="q-ma-md"
          color="primary"
          @click="loginSubmit({ ...form })"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth.store";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const authStore = useAuthStore();
    const Router = useRouter();
    const form = ref({ mail: "", password: "" });
    let visible = ref(false);

    if (authStore.getLoggedIn) Router.push({ path: "/admin" });

    const loginSubmit = (obj) => {
      visible.value = true;
      authStore.loginAuth(obj);

      setTimeout(() => {
        visible.value = false;
        if (authStore.getLoggedIn) Router.push({ path: "/admin" });
        else Router.push({ path: "/admin" });
      }, 2000);
    };

    return { form, loginSubmit, visible };
  },
});
</script>
