<template>
  <div :style="demo ? 'position: relative' : ''">
    <q-footer
      reveal
      elevated
      :style="demo ? 'position: relative; left: 0; z-index: 0' : ''"
    >
      <q-toolbar class="row">
        <q-btn
          v-if="profile.phone"
          class="q-ma-xs gt-sm"
          color="accent"
          :label="profile.phone"
          icon="phone"
        />
        <q-btn
          v-if="profile.phone"
          class="q-ma-xs lt-md"
          tag="a"
          :href="'tel:' + profile.phone.replace('.', '')"
          color="accent"
          icon="phone"
        />

        <q-space />

        <div class="text-center row items-center">
          <p class=" col-12 col-md-12 text-white q-ma-none">
            <strong>Tous droits réservés ©️ 2022 Davroot Team ❤️ </strong>
          </p>

          <p class=" col-12 col-md-12 q-ma-none">
            
            <a class="q-ma-none q-pa-none text-accent" href="/p/legals"> Mentions Légales & C.G.U </a>
          </p>
        </div>

        <q-space />

        <q-btn
          v-if="profile.mail"
          class="q-ma-xs gt-sm"
          color="accent"
          :label="profile.mail"
          icon="mail"
          tag="a"
          :href="'mailto:' + profile.mail"
        />
        <q-btn
          v-if="profile.mail"
          class="q-ma-xs lt-md"
          color="accent"
          icon="mail"
          tag="a"
          :href="'mailto:' + profile.mail"
        />
      </q-toolbar>
    </q-footer>
  </div>
</template>

<script>
export default {
  name: "FooterDefault",

  props: ["profile", "demo"],
};
</script>
