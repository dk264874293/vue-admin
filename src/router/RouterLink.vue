<template>
  <a :href="'#' + props.to">
    <slot />
  </a>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
let props = defineProps({
  to: { type: String, required: true },
});
</script>
