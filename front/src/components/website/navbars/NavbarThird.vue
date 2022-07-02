<template>
  <div :style="demo ? 'position: relative' : ''">
    <q-header
      reveal
      elevated
      :style="
        demo ? 'position: relative; width: 100%; left: 0; z-index: 0' : ''
      "
    >
      <q-toolbar class="q-pl-none text-dark bg-light">
        <q-item clickable tag="a" to="/" class="row items-center bg-primary">
          <q-avatar>
            <q-icon name="fa-solid fa-house" color="light" />
          </q-avatar>
          <h5
            v-if="profile.nameCompany"
            class="q-ma-none q-pa-none q-ml-md text-body"
            style="width: 200px"
          >
            <strong>{{ profile.nameCompany }}</strong>
          </h5>
        </q-item>

        <div :key="page" v-for="page in pages" class="gt-sm">
          <div v-if="page.name === 'home'" />
          <div v-else-if="page.isSecondary" />
          <div v-else-if="page.name === 'legals'" />
          <q-btn-dropdown
            v-else-if="page.references.length > 0"
            class="text-body"
            style="height: 50px"
            stretch
            flat
            :icon="page.icon"
            :label="page.name"
          >
            <q-list class="q-mb-md">
              <q-btn
                clickable
                stretch
                flat
                size="xl"
                :label="page.name"
                tag="a"
                :to="`/p/${page.name}`"
                class="row items-center q-px-md q-my-xs"
              />
              <q-btn
                :key="p"
                v-for="p in page.references"
                clickable
                stretch
                flat
                size="md"
                :label="p.name"
                tag="a"
                :href="`/p/${page.name}/${p.name}`"
                class="row items-center q-px-md q-my-xs"
              />
            </q-list>
          </q-btn-dropdown>
          <q-btn
            v-else
            clickable
            style="height: 50px"  
            stretch
            flat
            :icon="page.icon"
            :label="page.name"
            tag="a"
            :to="`/p/${page.name}`"
            class="row items-center"
          />
        </div>

        <q-space />

        <!-- Button Dark Mode -->
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