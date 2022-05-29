<template>
  <div class="q-pa-md row justify-around items-center" style="height: 80vh">
    <div></div>
    <q-card bordered class="my-card" style="min-width: 45vh">
      <q-card-section>
        <div class="text-h4">
          <strong>{{ parent.title || title }}</strong>
        </div>
        <p class="q-ma-none">
          {{ parent.description || description }}
        </p>
      </q-card-section>

      <q-separator inset />

      <q-card-section>
        <div>
          <p class="q-ma-xs"><strong>Nom & Prénom</strong></p>
          <q-input
            square
            filled
            class="q-ma-none"
            v-model="form.name"
            placeholder="Davroot Tux"
            :label="name"
          />
        </div>
        <div>
          <p class="q-ma-xs"><strong>Nom & Prénom</strong></p>
          <q-input
            square
            filled
            class="q-ma-none"
            v-model="form.name"
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
            v-model="form.name"
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

        <q-btn class="q-my-md full-width bg-primary text-secondary" label="envoyer" />

        <div class="row">
          <q-btn
            round
            tag="a"
            color="primary"
            class="q-ma-xs"
            text-color="accent"
            size="md"
            icon="fa-brands fa-twitter"
          />
          <q-btn
            round
            tag="a"
            color="primary"
            class="q-ma-xs"
            text-color="accent"
            size="md"
            icon="fa-brands fa-linkedin"
          />
          <q-btn
            round
            tag="a"
            color="primary"
            class="q-ma-xs"
            text-color="accent"
            size="md"
            icon="fa-brands fa-facebook"
          />
          <q-btn
            round
            tag="a"
            color="primary"
            class="q-ma-xs"
            text-color="accent"
            size="md"
            icon="fa-brands fa-instagram"
          />
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ContactComp",
  props: {
    data: Object,
  },
  setup(props) {
    const parent = ref(props.data);
    const form = ref({
      name: "",
      subject: "",
      email: "",
      message: "",
      checked: Boolean,
    });

    return {
      title: "Default Contact",
      description: "Default Description Contact",
      parent,
      form,
    };
  },
};
</script>
