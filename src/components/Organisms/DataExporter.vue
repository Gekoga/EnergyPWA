<script setup lang="ts">
import { useDatesStore } from "@/stores/dates";
import { usePricesStore } from "@/stores/prices";
import ATButton from "@/components/Atoms/ATButton.vue";
import { computed } from "vue";

const datesStore = useDatesStore();
const pricesStore = usePricesStore();

const hasData = computed(() => {
  return pricesStore.getAmountOfEntries > 0;
});

function convertStoreToCSVReadyString(): string {
  var priceString: string = "";
  pricesStore.prices.forEach((price) => {
    priceString += price + "\n";
  });

  return priceString;
}

function exportToCSVFile() {
  const file = new Blob([convertStoreToCSVReadyString()], { type: "text/csv;charset=utf-8;" });

  const link = document.createElement("a");
  if (link.download !== undefined) {
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(file);
    link.setAttribute("href", url);
    link.setAttribute("download", datesStore.getLocalDate + ".csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
</script>

<template>
  <ATButton @on-click-button="exportToCSVFile()" button-type="fab" :disabled="hasData === false">
    <template #text>Exporteer data</template>
  </ATButton>
</template>

<style scoped></style>
