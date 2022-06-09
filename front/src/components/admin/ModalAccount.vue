<template>
  <div>
    <!-- Modal Edit Account -->
    <q-btn
      label="Éditer mon compte"
      class="q-ma-md"
      color="primary"
      icon="shield"
      @click="modalAccount = true"
    />
    <q-dialog v-model="modalAccount">
      <q-card style="min-width: 50vw" >
        <q-card-section class="row items-center q-pb-none">
          <div class="text-h6">
            {{
              !editPassword
                ? "Éditer votre compte ?"
                : "Éditer votre mot de passe ?"
            }}
          </div>
          <q-space />
          <q-btn icon="close" flat round dense v-close-popup />
        </q-card-section>

        <q-card-section v-if="!editPassword" class="q-pa-md">
          <div class="q-gutter-md text-center" style="width: 100%">
            <q-input outlined v-model="profile.name" label="Nom User (Login)" />
            <q-input outlined v-model="profile.mail" label="E-mail" />
            <p>Veuillez entrez votre mot de passe pour confirmer:</p>
            <q-input
              type="password"
              outlined
              v-model="profile.Password"
              label="Password"
            />
            <q-btn
              v-if="!editPassword"
              label="Éditez mot de passe"
              color="warning"
              @click="editPassword = true"
            />
            <q-btn label="Annulez" color="negative" />
            <q-btn
              v-if="!userStore.getCheckPasswordAccount"
              label="check password"
              color="dark"
              @click="() => checkPasswordSubmit('account', { ...profile })"
            />
            <q-btn
              v-else
              label="Confirmez"
              color="positive"
              @click="() => editAccountUserSubmit({ ...profile })"
            />
          </div>
        </q-card-section>

        <q-card-section v-if="editPassword" class="q-pa-md">
          <div class="q-gutter-md text-center" style="width: 100%">
            <div v-if="!userStore.getCheckPasswordEditPassword">
              <p>Veuillez entrez votre mot de passe <strong>actuel</strong>,</p>
              <q-input
                color="positive"
                type="password"
                outlined
                style="width: 100%"
                v-model="profile.Password"
                label="Mot de passe actuel"
                bottom-slots
                :error="!isValid"
                hint="Actual password !"
              />
              <q-btn
                label="check password"
                color="dark"
                @click="() => checkPasswordSubmit('password', { ...profile })"
              />
            </div>

            <div v-else>
              <p>puis entrez votre <strong>nouveau</strong> mot de passe,</p>
              <q-input
                type="password"
                outlined
                style="width: 100%"
                :color="
                  checkRegex(profile.newPassword) ? 'positive' : 'negative'
                "
                v-model="profile.newPassword"
                label="Nouveau mot de passe"
                bottom-slots
                :error="!checkRegex(profile.newPassword)"
                hint="1 Majuscule - 1 Minuscule - 1 Numéro - 1 characters spécial"
              >
                <template v-slot:error>
                  min 8 characters, dont
                  <span >1 Majuscule</span> - 1 Minuscule
                  - 1 Numéro - 1 characters spécial
                </template>
              </q-input>
              <p>
                enfin <strong>confirmez</strong> votre nouveau mot de passe:
              </p>
              <q-input
                type="password"
                :color="
                  checkRegex(profile.newPassword) &&
                  isValid(profile.confirmPassword, profile.newPassword)
                    ? 'positive'
                    : 'negative'
                "
                outlined
                style="width: 100%"
                v-model="profile.confirmPassword"
                label="Confirmez nouveau mot de passe"
                bottom-slots
                :error="!isValid(profile.confirmPassword, profile.newPassword)"
                hint="check newPassword is egal to confirmPassword !"
              >
                <template v-slot:error>
                  newPassword is not egal to confirmPassword !
                </template>
              </q-input>
              <q-btn
                label="Annulez"
                color="negative"
                @click="editPassword = false"
              />
              <!-- <p v-if="!isNotNull(profile.newPassword)">sdgvsbs</p> -->
              <q-btn
                v-if="
                  !checkRegex(profile.newPassword) ||
                  !isValid(profile.confirmPassword, profile.newPassword)
                "
                label="Éditez mot de passe"
                color="dark"
              />
              <q-btn
                v-else
                label="Éditez mot de passe"
                color="positive"
                @click="() => editPasswordUserSubmit({ ...profile })"
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
import { useProfileStore } from "../../stores/profile.store";
import { useUserStore } from "../../stores/users.store";

export default defineComponent({
  name: "ModalAccount",
  setup() {
    const $q = useQuasar()
    const userStore = useUserStore();
    const profileStore = useProfileStore();
    if (!profileStore.getProfileLoaded) profileStore.getProfileApi();
    const oldName = profileStore.profile.name;

    const modalAccount = ref(false);
    const profile = ref(profileStore.profile);

    const editPassword = ref(false);

    const editPasswordUserSubmit = async (obj) => {
      obj.oldName = oldName;
      await userStore.editPasswordUserApi(obj);
      $q.notify({
        icon: "thumb_up",
        caption: "Votre mot de passe à bien été éditer !",
        message: "Success !",
        color: "positive",
      });
    };

    const editAccountUserSubmit = async (obj) => {
      obj.oldName = oldName;
      await userStore.editAccountUserApi(obj);
      $q.notify({
        icon: "thumb_up",
        caption: "Votre compte à bien été éditer !",
        message: "Success !",
        color: "positive",
      });
    };

    const checkPasswordSubmit = async (val, obj) => {
      obj.oldName = oldName;
      if (val === "account") await userStore.checkPasswordEditAccountApi(obj);
      if (val === "password") await userStore.checkPasswordEditPasswordApi(obj);
      $q.notify({
        icon: "thumb_up",
        caption: "Votre mot de passe va être checker !",
        message: "Success !",
        color: "info",
      });
    };

    const isValid = (v1, v2) => v1 === v2;
    const regex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    const checkMaj = (value) => /^([A-Z])/;
    const checkRegex = (value) => regex.exec(value);
    const isNotNull = (value) => value.length <= 0;

    return {
      editPasswordUserSubmit,
      editAccountUserSubmit,
      editPassword,
      modalAccount,
      profile,
      isValid,
      checkRegex,
      checkMaj,
      isNotNull,
      userStore,
      checkPasswordSubmit,
    };
  },
});
</script>
