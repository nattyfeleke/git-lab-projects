<script setup>
import Project from "../components/Project.vue";
</script>
<template>
  <h1 class="text-gray-800 font-semibold py-3 text-2xl">Explore Projects</h1>
  <div class="bg-white">
    <nav class="flex flex-col sm:flex-row border-b">
      <a
        href="#"
        class="text-gray-600 py-3 px-4 block hover:text-blue-500 text-gray-800 border-b-2 font-medium border-blue-500"
      >
        All</a
      ><a
        href="#"
        class="text-gray-600 py-3 px-4 block hover:border-b-2 hover:border-blue-200"
      >
        Most starred</a
      ><a
        href="#"
        class="text-gray-600 py-3 px-4 block hover:border-b-2 hover:border-blue-200"
      >
        Trending</a
      >
    </nav>
  </div>
  <Project />
</template>


<style lang="scss" scoped>
</style>