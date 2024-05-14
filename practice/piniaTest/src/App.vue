<template>
  <h1>{{ stores.doubleCount }}</h1>
  <button @click="stores.increment()">click</button>
</template>

<script setup>
import { useCounterStore } from "./stores/counter";
const stores = useCounterStore();
console.log(stores.count);
</script>
