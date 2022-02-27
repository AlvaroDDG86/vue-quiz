<template>
  <div class="app-stepper">
    <div class="app-stepper__container">
      <div class="app-stepper__progress" id="progress"></div>
      <div
        v-for="step in steps"
        :key="step"
        class="app-stepper__step"
        :class="{ 'app-stepper__step--active': current === step }"
      >
        {{ step }}
      </div>
    </div>
    <div class="app-stepper__actions">
      <AppButton @click="prevHandler" :disabled="current === 1 || disablePrev"
        >Prev</AppButton
      >
      <AppButton
        @click="nextHandler"
        :disabled="current === steps || disableNext"
        >Next</AppButton
      >
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AppButton from "./AppButton.vue";
export default defineComponent({
  name: "AppStepper",
  components: { AppButton },
  props: {
    steps: {
      type: Number,
      required: true,
    },
    current: {
      type: Number,
      required: true,
    },
    disablePrev: {
      type: Boolean,
      default: false,
      require: false,
    },
    disableNext: {
      type: Boolean,
      default: false,
      require: false,
    },
  },
  setup(props, { emit }) {
    const prevHandler = () => {
      emit("prev");
    };
    const nextHandler = () => {
      emit("next");
    };
    return {
      nextHandler,
      prevHandler,
    };
  },
});
</script>
<style lang="postcss">
.app-stepper {
  @apply w-full;
}
.app-stepper__container {
  @apply flex justify-between relative mb-8 px-5;
}

.app-stepper::before {
  @apply bg-blue-700 absolute top-1/2 left-0 -translate-y-1/2 h-1 w-full z-10;
}

.app-stepper__progress {
  z-index: -1;
  @apply bg-yellow-300 absolute top-1/2 left-0 -translate-x-1/2 h-1 w-0;
}

.app-stepper__step {
  @apply flex justify-center items-center w-8 h-8 bg-white rounded-xl font-bold text-gray-700 text-sm;
}

.app-stepper__step--active {
  @apply bg-blue-700 text-white;
}

.app-stepper__actions {
  @apply w-full flex justify-evenly;
}
</style>
