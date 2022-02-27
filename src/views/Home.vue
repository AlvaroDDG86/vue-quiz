<template>
  <div class="home">
    <section class="home__content">
      <h1 class="home__title">Vue Quiz</h1>
      <form @submit.prevent="submitHandler" class="home__form">
        <div class="form-control">
          <label for="name">Enter an user name:</label>
          <input
            id="name"
            type="text"
            placeholder="User name"
            v-model="userName"
            required
          />
        </div>
        <AppSelect :options="quizzes" @input="selectHandler" />
        <AppButton>Start Quiz</AppButton>
      </form>
    </section>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, ref } from "vue";
import { useQuizStore } from "@/store/quiz.store";
import AppSelect from "@/components/AppSelect.vue";
export default defineComponent({
  name: "Home",
  setup() {
    const userName = ref("");
    const quizStore = useQuizStore();
    const quizzes = computed(() => quizStore.quizzes);
    quizStore.getQuizzes();
    const submitHandler = () => {
      console.log(userName.value);
    };
    const selectHandler = (optionSelected: any) => {
      console.log(optionSelected);
    };
    return {
      quizzes,
      userName,
      submitHandler,
      selectHandler,
    };
  },
  components: { AppSelect },
});
</script>
<style lang="postcss">
.home {
  @apply bg-green-400 w-screen h-screen flex justify-center items-center;
}

.home__content {
  @apply w-1/3 h-96 bg-white text-center rounded-lg shadow-lg;
}

.home__title {
  @apply text-gray-500 text-3xl font-bold py-4;
}

.home__form {
  @apply h-full flex flex-col justify-start items-center;
}

.form-control {
  @apply w-full flex flex-col items-start py-4 px-2;
}
.form-control label {
  @apply py-2 px-1 font-bold text-gray-600;
}
.form-control input {
  @apply py-2 px-1 rounded-sm w-full outline-none bg-gray-100;
}
</style>
