<template>
  <div class="question">
    <div class="question__title">{{ question?.title }}</div>
    <div class="question__options">
      <div
        class="question__option"
        :class="{ 'question__option--selected': idx === selected }"
        v-for="(option, idx) in question?.options"
        :key="idx"
        @click="optionSelectedHandler(option, idx)"
      >
        {{ option.title }}
      </div>
    </div>
    <div class="question__validate">
      <AppButton :disabled="selected === undefined" @click="checkAnswerhandler">
        Check answer
      </AppButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref } from "vue";
import { Question } from "@/models/question.model";
import { Answer } from "@/models/answer.model";

export default defineComponent({
  name: "Question",
  props: {
    question: {
      type: Object as PropType<Question>,
      require: true,
    },
  },
  setup(_, { emit }) {
    const selected = ref();
    const optionSelectedHandler = (option: Answer, idx: number) => {
      selected.value = idx;
      emit("option-selected", option);
    };
    const checkAnswerhandler = () => {
      emit("check-answer");
    };
    return {
      selected,
      optionSelectedHandler,
      checkAnswerhandler,
    };
  },
});
</script>
<style lang="postcss">
.question {
  @apply bg-gray-100 rounded-lg shadow-md m-4 py-8 w-full;
}
.question__title {
  @apply font-bold text-xl text-left py-1 px-3 mb-2;
}
.question__options {
  @apply w-full grid grid-cols-1 gap-1 px-3;
  @apply sm:grid-cols-2;
}
.question__option {
  @apply rounded border-2 border-green-500 bg-white text-sm flex justify-center items-center h-12 cursor-pointer;
  @apply hover:border-green-700 hover:bg-gray-200;
}
.question__option--selected {
  @apply bg-green-500 text-white;
  @apply hover:bg-green-500 hover:text-white;
}
.question__validate {
  @apply mt-4;
}
</style>
