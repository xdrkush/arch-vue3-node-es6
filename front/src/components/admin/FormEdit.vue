<template>
  <div>
    <!-- Form -->
    <q-form class="q-my-xs row" @submit="onSubmit">
      <div class="q-pa-xs" :key="obj.title" v-for="obj in arrayObjEnt(item)">
        <q-btn color="primary" @click="() => loadInput(obj)">
          {{ obj.key }} : {{ obj.value }}
        </q-btn>
      </div>

      <q-btn type="submit" color="positive"> Save </q-btn>
    </q-form>

    <div v-if="loadedInput">
      <!-- Select Icon -->
      <div v-if="loadedKey.key === 'name'">
      </div>

      <!-- Select Icon -->
      <div v-if="loadedKey.key === 'icon'">
        <q-select
          v-model="item[loadedKey.key]"
          :options="['home', 'phone']"
          :label="loadedKey.key"
          square
          filled
        >
          <template v-slot:prepend>
            <q-icon :name="loadedKey.value" />
          </template>
        </q-select>
      </div>

      <!-- Input basic -->
      <div v-else-if="loadedKey.key !== 'description'">
        <q-input
          square
          filled
          v-model="item[loadedKey.key]"
          :label="loadedKey.key"
        />
      </div>

      <!-- Textarea -->
      <div v-else-if="loadedKey.key === 'description'">
        <q-input
          v-model="item[loadedKey.key]"
          filled
          class="col-10"
          type="textarea"
          :label="loadedKey.key"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "FormEdit",
  props: {
    data: Object,
    fn: Function,
  },
  setup(props) {
    const data = ref(props.data);
    const loadedKey = ref({});
    const loadedInput = ref(false);
    const oldName = data.value.name;

    let arrayObjEnt = (obj) => Object.entries(obj).map((arr, index) => {
      return { key: arr[0], value: arr[1] };
    });

    const loadInput = (data) => {
      console.log('loadInput', data)
      loadedInput.value = true;
      loadedKey.value = data;
      data[data.key] = data
    };

    const onSubmit = () => {
      props.fn({...data.value, oldName});
    };

    return {
      item: data,
      arrayObjEnt,
      loadedInput,
      loadedKey,
      loadInput,
      onSubmit,
    };
  },
};
</script>