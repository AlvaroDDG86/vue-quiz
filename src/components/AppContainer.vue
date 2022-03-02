<template>
  <section class="container">
    <slot />
  </section>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppContainer",
});
</script>
<style lang="postcss">
.container {
  min-width: 300px;
  @apply w-full bg-white text-center rounded-lg shadow-lg mx-5 py-6 px-4;
  @apply md:w-2/3 lg:w-1/2;
  @apply dark:bg-gray-700;
}
</style>
