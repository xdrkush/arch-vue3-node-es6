<template>
  <div>
    <!-- Modal Edit Profil -->
    <q-btn
      label="Éditer mon profile"
      class="q-ma-md"
      color="primary"
      icon="home"
      @click="modalProfile = true"
    />
    <q-dialog v-model="modalProfile">
      <q-card style="min-width: 50vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Éditer votre profile ?</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pa-md">
          <div class="q-gutter-md text-center" style="width: 100%;">
            <q-img
              v-if="profile.file"
              :src="profile.file"
              spinner-color="white"
              width="50vh"
            />
            <q-input
              outlined style="width: 100%"
              v-model="profile.nameCompany"
              label="Nom entreprise"
              :error="!maxChar(profile.nameCompany, 32)"
            >
              <template v-slot:error> Max 32 Characters </template>
            </q-input>
            <q-input outlined style="width: 100%" v-model="profile.firstname" label="Prénom" />
            <q-input outlined style="width: 100%" v-model="profile.lastname" label="Nom" />
            <q-input outlined style="width: 100%" v-model="profile.address" label="Addresse" />
            <q-input
              outlined style="width: 100%"
              v-model="profile.phone"
              label="Telephone"
              :error="!maxChar(profile.phone, 15)"
            >
              <template v-slot:error> Max 15 Characters </template> </q-input
            >/>
            <q-input
              disable style="width: 100%"
              v-model="profile.file"
              outlined
              type="file"
              hint="Native file"
            />
            <q-input
              outlined style="width: 100%"
              v-model="profile.description"
              label="Description"
              type="textarea"
              :error="!maxChar(profile.description, 800)"
            >
              <template v-slot:error> Max 800 Characters </template>
            </q-input>
            <q-btn label="Annulez" color="negative" />
            <q-btn
              v-if="!maxChar(profile.description, 800)"
              label="Confirmez"
              color="primary"
            />
            <q-btn
              v-else
              label="Confirmez"
              color="positive"
              @click="() => editProfilSubmit({ ...profile })"
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
  name: "ModalProfile",
  setup() {
    const profileStore = useProfileStore();
    if (!profileStore.getProfileLoaded) profileStore.getProfileApi();
    const oldName = profileStore.profile.name;

    const modalProfile = ref(false);
    const profile = ref(profileStore.profile);

    const editProfilSubmit = async (obj) => {
      obj.oldName = oldName;
      await profileStore.editProfileApi(obj);
    };

    const maxChar = (value, limit) => value.length <= limit;

    return {
      file: ref(null),
      editProfilSubmit,
      modalProfile,
      profile,
      maxChar,
    };
  },
});
</script>
