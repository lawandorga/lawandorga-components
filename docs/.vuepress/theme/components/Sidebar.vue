<script setup lang="ts">
import SidebarItems from "./SidebarItems.vue";
</script>

<template>
  <aside
    class="sidebar pt-24 border-r w-72 fixed top-12 bottom-0 pb-24 overflow-y-auto"
  >
    <slot name="top" />
    <SidebarItems />
    <slot name="bottom" />
  </aside>
</template>
