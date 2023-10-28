<script setup lang="ts">
import { ref } from "vue";

import VueDatePicker from "@vuepic/vue-datepicker";
import { useDatesStore } from "@/stores/dates";
import { extractLocalDateString } from "@/utils/utilityFunctions";

const datesStore = useDatesStore();
const date = ref(new Date());

function setDate(valueString: string) {
  const dateValue = new Date(valueString);

  datesStore.setStartDate(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate());
  datesStore.setEndDate(dateValue.getFullYear(), dateValue.getMonth(), dateValue.getDate());
}

setDate(extractLocalDateString(new Date()));
</script>

<template>
  <VueDatePicker
    inline
    auto-apply
    @update:model-value="setDate"
    model-type="yyyy-MM-dd"
    v-model="date"
  ></VueDatePicker>
</template>

<style scoped></style>
