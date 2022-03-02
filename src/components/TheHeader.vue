<template>
  <nav class="the-header">
    <h3 class="the-header__title">Vue Quiz</h3>
    <div class="the-header__buttons">
      <AppButton @click="toggleHandler"><fa :icon="icon" /></AppButton>
      <AppButton @click="openLinkhandler"><fa icon="code" /></AppButton>
    </div>
  </nav>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useDark, useToggle } from "@vueuse/core";
export default defineComponent({
  name: "TheHader",
  setup() {
    const isDark = useDark();
    const icon = computed(() => (isDark.value ? "moon" : "sun"));
    const toggleHandler = useToggle(isDark);
    const openLinkhandler = () => {
      window.open("https://github.com/AlvaroDDG86/vue-quiz", "_blank");
    };

    return {
      icon,
      toggleHandler,
      openLinkhandler,
    };
  },
});
</script>
<style lang="postcss">
.the-header {
  @apply h-14 w-screen bg-blue-600 flex justify-between items-center box-content absolute top-0;
  &__title {
    @apply text-white text-xl ml-4;
  }
  &__buttons {
    @apply w-28 flex justify-around items-center mr-4;
  }
}
</style>
