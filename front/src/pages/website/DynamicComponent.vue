<template>
  <div>
    <div v-if="component.type === 'header'">
      <Header :data="component" />
    </div>
    <div v-else-if="component.type === 'list'">
      <List :data="component" />
    </div>
    <div v-else-if="component.type === 'contact'">
      <Contact :data="component" />
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
import Contact from "../../components/website/Contact.vue";

export default defineComponent({
  name: "PreviewComp",
  components: {
    Header, List, Contact
  },
  props: {
    data: Object,
  },
  setup(props) {
    const component = ref(props.data);

    console.log('preview', component.value)

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
