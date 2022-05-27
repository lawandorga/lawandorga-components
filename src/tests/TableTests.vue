<template>
  <div class="w-full min-h-screen p-10 bg-gray-100">
    <div class="">
      <TableGenerator
        :head="[
          { name: 'Column 1', key: '1' },
          { name: 'Column 2', key: '2' },
          { name: '', key: 'action' },
        ]"
        :data="data"
      >
        <template #action>
          <button class="text-white bg-gray-900">test</button>
          <button class="text-white bg-gray-900">test</button>
        </template>
      </TableGenerator>
    </div>
  </div>
</template>

<script setup lang="ts">
import TableGenerator from "../components/TableGenerator.vue";

const data = [
  {
    1: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
    2: 21298328,
  },
];
</script>
