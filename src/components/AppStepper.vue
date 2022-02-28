<template>
  <div class="app-stepper">
    <div class="app-stepper__container">
      <div class="app-stepper__progress" ref="progress"></div>
      <div
        v-for="step in steps"
        :key="step"
        class="app-stepper__step"
        :class="{ 'app-stepper__step--active': current >= step }"
      >
        <span class="app-stepper__number">{{ step }}</span>
      </div>
    </div>
    <div class="app-stepper__actions">
      <AppButton @click="prevHandler" :disabled="current === 1 || disablePrev"
        ><fa icon="arrow-left"
      /></AppButton>
      <AppButton
        @click="nextHandler"
        :disabled="current === steps || disableNext"
        ><fa icon="arrow-right"
      /></AppButton>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, toRefs, watch } from "vue";
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
    const progress = ref();
    const { current, steps } = toRefs(props);
    watch(current, (currentValue) => {
      progress.value.style.width = `${
        (100 / (steps.value - 1)) * (currentValue - 1)
      }%`;
    });
    const prevHandler = () => {
      emit("prev");
    };
    const nextHandler = () => {
      emit("next");
    };
    return {
      progress,
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
  @apply flex justify-between relative mb-8;
}

.app-stepper::before {
  @apply bg-blue-700 absolute top-1/2 left-0 -translate-y-1/2 h-1 w-full z-10;
}

.app-stepper__progress {
  top: calc(50% - 2px);
  @apply bg-blue-700 absolute left-0 h-1 duration-300;
}

.app-stepper__step {
  @apply flex justify-center items-center w-2 h-2 rounded-lg bg-white font-bold text-gray-700 z-10 border-2 border-blue-700 text-xs;
  @apply md:w-8 md:h-8 md:text-sm md:rounded-md;
}

.app-stepper__number {
  @apply hidden;
  @apply md:inline;
}

.app-stepper__step--active {
  @apply bg-blue-700 text-white duration-300;
}

.app-stepper__actions {
  @apply w-full flex justify-evenly;
}
</style>
