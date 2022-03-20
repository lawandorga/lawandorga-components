<script setup lang="ts">
import SidebarItem from "./SidebarItem.vue";
import { useSidebarItems } from "../composables";

const sidebarItems = useSidebarItems();
</script>

<template>
  <ul v-if="sidebarItems.length" class="space-y-10">
    <SidebarItem
      v-for="item in sidebarItems"
      :key="item.link || item.text"
      :item="item"
    />
  </ul>
</template>
