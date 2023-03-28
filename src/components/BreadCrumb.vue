<script setup>
import { RouterLink, RouterView } from "vue-router";

import { ChevronRightIcon } from "@heroicons/vue/20/solid";
</script>

<template>
  <div class="flex items-center gap-x-1 border-b border-gray-400 py-3">
    <a href="#"> <h1 class="text-sm leading-6 text-gray-400">Explore</h1></a>

    <ChevronRightIcon
      class="h-5 w-5 flex-none text-gray-400"
      aria-hidden="true"
    />
    <RouterLink to="/projects">
      <h1 class="text-sm leading-6 font-semibold text-gray-900">
        Projects
      </h1></RouterLink
    >
  </div>
</template>



<style lang="scss" scoped>
</style>