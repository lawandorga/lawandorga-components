<template>
  <ModalFree
    :model-value="modelValue"
    :title="title"
    @update:model-value="$emit('update:modelValue', $event)"
  >
    <FormGenerator
      :fields="fields"
      :initial="initial"
      :request="request"
      :submit="submit"
      :cancel="cancel"
      :disabled="disabled"
      @success="$emit('success', $event)"
      @cancel="$emit('update:modelValue', false)"
      @change="$emit('change', $event)"
    />
  </ModalFree>
</template>

<script lang="ts">
import ModalFree from "./ModalFree.vue";
import FormGenerator from "./FormGenerator.vue";
import { defineComponent, PropType } from "vue";
import { JsonModel } from "../types/shared";
import { FormField } from "@/types";

export default defineComponent({
  components: {
    ModalFree,
    FormGenerator,
  },
  props: {
    title: {
      type: String,
      required: false,
      default: "",
    },
    modelValue: {
      type: Boolean,
      required: false,
      default: false,
    },
    fields: {
      type: Array as PropType<FormField[]>,
      required: true,
    },
    initial: {
      type: Object as PropType<JsonModel | null>,
      default: null,
      required: false,
    },
    submit: {
      type: String,
      required: false,
      default: "Save",
    },
    cancel: {
      type: String,
      required: false,
      default: null,
    },
    request: {
      type: Function as PropType<(...args: any[]) => Promise<JsonModel>>, // eslint-disable-line
      required: false,
      default: null,
    },
  },
  emits: ["update:modelValue", "success", "change"],
  data() {
    return {
      disabled: false as boolean,
    };
  },
  watch: {
    modelValue(newValue: boolean) {
      if (newValue) this.disabled = false;
      else this.disabled = true;
    },
  },
});
</script>
