<template>
  <div class="home">
    <AppContainer>
      <AppTitle>Vue Quiz</AppTitle>
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
import { useRouter } from "vue-router";
// Stores
import { useQuizStore } from "@/store/quiz.store";
import { useUserStore } from "@/store/user.store";
// Components
import AppSelect from "@/components/AppSelect.vue";
import AppInput from "@/components/AppInput.vue";
// Models
import { QuizType } from "@/models/quiz-type.model";
import { SelectItem } from "@/models/select.model";

export default defineComponent({
  name: "Home",
  setup() {
    const quizStore = useQuizStore();
    const userStore = useUserStore();
    const router = useRouter();
    quizStore.getQuizzes();
    const userName = ref<string>(userStore.name);
    const quitTypeSelected = ref<SelectItem>({} as SelectItem);
    const quizzes = computed(() =>
      quizStore.quizzes.map((quiz: QuizType) => ({
        id: quiz.id,
        description: quiz.title,
      }))
    );
    const disableButton = computed(() => {
      return userName.value === "" || !quitTypeSelected.value.id;
    });
    const submitHandler = () => {
      userStore.setUser(userName.value);
      if (userName.value === "" || !quitTypeSelected.value.id) return;
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
  @apply dark:bg-green-800;

  &__form {
    @apply h-full flex flex-col justify-start items-center;
  }

  &__actions {
    @apply mt-5;
  }
}
</style>
