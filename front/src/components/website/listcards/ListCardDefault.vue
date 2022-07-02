<template>
  <div class="q-my-xl text-center q-pa-md q-mx-auto" style="max-width: 1280px">
    <h2 class="q-my-md">{{ parent.title }}</h2>
    <h6 class="q-mb-md q-mt-xs">
      {{ parent.description }}
    </h6>

    <div class="row justify-around">
      <div
        class="col-xl-3 col-md-4 col-sm-6 col-xs-12 q-mx-none"
        :key="item.title"
        v-for="item in parent.arch.array"
      >
        <!-- No refer -->
        <q-card v-if="!item.isRefer" class="q-ma-xs shadow-10">
          <q-responsive
            :ratio="
              item.ratio === '16/9' ? 16 / 9 : item.ratio === '4/3' ? 4 / 3 : 1
            "
          >
            <q-img
              class="border-radius-inherit"
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
        <!-- Refered -->
        <q-card v-else class="q-ma-md shadow-10">
          <q-responsive
            :ratio="
              item.ratio === '16/9' ? 16 / 9 : item.ratio === '4/3' ? 4 / 3 : 1
            "
          >
            <q-img
              class="border-radius-inherit"
              :src="
                item.image
                  ? item.image
                  : 'https://cdn.quasar.dev/img/parallax2.jpg'
              "
            >
              <div class="absolute-bottom text-h6">
                {{ item.title }}
              </div>
            </q-img>
          </q-responsive>

          <q-item tag="a" :href="`/p/${item.refer}`">
            <q-card-section>
              {{ item.description }}
            </q-card-section>
          </q-item>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { model } from "../model";

export default {
  name: "ListCardDefault",
  props: ["data", "demo"],
  setup(props) {
    const parent = ref(props.demo ? model : props.data);

    return {
      parent,
    };
  },
};
</script>
