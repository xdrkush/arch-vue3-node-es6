<template>
  <div>
    <!-- Form -->
    <q-form class="q-my-md row justify-around items-center" @submit="onSubmit">
      <div class="q-pa-xs" :key="row.key" v-for="row in arrayObjEnt(item)">
        <!-- <div v-if="obj.key === 'name'" /> -->
        <div v-if="row.key === '__v'" />
        <div v-else-if="row.key === 'sections'" />
        <div v-else-if="row.key === 'created'" />
        <div v-else-if="row.key === 'updated'" />
        <div v-else-if="row.key === 'page_id'" />
        <div v-else-if="row.key === 'placement'" />
        <div v-else-if="row.key === 'modules'" />
        <div v-else-if="row.key === 'mail'" />
        <div v-else-if="row.key === 'type'" />
        <div v-else-if="row.key === 'key'" />
        <div v-else-if="row.key === 'value'" />
        <div v-else-if="row.key === 'name'" />
        <div v-else-if="row.key === 'label'" />
        <div v-else-if="row.key === 'page'" />
        <div v-else-if="row.key === 'navbar'" />
        <div v-else-if="row.key === 'sidebar'" />
        <div v-else-if="row.key === 'footer'" />
        <div v-else-if="row.key === 'module'" />
        <div v-else-if="row.key === 'isArchived'" />
        <!-- Social -->
        <div v-else-if="row.key === 'social'" class="text-center">
          <q-btn
            color="accent"
            rounded
            class="q-ma-xs"
            @click="() => loadInput(row)"
          >
            {{ row.key }} : Edit yours link
          </q-btn>
        </div>
        <!-- Arch -->
        <div v-else-if="row.key === 'arch'" class="text-center">
          <q-btn
            color="accent"
            rounded
            class="q-ma-xs"
            @click="() => loadInput(row)"
          >
            {{ row.key }} : Contenu du composant
          </q-btn>
        </div>
        <!-- Color -->
        <div v-else-if="row.key === 'color'" class="text-center">
          <div class="text-h4 q-pa-none"><strong>Color:</strong></div>
          <div class="row justify-center" style="max-width: 720px">
            <q-btn
              class="q-ma-xs"
              :key="childObj.key"
              v-for="childObj in arrayObjEnt(row.value)"
              :style="'background-color: ' + getCssVar(childObj.key)"
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
          rounded
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
      <q-btn
        v-if="btnSave"
        type="submit"
        color="positive"
        icon="save"
        style="max-height: 45px"
      >
        Save
      </q-btn>
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

          <!-- <div v-if="typeof arch.key === 'placement'" /> -->

          <!-- Array -->
          <div v-else-if="typeof arch.value === 'object'" class="text-center">
            <div
              :key="itm.key"
              v-for="(itm, index) in arch.value"
              class="text-center"
            >
              <q-separator />
              <div class="row justify-center">
                <q-expansion-item
                  expand-separator
                  icon="edit"
                  :label="itm.name + ' : ' + index"
                  color="accent"
                  :caption="itm.title"
                >
                  <q-card>
                    <q-card-section class="row justify-around">
                      <div
                        class="q-pa-xs"
                        :key="obj.value.name"
                        v-for="obj in arrayObjEnt(itm)"
                      >
                        <div v-if="obj.key === 'placement'" />

                        <!-- Select Ratio -->
                        <div v-else-if="obj.key === 'ratio'">
                          <q-select
                            v-model="
                              item[loadedKey.key][arch.key][index][obj.key]
                            "
                            :options="RATIO"
                            option-value="value"
                            option-label="label"
                            emit-value
                            map-options
                            square
                            filled
                          >
                            <template v-slot:option="scope">
                              <q-item
                                clickable
                                @click="
                                  () =>
                                    (item[loadedKey.key][arch.key][index][
                                      obj.key
                                    ] = scope.opt.value)
                                "
                              >
                                <q-item-section>
                                  <q-item-label>{{
                                    scope.opt.value
                                  }}</q-item-label>
                                </q-item-section>
                              </q-item>
                            </template>

                            <template v-slot:after-options>
                              <q-item>
                                <q-item-section> end ... </q-item-section>
                              </q-item>
                            </template>
                          </q-select>
                        </div>

                        <!-- Image -->
                        <div class="row" v-else-if="obj.key === 'image'">
                          <q-btn
                            v-if="obj.key === 'image'"
                            icon="photo"
                            @click="() => openURL('https://pixabay.com/fr/')"
                          >
                            <q-tooltip
                              anchor="bottom middle"
                              style="max-width: 420px"
                              class="text-center"
                              self="top middle"
                              :offset="[10, 10]"
                            >
                              <strong>
                                Vous pouvez directement rechercher dans une des
                                nombreuses librairies d'images gratuite en ligne
                                tel que, Pixabay, Unsplash, Pexels,
                                ShutterStock, ... un clic droit puis copier
                                l'adresse de l'image enfin coller le dans le
                                champs.
                              </strong>
                            </q-tooltip>
                          </q-btn>
                          <q-btn
                            v-if="obj.key === 'image'"
                            icon="upload"
                            @click="() => openURL('https://www.zupimages.net/')"
                          >
                            <q-tooltip
                              anchor="bottom middle"
                              style="max-width: 420px"
                              class="text-center"
                              self="top middle"
                              :offset="[10, 10]"
                            >
                              <strong>
                                Nous vous demandons de stocker vos images sur un
                                hébergeur puis de collez le liens.
                              </strong>
                            </q-tooltip>
                          </q-btn>
                          <q-btn
                            v-if="obj.key === 'image'"
                            icon="help"
                            @click="() => openURL('https://pixabay.com/fr/')"
                          >
                            <q-tooltip
                              anchor="bottom middle"
                              style="max-width: 420px"
                              class="text-center"
                              self="top middle"
                              :offset="[10, 10]"
                            >
                              <strong>
                                Nous vous demandons de stocker vos images sur un
                                hébergeur puis de collez le liens.
                              </strong>
                            </q-tooltip>
                          </q-btn>

                          <q-input
                            v-model="
                              item[loadedKey.key][arch.key][index][obj.key]
                            "
                            square
                            filled
                            :label="obj.key"
                          />
                        </div>

                        <div v-else-if="obj.key === 'align'">
                          <q-select
                            v-model="
                              item[loadedKey.key][arch.key][index][obj.key]
                            "
                            :options="[
                              { id: 0, label: 'left', name: 'label', value: 'left' },
                              { id: 1, label: 'right', name: 'label', value: 'right' },
                            ]"
                            option-value="value"
                            option-label="label"
                            emit-value
                            map-options
                            square
                            filled
                          >
                            <template v-slot:option="scope">
                              <q-item
                                clickable
                                @click="
                                  () =>
                                    (item[loadedKey.key][arch.key][index][
                                      obj.key
                                    ] = scope.opt.value)
                                "
                              >
                                <q-item-section>
                                  <q-item-label>
                                    {{ scope.opt.value }}
                                  </q-item-label>
                                </q-item-section>
                              </q-item>
                            </template>
                          </q-select>
                        </div>

                        <!-- Textarea -->
                        <div
                          class="col-12 col-md-12 col-xs-12"
                          v-else-if="obj.key === 'description'"
                        >
                          <q-input
                            v-model="
                              item[loadedKey.key][arch.key][index][obj.key]
                            "
                            filled
                            square
                            class="col-"
                            type="textarea"
                            :label="loadedKey.key"
                          />
                        </div>

                        <!-- Text input -->
                        <q-input
                          v-else
                          class="col-md-4 col-xs-12"
                          v-model="
                            item[loadedKey.key][arch.key][index][obj.key]
                          "
                          square
                          filled
                          :label="obj.key"
                        />
                      </div>
                    </q-card-section>
                  </q-card>
                </q-expansion-item>

                <q-btn
                  icon="close"
                  color="negative"
                  @click="
                    () => {
                      delete item[loadedKey.key][arch.key].splice(index, 1);
                    }
                  "
                />
              </div>
            </div>

            <q-btn
              label="add"
              icon="add"
              color="positive"
              @click="
                () => {
                  item[loadedKey.key][arch.key][
                    item[loadedKey.key][arch.key].length
                  ] = {
                    ...item[loadedKey.key][arch.key][
                      item[loadedKey.key][arch.key].length - 1
                    ],
                    title: 'new-' + Date.now(),
                    name: 'new-' + Date.now(),
                  };
                }
              "
            />
          </div>
          <div v-else>Erreur Component</div>
        </div>
      </div>

      <!-- Key Social -->
      <div v-else-if="loadedKey.key === 'social'" class="text-center">
        <div class="row justify-around">
          <div
            class="q-pa-xs row justify-center"
            :key="childObj.key"
            v-for="childObj in arrayObjEnt(item[loadedKey.key])"
          >
            <q-input
              square
              filled
              v-model="item[loadedKey.key][childObj.key]"
              :label="childObj.key"
            />
            <q-btn
              icon="close"
              color="negative"
              @click="
                () => {
                  delete item[loadedKey.key][childObj.key];
                }
              "
            />
          </div>
        </div>
        <h5 class="q-pa-none q-ma-none">Ajouter un lien:</h5>
        <div class="row justify-center">
          <q-btn
            :icon="'fa-brands fa-' + newKey"
            color="primary"
            text-color="accent"
            label="fa-brands fa-"
            @click="() => openURL('https://fontawesome.com/search?s=brands')"
          />
          <q-input
            square
            filled
            v-model="newKey"
            label="Nom du lien social"
            placeholder="Twitter"
          />
          <q-input
            square
            filled
            v-model="item[loadedKey.key][newKey]"
            label="Entrez votre lien complet"
            placeholder="https://twitter.com/nom"
          />
          <q-btn
            label="add"
            icon="add"
            color="positive"
            @click="() => item[loadedKey.key][newKey]"
          />
        </div>
      </div>

      <!-- Type Object -->
      <div v-else-if="typeof loadedKey.value === 'object'">
        <div
          class="q-pa-xs row full-width"
          :key="childObj.key"
          v-for="childObj in arrayObjEnt(item[loadedKey.key])"
        >
          <q-input
            square
            filled
            v-model="item[loadedKey.key][childObj.key]"
            :label="childObj.key"
          />
          <q-btn icon="close" color="negative" />
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

          <template v-slot:option="scope">
            <q-item
              clickable
              @click="() => (item[loadedKey.key] = scope.opt.value)"
            >
              <q-item-section avatar>
                <q-icon :name="scope.opt.value" />
              </q-item-section>

              <q-item-section>
                <q-item-label>{{ scope.opt.value }}</q-item-label>
              </q-item-section>
            </q-item>
          </template>

          <template v-slot:after-options>
            <q-item>
              <q-item-section> end ... </q-item-section>
            </q-item>
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
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { ICONS, RATIO } from "../../utils";
import { useQuasar, openURL, getCssVar } from "quasar";
import { useMonitStore } from "src/stores/monit.store";
import { setCssVar } from "quasar";
import { arrayObjEnt, maxChar } from "../../utils";

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
    btnSave: Boolean,
  },
  setup(props) {
    const $q = useQuasar();
    const monitStore = useMonitStore();

    const item = ref(props.data);
    const loadedKey = ref({});
    const loadedInput = ref(false);
    const oldName = item.value.name;
    const newKey = ref("github");

    const loadInput = (data) => {
      // console.log("loadInput", typeof data, data);
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

    return {
      maxChar,
      item,
      props,
      newKey,
      openURL,
      arrayObjEnt,
      loadedInput,
      loadedKey,
      loadInput,
      onSubmit,
      deleteOBJ,
      ICONS,
      RATIO,
      monitStore,
      setCssVar,
      getCssVar,
    };
  },
};
</script>