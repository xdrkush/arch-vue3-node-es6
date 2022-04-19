<template>
  <q-page>
    <h2>Article Page</h2>
    <SearchBarArticle/>
    <ListMansory/>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";
import ListMansory from "components/articles/ListMansory.vue"
import SearchBarArticle from "components/articles/SearchBarArticle.vue"

export default defineComponent({
  name: "IndexPage",
  components: {
    SearchBarArticle, ListMansory
  }
});
</script>
