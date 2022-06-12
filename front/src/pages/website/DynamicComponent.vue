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
      <p> Une erreur de composant est survenu ! </p>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent } from "vue";
import Header from "../../components/website/Header.vue";
import List from "../../components/website/List.vue";
import List169 from "../../components/website/List16-9.vue";
import Contact from "../../components/website/Contact.vue";
import Contact2 from "../../components/website/Contact2.vue";
import ImgList from "../../components/website/ImgList.vue";

export default defineComponent({
  name: "PreviewComp",
  components: {
    Header, List, Contact, Contact2, List169, ImgList
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
