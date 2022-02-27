<template>
  <button
    class="button"
    :class="{ 'button--disabled': disabled }"
    v-bind="$props"
  >
    <slot />
  </button>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppButton",
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
<style lang="postcss">
.button {
  @apply text-blue-50 bg-blue-700 rounded shadow py-2 px-4;
  @apply hover:bg-blue-500;
}
.button--disabled {
  @apply bg-gray-600;
  @apply hover:bg-gray-600 cursor-not-allowed;
}
</style>
