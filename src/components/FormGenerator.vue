<template>
  <form ref="form" @submit.prevent="handleSubmit">
    <div class="grid grid-cols-1 gap-4">
      <div v-if="nonFieldErrors && nonFieldErrors.length">
        <p
          v-for="(error, index) in nonFieldErrors"
          :key="index"
          class="mt-2 text-sm leading-tight text-red-700"
        >
          {{ error }}
        </p>
      </div>
      <div
        v-for="field in fields"
        :key="field.name"
        :class="{ hidden: field.type === 'hidden' }"
      >
        <FormTextarea
          v-if="field.type === 'textarea'"
          v-model="data[field.name]"
          :label="field.label"
          :name="field.name"
          :type="field.type"
          :required="field.required"
          :placeholder="field.placeholder"
          @update:model-value="showSuccess = false"
        />
        <FormSelect
          v-else-if="field.type === 'select'"
          v-model="data[field.name]"
          :label="field.label"
          :name="field.name"
          :required="field.required"
          :options="field.options"
          @update:model-value="showSuccess = false"
        />
        <FormMultiple
          v-else-if="field.type === 'multiple'"
          v-model="data[field.name]"
          :label="field.label"
          :name="field.name"
          :required="field.required"
          :options="field.options"
          @update:model-value="showSuccess = false"
        />
        <FormList
          v-else-if="field.type === 'list'"
          v-model="data[field.name]"
          :required="field.required"
          :label="field.label"
          :helptext="field.helptext"
          :name="field.name"
        />
        <FormCheckbox
          v-else-if="field.type === 'checkbox'"
          v-model="data[field.name]"
          :label="field.label"
          :helptext="field.helptext"
        />
        <FormFile
          v-else-if="field.type === 'file'"
          v-model="data[field.name]"
          :label="field.label"
          :autocomplete="field.autocomplete"
          :name="field.name"
          :disabled="field.disabled"
          :required="field.required"
          :placeholder="field.placeholder"
          :helptext="field.helptext"
          @update:model-value="showSuccess = false"
        />
        <FormInput
          v-else
          v-model="data[field.name]"
          :label="field.label"
          :autocomplete="field.autocomplete"
          :name="field.name"
          :disabled="field.disabled"
          :type="field.type"
          :required="field.required"
          :placeholder="field.placeholder"
          :helptext="field.helptext"
          @update:model-value="showSuccess = false"
        />
        <p
          v-if="errors[field.name]"
          class="text-red-700 text-sm leading-tight ml-1.5 mt-1 whitespace-pre-line"
        >
          {{ errors[field.name][0] }}
        </p>
      </div>
      <div class="flex items-center justify-end pt-2 print:hidden">
        <transition
          enter-active-class="transition duration-200 opacity-0"
          enter-class="opacity-0"
          enter-to-class="opacity-100"
          leave-class="opacity-100"
          leave-to-class="opacity-0"
          leave-active-class="transition duration-150"
          tag="div"
          class="mr-auto"
        >
          <p v-if="showSuccess" class="text-green-700">
            {{ success }}
          </p>
        </transition>
        <ButtonBlue
          v-if="cancel"
          class="mr-3"
          kind="secondary"
          type="button"
          @click="$emit('cancel')"
        >
          {{ cancel }}
        </ButtonBlue>
        <ButtonBlue
          v-if="submit"
          type="submit"
          :disabled="disabled"
          :loading="loading"
        >
          {{ submit }}
        </ButtonBlue>
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import FormTextarea from "./FormTextarea.vue";
import FormSelect from "./FormSelect.vue";
import FormMultiple from "./FormMultiple.vue";
import FormInput from "./FormInput.vue";
import ButtonBlue from "./ButtonNormal.vue";
import { defineComponent, PropType } from "vue";
import { JsonModel } from "@/types/shared";
import FormList from "./FormList.vue";
import FormCheckbox from "./FormCheckbox.vue";
import FormFile from "./FormFile.vue";
import { FormField } from "@/types";

export default defineComponent({
  components: {
    FormCheckbox,
    ButtonBlue,
    FormSelect,
    FormInput,
    FormTextarea,
    FormMultiple,
    FormList,
    FormFile,
  },
  props: {
    fields: {
      type: Array as PropType<FormField[]>,
      required: true,
    },
    initial: {
      type: Object as PropType<JsonModel | null>,
      default: null,
      required: false,
    },
    success: {
      type: String,
      required: false,
      default: "",
    },
    submit: {
      type: String,
      required: false,
      default: "Send" as string,
    },
    cancel: {
      type: String,
      required: false,
      default: "",
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    request: {
      type: Function as PropType<(...args: any[]) => Promise<JsonModel>>, // eslint-disable-line
      required: false,
      default: null,
    },
  },
  emits: ["success", "error", "cancel", "change"],
  data() {
    return {
      showSuccess: false,
      nonFieldErrors: [] as string[],
      errors: {} as { [key: string]: string | string[] },
      data: {} as JsonModel,
      loading: false,
    };
  },
  watch: {
    initial: function (newValue) {
      this.data = Object.assign({}, newValue, this.data);
    },
    data: {
      deep: true,
      handler(newValue) {
        this.$emit("change", newValue);
      },
    },
  },
  mounted() {
    this.data = Object.assign({}, this.initial);
  },
  methods: {
    handleSubmit() {
      this.showSuccess = false;
      this.loading = true;
      this.sendRequest(this.data);
    },
    sendRequest(requestData: JsonModel) {
      this.errors = {};
      this.nonFieldErrors = [];

      this.request(requestData)
        .then((data: JsonModel) => this.handleSuccess(data))
        .catch((error) =>
          this.handleError(error.response ? error.response.data : {}),
        );
    },
    handleSuccess(data: JsonModel) {
      this.showSuccess = true;
      this.loading = false;
      this.$emit("success", data);
    },
    handleError(errors: { [key: string]: string | string[] }) {
      if (errors.detail) {
        this.nonFieldErrors = [errors.detail as string];
      } else {
        this.errors = errors;
        this.nonFieldErrors = errors.non_field_errors as string[];
      }
      this.loading = false;
      this.$emit("error", errors);
    },
  },
});
</script>
