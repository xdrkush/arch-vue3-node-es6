<template>
  <div>
    <q-drawer
      v-model="drawerChild"
      :width="200"
      :breakpoint="500"
      overlay
      bordered
      class="lt-sm"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-btn
            :icon="$q.dark.isActive ? 'light_mode' : 'dark_mode'"
            :color="$q.dark.isActive ? 'accent' : 'dark'"
            class="q-mx-xs full-width q-ma-xs"
            rounded
            @click="$q.dark.isActive ? $q.dark.set(false) : $q.dark.set(true)"
          />

          <q-item-label header> {{ profile.nameCompany }} </q-item-label>

          <q-item
            clickable
            tag="a"
            :to="'/p/' + page.name"
            :key="page"
            v-for="page in pages"
          >
            <q-item-section v-if="page.icon" avatar>
              <q-icon :name="page.icon" />
            </q-item-section>

            <q-item-section>
              <q-item-label>{{ page.name }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>
    </q-drawer>
  </div>
</template>

<script>
import { watch, ref } from "vue";

export default {
  name: "SidebarDefault",

  props: {
    profile: Object,
    pages: Array,
    drawer: Boolean,
  },

  setup(props) {
    const drawerChild = ref(props.drawer)

    watch(
      () => props.drawer,
      (val) => {
        console.log('watch dynamic sidebar', val)
        drawerChild.value = val
      }
    );

    return {
      drawerChild
    }
  },
};
</script>