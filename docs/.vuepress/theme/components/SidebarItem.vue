<script setup lang="ts">
import { computed, ref, toRefs } from "vue";
import type { PropType } from "vue";
import { useRoute, useRouter } from "vue-router";
import type { ResolvedSidebarItem } from "@vuepress/theme-default/lib/shared";
import { isActiveSidebarItem } from "@vuepress/theme-default/lib/client/utils";

const props = defineProps({
  item: {
    type: Object as PropType<ResolvedSidebarItem>,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
    default: 0,
  },
});

const { item, depth } = toRefs(props);

const route = useRoute();
const router = useRouter();

const isActive = computed(() => isActiveSidebarItem(item.value, route));

const itemClass = computed(() => ({
  "border-transparent border-l-4 w-full block text-gray-500": true,
  "px-4 text-lg font-bold mb-3": depth.value === 0,
  "px-6 text-base tracking-wide py-1": depth.value === 1,
  "px-10 tracking-wide py-0.5 text-sm": depth.value === 2,
  "px-14 tracking-wide text-xs": depth.value === 3,
  "font-medium border-gray-600": isActive.value && depth.value === 1,
  "font-medium": isActive.value && (depth.value === 2 || depth.value === 3),
  "text-gray-800": isActive.value,
}));

const isOpen = ref(true);

const onClick = ref<(() => void) | undefined>(undefined);

if (item.value.collapsible) {
  // active item is open by default
  isOpen.value = isActive.value;
  // toggle open status on click
  onClick.value = () => {
    isOpen.value = !isOpen.value;
  };
  // reset open status after navigation
  router.afterEach(() => {
    isOpen.value = isActive.value;
  });
}
</script>

<template>
  <li>
    <router-link v-if="item.link" :class="itemClass" :to="item.link">
      {{ item.text }}
    </router-link>
    <p
      v-else
      tabindex="0"
      :class="itemClass"
      @click="onClick"
      @keydown.enter="onClick"
    >
      {{ item.text }}
    </p>

    <ul v-show="isOpen" v-if="item.children?.length" class="space-y-1">
      <SidebarItem
        v-for="child in item.children"
        :key="`${depth}${child.text}${child.link}`"
        :item="child"
        :depth="depth + 1"
      />
    </ul>
  </li>
</template>
