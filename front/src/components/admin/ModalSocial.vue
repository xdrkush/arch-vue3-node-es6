<template>
  <div>
    <!-- Modal Edit Social -->
    <q-btn
      label="Éditer vos réseaux sociaux"
      class="q-ma-md"
      color="primary"
      icon="share"
      @click="modalSocial = true"
    />
    <q-dialog v-model="modalSocial">
      <q-card style="min-width: 50vw">
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">Éditer vos réseaux ?</div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section class="q-pa-md">
          <div class="q-gutter-md text-center" style="width: 100%">
            <q-input
              outlined style="width: 100%"
              v-model="profile.social.facebook"
              label="Facebook: https://..."
            />
            <q-input
              outlined style="width: 100%"
              v-model="profile.social.linkedin"
              label="Linkedin: https://..."
            />
            <q-input
              outlined style="width: 100%"
              v-model="profile.social.twitter"
              label="Twitter: https://..."
            />
            <q-input
              outlined style="width: 100%"
              v-model="profile.social.youtube"
              label="Youtube: https://..."
            />
            <q-input
              outlined style="width: 100%"
              v-model="profile.social.instagram"
              label="Instagram: https://..."
            />
            <q-btn label="Annulez" color="negative" />
            <q-btn
              label="Confirmez"
              color="primary"
              @click="() => editProfilSubmit({ ...profile })"
            />
          </div>
        </q-card-section>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref, computed } from "vue";
import { useProfileStore } from "../../stores/profile.store";

export default defineComponent({
  name: "ModalSocial",
  setup() {
    const profileStore = useProfileStore();
    if (!profileStore.getProfileLoaded) profileStore.getProfileApi();
    const oldName = profileStore.profile.name;

    const modalSocial = ref(false);
    const profile = ref(profileStore.profile);

    const editProfilSubmit = async (obj) => {
      obj.oldName = oldName;
      await profileStore.editProfileApi(obj);
    };

    return {
      editProfilSubmit, modalSocial, profile
    };
  },
});
</script>
