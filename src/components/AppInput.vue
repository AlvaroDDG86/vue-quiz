<template>
  <div class="base-input">
    <label v-show="label" :for="id">{{ label }}</label>
    <input
      :id="id"
      ref="input"
      class="base-input__input"
      :type="inputType"
      :placeholder="placeholder"
      :value="modelValue"
      @input="updateHandler"
    />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AppInput",
  props: {
    id: {
      type: String,
      require: true,
    },
    label: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      require: true,
    },
    inputType: {
      type: String,
      default: "text",
    },
  },
  setup(_, { emit }) {
    const updateHandler = (event: any) => {
      emit("update:modelValue", event.target.value);
    };
    return {
      updateHandler,
    };
  },
});
</script>
<style lang="postcss" scoped>
.base-input {
  @apply w-full flex flex-col items-start py-2 px-4;

  & label {
    @apply py-2 px-1 font-bold text-gray-600;
    @apply dark:text-gray-200;
  }

  & input {
    @apply py-2 px-1 rounded-lg w-full outline-none bg-gray-100;
    @apply dark:bg-gray-600 dark:text-gray-200;
  }
}
</style>
