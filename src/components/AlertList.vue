<template>
  <div
    aria-live="assertive"
    class="fixed z-50 inset-0 flex items-end justify-end px-4 py-6 pointer-events-none sm:p-6 sm:items-start print:hidden"
  >
    <transition-group
      tag="div"
      enter-active-class="transform ease-out duration-300 transition"
      enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
      leave-active-class="absolute ease-in transition duration-200"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-75"
      move-class="transition ease duration-700"
      class="w-full max-w-sm block"
    >
      <div v-for="alert in alerts" :key="alert.id" class="w-full max-w-sm mb-4">
        <Alert :alert="alert" @close="$emit('close', $event)" />
      </div>
    </transition-group>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Alert from "./AlertItem.vue";
import { AlertItem } from "../types/shared";

export default defineComponent({
  components: {
    Alert,
  },
  props: {
    alerts: {
      required: true,
      default: () => [],
      type: Array as PropType<AlertItem[]>,
    },
  },
  emits: ["close"],
});
</script>
