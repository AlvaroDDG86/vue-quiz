<template>
  <h1 class="app-title"><slot /></h1>
</template>
<style lang="postcss">
.app-title {
  @apply font-extrabold text-transparent text-2xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600;
  @apply md:text-4xl;
}
</style>
