<template>
  <div>
    <!-- Form -->
    <q-form class="q-my-md row justify-around" @submit="onSubmit">
      <div class="q-pa-xs" :key="row.key" v-for="row in arrayObjEnt(item)">
        <!-- <div v-if="obj.key === 'name'" /> -->
        <div v-if="row.key === '__v'" />
        <div v-else-if="row.key === 'sections'" />
        <div v-else-if="row.key === 'created'" />
        <div v-else-if="row.key === 'updated'" />
        <div v-else-if="row.key === 'page_id'" />
        <div v-else-if="row.key === 'placement'" />
        <div v-else-if="row.key === 'mail'" />
        <div v-else-if="row.key === 'type'" />
        <div v-else-if="row.key === 'page'" />
        <div v-else-if="row.key === 'isArchived'" />
        <!-- Arch -->
        <div v-else-if="row.key === 'arch'" class="text-center">
          <q-btn color="accent" class="q-ma-xs" @click="() => loadInput(row)">
            {{ row.key }} : Contenu du composant
          </q-btn>
          <!-- <div class="text-h4 q-pa-none"><strong>Arch:</strong></div> -->
          <!-- <div class="row justify-center"> -->
          <!-- Desctruct OBJ 'arch' -->
          <!-- <div :key="childObj.key" v-for="childObj in arrayObjEnt(row.value)"> -->
          <!-- Btn classic for String -->
          <!-- <q-btn
                v-if="childObj.key !== 'array'"
                color="accent"
                class="q-ma-xs"
                @click="() => loadInput(row)"
              >
                {{ childObj.key }} : {{ childObj.value }}
              </q-btn> -->
          <!-- For Array -->
          <!-- <div v-else>
                <div class="row justify-center">
                  <q-btn
                    :key="childArr.name"
                    v-for="childArr in childObj.value"
                    color="accent"
                    class="q-ma-xs"
                    @click="() => loadInput(row)"
                  >
                    ARR : {{ childArr.name }}
                  </q-btn>
                </div>
              </div> -->
          <!-- </div> -->
          <!-- </div> -->
        </div>
        <!-- Color -->
        <div v-else-if="row.key === 'color'" class="text-center full-width">
          <div class="text-h4 q-pa-none"><strong>Color:</strong></div>
          <div class="row justify-center">
            <q-btn
              class="q-ma-xs"
              :key="childObj.key"
              v-for="childObj in arrayObjEnt(row.value)"
              :color="childObj.key"
              :label="childObj.key + ' : ' + childObj.value"
            >
              <q-popup-proxy
                cover
                transition-show="scale"
                transition-hide="scale"
              >
                <q-color
                  class="bg-dark text-white"
                  :model-value="item[row.key][childObj.key]"
                  @change="
                    (val) => {
                      item[row.key][childObj.key] = val;
                      setCssVar(childObj.key, val);
                    }
                  "
                  style="min-width: 320px"
                />
              </q-popup-proxy>
            </q-btn>
          </div>
        </div>
        <!-- Classic -->
        <q-btn
          v-else
          color="primary"
          class="q-ma-xs"
          @click="() => loadInput(row)"
        >
          {{ row.key }} : {{ row.value }}
        </q-btn>
      </div>

      <!-- Button Delete -->
      <q-btn
        class="q-ma-xs"
        v-if="props.delete"
        color="negative"
        @click="() => deleteOBJ()"
      >
        Delete
      </q-btn>

      <!-- Button Submit Form -->
      <q-btn type="submit" color="positive" icon="check"> Save </q-btn>
    </q-form>

    <div v-if="loadedInput">
      <!-- Name condition (Danger no change name page) -->
      <div v-if="loadedKey.key === 'name'">
        <q-input
          v-if="props.section"
          square
          filled
          v-model="item[loadedKey.key]"
          :label="loadedKey.key"
        />
      </div>

      <!-- Color -->
      <!-- <div
        v-else-if="
          loadedKey.key === 'primary' ||
          loadedKey.key === 'secondary' ||
          loadedKey.key === 'accent' ||
          loadedKey.key === 'dark' ||
          loadedKey.key === 'light' ||
          loadedKey.key === 'positive' ||
          loadedKey.key === 'negative' ||
          loadedKey.key === 'info' ||
          loadedKey.key === 'warning'
        "
        class="row justify-center"
      >
        <div>
          <q-badge color="grey-3" text-color="black" class="q-mb-sm">
            {{ loadedKey.key }}
          </q-badge>

          <q-color
            :model-value="item['color'][loadedKey.key]"
            @change="
              (val) => {
                item['color'][loadedKey.key] = val;
                setCssVar(loadedKey.key, val);
              }
            "
            style="min-width: 320px"
          />
        </div>
      </div> -->

      <!-- Key Arch -->
      <div v-else-if="loadedKey.key === 'arch'">
        <div
          class="q-pa-xs"
          :key="arch.key"
          v-for="arch in arrayObjEnt(loadedKey.value)"
        >
          <!-- String -->
          <div v-if="typeof arch.value === 'string'">
            <q-input
              square
              filled
              v-model="item[loadedKey.key][arch.key]"
              :label="arch.key"
            />
          </div>

          <!-- Array -->
          <div
            v-else-if="typeof arch.value === 'object'"
            :key="itm.key"
            v-for="(itm, index) in arch.value"
          >
            <q-separator />
            <p> <strong> {{ itm.name }} </strong> </p>
            <div
              class="q-pa-xs"
              :key="obj.value.name"
              v-for="obj in arrayObjEnt(itm)"
            >
              <q-input
                v-model="item[loadedKey.key][arch.key][index][obj.key]"
                square filled
                :label="obj.key"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- Type Object -->
      <div v-else-if="typeof loadedKey.value === 'object'">
        <div
          class="q-pa-xs"
          :key="childObj.key"
          v-for="childObj in arrayObjEnt(item[loadedKey.key])"
        >
          <q-input
            square
            filled
            v-model="item[loadedKey.key][childObj.key]"
            :label="childObj.key"
          />
        </div>
      </div>

      <!-- Toogle -->
      <div v-else-if="typeof loadedKey.value === 'boolean'">
        <q-toggle
          v-model="item[loadedKey.key]"
          checked-icon="check"
          color="green"
          @click="(e) => changeValue(status)"
          :label="`${loadedKey.key} is ${item[loadedKey.key]}`"
          unchecked-icon="clear"
        />
      </div>

      <!-- Select Icon -->
      <div v-else-if="loadedKey.key === 'icon'">
        <q-select
          v-model="item[loadedKey.key]"
          :options="ICONS"
          option-value="value"
          option-label="label"
          emit-value
          map-options
          square
          filled
        >
          <template v-slot:prepend>
            <q-icon :name="loadedKey.value" />
          </template>
        </q-select>
      </div>

      <!-- Input basic String -->
      <div v-else-if="typeof loadedKey.value === 'string'">
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
          square
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
import { ICONS } from "../../utils";
import { useQuasar } from "quasar";
import { useMonitStore } from "src/stores/monit.store";
import { setCssVar } from "quasar";

