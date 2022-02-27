<template>
  <button class="button" v-bind="$props">
    <slot />
  </button>
</template>
<style lang="postcss">
.button {
  @apply text-blue-50 bg-blue-700 rounded shadow py-2 px-4;
  @apply hover:bg-blue-500;
}
</style>
