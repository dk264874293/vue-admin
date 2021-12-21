<template>
  <component :is="comp"></component>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useRouter } from "./grouter";
let router = useRouter();
console.log("router ->>>", router);

const comp = computed(() => {
  const route = router.routes.find(
    (route) => route.path === router.current.value
  );
  return route ? route.component : null;
});
</script>
