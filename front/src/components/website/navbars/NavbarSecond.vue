<template>
  <div :style="demo ? 'position: relative' : ''">
    <q-header
      reveal
      elevated
      :style="
        demo ? 'position: relative; width: 100%;; left: 0; z-index: 0' : ''
      "
    >
      <q-toolbar>
        <q-btn icon="home" size="md" tag="a" to="/" />

        <q-toolbar-title>{{ profile.nameCompany }}</q-toolbar-title>

        <q-btn
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          :color="$q.dark.isActive ? 'accent' : 'dark'"
          class="q-mx-xs gt-xs"
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
        />

        <!-- Button Sidebar -->
        <q-btn
          class="q-ma-xs lt-sm"
          color="accent"
          icon="menu"
          @click="switchDrawer"
        />
      </q-toolbar>

      <q-tabs v-model="tab" inline-label>
        <div :key="page" v-for="page in pages">
          <q-tab v-if="page.name !== 'home' || 'legals'">
            <q-btn
              :name="page.name"
              :label="page.title"
              :icon="page.icon"
              tag="a"
              :to="'/p/' + page.name"
            />
          </q-tab>
        </div>
      </q-tabs>
    </q-header>
  </div>
</template>

<script>
export default {
  name: "NavbarSecond",

  props: ["profile", "pages", "switchDrawer", "demo"],
};
</script>