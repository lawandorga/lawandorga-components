<template>
  <ModalFree
    :model-value="modelValue"
    :title="title"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <div class="mt-2">
      <p class="text-sm text-gray-500">
        <slot />
      </p>
      <p v-if="error" class="mt-2 text-sm text-red-600 whitespace-pre-line">
        {{ error }}
      </p>
    </div>

    <div class="flex justify-end mt-4">
      <ButtonNormal type="button" :loading="loading" @click="submitClicked()">
        {{ submit }}
      </ButtonNormal>
    </div>
  </ModalFree>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ButtonNormal from "@/components/ButtonNormal.vue";
import ModalFree from "./ModalFree.vue";

export default defineComponent({
  components: {
    ModalFree,
    ButtonNormal,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "Titel",
    },
    data: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      type: Object as PropType<{ [key: string]: any } | null>,
      required: false,
      default: () => null,
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false,
    },
    request: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any, no-unused-vars
      type: Function as PropType<(...args: any[]) => Promise<any>>,
      required: false,
      default: null,
    },
    submit: {
      type: String,
      default: "Confirm",
    },
  },
  emits: ["update:modelValue", "success", "error"],
  data: function () {
    return {
      loading: false,
      error: null as string | null,
    };
  },
  methods: {
    submitClicked() {
      this.loading = true;
      const request = this.data
        ? () => this.request(this.data)
        : () => this.request();
      request()
        .then(() => this.$emit("success", this.data))
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .catch((error: any) =>
          this.handleError(error.response ? error.response.data : {}),
        )
        .finally(() => (this.loading = false));
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    handleError(errors: any) {
      if (errors.detail) this.error = errors.detail as string;
      this.loading = false;
      this.$emit("error", errors);
    },
  },
});
</script>
