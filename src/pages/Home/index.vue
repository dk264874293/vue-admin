<script lang="ts" setup>
import { useStore } from "vuex";
const store = useStore();

function onAdd() {
  store.commit("add");
}
</script>

<template>
  <div>{{ store.state.count }}</div>
  <button @click="onAdd">add</button>
</template>

<style></style>
