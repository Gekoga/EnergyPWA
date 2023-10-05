<script setup lang="ts">
import { usePricesStore } from '@/stores/prices';

const pricesStore = usePricesStore();

function convertStoreToString(): string {
  let textData: string = '';
  pricesStore.prices.forEach((price, key) => {
    textData = textData + key + ' ' + price + '\r\n';
  });

  return textData;
}

function exportToTxtFile() {
  const file = new File([convertStoreToString()], 'foo.txt', { type: 'text/plain' });

  const link = document.createElement('a');
  if (link.download !== undefined) {
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(file);
    link.setAttribute('href', url);
    link.setAttribute('download', 'foo.txt');
    link.style.visibility = 'hidden';
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
  const file = new Blob([convertStoreToCSVReadyString()], { type: 'text/csv;charset=utf-8;' });

  const link = document.createElement('a');
  if (link.download !== undefined) {
    // Browsers that support HTML5 download attribute
    const url = URL.createObjectURL(file);
    link.setAttribute('href', url);
    link.setAttribute('download', 'foo.csv');
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
</script>

<template>
  <div>
    <button ref="downloadButton" type="button" @click="exportToCSVFile()">Export</button>
  </div>
</template>

<style scoped></style>
