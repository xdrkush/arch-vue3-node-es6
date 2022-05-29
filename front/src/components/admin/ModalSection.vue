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
    <q-dialog v-model="modalSection" medium>
      <q-card style="min-width: 60%" >
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Ajouter une section ?</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pa-md">
          <div class="q-gutter-md" style="width: 100%">
            <!-- Components Preview -->
            <div>
              <Preview :comp="preview" />
            </div>

            <div class="q-gutter-md">
              <q-select
                filled
                v-model="preview"
                :options="options"
                options-cover
                stack-label
                @change="onChange($event)"
                label="Standard"
              />
            </div>

            <div class="text-center">
              <q-btn label="Annulez" color="negative" />
              <q-btn
                label="Confirmez"
                color="primary"
                @click="() => AddSectionToPage({ ...preview })"
              />
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
import Preview from "./Preview";

export default defineComponent({
  name: "modalSection",
  
  components: {
    Preview,
  },

  props: {
    page: Object,
  },

  setup(props) {
    const $q = useQuasar()
    const monitStore = useMonitStore();
    const modalSection = ref(false);
    let pageLoad = ref({ ...props.page });
    let options = [
      { label: "Header", value: "header", type: "header" },
      { label: "List", value: "list", type: "list" },
      { label: "Contact", value: "contact", type: "contact" },
    ];
    let preview = ref({ label: "Header", value: "header" });

    console.log("modalSection", options);

    const AddSectionToPage = async (section) => {
      await monitStore.addSectionToPage({ section, page: { ...props.page } });
      $q.notify({
        icon: "thumb_up",
        caption: `section: ${section.name}, ajouter sur la page: ${page.name}`,
        message: "Success !",
        color: "positive",
      });
    };

    const onChange = (value) => {
      console.log("OnCHange", value);
    };

    return {
      AddSectionToPage,
      modalSection,
      pageLoad,
      options,
      preview,
      onChange,
    };
  },
  watch: {
    page() {
      this.pageLoad = this.page;
    },
  },
});
</script>
