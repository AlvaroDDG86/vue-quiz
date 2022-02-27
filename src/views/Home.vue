<template>
  <div class="home">
    <section class="home__content">
      <h1 class="home__title">Vue Quiz</h1>
      <form @submit.prevent="submitHandler" class="home__form">
        <AppInput
          id="username"
          v-model="userName"
          label="Enter the user name"
          placeholder="user name"
        />
        <AppSelect
          :options="quizzes"
          placeholder="Select the quiz type"
          @input="selectHandler"
        />
        <div class="home__actions">
          <AppButton>Start Quiz</AppButton>
        </div>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useQuizStore } from "@/store/quiz.store";
import { QuizType } from "@/models/quiz-type.model";
import AppSelect from "@/components/AppSelect.vue";
import AppInput from "@/components/AppInput.vue";
import { SelectItem } from "@/models/select.model";
export default defineComponent({
  name: "Home",
  setup() {
    const userName = ref("");
    const quizStore = useQuizStore();
    const quizzes = computed(() =>
      quizStore.quizzes.map((quiz: QuizType) => ({
        id: quiz.id,
        description: quiz.title,
      }))
    );
    quizStore.getQuizzes();
    const submitHandler = () => {
      console.log(userName.value);
    };
    const selectHandler = (optionSelected: SelectItem) => {
      console.log(optionSelected);
      quizStore.getQuizById(optionSelected.id);
    };
    return {
      quizzes,
      userName,
      submitHandler,
      selectHandler,
    };
  },
  components: { AppSelect, AppInput },
});
</script>
<style lang="postcss">
.home {
  @apply bg-green-400 w-screen h-screen flex justify-center items-center overflow-hidden;
}

.home__content {
  @apply w-full h-96 bg-white text-center rounded-lg shadow-lg mx-5;
  @apply md:w-1/3;
}

.home__title {
  @apply text-gray-500 text-3xl font-bold py-4;
}

.home__form {
  @apply h-full flex flex-col justify-start items-center;
}
.home__actions {
  @apply mt-5;
}
</style>
