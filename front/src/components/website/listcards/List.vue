<template>
  <div class="q-my-xl text-center q-pa-md q-mx-auto" style="max-width: 1280px">
    <h2 class="q-my-md">{{ parent.title || title }}</h2>
    <h6 class="q-mb-md q-mt-xs">{{ parent.description || description }}</h6>

    <div class="row justify-around q-gutter-xs">
      <div
        class="col-md-4 col-sm-12 col-xs-12 q-my-md q-mx-none"
        :key="item.title"
        v-for="item in parent.arch.array"
      >
        <q-card class="q-ma-xs">
          <q-responsive
            :ratio="
              item.ratio === '16/9' 
                ? 16 / 9 
                : item.ratio === '4/3' 
                  ? 4 / 3 
                  : 1
            "
          >
            <q-img
              :src="
                item.image
                  ? item.image
                  : 'https://cdn.quasar.dev/img/parallax2.jpg'
              "
            >
              <div class="absolute-bottom text-h6">{{ item.title }}</div>
            </q-img>
          </q-responsive>

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
