<script setup lang="ts">
import { usePricesStore } from "@/stores/prices";
import { Chart, registerables } from "chart.js";
import { onMounted, ref } from "vue";
import { getDataForBarchart, getDataForLinechart, getDataForLabels } from "@/utils/chartFunctions";

Chart.register(...registerables);
const canvas = ref<HTMLCanvasElement>();

const priceStore = usePricesStore();
onMounted(() => {
  if (canvas.value == undefined) return;

  const mixedChart = new Chart(canvas.value, {
    type: "bar",
    data: {
      datasets: [
        {
          label: "Uurtarief",
          data: [] as number[],
          backgroundColor: "rgba(65, 85, 139, 0.5)",
          borderColor: "rgba(65, 85, 139, 1)",
          borderWidth: 2,
          order: 1
        },
        {
          label: "Gemiddelde uurtarief",
          data: [] as number[],
          backgroundColor: "rgba(16, 21, 35, 0.5)",
          borderColor: "rgba(16, 21, 35, 0.8)",
          type: "line"
        }
      ],
      labels: [] as string[]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false
    }
  });

  priceStore.$subscribe(() => {
    updateChartData(mixedChart);
  });
});

function updateChartData(chart: Chart) {
  chart.data.datasets[0].data = getDataForBarchart();
  chart.data.datasets[1].data = getDataForLinechart();
  chart.data.labels = getDataForLabels();

  chart.update();
}
</script>

<template>
  <div id="canvas-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<style scoped>
#canvas-container {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
</style>
