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
    <q-dialog v-model="modalSection" fullWidth>
      <q-card style="min-width: 60%">
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
    const $q = useQuasar();
    const monitStore = useMonitStore();
    const modalSection = ref(false);
    let pageLoad = ref({ ...props.page });
    let options = [
      {
        label: "Header",
        value: "header",
        type: "header",
        arch: {
          title: "title Default",
          type: "header",
          placement: "0",
          array: [
            {
              placement: "1",
              name: "montagne",
              image:
                "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
              title: "Super Titre",
              subtitle: "Super subtitle",
            },
            {
              placement: "2",
              name: "block",
              image:
                "https://cdn.pixabay.com/photo/2016/05/09/17/26/background-texture-1382002_960_720.jpg",
              title: "Super Titre",
              subtitle: "Super subtitle",
            },
            {
              placement: "3",
              name: "architecture",
              image:
                "https://cdn.pixabay.com/photo/2018/05/11/09/29/glass-3389935_960_720.jpg",
              title: "Super Titre",
              subtitle: "Super subtitle",
            },
            {
              placement: "4",
              name: "canna",
              image:
                "https://i1.wp.com/greenacresgroupca.com/wp-content/uploads/2018/05/istock-835508564.jpg?fit=724%2C483&ssl=1",
              title: "Super Titre",
              subtitle: "Super subtitle",
            },
          ],
        },
      },
      {
        label: "List",
        value: "list",
        type: "list",
        page: "home",
        type: "list",
        name: "list-" + Date.now(),
        title: "List default script",
        description: "Description section list Default script",
        arch: {
          array: [
            {
              placement: "1",
              name: "default1",
              title: "Titre default 1",
              subtitle: "Subtitle default 1",
              description:
                "description Hello Quasar js c'est de la balle default 1",
              image:
                "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
            },
            {
              placement: "2",
              name: "default2",
              title: "Titre default 2",
              subtitle: "Subtitle default 2",
              description:
                "description Hello Quasar js c'est de la balle default 2",
              image:
                "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
            },
            {
              placement: "3",
              name: "default3",
              title: "Titre default 3",
              subtitle: "Subtitle default 3",
              description:
                "description Hello Quasar js c'est de la balle default 3",
              image:
                "https://cdn.pixabay.com/photo/2019/11/06/12/54/nature-4606064_960_720.jpg",
            },
          ],
        },
      },
      { label: "Contact", value: "contact", type: "contact" },
    ];
    let preview = ref(options[0]);

    // console.log("modalSection", pageLoad.value);

    const AddSectionToPage = async (section) => {
      // console.log('addSectionToPage', section, pageLoad.value)
      await monitStore.addSectionToPage({ section, page: { ...pageLoad.value } });
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
    };
  },
  watch: {
    page() {
      this.pageLoad = this.page;
    },
  },
});
</script>
