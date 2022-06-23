<template>
  <div>
    <q-footer>
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

        <div class="text-center">
          <p class="text-white q-ma-none">
            <strong>©️ 2022 Davroot Team ❤️</strong>
          </p>
          <p class="q-ma-none">Tous droits réservés</p>
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
        <q-btn
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          :color="$q.dark.isActive ? 'accent' : 'dark'"
          class="q-mx-xs gt-xs"
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
        />
      </q-toolbar>
    </q-footer>
  </div>
</template>

<script>
export default {
  name: "FooterDefault",

  props: ['profile'],
};
</script>
