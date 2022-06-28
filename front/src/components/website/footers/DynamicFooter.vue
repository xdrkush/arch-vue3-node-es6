<template>
  <div>
    <div v-if="component.type === 'footerDefault'">
      <FooterDefault
        :profile="profile"
        :demo="demo"
      />
    </div>
    <div v-else-if="component.type === 'footerSecond'">
      <FooterSecond
        :profile="profile"
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
import FooterDefault from "./FooterDefault.vue";
import FooterSecond from "./FooterSecond.vue";

// const model = {
//     profile: {
//         nameCompany: "Model Title"
//     },
//     pages: [
//         {name: 'home', icone: 'home'},
//         {name: 'contact', icone: 'phone'}
//     ]
// }

export default defineComponent({
  name: "PreviewComp",
  components: {
    FooterDefault, FooterSecond
  },
  props: [ "profile", "component", "demo" ],
});
</script>
