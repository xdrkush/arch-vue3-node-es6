<template>
  <div class="row justify-around items-center q-pa-md" style="min-height: 80vh;">
  
    <div class="col-12 text-center">
      <h2 class="q-my-md">{{ parent.title }}</h2>
      <h6 class="q-mb-md q-mt-xs">{{ parent.description }}</h6>
    </div>

    <!-- Formulaire -->
    <q-card bordered class="col-sm-12 col-xs-12 shadow-10" style="max-width: 720px">
      <q-card-section>
        <div>
          <p class="q-ma-xs"><strong>Nom & Prénom</strong></p>
          <q-input
            square
            filled
            class="q-ma-none"
            v-model="form.name"
            placeholder="Davroot Tux"
            label="name"
          />
        </div>
        <div>
          <p class="q-ma-xs"><strong>E-mail</strong></p>
          <q-input
            square
            filled
            class="q-ma-none"
            v-model="form.mail"
            placeholder="Davroot Tux"
            label="Email"
          />
        </div>
        <div>
          <p class="q-ma-xs"><strong>Objet</strong></p>
          <q-input
            square
            filled
            class="q-ma-none"
            v-model="form.object"
            placeholder="Devis"
            label="Objet"
          />
        </div>
        <div>
          <p class="q-ma-xs"><strong>Message</strong></p>
          <q-input
            v-model="form.message"
            filled
            square
            class="col-10"
            type="textarea"
            placeholder="J’aimerais des renseignements"
            label="Message"
          />
        </div>

        <q-btn
          icon-right="send"
          class="q-my-md full-width bg-primary text-accent"
          label="envoyer"
        />
      </q-card-section>
    </q-card>

    <!-- Social -->
    <div class="col-md-12 col-sm-12 text-center row justify-center">
      <h4 class="q-mb-none col-12">Suivez-nous:</h4>
      <div class="col-sm-4 col-xs-6" :key="social.key" v-for="social in arrayObjEnt(listSocial)">
        <q-btn
          rounded
          tag="a"
          class="col-4 q-my-md q-px-md shadow-10"
          @click="() => openURL(social.value)"
          :href="social.value"
          text-color="accent"
          color="primary"
          :label="social.key"
          size="md"
          :icon="`fa-brands fa-${social.key}`"
        />
      </div>
    </div>

  </div>
</template>

<script>
import { ref } from "vue";
import { useProfileStore } from "../../../stores/profile.store";
import { arrayObjEnt } from "../../../utils";
import { model } from "../model";

export default {
  name: "ContactDefault",
  props: ['data', 'demo'],
  setup(props) {
    const profileStore = useProfileStore();

    const parent = ref(props.demo ? model : props.data);
    const form = ref({
      name: "",
      subject: "",
      email: "",
      message: "",
      checked: Boolean,
    });

    return {
      title: "Default Contact 2",
      description: "Default Description Contact 2",
      listSocial: profileStore.getProfile.social,
      parent,
      arrayObjEnt,
      form,
    };
  },
};
</script>
