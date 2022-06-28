<template>
  <div>
    <!-- <div v-if="component.type === 'header'">
      <Header :data="component" />
    </div>
    <div v-else-if="component.type === 'list'">
      <List :data="component" />
    </div>
    <div v-else-if="component.type === 'imageList'">
      <ImgList :data="component" />
    </div>
    <div v-else-if="component.type === 'contact'">
      <Contact :data="component" />
    </div>
    <div v-else-if="component.type === 'contact2'">
      <Contact2 :data="component" />
    </div>
    <div v-else>
      <p> chargement du composant ... ! </p>
    </div> -->
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
// import Header from "../website/headers/Header.vue";
// import List from "../website/listcards/ListCardDefault.vue";
// import Contact from "../website/contacts/Contact.vue";
// import Contact2 from "../website/contacts/Contact2.vue";
// import ImgList from "../website/listimgs/ImgListDefault.vue";

export default defineComponent({
  name: "PreviewComp",
  components: {
    // Header, List, Contact, Contact2, ImgList
  },
  props: {
    comp: Object,
  },
  setup(props) {
    const component = ref(props.comp);

    return {
      component,
    };
  },
  watch: {
    comp() {
      this.component = this.comp;
    },
  },
});
</script>
