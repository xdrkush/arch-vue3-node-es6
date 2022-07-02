<template>
  <div>
    <!-- Button Modal Section -->
    <div class="text-center q-my-xs">
      <q-btn
        icon="edit"
        color="primary"
        class="text-center"
        label="Edit template"
        @click="modalLayout = true"
      />
    </div>

    <!-- Modal Footer -->
    <q-dialog v-model="modalLayout" full-width full-height class="col">
      <q-card>
        <q-layout view="lHh lpr lFf" container class="shadow-2 rounded-borders">
          <!-- <q-header elevated>
          <q-bar>
            <q-icon name="laptop_chromebook" />
            <div>Éditer votre theme:</div>

            <q-space />

            <q-btn dense flat icon="minimize" />
            <q-btn
              dense
              flat
              icon="crop_square"
              @click="maximizedToggle = !maximizedToggle"
            />
            <q-btn dense flat icon="close" v-close-popup />
          </q-bar>
        </q-header> -->

          <!-- Layout User -->
          <q-page-container>
            <q-layout view="lHh Lpr lFf">
              <!-- Navbar -->
              <DynamicNavbar
                :switchDrawer="switchDrawer"
                :component="monitStore.getTheme.navbar"
                :profile="profileStore.getProfile"
                :pages="monitStore.getPages"
                :demo="true"
              />

              <!-- Sidebar -->
              <DynamicSidebar
                :drawer="drawer"
                :component="monitStore.getTheme.sidebar"
                :profile="profileStore.getProfile"
                :pages="monitStore.getPages"
                :demo="true"
              />

              <!-- Button Social (Modules) -->
              <ButtonSocialFixedTop
                v-if="monitStore.getTheme.modules.ButtonSocialFixedTop.actived"
                :data="profileStore.getProfile.social"
                :config="{}"
              />

              <!-- Button Back to top (Modules) -->
              <ButtonBackToTop
                v-if="monitStore.getTheme.modules.ButtonBackToTop.actived"
                :config="{}"
              />

              <q-page-container>
                <!-- Banner Message (Modules) -->
                <BannerMessage
                  v-if="monitStore.getTheme.modules.BannerMessage.actived"
                  :data="monitStore.getTheme.modules.BannerMessage"
                  :config="{}"
                />

                <!-- Composant -->
                <div class="row justify-around q-gutter-md">
                  <!-- Select Navbar -->
                  <div class="q-gutter-md row">
                    <q-select
                      style="min-width: 250px"
                      filled
                      v-model="monitStore.getTheme.navbar"
                      :options="optionsNavbar"
                      options-cover
                      stack-label
                      label="Edit Navbar"
                    />
                  </div>
                  <!-- Select Sidebar -->
                  <div class="q-gutter-md row">
                    <q-select
                      style="min-width: 250px"
                      filled
                      v-model="monitStore.getTheme.sidebar"
                      :options="optionsSidebar"
                      options-cover
                      stack-label
                      label="Edit Sidebar"
                    />
                    <q-btn
                      class="q-mx-xs"
                      :label="!drawer ? 'Open' : 'Close'"
                      :color="!drawer ? 'positive' : 'negative'"
                      @click="drawer = !drawer"
                    />
                  </div>
                  <!-- Select Footer -->
                  <div class="q-gutter-md row">
                    <q-select
                      style="min-width: 250px"
                      filled
                      v-model="monitStore.getTheme.footer"
                      :options="optionsFooter"
                      options-cover
                      stack-label
                      label="Edit Footer"
                    />
                  </div>
                </div>

                <!-- Colors Template -->
                <div>
                  <FormEdit
                    :data="monitStore.getTheme"
                    :editFn="monitStore.editThemeAPI"
                    :btnSave="false"
                  />
                </div>

                <!-- Submit or close -->
                <div class="row q-my-md justify-around full-width">
                  <q-btn
                    class="q-mx-xs"
                    label="quitter"
                    color="negative"
                    icon="close"
                    v-close-popup
                  />
                  <q-btn
                    class="q-mx-xs"
                    label="save"
                    color="positive"
                    icon="save"
                    @click="
                      () => monitStore.editThemeAPI({ ...monitStore.getTheme })
                    "
                  />
                </div>

                <!-- Modules Actived (true | false) -->
                <div class="q-px-md">
                  <div class="row">
                    <h5 class="q-pa-none q-ma-none">Modules</h5>
                  </div>
                  <div class="row">
                    <div :key="mod" v-for="mod in monitStore.getTheme.modules">
                      <p class="q-ma-none q-pa-none">
                        <strong>{{ mod.title }}:</strong>
                      </p>

                      <q-toggle
                        v-model="
                          monitStore.getTheme.modules[mod.type]['actived']
                        "
                        checked-icon="check"
                        color="green"
                        :label="`${mod.title} is ${
                          monitStore.getTheme.modules[mod.type]['actived']
                        }`"
                        unchecked-icon="clear"
                      />
                      <q-input
                        square filled
                        v-if="monitStore.getTheme.modules[mod.type]['message']"
                        v-model="monitStore.getTheme.modules[mod.type]['message']"
                        label="Message"
                      />
                    </div>
                  </div>
                </div>
              </q-page-container>

              <!-- Footer -->
              <DynamicFooter
                :component="monitStore.getTheme.footer"
                :profile="profileStore.getProfile"
                :demo="false"
              />
            </q-layout>
          </q-page-container>
        </q-layout>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useMonitStore } from "../../stores/monit.store";
import { useProfileStore } from "../../stores/profile.store";
import DynamicNavbar from "../website/navbars/DynamicNavbar";
import DynamicSidebar from "../website/sidebars/DynamicSidebar";
import DynamicFooter from "../website/footers/DynamicFooter";
import FormEdit from "./FormEdit.vue";
import ButtonSocialFixedTop from "../../modules/ButtonSocialFixedTop";
import ButtonBackToTop from "../../modules/ButtonBackToTop";
import BannerMessage from "../../modules/BannerMessage";

export default defineComponent({
  name: "modalLayout",

  components: {
    DynamicNavbar,
    DynamicSidebar,
    DynamicFooter,
    FormEdit,
    ButtonSocialFixedTop,
    ButtonBackToTop,
    BannerMessage,
  },

  setup(props) {
    const profileStore = useProfileStore();
    const monitStore = useMonitStore();
    const modalLayout = ref(false);
    const drawer = ref(false);

    let optionsNavbar = [
      {
        label: "Navbar Default",
        title: "Navbar Default",
        value: "navbarDefault",
        type: "navbarDefault",
      },
      {
        label: "Navbar Second",
        title: "Navbar Second",
        value: "navbarSecond",
        type: "navbarSecond",
      },
      {
        label: "Navbar Third",
        title: "Navbar Third",
        value: "navbarThird",
        type: "navbarThird",
      },
    ];

    let optionsFooter = [
      {
        label: "Footer Default",
        title: "Footer Default",
        value: "footerDefault",
        type: "footerDefault",
      },
      {
        label: "Footer Second",
        title: "Footer Seconds",
        value: "footerSecond",
        type: "footerSecond",
      },
    ];

    let optionsSidebar = [
      {
        label: "Sidebar Default",
        title: "Sidebar Default",
        value: "sidebarDefault",
        type: "sidebarDefault",
      },
      {
        label: "Sidebar Second",
        title: "Sidebar Second",
        value: "sidebarSecond",
        type: "sidebarSecond",
      },
    ];

    return {
      drawer,
      optionsNavbar,
      optionsSidebar,
      optionsFooter,

      switchDrawer() {
        // console.log("SwitchDrawer", drawer.value);
        drawer.value = !drawer.value;
      },

      maximizedToggle: ref(false),
      modalLayout,

      profileStore,
      monitStore,
    };
  },
});
</script>
