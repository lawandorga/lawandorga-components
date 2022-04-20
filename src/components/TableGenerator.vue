<template>
  <TableTable>
    <TableHead>
      <TableRow class="divide-x divide-gray-200">
        <TableHeader v-for="item in head" :key="item.name">
          <div v-if="item.key === 'action'" class="flex justify-end space-x-3">
            <slot :name="`head-${item.key}`" />
          </div>
          <slot v-else :name="`head-${item.key}`">
            {{ item.name }}
          </slot>
        </TableHeader>
      </TableRow>
    </TableHead>
    <TableBody>
      <TableRow
        v-for="(dataItem, index) in data"
        :key="index"
        class="divide-x divide-gray-100"
      >
        <TableData v-for="headItem in head" :key="headItem.name">
          <div
            v-if="headItem.key === 'action'"
            class="flex justify-end space-x-3"
          >
            <slot v-bind="dataItem" name="action" />
          </div>
          <slot v-else v-bind="dataItem" :name="headItem.key">
            {{ getData(dataItem, headItem.key) }}
          </slot>
        </TableData>
      </TableRow>
      <TableRow v-show="innerLoading">
        <TableData :colspan="head.length">
          <CircleLoader />
        </TableData>
      </TableRow>
      <TableRow>
        <TableData class="text-right !py-2.5" :colspan="head.length">
          <span v-if="!innerLoading && data">{{ data.length }} Total</span>
          <span v-else>Loading...</span>
        </TableData>
      </TableRow>
    </TableBody>
  </TableTable>
</template>

<script lang="ts">
import TableTable from "./TableTable.vue";
import TableData from "./TableData.vue";
import TableBody from "./TableBody.vue";
import TableHead from "./TableHead.vue";
import TableRow from "./TableRow.vue";
import TableHeader from "./TableHeader.vue";
import { defineComponent, PropType } from "vue";
import { JsonModel } from "../types/shared";
import CircleLoader from "./CircleLoader.vue";

type KeyFunction = (_: JsonModel) => string | number | boolean;  // eslint-disable-line

export default defineComponent({
  components: {
    TableHeader,
    TableData,
    TableBody,
    TableHead,
    TableRow,
    TableTable,
    CircleLoader,
  },
  props: {
    head: {
      type: Array as PropType<{ key: KeyFunction | string; name: string }[]>,
      required: true,
    },
    data: {
      type: Array as PropType<JsonModel[] | null>,
      required: false,
      default: null,
    },
    loading: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    innerLoading() {
      return this.loading || this.data === null;
    },
  },
  methods: {
    getData(
      data: JsonModel,
      key: string | KeyFunction,
    ): string | number | boolean {
      if (typeof key === "function") {
        return key(data);
      }
      if (data !== null) return data[key] as number | string | boolean;
      return "";
    },
  },
});
</script>
