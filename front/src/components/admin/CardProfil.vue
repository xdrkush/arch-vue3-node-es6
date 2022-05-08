<template>
  <div class="row justify-around">

    <!-- Modal Edit Account -->
    <ModalAccount />

    <!-- Modal Edit Profil -->
    <ModalProfile />
    
    <!-- Modal Edit Social -->
    <ModalSocial />

    <!-- Modal Logout -->
    <ModalLogout />

  </div>
</template>

<script>
import { defineComponent } from "vue";
import ModalAccount from './ModalAccount.vue'
import ModalProfile from './ModalProfile.vue'
import ModalSocial from './ModalSocial.vue'
import ModalLogout from '../auth/ModalLogout.vue'

export default defineComponent({
  name: "CardProfil",
  components: {
    ModalAccount,
    ModalProfile,
    ModalSocial,
    ModalLogout
  },
  setup() {
    return {};
  },
});
</script>
