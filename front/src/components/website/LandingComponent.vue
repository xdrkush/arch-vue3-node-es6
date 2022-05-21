<template>
  <div
    class="text-center column items-center justify-between"
    style="min-height: 100vh"
  >
    <!-- Logo -->
    <q-btn round color="secondary" class="q-mt-md shadow-8" width="256px">
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

    <!-- Title Coming soon ! -->
    <h5 class="coming_soon q-ma-none q-mt-md">Coming Soon ...</h5>

    <!-- Contact us -->
    <h6 class="q-ma-none q-my-md">En attendant contactez-nous</h6>
    <div class="row text-center justify-center q-my-md">
      <div class="row justify-center" style="width: 100%">
        <!-- Phone -->
        <p
          class="q-my-xs q-ma-none col-md-6 col-xs-12 text-body row justify-center items-center"
          @click="
            () =>
              copyToClipboard(user.phone)
                .then(() => {
                  $q.notify({
                    icon: 'fa-solid fa-phone',
                    caption: 'copié',
                    message: user.phone,
                    color: 'secondary',
                  });
                })
                .catch()
          "
        >
          <q-btn
            round
            color="secondary"
            size="md"
            icon="fa-solid fa-phone"
            class="q-mx-md"
          />
          <strong>{{ user.phone }}</strong>
        </p>
        <!-- Mail -->
        <p
          class="q-my-xs q-ma-none col-md-6 col-xs-12 text-body row justify-center items-center"
          @click="
            () =>
              copyToClipboard(user.mail)
                .then(() => {
                  $q.notify({
                    icon: 'fa-solid fa-at',
                    caption: 'copié',
                    message: user.mail,
                    color: 'secondary',
                  });
                })
                .catch()
          "
        >
          <q-btn
            round
            color="secondary"
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
                  color: 'secondary',
                });
              })
              .catch()
        "
      >
        <q-btn
          round
          color="secondary"
          size="md"
          icon="fa-solid fa-location-dot"
          class="q-mx-md"
        />
        <strong>{{ user.address }}</strong>
      </p>
    </div>

    <p
      class="bg-secondary shadow-4 q-my-xs"
      style="min-width: 300px; width: 80vw; max-width: 720px; height: 2px"
    ></p>
    <h6 class="q-ma-none q-my-md">Suivez-nous sur les réseaux:</h6>
    <q-carousel
      v-model="slide"
      class="q-pa-xs bg-secondary shadow-8 q-my-xs"
      transition-prev="slide-right"
      transition-next="slide-left"
      swipeable
      animated
      control-text-color="primary"
      arrows
      style="min-width: 300px; width: 80vw; max-width: 720px"
      height="auto"
    >
      <q-carousel-slide :name="1" class="column no-wrap bg-secondary">
        <div
          class="
            row
            fit
            justify-around
            items-center
            q-gutter-xs q-col-gutter
            no-wrap
          "
        >
          <q-btn
            round
            v-if="user.social.facebook"
            @click="() => openURL(user.social.facebook)"
            color="primary"
            size="md"
            icon="fa-brands fa-facebook"
          />
          <q-btn
            round
            v-if="user.social.twitter"
            @click="() => openURL(user.social.twitter)"
            color="primary"
            size="md"
            icon="fa-brands fa-twitter"
          />
          <q-btn
            round
            v-if="user.social.linkedin"
            @click="() => openURL(user.social.linkedin)"
            color="primary"
            size="md"
            icon="fa-brands fa-linkedin"
          />
          <q-btn
            round
            v-if="user.social.youtube"
            @click="() => openURL(user.social.youtube)"
            color="primary"
            size="md"
            icon="fa-brands fa-youtube"
          />
          <q-btn
            round
            v-if="user.social.instagram"
            @click="() => openURL(user.social.instagram)"
            color="primary"
            size="md"
            icon="fa-brands fa-instagram"
          />
        </div>
      </q-carousel-slide>
      <!-- <q-carousel-slide
        :name="2"
        class="column no-wrap bg-secondary rounded-borders"
      >
        <div
          class="
            row
            fit
            justify-around
            items-center
            q-gutter-xs q-col-gutter
            no-wrap
          "
        >
          <q-btn round color="primary" size="md" icon="fa-brands fa-facebook" />
          <q-btn round color="primary" size="md" icon="fa-brands fa-twitter" />
          <q-btn round color="primary" size="md" icon="fa-brands fa-linkedin" />
          <q-btn round color="primary" size="md" icon="fa-brands fa-youtube" />
        </div>
      </q-carousel-slide> -->
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

export default {
  name: "LandingComponents",
  props: ["data"],
  setup(props) {
    // console.log("LandingComponent", props.data);
    const user = ref(props.data);
    return { UnicornCircle, user, slide: ref(1), copyToClipboard, openURL };
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