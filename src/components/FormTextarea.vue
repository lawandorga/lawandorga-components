<template>
  <label class="block" :for="id">
    <FormLabel :required="required" :label="label" />
    <textarea
      :id="id"
      ref="input"
      v-model="model"
      class="block w-full px-3 py-2 mt-1 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-1 focus:ring-lorgablue focus:border-lorgablue sm:text-sm"
      :placeholder="placeholder"
      :required="required"
      @focusout="focusoutHandler"
    ></textarea>
    <FormHelptext :helptext="helptext" />
  </label>
</template>

<script lang="ts" setup>
import FormLabel from "./FormLabel.vue";
import FormHelptext from "./FormHelptext.vue";
import { computed, ref, toRefs } from "vue";

const id = Math.random().toString();

const props = defineProps({
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
    type: String,
  },
  name: {
    required: false,
    type: String,
    default: "",
  },
  required: {
    required: false,
    default: false,
    type: Boolean,
  },
  placeholder: {
    required: false,
    default: "",
    type: String,
  },
});

const { modelValue } = toRefs(props);

const input = ref<HTMLInputElement | null>(null);

const emit = defineEmits(["update:modelValue", "change:modelValue"]);

const model = computed({
  get: () => {
    return modelValue.value;
  },
  set: (v) => {
    emit("update:modelValue", v);
  },
});

// emit change
const focusoutHandler = () => {
  emitChange();
};

/*
the event change:modelValue is supposed to be triggered as soon as 
the user is finished typing. obviously in reality it is not possible to know when this is.
therefore this component emits this event when the focus or the route 
changes and the value of the input is not in sync with the modelvalue prop.
*/
const emitChange = () => {
  if (input.value === null) return;
  const value = input.value.value;
  if (value !== model.value) emit("change:modelValue", value);
};
</script>
