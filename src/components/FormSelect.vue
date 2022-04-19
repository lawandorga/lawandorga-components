<template>
  <label :for="name" class="relative block">
    <FormLabel :required="required" :label="label" />
    <div class="flex items-center mt-1 space-x-2">
      <select
        :id="`form--${name}`"
        v-model="model"
        :name="name"
        class="block w-full py-2 pl-3 pr-6 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none cursor-pointer focus:outline-none focus:ring-lorgablue focus:border-lorgablue focus:ring-1 sm:text-sm"
      >
        <option
          v-for="option in internalOptions"
          :key="option.name"
          :value="option.value"
        >
          {{ option.name }}
        </option>
      </select>
    </div>
    <FormHelptext :form-helptext="helptext" />
  </label>
</template>

<script lang="ts">
import FormLabel from "./FormLabel.vue";
import FormHelptext from "./FormHelptext.vue";
import { defineComponent, PropType } from "vue";

type FormOption = { name: string; value: string | null };
type FormOptionInput =
  | { name?: string; value?: string | number | null; id?: number }
  | string;

export default defineComponent({
  components: {
    FormHelptext,
    FormLabel,
  },
  props: {
    label: {
      required: true,
      type: String,
    },
    helptext: {
      required: false,
      default: "",
      type: String,
    },
    modelValue: {
      required: false,
      default: "",
      type: [String, Number, Boolean],
    },
    name: {
      required: false,
      type: String,
      default: "",
    },
    options: {
      required: false,
      type: Array as PropType<FormOptionInput[] | undefined>,
      default: () => [],
    },
    required: {
      required: false,
      default: false,
      type: Boolean,
    },
  },
  emits: ["update:modelValue"],
  computed: {
    model: {
      get() {
        return this.modelValue;
      },
      set(newValue: string | boolean | null) {
        this.$emit("update:modelValue", newValue);
      },
    },
    formOptions(): FormOption[] {
      if (!this.options) return [];
      return this.options.map((o: FormOptionInput) => {
        if (typeof o === "string")
          return {
            name: o,
            value: o,
          };
        else {
          let value = "-";
          if (o.value) value = String(o.value);
          else if (o.id) value = String(o.id);
          return {
            name: o.name || "-",
            value: value,
          };
        }
      });
    },
    internalOptions(): FormOption[] {
      if (this.required) return this.formOptions;
      return [{ name: "------", value: null }, ...this.formOptions];
    },
  },
});
</script>

<style scoped>
select {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
  background-position: right 0.5rem center;
  background-position-x: right 0.5rem;
  background-position-y: center;
  background-repeat: no-repeat;
  background-size: 1.5em 1.5em;
}
</style>
