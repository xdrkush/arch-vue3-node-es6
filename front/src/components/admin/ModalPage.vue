<template>
  <div>
    <!-- Button Modal Page -->
    <q-btn icon="add" label="New" @click="modalPage = true" />

    <!-- Modal Page -->
    <q-dialog v-model="modalPage">
      <q-card style="min-width: 50vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Creer une page ?</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pa-md">
          <div class="q-gutter-md text-center" style="width: 100%">
          <!-- Name -->
            <q-input
              outlined
              style="width: 100%"
              v-model="page.name"
              label="Name"
            />
            <!-- Icon -->
            <q-select
              v-model="page.icon"
              :options="ICONS"
              option-value="value"
              option-label="label"
              emit-value
              map-options
              square
              filled
            >
              <template v-slot:prepend>
                <q-icon :name="page.icon" />
              </template>

              <template v-slot:option="scope">
                <q-item
                  clickable
                  @click="() => (page.icon = scope.opt.value)"
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
            <!-- Title -->
            <q-input
              outlined
              style="width: 100%"
              v-model="page.title"
              label="Title"
            />
            <!-- Description -->
            <q-input
              outlined
              style="width: 100%"
              type="textarea"
              v-model="page.description"
              label="descritpion"
            />
            <!-- Button's -->
            <q-btn label="Annulez" color="negative" />
            <q-btn
              label="Confirmez"
              color="primary"
              @click="() => CreatePageSubmit({ ...page })"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMonitStore } from "../../stores/monit.store";
import { useQuasar } from "quasar";
import { ICONS } from "../../utils";

export default defineComponent({
  name: "modalPage",
  setup() {
    const monitStore = useMonitStore();
    const $q = useQuasar();
    const modalPage = ref(false);
    let page = ref({});

    const CreatePageSubmit = async (obj) => {
      obj.name = obj.name.toLowerCase();
      await monitStore.createPage(obj);
      modalPage.value = false;
      $q.notify({
        icon: "thumb_up",
        caption: "Votre page à bien été créée !",
        message: "Success !",
        color: "positive",
      });
    };

    return {
      CreatePageSubmit,
      modalPage,
      page,
      ICONS
    };
  },
});
</script>
