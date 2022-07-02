<template>
  <div class="row justify-around items-center" style="height: 92vh">
    <!-- Map -->
    <div
      style="
        border: 1px solid black;
        margin-top: 0vh;
        height: 100%;
        width: 100vw;
      "
    >
      <iframe
        width="100%"
        height="100%"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
        src="https://www.openstreetmap.org/export/embed.html?bbox=-1.5576124191284182%2C47.19637604543882%2C-1.52984619140625%2C47.20961323782762&amp;layer=mapnik"
      ></iframe>
    </div>

    <div></div>

    <!-- Card Formulaire expanded -->
    <q-expansion-item
      icon="mail"
      switch-toggle-side
      default-opened
      bordered
      expand-icon-class="text-white"
      header-class="bg-accent text-white"
      class="shadow-1 overflow-hidden absolute text-left row"
      style="border-radius: 30px; max-width: 1048px; top: 12vh"
      :label="parent.title"
    >
      <q-card bordered class="row">
        <q-separator inset/>
        <h6 class="text-center q-ma-md">
        {{ parent.description }}
        </h6>
        <q-card-section class="col-12" style="border-radius: 30px;">
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
          <div class="text-center">
            <q-btn class="q-my-md bg-primary" label="envoyer" />
          </div>

          <!-- <div class="row">
          <q-btn
            tag="a"
            color="primary"
            class="q-ma-xs"
            text-color="accent"
            label="Reduire"
            icon="minimize"
            size="md"
          />
        </div> -->
        </q-card-section>
      </q-card>
    </q-expansion-item>
  </div>
</template>

<script>
import { ref } from "vue";
import { model } from "../model";

export default {
  name: "ContactMap",
  props: ["data", "demo"],
  setup(props) {
    const parent = ref(props.demo ? model : props.data);
    const form = ref({
      name: "",
      subject: "",
      email: "",
      message: "",
      checked: Boolean,
    });

    return {
      parent,
      form,
    };
  },
};
</script>
