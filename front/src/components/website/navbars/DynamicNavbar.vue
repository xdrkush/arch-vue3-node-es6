<template>
  <div>
    <div v-if="component.type === 'navbarDefault'">
      <NavbarDefault
        :profile="profile"
        :pages="pages"
        :switchDrawer="switchDrawer"
        :demo="demo"
      />
    </div>
    <div v-else-if="component.type === 'navbarSecond'">
      <NavbarSecond
        :profile="profile"
        :pages="pages"
        :switchDrawer="switchDrawer"
        :demo="demo"
      />
    </div>
    <div v-else-if="component.type === 'navbarThird'">
      <NavbarThird
        :profile="profile"
        :pages="pages"
        :switchDrawer="switchDrawer"
        :demo="demo"
      />
    </div>
    <div v-else>
      <p>Une erreur de composant est survenu !</p>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import NavbarDefault from "./NavbarDefault.vue";
import NavbarSecond from "./NavbarSecond.vue";
import NavbarThird from "./NavbarThird.vue";

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
  name: "DynamicNavbar",

  components: {
    NavbarDefault,
    NavbarSecond,
    NavbarThird
  },

  props: ["profile", "pages", "switchDrawer", "component", "demo"],

});
</script>
