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
        <q-item clickable tag="a" to="/" class="row items-center">
          <q-avatar>
            <q-icon name="fa-solid fa-house" color="accent" />
          </q-avatar>
          <h5 v-if="profile.nameCompany" class="q-ma-none q-pa-none q-ml-md text-accent" style="width: 200px">
            {{ profile.nameCompany }}
          </h5>
        </q-item>

        <q-toolbar class="gt-sm">
          <q-breadcrumbs active-color="white" style="font-size: 16px">
            <div :key="page" v-for="page in pages">
              <div v-if="page.name === 'home'" />
              <div v-else-if="page.name === 'legals'" />
              <q-breadcrumbs-el
                class="q-mx-md"
                v-else
                :label="page.title"
                :icon="page.icon"
                tag="a"
                :to="'/p/' + page.name.toLowerCase()"
              />
            </div>
          </q-breadcrumbs>
        </q-toolbar>

        <q-space />

        <q-btn
          :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
          :color="$q.dark.isActive ? 'accent' : 'dark'"
          class="q-mx-xs gt-sm"
          @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
        />
        <!-- Button Sidebar -->
        <q-btn
          class="q-ma-xs lt-md"
          color="accent"
          icon="menu"
          @click="switchDrawer"
        />

        <!-- <div class="q-pa-none gt-xs" :key="page" v-for="page in pages">
          <q-btn
            v-if="page.name !== 'home'"
            stretch
            flat
            tag="a"
            class="text-white"
            :to="'/p/' + page.name.toLowerCase()"
            :label="page.name"
            :icon="page.icon"
            color="accent"
          />
        </div> -->
      </q-toolbar>
    </q-header>
  </div>
</template>

<script>
export default {
  name: "NavbarThird",

  props: ["profile", "pages", "switchDrawer", "demo"],
};
</script>