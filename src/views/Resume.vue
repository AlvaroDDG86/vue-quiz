<template>
  <div class="resume">
    <AppContainer> hola </AppContainer>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { useQuizStore } from "@/store/quiz.store";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Resume",
  setup() {
    const quizStore = useQuizStore();
    const router = useRouter();
    if (quizStore.isQuizPartial) {
      router.replace({ name: "Home" });
    }
  },
});
</script>
<style lang="postcss">
.resume {
  @apply w-screen h-screen bg-green-400 flex justify-center items-center;
}
</style>
