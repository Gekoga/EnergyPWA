<script setup lang="ts">
import { ref } from "vue";

import VueDatePicker from "@vuepic/vue-datepicker";
import { useDatesStore } from "@/stores/dates";
import { extractLocalDateString } from "@/utils/utilityFunctions";
import { APIDataGatherer } from "@/utils/APIDataGatherer";
import { useDevelopmentMode } from "@/developmentMode";

const datesStore = useDatesStore();
const date = ref(new Date());
const apiDataGatherer = new APIDataGatherer();

function setDate(valueString: string) {
  const dateValue = new Date(valueString);

  datesStore.setStartDate(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate());
  datesStore.setEndDate(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate());

  if (useDevelopmentMode) apiDataGatherer.getMockAPIResponse();
  else apiDataGatherer.getAPIResponse();
}

setDate(extractLocalDateString(new Date()));
</script>

<template>
  <VueDatePicker
    id="date-picker"
    inline
    auto-apply
    @update:model-value="setDate"
    model-type="yyyy-MM-dd"
    v-model="date"
  ></VueDatePicker>
</template>

<style scoped>
#date-picker {
  display: flex;
  justify-content: inherit;
  width: auto;
}
</style>
