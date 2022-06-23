<template>
  <div class="q-py-md col-9 col-md-9 col-xs-">
    <h2>ChartSession</h2>
      <DoughnutChart :chartData="testData" />
  </div>
</template>

<script>
import { onMounted } from "vue";
import { useProfileStore } from "../../stores/profile.store";
import { convertISODate } from "../../utils";
import { DoughnutChart } from 'vue-chart-3';

export default {
  name: "ChartSessions",
  components: { DoughnutChart },
  setup() {
    const profileStore = useProfileStore();

    onMounted(async () => {
      await profileStore.getSessionsAPI();
    });

        const testData = {
      labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
      datasets: [
        {
          data: [30, 40, 60, 70, 5],
          backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
        },
      ],
    };

    return { profileStore, convertISODate, testData };
  },
};
</script>
