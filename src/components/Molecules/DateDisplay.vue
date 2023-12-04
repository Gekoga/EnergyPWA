<script setup lang="ts">
import { useDatesStore } from "@/stores/dates";

const datesStore = useDatesStore();
</script>

<template>
  <div id="date-display">
    <p>Huidige geselecteerde datum:</p>
    <p>{{ datesStore.getLocalDate }}</p>
  </div>
</template>

<style scoped>
#date-display {
  display: flex;
  flex-direction: column;
  place-items: center;
  text-align: center;
}
</style>
