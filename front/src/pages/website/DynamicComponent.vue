<template>
  <div>
    <div v-if="component.type === 'header'">
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
      <p> Une erreur de composant est survenu ! </p>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import Header from "../../components/website/headers/Header.vue";
import List from "../../components/website/listcards/List.vue";
import Contact from "../../components/website/contacts/Contact.vue";
import Contact2 from "../../components/website/contacts/Contact2.vue";
import ImgList from "../../components/website/listimgs/ImgList.vue";

export default defineComponent({
  name: "PreviewComp",
  components: {
    Header, List, Contact, Contact2, ImgList
  },
  props: {
    data: Object,
  },
  setup(props) {
    const component = ref(props.data);

    // console.log('preview', component.value)

    return {
      component,
    };
  },
  watch: {
    comp() {
      this.component = this.data;
    },
  },
});
</script>
