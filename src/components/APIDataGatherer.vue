<script setup lang="ts">
import type { Temp, Prices } from '@/data/temp';
import { useDatesStore } from '@/stores/dates';
import { usePricesStore } from '@/stores/prices';

const datesStore = useDatesStore();
const pricesStore = usePricesStore();

async function getAPIResponse() {
  try {
    const url: string = `https://api.energyzero.nl/v1/energyprices?fromDate=${datesStore.getStartDate()}&tillDate=${datesStore.getEndDate()}&interval=4&usageType=1&inclBtw=true`;
    console.log(url);
    const apiResponse = await fetch(url);
    const data = (await apiResponse.json()) as Temp;

    createDataObject(data);
  } catch (error) {
    console.error(error);
  }
}

function createDataObject(data: Temp) {
  if (data.Prices === undefined) console.log('Error, no Prices');

  if (data.average === undefined) console.log('Error, no average');

  const priceMap: Map<number, number> = new Map();

  data.Prices.forEach((value, index) => {
    const element = value as Prices;
    priceMap.set(index, element.price);
  });

  pricesStore.setPrices(priceMap);
  pricesStore.setAverage(data.average);

  console.log("Got the data");
}
</script>

<template>
  <input type="button" @click="getAPIResponse()" value="Paniek" />
</template>

<style scoped></style>
