<template>
  <div class="question">
    <div class="question__title">{{ question?.title }}</div>
    <div class="question__options">
      <div
        class="question__option"
        :class="{
          'question__option--selected': selected && option.id === selected.id,
        }"
        v-for="(option, idx) in question?.options"
        :key="idx"
        @click="optionSelectedHandler(option)"
      >
        {{ option.title }}
      </div>
    </div>
    <div class="question__validate">
      <AppButton :disabled="selected === undefined" @click="checkAnswerhandler">
        <fa icon="check-square" /> Check answer
      </AppButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, toRefs, watch } from "vue";
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
  setup(props, { emit }) {
    const selected = ref<Answer>();
    const { question } = toRefs(props);
    watch(
      question,
      (value) => {
        selected.value = value?.answer;
      },
      {
        immediate: true,
      }
    );
    const optionSelectedHandler = (option: Answer) => {
      selected.value = option;
    };
    const checkAnswerhandler = () => {
      emit("check-answer", selected.value);
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
  @apply bg-gray-100 rounded-lg shadow-md m-2 py-8 w-full;
  @apply md:m-4;
  @apply dark:bg-gray-600 text-gray-100;

  &__title {
    @apply font-bold text-sm text-left py-1 px-3 mb-2 text-gray-800;
    @apply md:text-xl;
    @apply dark:text-gray-100;
  }
  &__options {
    min-width: 4rem;
    @apply w-full grid grid-cols-1 gap-1 px-3;
    @apply sm:grid-cols-2;
  }
  &__option {
    min-height: fit-content;
    @apply rounded border-2 border-green-500 bg-white text-gray-700 text-xs flex justify-center items-center cursor-pointer duration-300 shadow-md;
    @apply hover:border-green-700 hover:bg-gray-200 hover:shadow-none;
    @apply md:text-sm md:h-12;
    @apply dark:bg-gray-600 dark:text-gray-100;

    &--selected {
      @apply bg-green-500 text-white bottom-0;
      @apply hover:bg-green-500 hover:text-white;
      @apply dark:bg-green-800;
    }
  }
  &__validate {
    @apply mt-4;
  }
}
</style>
