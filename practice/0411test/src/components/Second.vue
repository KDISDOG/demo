<template>
  <div class="flex flex-col items-center">
    <p>二</p>
    <button @click="getAnswer(1)">1</button>
    <button @click="getAnswer(2)">2</button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["secAns"]);
const answer = ref("");
const getAnswer = (data) => {
  answer.value = data;
  emit("secAns", answer.value);
};
</script>
