<script lang="ts">
import { defineComponent, ref, toRefs } from "vue";
export default defineComponent({
  name: "AppSelect",
  props: {
    options: {
      type: Array,
      require: true,
    },
  },
  setup(props, { emit }) {
    const { options: optionsList } = toRefs(props);
    const selected = ref({});
    const open = ref(false);

    const blurHandler = () => {
      open.value = false;
    };
    const clickSelectHandler = () => {
      open.value = !open.value;
    };
    const clickItemHandler = (option: any) => {
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
<template>
  <div class="base-select" @blur="blurHandler">
    <div
      class="base-select__selected"
      :class="{ open: open }"
      @click="clickSelectHandler"
    >
      {{ selected.title }}
    </div>
    <div
      class="base-select__items"
      :class="{ 'base-select__items--close': !open }"
    >
      <div
        class="base-select__item"
        v-for="(option, i) of options"
        :key="i"
        @click="(_) => clickItemHandler(option)"
      >
        {{ option.title }}
      </div>
    </div>
  </div>
</template>
<style lang="postcss" scoped>
.base-select {
  @apply relative w-full text-center outline-none p-2;
}

.base-select__selected {
  @apply bg-gray-100 text-gray-800 cursor-pointer select-none rounded-sm flex justify-between items-center py-2 px-1;
}

.base-select__items {
  @apply bg-gray-100 text-gray-800 overflow-hidden absolute left-0 right-0 z-10 shadow-xl mx-2;
}

.base-select__items--close {
  @apply hidden;
}

.base-select__item {
  @apply cursor-pointer py-2;
  @apply hover:bg-gray-400;
}
</style>
