<template>
  <div>
    <q-btn
      label="Éditer mon profile"
      color="primary"
      @click="modalProfile = true"
    />

    <q-dialog v-model="modalProfile">
      <q-card>
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Éditer votre profile ?</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pa-md">
          <div class="q-gutter-md text-center" style="width: 500px">
            <q-img
              v-if="profile.file"
              :src="profile.file"
              spinner-color="white"
              width="50vh"
            />
            <q-input outlined v-model="profile.name" label="Nom entreprise" />
            <q-input outlined v-model="profile.mail" label="E-mail" />
            <q-input outlined v-model="profile.phone" label="Telephone" />
            <q-input
              v-model="profile.file"
              outlined
              type="file"
              hint="Native file"
            />
            <q-input
              outlined
              v-model="profile.description"
              label="Description"
              type="textarea"
            />
            <q-btn label="Annulez" color="negative" />
            <q-btn
              label="Confirmez"
              color="primary"
              @click="editProfilSubmit({ ...profile })"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useProfileStore } from "../../stores/profile.store";

export default defineComponent({
  name: "CardProfil",
  setup() {
    const profileStore = useProfileStore();
    profileStore.getProfileApi();
    const oldName = profileStore.profile.name;

    const modalProfile = ref(false);
    const profile = ref(profileStore.profile);

    // console.log("Profile admin", profile);

    const editProfilSubmit = async (obj) => {
      obj.oldName = oldName;
      // console.log("data", obj);
      await profileStore.editProfileApi(obj);
    };

    return {
      file: ref(null),
      editProfilSubmit,
      modalProfile,
      profile,
    };
  },
});
</script>
