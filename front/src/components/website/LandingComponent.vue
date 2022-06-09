<template>
  <div
    class="text-center column items-center justify-between"
    style="min-height: 100vh"
  >
    <!-- Logo -->
    <q-btn round color="accent" class="q-mt-md shadow-8" width="256px">
      <q-img :src="UnicornCircle" width="220px" />
    </q-btn>

    <!-- Name Company -->
    <h2
      class="q-ma-none q-mt-md title-user"
      style="font-size: 64px; max-width: 100vw"
    >
      {{ user.nameCompany }}
    </h2>
    <p class="q-my-md" style="min-width: 300px; width: 80%; max-width: 80%">
      {{ user.description }}
    </p>

    <p
      class="bg-accent shadow-4 q-ma-none q-pa-none q-my-md"
      style="min-width: 300px; width: 80vw; max-width: 720px; height: 2px"
    ></p>
    <!-- Title Coming soon ! -->
    <h5 class="coming_soon q-ma-none q-mt-md">Coming Soon ...</h5>

    <p
      class="bg-accent shadow-4 q-ma-none q-pa-none q-my-xs"
      style="min-width: 300px; width: 80vw; max-width: 720px; height: 2px"
    ></p>

    <!-- Contact us -->
    <h6 class="q-ma-none q-my-md">En attendant contactez-nous</h6>
    <div class="row text-center justify-center q-my-md">
      <div class="row justify-center" style="width: 100%">
        <!-- Phone -->
        <p
          class="
            q-my-xs q-ma-none
            col-md-6 col-xs-12
            text-body
            row
            justify-center
            items-center
          "
          @click="
            () =>
              copyToClipboard(user.phone)
                .then(() => {
                  $q.notify({
                    icon: 'fa-solid fa-phone',
                    caption: 'copié',
                    message: user.phone,
                    color: 'info',
                  });
                })
                .catch()
          "
        >
          <q-btn
            round
            color="primary"
            size="md"
            icon="fa-solid fa-phone"
            class="q-mx-md"
          />
          <strong>{{ user.phone }}</strong>
        </p>
        <!-- Mail -->
        <p
          class="
            q-my-xs q-ma-none
            col-md-6 col-xs-12
            text-body
            row
            justify-center
            items-center
          "
          @click="
            () =>
              copyToClipboard(user.mail)
                .then(() => {
                  $q.notify({
                    icon: 'fa-solid fa-at',
                    caption: 'copié',
                    message: user.mail,
                    color: 'info',
                  });
                })
                .catch()
          "
        >
          <q-btn
            round
            color="primary"
            size="md"
            icon="fa-solid fa-at"
            class="q-mx-md"
          />
          <strong>{{ user.mail }}</strong>
        </p>
      </div>
      <!-- Address -->
      <p
        class="q-ma-xs q-ma-none col-xs-12 q-pa-none text-body"
        @click="
          () =>
            copyToClipboard(user.address)
              .then(() => {
                $q.notify({
                  icon: 'fa-solid fa-location-dot',
                  caption: 'copié',
                  message: user.address,
                  color: 'info',
                });
              })
              .catch()
        "
      >
        <q-btn
          round
          color="primary"
          size="md"
          icon="fa-solid fa-location-dot"
          class="q-mx-md"
        />
        <strong>{{ user.address }}</strong>
      </p>
    </div>

    <h6 class="q-ma-none q-my-md">Suivez-nous sur les réseaux:</h6>
    <q-carousel
      v-model="slide"
      class="q-pa-xs bg-accent shadow-8 q-my-xs"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-text-color="primary"
      arrows
      style="min-width: 300px; width: 80vw; max-width: 720px"
      height="auto"
    >
      <q-carousel-slide :name="1" class="column no-wrap bg-primary">
        <div class="row justify-around items-center no-wrap">
          <div :key="social.key" v-for="social in arrayObjEnt(user.social)">
            <q-btn
              round
              tag="a"
              @click="() => openURL(social.value)"
              :href="social.value"
              text-color="accent"
              size="md"
              :icon="`fa-brands fa-${social.key}`"
            />
          </div>
        </div>
      </q-carousel-slide>
    </q-carousel>

    <p class="q-ma-none q-pa-none">
      <strong>©️ 2022 Davroot</strong> | Tous droits réservés ❤️
    </p>
  </div>
</template>

<script>
import { ref } from "vue";
import UnicornCircle from "../../assets/Unicorn-circle.svg";
import { copyToClipboard } from "quasar";
import { openURL } from "quasar";
import { arrayObjEnt } from "../../utils";

export default {
  name: "LandingComponents",
  props: ["data"],
  setup(props) {
    const user = ref(props.data);
    // console.log('LandingComponents', user)
    return {
      UnicornCircle,
      user,
      slide: ref(1),
      copyToClipboard,
      openURL,
      arrayObjEnt,
    };
  },
};
</script>

<style lang="sass">
// Défault typo is 
.title-user
  font-family: Montserrat
  font-size: 42px
  font-weight: 700
  line-height: 52px
  letter-spacing: 0.10000000149011612px

.coming_soon
  height: 130px
  font-family: OrelegaOne
  font-size: 96px
  font-weight: 400
  line-height: 66px
  letter-spacing: 0.10000000149011612px
</style>