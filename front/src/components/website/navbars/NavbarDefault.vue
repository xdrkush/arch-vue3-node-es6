<template>
  <div :style=" demo ? 'position: relative' : ''">
    <q-header reveal elevated :style=" demo ? 'position: relative; width: 100%;; left: 0; z-index: 0' : '' ">
      <q-toolbar>
        <q-item clickable tag="a" to="/">
          <q-avatar>
            <q-icon name="fa-solid fa-house" color="accent" />
          </q-avatar>
        </q-item>

        <q-toolbar-title v-if="profile.nameCompany">
          {{ profile.nameCompany }}
        </q-toolbar-title>

        <!-- Button Sidebar -->
        <q-btn
          class="q-ma-xs lt-sm"
          color="accent"
          icon="menu"
          @click="switchDrawer"
        />

        <div class="q-pa-none gt-xs" :key="page" v-for="page in pages">
          <q-btn
            v-if="page.name !== 'home' || 'legals'"
            stretch
            flat
            tag="a"
            class="text-white"
            :to="'/p/' + page.name.toLowerCase()"
            :label="page.title"
            :icon="page.icon"
            color="accent"
          />
        </div>
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  name: "NavbarDefault",

  props: ["profile", "pages", "switchDrawer", "demo"],

};
</script>