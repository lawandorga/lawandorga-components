<script setup>
import Sidebar from "../components/Sidebar.vue";
</script>

<template>
  <nav class="w-full fixed h-12 border-b flex items-center px-6 bg-white z-10">
    <router-link class="text-2xl font-bold" to="/">Law&Orga</router-link>
  </nav>
  <main class="flex">
    <Sidebar />
    <article class="pl-72 w-full pt-12">
      <div class="px-6 py-10 mx-auto prose dark:prose-invert">
        <Content />
      </div>
    </article>
  </main>
</template>
