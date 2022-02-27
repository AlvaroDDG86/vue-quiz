<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    {{ quizzes }}
  </div>
</template>

<script lang="ts">
import { useQuizStore } from "@/store/quiz.store";
import { computed, defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  setup() {
    const quizStore = useQuizStore();
    const quizzes = computed(() => quizStore.quizzes);
    quizStore.getQuizzes();
    return {
      quizzes,
    };
  },
});
</script>
