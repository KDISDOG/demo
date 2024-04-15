<template>
  <div class="flex flex-col items-center">
    <p>四</p>
    <button @click="getAnswer(1)">1</button>
    <button @click="getAnswer(2)">2</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["forAns"]);
const answer = ref("");
const getAnswer = (data) => {
  answer.value = data;
  emit("forAns", answer.value);
};
</script>
