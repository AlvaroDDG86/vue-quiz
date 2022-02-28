<template>
  <div class="home">
    <AppContainer>
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
          <AppButton :disabled="disableButton"> Start Quiz </AppButton>
        </div>
      </form>
    </AppContainer>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useQuizStore } from "@/store/quiz.store";
import { QuizType } from "@/models/quiz-type.model";
import AppSelect from "@/components/AppSelect.vue";
import AppInput from "@/components/AppInput.vue";
import { SelectItem } from "@/models/select.model";
import { useRouter } from "vue-router";
import { useUserStore } from "@/store/user.store";
export default defineComponent({
  name: "Home",
  setup() {
    const quizStore = useQuizStore();
    const userStore = useUserStore();
    const router = useRouter();
    const userName = ref("");
    const quitTypeSelected = ref({} as SelectItem);
    const quizzes = computed(() =>
      quizStore.quizzes.map((quiz: QuizType) => ({
        id: quiz.id,
        description: quiz.title,
      }))
    );
    const disableButton = computed(() => {
      return userName.value === "" || !quitTypeSelected.value.id;
    });
    quizStore.getQuizzes();
    const submitHandler = () => {
      userStore.setUser(userName.value);
      router.push({
        name: "Quiz",
      });
    };
    const selectHandler = (optionSelected: SelectItem) => {
      quizStore.setQuizType({
        id: optionSelected.id,
        title: optionSelected.description,
      });
      quitTypeSelected.value = optionSelected;
      quizStore.getQuizById(optionSelected.id);
    };
    return {
      quizzes,
      userName,
      disableButton,
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

.home__title {
  @apply font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600;
  @apply md:text-4xl;
}

.home__form {
  @apply h-full flex flex-col justify-start items-center;
}
.home__actions {
  @apply mt-5;
}
</style>
