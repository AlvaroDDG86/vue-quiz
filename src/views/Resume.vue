<template>
  <div class="resume">
    <AppContainer>
      <AppTitle>Thanks, {{ userName }}!</AppTitle>
      <div class="resume__content">
        {{ quizResume }}
      </div>
      <div class="resume__actions">
        <AppButton @click="startClickHandler"
          ><fa icon="rotate" /> Start again
        </AppButton>
      </div>
    </AppContainer>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent } from "vue";
import { useRouter } from "vue-router";
// Stores
import { useQuizStore } from "@/store/quiz.store";
import { useUserStore } from "@/store/user.store";
// Components
import AppButton from "@/components/AppButton.vue";
export default defineComponent({
  name: "Resume",
  setup() {
    const quizStore = useQuizStore();
    const userStore = useUserStore();
    const router = useRouter();
    const quizResume = computed(
      () =>
        `You answered ${quizStore.resume.correct} out of ${quizStore.resume.total} questions correctly.`
    );
    const userName = computed(() => userStore.name);
    if (quizStore.isQuizPartial) {
      router.replace({ name: "Home" });
    }
    const startClickHandler = () => {
      router.replace({ name: "Home" });
    };
    return {
      quizResume,
      userName,
      startClickHandler,
    };
  },
  components: { AppButton },
});
</script>
<style lang="postcss">
.resume {
  @apply w-screen h-screen bg-green-400 flex justify-center items-center;
}
.resume__content {
  @apply py-2 rounded-lg shadow-md bg-gray-100 my-2 w-full;
  @apply md:py-4;
}
.resume__actions {
  @apply py-2;
}
</style>
