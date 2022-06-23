<template>
  <div class="q-pa-md col-9 col-md-9 col-xs-12">
    <q-select
      v-model="chooseDelay"
      :label="chooseDelay"
      :options="[
        { id: 0, label: '30 Days', value: '30d' },
        { id: 0, label: '14 Days', value: '14d' },
        { id: 0, label: '7 Days', value: '7d' },
        { id: 0, label: '24 Hours', value: '24h' },
        { id: 0, label: '4 Hours', value: '4h' },
        { id: 0, label: '1 Hour', value: '1h' },
      ]"
      option-value="value"
      option-label="label"
      emit-value
      map-options
      square
      filled
    >
      <template v-slot:option="scope">
        <q-item clickable @click="() => mountedChart(scope.opt.value)">
          <q-item-section avatar>
            <q-icon :name="scope.opt.value" />
          </q-item-section>

          <q-item-section>
            <q-item-label>{{ scope.opt.value }}</q-item-label>
          </q-item-section>
        </q-item>
      </template>

      <template v-slot:after-options>
        <q-item>
          <q-item-section> end ... </q-item-section>
        </q-item>
      </template>
    </q-select>

    <!-- Chart -->
    <LineChart :chartData="testData" :options="options" />
  </div>
</template>

<script>
import { onMounted, reactive, watch, ref } from "vue";
import { useProfileStore } from "../../stores/profile.store";
import { convertISODate } from "../../utils";
import { LineChart } from "vue-chart-3";
import { getCssVar } from "quasar";

export default {
  name: "ChartSessions",
  components: { LineChart },
  setup() {
    const profileStore = useProfileStore();
    const chooseDelay = ref("");
    const d = Date.now();
    let listX = reactive([]);
    let listY = reactive([]);

    onMounted(async () => {
      await profileStore.getSessionsAPI();
    });


    const mountedChart = (delay) => {
      let count;
      chooseDelay.value = delay;

      switch (delay) {
        case "30d":
          // Last 30 Days
          for (let i = 29; i >= 0; i--) {
            // Count / hours
            count = 0;
            profileStore.getSessions.map((item) => {
              if (
                new Date(d).getMonth() - 1 ===
                  new Date(item.created).getMonth() ||
                new Date(item.created).getMonth() === new Date(d).getMonth()
              )
                if (
                  new Date(item.created).getDate() ===
                  new Date(d - i * 24 * 60 * 60 * 1000).getDate()
                )
                  count++;
            });

            listX.push(new Date(d - i * 24 * 60 * 60 * 1000).getDate() + " d");
            listY.push(count);
          }
          break;
        case "14d":
          // // Last 14 Days
          for (let i = 13; i >= 0; i--) {
            // Count / hours
            count = 0;
            profileStore.getSessions.map((item) => {
              if (
                new Date(d).getMonth() - 1 ===
                  new Date(item.created).getMonth() ||
                new Date(item.created).getMonth() === new Date(d).getMonth()
              )
                if (
                  new Date(item.created).getDate() ===
                  new Date(d - i * 24 * 60 * 60 * 1000).getDate()
                )
                  count++;
            });
            listX.push(new Date(d - i * 24 * 60 * 60 * 1000).getDate() + " d");
            listY.push(count);
          }
          break;
        case "7d":
          // // Last 14 Days
          for (let i = 6; i >= 0; i--) {
            // Count / hours
            count = 0;
            profileStore.getSessions.map((item) => {
              if (
                new Date(d).getMonth() - 1 ===
                  new Date(item.created).getMonth() ||
                new Date(item.created).getMonth() === new Date(d).getMonth()
              )
                if (
                  new Date(item.created).getDate() ===
                  new Date(d - i * 24 * 60 * 60 * 1000).getDate()
                )
                  count++;
            });
            listX.push(new Date(d - i * 24 * 60 * 60 * 1000).getDate() + " d");
            listY.push(count);
          }
          break;
        case "24h":
          // Last 24 Hours
          for (let i = 23; i >= 0; i--) {
            // Count / hours
            count = 0;
            profileStore.getSessions.map((item) => {
              if (
                new Date(d).getDate() - 1 ===
                  new Date(item.created).getDate() ||
                new Date(item.created).getDate() === new Date(d).getDate()
              )
                if (
                  new Date(item.created).getHours() ===
                  new Date(d - i * 60 * 60 * 1000).getHours()
                )
                  count++;
            });

            listX.push(new Date(d - i * 60 * 60 * 1000).getHours() + " h");
            listY.push(count);
          }
          break;
        case "4h":
          // Last 240 minutes
          for (let i = 239; i >= 0; i--) {
            count = 0;
            profileStore.getSessions.map((item) => {
              if (
                new Date(d).getDate() - 1 ===
                  new Date(item.created).getDate() ||
                new Date(item.created).getDate() === new Date(d).getDate()
              )
                if (
                  new Date(d).getHours() - 1 ===
                    new Date(item.created).getHours() ||
                  new Date(item.created).getHours() === new Date(d).getHours()
                )
                  if (
                    new Date(item.created).getMinutes() ===
                    new Date(d - i * 60 * 1000).getMinutes()
                  )
                    count++;
            });

            listX.push(new Date(d - i * 60 * 1000).getMinutes());
            listY.push(count);
          }
          break;
        case "1h":
          // Last 60 minutes
          for (let i = 59; i >= 0; i--) {
            count = 0;
            profileStore.getSessions.map((item) => {
              if (
                new Date(d).getDate() - 1 ===
                  new Date(item.created).getDate() ||
                new Date(item.created).getDate() === new Date(d).getDate()
              )
                if (
                  new Date(d).getHours() - 1 ===
                    new Date(item.created).getHours() ||
                  new Date(item.created).getHours() === new Date(d).getHours()
                )
                  if (
                    new Date(item.created).getMinutes() ===
                    new Date(d - i * 60 * 1000).getMinutes()
                  )
                    count++;
              console.log("1h", new Date(item.created).getMinutes());
            });

            listX.push(new Date(d - i * 60 * 1000).getMinutes());
            listY.push(count);
          }
          break;

        default:
          break;
      }
    };

    const options = ref({
      responsive: true,
      plugins: {
        legend: {
          position: "bottom",
        },
        title: {
          display: true,
          text: "Visiteurs",
        },
      },
      elements: {
        bar: {
          borderWidth: 2,
          borderRadius: 10
        },
      },
    });

    const testData = {
      labels: listX,
      datasets: [
        {
          label: "Visiteurs",
          data: listY,
          backgroundColor: getCssVar("primary"),
          borderColor: getCssVar("primary"),
        },
      ],
    };

    return {
      profileStore,
      convertISODate,
      testData,
      chooseDelay,
      mountedChart,
      options,
    };
  },
};
</script>
