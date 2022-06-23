<template>
  <div class="q-py-md col-3 col-md-3 col-xs-12">
    <q-list bordered padding>
      <q-item-label header>Votre Session:</q-item-label>

      <q-item v-if="profileStore.getSession">
        <q-item-section>
          <q-item-label>{{
            convertISODate(profileStore.getSession.created)
          }}</q-item-label>
          <q-item-label caption v-if="profileStore.getSession.device">
            {{ simpleAgent(profileStore.getSession.device) }}
          </q-item-label>
          <q-item-label caption>
            {{ profileStore.getSession.ip }}
          </q-item-label>
        </q-item-section>

        <q-item-section avatar>
          <q-icon
            :color="profileStore.getSession.auth ? 'positive' : 'negative'"
            :name="profileStore.getSession.auth ? 'wifi' : 'close'"
          />
        </q-item-section>
      </q-item>

      <q-separator spaced />
      <q-item-label header>10 dernières session:</q-item-label>
      <div :key="index" v-for="(sess, index) in profileStore.getSessions.slice(0, 10)">
        <q-item>
          <q-item-section>
            <q-item-label>{{ convertISODate(sess.created) }}</q-item-label>
            <q-item-label caption>
              {{ simpleAgent(sess.device) }}
            </q-item-label>
            <q-item-label caption> {{ sess.ip }} </q-item-label>
          </q-item-section>

          <q-item-section avatar>
            <q-icon
              :color="sess.auth ? 'positive' : 'negative'"
              :name="sess.auth ? 'wifi' : 'close'"
            />
          </q-item-section>
        </q-item>

        <q-separator spaced />
      </div>
    </q-list>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useProfileStore } from "../../stores/profile.store";
import { simpleAgent, convertISODate } from "../../utils";

export default {
  name: "ListSession",
  setup() {
    const profileStore = useProfileStore();

    onMounted(async () => {
      await profileStore.getSessionsAPI();
    });

    return { profileStore, simpleAgent, convertISODate };
  },
};
</script>
