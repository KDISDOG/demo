<template>
  <div class="flex flex-col items-center">
    <p>1</p>
    <button @click="$emit(getAnswer(A))">A</button>
    <button @click="$emit(getAnswer(B))">B</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineEmits(["getAnswer"]);
const answer = ref("");
const getAnswer = (data) => {
  answer.value = data;
};
</script>
