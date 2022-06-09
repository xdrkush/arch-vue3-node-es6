<template>
  <div class="q-pa-md text-center">
    <h2>{{ parent.title || title }}</h2>

    <div class="row justify-around q-gutter-xs">
      <div :key="item.title" v-for="item in parent.arch.array">
        <q-card class="my-card col-3">
          <q-img src="https://cdn.quasar.dev/img/parallax2.jpg">
            <div class="absolute-bottom text-h6">{{ item.title }}</div>
          </q-img>

          <q-card-section>
            {{ item.description }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "ListComp",
  props: {
    data: Object,
  },
  setup(props) {
    const parent = ref(props.data);

    return {
      title: "Default List",
      description: "Default Description List",
      parent,
    };
  },
};
</script>
