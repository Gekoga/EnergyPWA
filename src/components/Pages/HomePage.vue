<script setup lang="ts">
import DataExporter from "@/components/Organisms/DataExporter.vue";
import DatePicker from "@/components/Organisms/DatePicker.vue";
import BarLineChart from "@/components/Organisms/BarLineChart.vue";
import DateDisplay from "../Molecules/DateDisplay.vue";
</script>

<template>
  <div id="date-area">
    <DatePicker></DatePicker>
    <div id="export-area">
      <DateDisplay></DateDisplay>
      <DataExporter></DataExporter>
    </div>
  </div>
  <div id="chart-area">
    <BarLineChart></BarLineChart>
  </div>
</template>

<style scoped>
#date-area {
  display: flex;
  gap: 1.5rem;
  flex-direction: column;
}

#export-area {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  min-width: 10rem;
}

#chart-area {
  width: 100%;
  height: 25rem;
}

/* Medium (>1024 px) */
@media (min-width: 64em) {
  #date-area {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  #chart-area {
    max-width: 60%;
  }
}

/* Large (>1280 px) */
@media (min-width: 80em) {
}
</style>
