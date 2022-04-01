<template>
  <div
    class="w-full overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5"
  >
    <div class="p-4">
      <div class="flex items-start">
        <div class="flex-shrink-0">
          <CheckCircleIcon
            v-if="alert.type === 'success'"
            class="w-6 h-6 text-green-400"
            aria-hidden="true"
          />
          <ExclamationIcon
            v-if="alert.type === 'error'"
            class="w-6 h-6 text-red-400"
            aria-hidden="true"
          />
        </div>
        <div class="flex-1 w-0 ml-3">
          <p class="text-sm font-medium text-gray-900">
            {{ alert.heading }}
          </p>
          <p class="mt-1 text-sm text-gray-500">
            {{ alert.message }}
          </p>
        </div>
        <div class="flex flex-shrink-0 ml-4">
          <button
            class="bg-white p-0.5 rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:bg-gray-100 focus:ring-gray-200"
            @click="close()"
          >
            <span class="sr-only">Close</span>
            <XIcon class="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { CheckCircleIcon, ExclamationIcon } from "@heroicons/vue/outline";
import { XIcon } from "@heroicons/vue/solid";
import { AlertItem } from "../types/alert";

export default defineComponent({
  components: {
    CheckCircleIcon,
    XIcon,
    ExclamationIcon,
  },
  props: {
    alert: {
      type: Object as PropType<AlertItem>,
      required: true,
    },
  },
  emits: ["close"],
  methods: {
    close() {
      this.$emit("close", this.alert);
    },
  },
});
</script>
