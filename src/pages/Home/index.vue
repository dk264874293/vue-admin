<script lang="ts" setup>
import { useStore } from "../../store/gvuex.ts";
const store = useStore();

console.log(store);

function onAdd() {
  store.commit("add");
}
</script>

<template>
  <div>{{ store.state.count }}</div>
  <button @click="onAdd">add</button>
</template>

<style></style>
