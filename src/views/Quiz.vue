<template>
  <div class="quiz">
    <AppContainer class="quiz__container">
      <h3>Quiz</h3>
      <Question :question="currentQuestion" />
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
import { computed, defineComponent, ref, watch } from "vue";
import AppStepper from "@/components/AppStepper.vue";
import Question from "@/components/Question.vue";
import { useQuizStore } from "@/store/quiz.store";
export default defineComponent({
  name: "Quiz",
  components: {
    AppStepper,
    Question,
  },
  setup() {
    const current = ref(1);
    const quizStore = useQuizStore();
    const currentQuestion = computed(
      () => quizStore.questions[current.value - 1]
    );
    const steps = computed(() => quizStore.questions.length);

    watch(
      currentQuestion,
      (value) => {
        if (!currentQuestion.value.options) {
          quizStore.getOptionsByQuestionId(value.id);
        }
      },
      {
        immediate: true,
      }
    );

    const prevHandler = () => {
      current.value--;
    };
    const nextHandler = () => {
      current.value++;
    };
    return {
      steps,
      current,
      currentQuestion,
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
  @apply bg-gray-100 rounded-lg shadow-md m-4 py-8 w-full box-content;
}
</style>