export default {
  name: "FormEdit",
  props: {
    page: Boolean,
    section: Boolean,
    pageofsection: Object,
    data: Object,
    editFn: Function,
    delete: Boolean,
    deleteFn: Function,
  },
  setup(props) {
    const $q = useQuasar();
    const monitStore = useMonitStore();

    const item = ref(props.data);
    const loadedKey = ref({});
    const loadedInput = ref(false);
    const oldName = item.value.name;

    let arrayObjEnt = (obj) =>
      Object.entries(obj).map((arr, index) => {
        return { key: arr[0], value: arr[1] };
      });

    const loadInput = (data) => {
      console.log("loadInput", typeof data, data);
      loadedInput.value = true;
      loadedKey.value = data;
      item[data.key] = data;
    };

    const onSubmit = () => {
      if (props.section)
        props.editFn({
          section: { ...item.value, oldName },
          page: props.pageofsection,
        });
      else props.editFn({ ...item.value, oldName });

      $q.notify({
        icon: "thumb_up",
        caption: `${oldName} à bien été creer/modifier `,
        message: "Success !",
        color: "positive",
      });
    };

    const deleteOBJ = () => {
      if (props.section)
        props.deleteFn({
          section: { ...item.value, oldName },
          page: props.pageofsection,
        });
      else props.deleteFn({ ...item.value, oldName });
      $q.notify({
        icon: "thumb_up",
        caption: `${oldName} à bien été supprimer`,
        message: "Success !",
        color: "positive",
      });
    };

    const maxChar = (value, limit) => value.length <= limit;

    return {
      maxChar,
      item,
      props,
      arrayObjEnt,
      loadedInput,
      loadedKey,
      loadInput,
      onSubmit,
      deleteOBJ,
      ICONS,
      monitStore,
      setCssVar,
    };
  },
};
</script>