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
            <!-- Loop Input -->
            <div
              class="q-pa-xs row justify-center"
              :key="childObj.key"
              v-for="childObj in arrayObjEnt(profile.social)"
            >
              <q-btn
                :icon="'fa-brands fa-' + childObj.key"
                color="primary"
                text-color="accent"
                @click="() => openURL(childObj.value)"
              />
              <q-input
                square
                filled
                v-model="profile.social[childObj.key]"
                :label="childObj.key"
              />
              <q-btn
                icon="close"
                color="negative"
                @click="
                  () => {
                    delete profile.social[childObj.key];
                  }
                "
              />
            </div>

            <!-- New input -->
            <h5 class="q-pa-none q-ma-none">Ajouter un lien:</h5>
            <div class="row justify-center">
              <q-btn
                :icon="'fa-brands fa-' + newKey"
                color="primary"
                text-color="accent"
                label="fa-brands fa-"
                @click="
                  () => openURL('https://fontawesome.com/search?s=brands')
                "
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
                v-model="profile.social[newKey]"
                label="Entrez votre lien complet"
                placeholder="https://twitter.com/nom"
              />
              <q-btn
                label="add"
                icon="add"
                color="positive"
                @click="() => profile.social[newKey]"
              />
            </div>

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
import { useQuasar, openURL } from "quasar";
import { arrayObjEnt } from "../../utils";

export default defineComponent({
  name: "ModalSocial",
  setup() {
    const $q = useQuasar();
    const profileStore = useProfileStore();
    const newKey = ref("github");

    if (!profileStore.getProfileLoaded) profileStore.getProfileApi();
    const oldName = profileStore.profile.name;

    const modalSocial = ref(false);
    const profile = ref(profileStore.profile);

    const editProfilSubmit = async (obj) => {
      obj.oldName = oldName;
      await profileStore.editProfileApi(obj);
      $q.notify({
        icon: "thumb_up",
        caption: "Vos réseaux sociaux ont bien été édité !",
        message: "Success !",
        color: "positive",
      });
    };

    return {
      editProfilSubmit,
      modalSocial,
      arrayObjEnt,
      profile,
      openURL,
      newKey,
    };
  },
});
</script>
