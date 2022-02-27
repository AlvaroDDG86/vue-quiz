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
  @apply w-full h-96 bg-white text-center rounded-lg shadow-lg mx-5;
  @apply md:w-1/3;
}
</style>
