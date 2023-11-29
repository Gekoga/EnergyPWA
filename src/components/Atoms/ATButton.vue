<script setup lang="ts">
import { useSlots, computed } from "vue";

defineProps({
  buttonType: {
    type: String,
    default: "base",
    validator(value: string) {
      return ["fab", "elevated", "filled", "tonal", "outlined", "base"].includes(value);
    }
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const slots = useSlots();
const cssStylingString = computed(() => {
  var collectionString = "";
  if (slots.icon !== undefined) collectionString += "icon";

  if (slots.text !== undefined) collectionString += "text";

  return collectionString;
});

defineEmits<{
  onClickButton: void[];
}>();
</script>

<template>
  <div class="button-container">
    <button
      class="at-button"
      :disabled="disabled"
      :class="[buttonType, cssStylingString]"
      type="button"
      @click="$emit('onClickButton')"
    >
      <div class="state-layer" :class="cssStylingString">
        <div class="icon-container" v-if="$slots.icon">
          <slot name="icon"></slot>
        </div>
        <div class="text-container" v-if="$slots.text">
          <slot name="text"></slot>
        </div>
      </div>
    </button>
    <div class="caption-container" v-if="$slots.caption">
      <slot name="caption"></slot>
    </div>
  </div>
</template>

<style scoped>
.caption-container {
  text-align: center;
  max-width: 48px;
}

.button-container {
  display: flex;
  flex-direction: column;

  align-items: center;

  justify-content: flex-start;
  align-content: center;
}

.at-button {
  border: none;
  padding: 0;

  display: inline-flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;

  gap: 8px;
  border-radius: 20px;

  font-weight: bold;
}

.at-button.icon {
  border-radius: 25px;
}

.state-layer {
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;

  height: 40px;
  min-width: 48px;

  border-radius: 20px;
  gap: 8px;
}

.state-layer.text {
  padding: 0px 24px;
}

.state-layer.icon {
  height: 48px;
  width: 48px;

  border-radius: 25px;
}

.state-layer.icontext {
  padding: 0px 24px 0px 16px;
}

/* fab button styling */
.fab {
  height: 56px;
  min-width: 80px;
  border-radius: 16px;

  box-shadow: var(--elevation-level3);

  background: var(--color-primary);

  color: var(--color-primary-back);
  fill: var(--color-primary-back);
}

.fab .state-layer {
  height: 56px;
  min-width: 80px;
  border-radius: 16px;
}

.fab.icon {
  min-width: 56px;
  border-radius: 16px;
}

.fab .state-layer.icon {
  min-width: 56px;
  height: 56px;

  border-radius: 16px;
}

.fab:hover {
  box-shadow: var(--elevation-level4);
}
.fab .state-layer:hover {
  background: hsla(var(--materials-purple-primary-100-hsl), var(--state-opacity-hover));
}

.fab:focus {
  box-shadow: var(--elevation-level3);
}

.fab .state-layer:focus {
  background: hsla(var(--color-on-primary-hsl), var(--state-opacity-focus));
}

.fab:active {
  box-shadow: var(--elevation-level3);
}

.fab .state-layer:active {
  background: hsla(var(--color-on-primary-hsl), var(--state-opacity-press));
}

/* Elevated button styling */
.elevated {
  background: var(--color-surface-container-low);
  box-shadow: var(--elevation-level1);

  color: var(--color-primary);
  fill: var(--color-primary);
}

.elevated:hover {
  box-shadow: var(--elevation-level2);
}

.elevated .state-layer:hover {
  background: hsla(var(--color-primary-hsl), var(--state-opacity-hover));
}

.elevated:focus {
  box-shadow: var(--elevation-level1);
}

.elevated .state-layer:focus {
  background: hsla(var(--color-primary-hsl), var(--state-opacity-focus));
}
.elevated:active {
  box-shadow: var(--elevation-level1);
}

.elevated .state-layer:active {
  background: hsla(var(--color-primary-hsl), var(--state-opacity-press));
}

/* Filled button styling */
.filled {
  background: var(--color-primary);
  box-shadow: var(--elevation-level0);

  color: var(--color-on-primary);
  fill: var(--color-on-primary);
}

.filled:hover {
  box-shadow: var(--elevation-level1);
}

.filled .state-layer:hover {
  background: hsla(var(--color-on-primary-hsl), var(--state-opacity-hover));
}

.filled:focus {
  box-shadow: var(--elevation-level0);
}

.filled .state-layer:focus {
  background: hsla(var(--color-on-primary-hsl), var(--state-opacity-focus));
}

.filled:active {
  box-shadow: var(--elevation-level0);
}

.filled .state-layer:active {
  background: hsla(var(--color-on-primary-hsl), var(--state-opacity-press));
}

/* Tonal button styling */
.tonal {
  box-shadow: var(--elevation-level0);

  background: var(--color-primary-container);

  color: var(--color-on-primary-container);
  fill: var(--color-on-primary-container);
}

.tonal:hover {
  box-shadow: var(--elevation-level1);
}

.tonal .state-layer:hover {
  background: hsla(var(--color-on-primary-hsl), var(--state-opacity-hover));
}

.tonal:focus {
  box-shadow: var(--elevation-level0);
}

.tonal .state-layer:focus {
  background: hsla(var(--color-on-primary-hsl), var(--state-opacity-focus));
}

.tonal:active {
  box-shadow: var(--elevation-level0);
}

.tonal .state-layer:active {
  background: hsla(var(--color-on-primary-hsl), var(--state-opacity-press));
}

/* Outlined button styling */
.outlined {
  background: var(--color-surface);
  box-shadow: var(--elevation-level0);

  border: 1px solid var(--color-outline);

  color: var(--color-primary);
  fill: var(--color-primary);
}

.outlined .state-layer:hover {
  background: hsla(var(--color-primary-hsl), var(--state-opacity-hover));
}

.outlined:focus {
  border: 1px solid var(--color-primary);
}

.outlined .state-layer:focus {
  background: hsla(var(--color-primary-hsl), var(--state-opacity-focus));
}

.outlined:active {
  border: 1px solid var(--color-outline);
}

.outlined .state-layer:active {
  background: hsla(var(--color-primary-hsl), var(--state-opacity-press));
}

/* Base button styling */
.base {
  background: transparent;
  box-shadow: var(--elevation-level0);

  color: var(--color-primary);
  fill: var(--color-primary);
}

.base .state-layer:hover {
  background: hsla(var(--color-primary-hsl), var(--state-opacity-hover));
}

.base .state-layer:focus {
  background: hsla(var(--color-primary-hsl), var(--state-opacity-focus));
}

.base .state-layer:active {
  background: hsla(var(--color-primary-hsl), var(--state-opacity-press));
}

.at-button:disabled {
  background: hsla(var(--color-on-surface-hsl), var(--state-opacity-focus));
  box-shadow: var(--elevation-level0);

  color: hsla(var(--color-on-surface-hsl), var(--state-opacity-disabled));
  fill: hsla(var(--color-on-surface-hsl), var(--state-opacity-disabled));
}

.base:disabled {
  background: transparent;
}

.at-button:disabled .state-layer {
  background: transparent;
}
</style>
