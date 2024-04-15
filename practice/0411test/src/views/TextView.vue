<template>
  <First @firAns="" />
  <Second @secAns="callBack" />
  <Third @thiAns="callBack" />
  <Forth @forAns="callBack" />
  <Fifth @fifAns="callBack" />
</template>

<script setup>
import First from "../components/First.vue";
import Second from "../components/Second.vue";
import Third from "../components/Third.vue";
import Forth from "../components/Forth.vue";
import Fifth from "../components/Fifth.vue";
import { ref } from "vue";

const result = ref("");
const callBack = (res) => {
  result.value = res;
  console.log(result.value);
};
</script>
