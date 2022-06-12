<template>
  <div>
    <div v-if="component.type === 'header'">
      <Header :data="component" />
    </div>
    <div v-else-if="component.type === 'list'">
      <List :data="component" />
    </div>
    <div v-else-if="component.type === 'list16-9'">
      <List169 :data="component" />
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
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import Header from "../website/Header.vue";
import List from "../website/List.vue";
import List169 from "../website/List16-9.vue";
import Contact from "../website/Contact.vue";
import Contact2 from "../website/Contact2.vue";
import ImgList from "../website/ImgList.vue";

export default defineComponent({
  name: "PreviewComp",
  components: {
    Header, List, Contact, Contact2, List169, ImgList
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
