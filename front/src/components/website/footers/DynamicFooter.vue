<template>
  <div>
    <div v-if="component.type === 'footerDefault'">
      <FooterDefault
        :profile="profile"
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
    FooterDefault,
  },
  props: [ "profile", "component" ],
});
</script>
