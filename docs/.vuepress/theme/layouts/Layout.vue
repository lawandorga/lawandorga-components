<script setup lang="ts">
import { useThemeData } from "@vuepress/plugin-theme-data/lib/client";
import Sidebar from "../components/Sidebar.vue";

const themeData = useThemeData();
</script>

<template>
  <nav class="fixed z-10 flex items-center w-full h-12 px-6 bg-white border-b">
    <router-link class="text-2xl font-bold" to="/">
      {{ themeData.title }}
    </router-link>
  </nav>
  <main class="flex">
    <Sidebar />
    <article class="w-full pt-12 pb-32 pl-72">
      <div class="px-6 py-10 mx-auto prose dark:prose-invert">
        <Content />
      </div>
    </article>
  </main>
</template>
