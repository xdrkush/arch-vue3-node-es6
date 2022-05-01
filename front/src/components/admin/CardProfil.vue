<template>
  <div class="row justify-around">

    <!-- Modal Edit Account -->
    <ModalAccount />

    <!-- Modal Edit Profil -->
    <ModalProfile />
    
    <!-- Modal Edit Social -->
    <ModalSocial />

  </div>
</template>

<script>
import { defineComponent } from "vue";
import ModalAccount from './ModalAccount.vue'
import ModalProfile from './ModalProfile.vue'
import ModalSocial from './ModalSocial.vue'

export default defineComponent({
  name: "CardProfil",
  components: {
    ModalAccount,
    ModalProfile,
    ModalSocial
  },
  setup() {
    return {};
  },
});
</script>
