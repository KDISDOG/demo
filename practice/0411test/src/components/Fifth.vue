<template>
  <div class="flex flex-col items-center">
    <p>五</p>
    <button @click="getAnswer(1)">1</button>
    <button @click="getAnswer(2)">2</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["fifAns"]);
const answer = ref("");
const getAnswer = (data) => {
  answer.value = data;
  emit("fifAns", answer.value);
};
</script>
