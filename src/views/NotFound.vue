<template>
  <div class="not-found">
    <AppContainer>
      <h1>404</h1>
      <p>Page not found</p>
      <div class="not-found__actions">
        <AppButton @click="homeClickHandler"> Go Home </AppButton>
      </div>
    </AppContainer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";
import AppButton from "@/components/AppButton.vue";

export default defineComponent({
  name: "NotFound",
  setup() {
    const router = useRouter();
    const homeClickHandler = () => {
      router.replace({ name: "Home" });
    };
    return {
      homeClickHandler,
    };
  },
  components: { AppButton },
});
</script>
<style lang="postcss">
.not-found {
  @apply bg-green-500 h-screen w-screen flex justify-center items-center;

  &__actions {
    @apply my-4;
  }
}
</style>
