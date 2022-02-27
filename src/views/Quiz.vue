<template>
  <div class="quiz">
    <AppContainer class="quiz__container">
      <h3>Quiz</h3>
      <div class="quiz__question">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          architecto neque ratione sequi ad quisquam fugiat veniam ut, tempora
          est?
        </p>
      </div>
      <AppStepper
        :steps="steps"
        :current="current"
        :disableNext="false"
        @prev="prevHandler"
        @next="nextHandler"
      />
    </AppContainer>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import AppStepper from "@/components/AppStepper.vue";
import { useQuizStore } from "@/store/quiz.store";
export default defineComponent({
  name: "Quiz",
  components: {
    AppStepper,
  },
  setup() {
    const current = ref(1);
    const quizStore = useQuizStore();
    const steps = computed(() => quizStore.questions.length);
    const prevHandler = () => {
      console.log("prev");
      current.value--;
    };
    const nextHandler = () => {
      console.log("next");
      current.value++;
    };
    return {
      steps,
      current,
      prevHandler,
      nextHandler,
    };
  },
});
</script>
<style lang="postcss">
.quiz {
  @apply w-screen h-screen bg-green-400 flex justify-center items-center;
}
.quiz__container {
  @apply flex flex-col justify-around items-center;
}
.quiz__question {
  @apply bg-gray-100 rounded-lg shadow-md mx-4 py-8;
}
</style>
