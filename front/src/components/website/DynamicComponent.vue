<template>
  <div style="min-height: 100%">
    <div v-if="component.type.toLowerCase().includes('header')">
      <DynamicHeader :data="component" :demo="demo" />
    </div>
    <div v-else-if="component.type.toLowerCase().includes('listcard')">
      <DynamicListCard :data="component" :demo="demo" />
    </div>
    <div v-else-if="component.type.toLowerCase().includes('text')">
      <DynamicText :data="component" :demo="demo" />
    </div>
    <div v-else-if="component.type.toLowerCase().includes('listimg')">
      <DynamicListImg :data="component" :demo="demo" />
    </div>
    <div v-else-if="component.type.toLowerCase().includes('banner')">
      <DynamicBanner :data="component" :demo="demo" />
    </div>
    <div v-else-if="component.type.toLowerCase().includes('contact')">
      <DynamicContact :data="component" :demo="demo" />
    </div>
    <div v-else>
      <p>Une erreur de composant est survenu !</p>
    </div>
  </div>
</template>

<script>
import { ref, defineComponent, watch } from "vue";
import DynamicHeader from "./headers/DynamicHeader.vue";
import DynamicListCard from "./listcards/DynamicListCard.vue";
import DynamicListImg from "./listimgs/DynamicListImg.vue";
import DynamicBanner from "./banners/DynamicBanner.vue";
import DynamicContact from "./contacts/DynamicContact.vue";
import DynamicText from "./texts/DynamicText.vue";

export default defineComponent({
  name: "PreviewComp",
  components: {
    DynamicHeader,
    DynamicListCard,
    DynamicListImg,
    DynamicBanner,
    DynamicContact,
    DynamicText,
  },
  props: ['data', 'demo'],
  setup(props) {
    const component = ref(props.data);

    watch(
      () => props.data,
      (val) => {
        component.value = val
      }
    );

    return {
      component,
    };
  },
});
</script>
