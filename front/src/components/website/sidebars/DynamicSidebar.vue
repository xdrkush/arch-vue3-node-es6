<template>
  <div>
    <div v-if="component.type === 'sidebarDefault'">
      <SidebarDefault :profile="profile" :pages="pages" :drawer="drawer" :demo="demo" />
    </div>
    <div v-else-if="component.type === 'sidebarSecond'">
      <SidebarSecond :profile="profile" :pages="pages" :drawer="drawer" :demo="demo" />
    </div>
    <div v-else>
      <p>Une erreur de composant est survenu !</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import SidebarDefault from "./SidebarDefault.vue";
import SidebarSecond from "./SidebarSecond.vue";

const model = {
  profile: {
    nameCompany: "Model Title",
  },
  pages: [
    {
      name: "home",
      icon: "home",
      children: [
        { name: "child1", title: "title child1" },
        { name: "child2", title: "title child2" },
      ],
    },
    {
      name: "contact",
      icon: "phone",
      children: [
        { name: "child1", title: "title child1" },
        { name: "child2", title: "title child2" },
      ],
    },
  ],
};

export default defineComponent({
  name: "DynamicSidebar",

  components: {
    SidebarDefault, SidebarSecond
  },

  props: ["profile", "pages", "drawer", "component", "demo"]

});
</script>
