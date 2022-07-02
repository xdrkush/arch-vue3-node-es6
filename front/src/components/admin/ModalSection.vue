<template>
  <div>
    <!-- Button Modal Section -->
    <div class="text-center q-my-xs">
      <q-btn
        icon="add"
        color="primary"
        class="text-center"
        label="Add Section"
        @click="modalSection = true"
      />
    </div>

    <!-- Modal Section -->
    <q-dialog v-model="modalSection" full-width>
      <q-card style="min-width: 60%; min-height: 92vh">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Ajouter une section ?</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pa-md">
          <div class="q-gutter-md" style="width: 100%">
            <div class="row q-my-xs justify-around">
              <div class="q-gutter-md">
                <q-select
                  style="min-width: 250px"
                  filled
                  v-model="preview"
                  :options="options"
                  options-cover
                  stack-label
                  @change="onChange($event)"
                  label="Standard"
                />
              </div>

              <q-space />

              <div class="text-center">
                <q-btn label="Annulez" color="negative" class="q-mx-xs" />
                <q-btn
                  class="q-mx-xs"
                  label="Confirmez"
                  color="primary"
                  @click="() => AddSectionToPage({ ...preview })"
                />
              </div>
            </div>

            <!-- <FormEdit
              :btnSave="false"
              :data="preview"
              :editFn="monitStore.editPage"
              :delete="false"
              :deleteFn="monitStore.deletePage"
            /> -->

            <div class="row justify-around" style="max-width: 10">
              <FormEdit
                :btnSave="false"
                :data="preview"
                :pageofsection="pageLoad.value"
                :section="true"
                :delete="false"
              />
            </div>

            <!-- Components Preview -->
            <div class="row justify-around">
              <q-responsive class="col-md-8 col-sm-12 q-px-md" :ratio="16 / 9">
                <!-- <Preview :comp="preview" /> -->
                <DynamicComponent :data="preview" :demo="false" />
              </q-responsive>

              <!-- Format mobile -->
              <!-- <q-responsive class="col-md-4 col-sm-12 q-px-md" :ratio="1" style="max-width: 320px;  max-height: 450px">
                <Preview :comp="preview" />
              </q-responsive> -->
            </div>
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useMonitStore } from "../../stores/monit.store";
import DynamicComponent from "../website/DynamicComponent.vue";
import FormEdit from "./FormEdit.vue";
import { model } from "../website/model";

export default defineComponent({
  name: "modalSection",

  components: {
    DynamicComponent,
    FormEdit,
  },

  props: ["page"],

  setup(props) {
    const $q = useQuasar();
    const monitStore = useMonitStore();
    
    const modalSection = ref(false);
    let pageLoad = ref({ ...props.page });
    let options = [
      { ...model, label: "HeaderDefault", value: "headerDefault", type: "headerDefault" },
      { ...model, label: "Header Slider", value: "headerSlider", type: "headerSlider" },
      { ...model, label: "ListCardDefault", value: "listCardDefault", type: "listCardDefault" },
      { ...model, label: "textDefault", value: "textDefault", type: "textDefault" },
      { ...model, label: "listImgDefault", value: "listImgDefault", type: "listImgDefault" },
      { ...model, label: "listImg5050", value: "listImg5050", type: "listImg5050" },
      { ...model, label: "bannerDefault", value: "bannerDefault", type: "bannerDefault" },
      { ...model, label: "Contact Map", value: "contactMap", type: "contactMap" },
      { ...model, label: "Contact Simple", value: "contactDefault", type: "contactDefault" },
    ];
    let preview = ref(options[0]);

    const AddSectionToPage = async (section) => {
      await monitStore.addSectionToPage({ section, page: { ...pageLoad.value }});

      $q.notify({
        icon: "thumb_up",
        caption: `section: ${section.name}, ajouter sur la page: ${pageLoad.value.name}`,
        message: "Success !",
        color: "positive",
      });
    };

    const onChange = (value) => {
      // console.log("OnCHange", value);
    };

    return {
      AddSectionToPage,
      modalSection,
      pageLoad,
      options,
      preview,
      onChange,
      monitStore,
    };
  },
  watch: {
    page() {
      this.pageLoad = this.page;
    },
  },
});
</script>
