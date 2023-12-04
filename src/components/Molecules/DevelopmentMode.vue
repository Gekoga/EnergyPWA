<script setup lang="ts">
import { useDevelopmentMode } from "@/developmentMode";
</script>

<template>
  <div v-show="useDevelopmentMode" id="development-mode">development mode</div>
</template>

<style scoped>
#development-mode {
  display: block;
  position: absolute;

  right: 0;
  top: 0;

  font-size: xx-large;
  padding: 1rem;
}
</style>
