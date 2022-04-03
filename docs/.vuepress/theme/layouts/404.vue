<script setup lang="ts">
import { useRouteLocale } from "@vuepress/client";
import { useThemeLocaleData } from "@vuepress/theme-default/lib/client/composables";

const routeLocale = useRouteLocale();
const themeLocale = useThemeLocaleData();

const messages = themeLocale.value.notFound ?? ["Not Found"];
const getMsg = (): string =>
  messages[Math.floor(Math.random() * messages.length)];
const homeLink = themeLocale.value.home ?? routeLocale.value;
const homeText = themeLocale.value.backToHome ?? "Back to home";
</script>

<template>
  <div class="w-full min-h-[80vh] flex items-center justify-center">
    <div class="text-center">
      <h1 class="text-5xl font-bold text-gray-700">404</h1>
      <blockquote>{{ getMsg() }}</blockquote>

      <div class="mt-4 prose">
        <router-link :to="homeLink">{{ homeText }}</router-link>
      </div>
    </div>
  </div>
</template>
