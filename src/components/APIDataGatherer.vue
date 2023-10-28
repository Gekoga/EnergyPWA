<script setup lang="ts">
import type { APIData, Prices } from "@/data/priceData";
import { useDatesStore } from "@/stores/dates";
import { usePricesStore } from "@/stores/prices";
import { computed } from "vue";


const datesStore = useDatesStore();
const pricesStore = usePricesStore();

const selectedDate = computed(() => {
  return datesStore.getLocalDate;
});

async function getAPIResponse() {
  try {
    const url: string = `https://api.energyzero.nl/v1/energyprices?fromDate=${datesStore.getStartDate}&tillDate=${datesStore.getEndDate}&interval=4&usageType=1&inclBtw=true`;
    console.log(url);
    const apiResponse = await fetch(url);
    const data = (await apiResponse.json()) as APIData;

    createDataObject(data);
  } catch (error) {
    console.error(error);
    throw new Error("Error getAPIResponse");
  }
}

function createDataObject(data: APIData) {
  if (data.Prices === undefined) throw new Error("No prices");

  if (data.average === undefined) throw new Error("No average");

  const priceMap: Map<number, number> = new Map();

  data.Prices.forEach((value, index) => {
    const element = value as Prices;
    priceMap.set(index, element.price);
  });

  pricesStore.setPrices(priceMap);
  pricesStore.setAverage(data.average);
}
</script>

<template>
  <div>
    <p> Huidig geselecteerde datum is: </p>
    <p>{{ selectedDate }}</p>
  </div>
  <button type="button" @click="getAPIResponse()">Verzamel de data</button>
</template>

<style scoped></style>