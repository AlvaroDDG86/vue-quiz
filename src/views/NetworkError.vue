<template>
  <div class="network-error">
    <AppContainer>
      <h1>Oppps!</h1>
      <p>An error occurred in the network</p>
      <div class="network-error__actions">
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
.network-error {
  @apply bg-green-500 h-screen w-screen flex justify-center items-center;

  &__actions {
    @apply my-4;
  }
}
</style>
