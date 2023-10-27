<script setup lang="ts">
import { useDatesStore } from "@/stores/dates";
import { usePricesStore } from "@/stores/prices";
import { computed } from "vue";

const datesStore = useDatesStore();
const pricesStore = usePricesStore();

const hasData = computed(() => {
  return pricesStore.getPrices().size > 0;
})

function convertStoreToString(): string {
  let textData: string = "";
  pricesStore.prices.forEach((price, key) => {
    textData = textData + key + " " + price + "\r\n";
  });

  return textData;
}

function exportToTxtFile() {
  const file = new File([convertStoreToString()], "foo.txt", { type: "text/plain" });

  const link = document.createElement("a");
  if (link.download !== undefined) {
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(file);
    link.setAttribute("href", url);
    link.setAttribute("download", "foo.txt");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}

function convertStoreToCSVReadyString(): string {
  var priceString: string = "";
  pricesStore.prices.forEach((price, key) => {
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
    link.setAttribute("download", datesStore.getDate + ".csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
</script>

<template>
  <div>
    <button ref="downloadButton" type="button" :disabled="hasData === false" @click="exportToCSVFile()">Exporteer de data</button>
  </div>
</template>

<style scoped></style>
