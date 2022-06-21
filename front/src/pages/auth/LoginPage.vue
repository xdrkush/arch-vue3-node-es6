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
        <q-input
          outlined
          v-model="form.mail"
          label="E-mail ou name"
          class="q-ma-md"
        />
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
          @click="() => loginSubmit({ ...form })"
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../../stores/auth.store";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const $q = useQuasar();
    const authStore = useAuthStore();
    const Router = useRouter();
    const form = ref({ mail: "", password: "" });
    let visible = ref(false);

    onMounted(async () => {
      await authStore.getSession();
      if (authStore.getLoggedIn) Router.push({ path: "/admin" });
    });

    // console.log("page login", authStore, authStore.getLoggedIn);

    const loginSubmit = async (obj) => {
      visible.value = true;
      await authStore.loginAuth(obj);

      $q.notify({
        icon: "thumb_up",
        caption: "En attente de connexion ...",
        message: "Success !",
        color: "positive",
      });

      setTimeout(() => {
        visible.value = false;
        if (authStore.getLoggedIn) {
          $q.notify({
            icon: "thumb_up",
            caption: "Login succes, vous allez être redirigez !",
            message: "Success !",
            color: "positive",
          });
          Router.push({ path: "/admin" });
        } else {
          $q.notify({
            icon: "thumb_up",
            caption: "Une erreur est survenu, veuillez rééssayer !",
            message: "Error !",
            color: "negative",
          });
          if (localStorage.getItem("user_token"))
            localStorage.removeItem("user_token");
          Router.push({ path: "/" });
        }
      }, 2500);
    };

    return { form, loginSubmit, visible };
  },
});
</script>
