<template>
  <div class="app-select" @blur="blurHandler">
    <div
      class="app-select__selected"
      :class="{ open: open }"
      @click="clickSelectHandler"
    >
      <span v-if="selected.description">
        {{ selected.description }}
      </span>
      <span v-else-if="placeholder">{{ placeholder }}</span>
    </div>
    <div
      class="app-select__items"
      :class="{ 'app-select__items--close': !open }"
    >
      <div
        class="app-select__item"
        v-for="(option, i) of options"
        :key="i"
        @click="clickItemHandler(option)"
      >
        {{ option.description }}
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, PropType, ref, toRefs } from "vue";
import { SelectItem } from "@/models/select.model";
export default defineComponent({
  name: "AppSelect",
  props: {
    placeholder: {
      type: String,
      default: "",
    },
    options: {
      type: Object as PropType<SelectItem[]>,
      require: true,
    },
  },
  setup(props, { emit }) {
    const { options: optionsList } = toRefs(props);
    const selected = ref<SelectItem>({} as SelectItem);
    const open = ref<boolean>(false);

    const blurHandler = () => {
      open.value = false;
    };
    const clickSelectHandler = () => {
      open.value = !open.value;
    };
    const clickItemHandler = (option: SelectItem) => {
      selected.value = option;
      open.value = false;
      emit("input", option);
    };

    return {
      open,
      selected,
      optionsList,
      blurHandler,
      clickSelectHandler,
      clickItemHandler,
    };
  },
});
</script>

<style lang="postcss" scoped>
.app-select {
  @apply relative w-full text-center outline-none py-2 px-4;
  &__selected {
    @apply bg-gray-100 text-gray-800 cursor-pointer select-none rounded-lg flex justify-between items-center py-4 px-1 h-10;
    @apply dark:bg-gray-600 dark:text-gray-100;
  }

  &__items {
    @apply bg-gray-100 text-gray-800 overflow-hidden absolute left-0 right-0 z-10 shadow-xl mx-4 my-2 rounded-lg;
    @apply dark:bg-gray-600 dark:text-gray-100;

    &--close {
      @apply hidden;
    }
  }

  &__item {
    @apply cursor-pointer py-2;
    @apply hover:bg-gray-400;
  }
}
</style>
