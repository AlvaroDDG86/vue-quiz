<template>
  <div class="quiz">
    <AppContainer class="quiz__container">
      <h3 class="quiz__title">Quiz: {{ quizName }}</h3>
      <Question :question="currentQuestion" @checkAnswer="checkAnswerHandler" />
      <div v-if="showResumeButton" class="quiz__show-resume">
        <AppButton @click="showResumeHandler"
          ><fa icon="list-check" /> Show resume
        </AppButton>
      </div>
      <AppStepper
        :steps="steps"
        :current="current"
        :disableNext="disableNext"
        @prev="prevHandler"
        @next="nextHandler"
      />
    </AppContainer>
  </div>
</template>
<script lang="ts">
import { computed, defineComponent, ref, watch } from "vue";
import { useRouter } from "vue-router";
import Question from "@/components/Question.vue";
import AppStepper from "@/components/AppStepper.vue";
import AppButton from "@/components/AppButton.vue";
import { useQuizStore } from "@/store/quiz.store";
import { Answer } from "@/models/answer.model";
import { notify } from "@kyvg/vue3-notification";
export default defineComponent({
  name: "Quiz",
  components: {
    AppStepper,
    Question,
    AppButton,
  },
  setup() {
    const current = ref(1);
    const optionSelected = ref();
    const quizStore = useQuizStore();
    const router = useRouter();
    const currentQuestion = computed(
      () => quizStore.questions[current.value - 1]
    );
    const steps = computed(() => quizStore.questions.length);
    const disableNext = computed(() => optionSelected.value === undefined);
    const showResumeButton = computed(() => !quizStore.isQuizPartial);
    const quizName = computed(() => quizStore.quizSelected.title);
    watch(
      currentQuestion,
      (value) => {
        if (!value) return;
        if (!value.options) {
          quizStore.getOptionsByQuestionId(value.id);
        }
        optionSelected.value = value?.answer;
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
    const checkAnswerHandler = async (option: Answer) => {
      optionSelected.value = option;
      quizStore.setAnswer(currentQuestion.value.id, optionSelected.value);
      const res = await quizStore.getAnswerQuestionByIndex(current.value - 1);
      notify({
        title: `Your answer ${optionSelected.value.title.toUpperCase()} is: ${
          res ? "correct 🎉🎉🎉" : "wrong 🙈🙉🙊"
        }`,
      });
    };
    const showResumeHandler = () => {
      quizStore.getResume();
      router.push({ name: "Resume" });
    };
    return {
      steps,
      current,
      currentQuestion,
      disableNext,
      showResumeButton,
      quizName,
      prevHandler,
      nextHandler,
      checkAnswerHandler,
      showResumeHandler,
    };
  },
});
</script>
<style lang="postcss">
.quiz {
  @apply w-screen h-screen bg-green-400 flex justify-center items-center;
}
.quiz__title {
  @apply font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600;
  @apply md:text-4xl;
}
.quiz__container {
  @apply flex flex-col justify-around items-center;
}
.quiz__question {
  @apply bg-gray-100 rounded-lg shadow-md m-4 py-8 w-full box-content;
}
.quiz__show-resume {
  @apply py-2 rounded-lg shadow-md bg-gray-100 my-2 w-full;
  @apply md:py-4;
}
</style>
