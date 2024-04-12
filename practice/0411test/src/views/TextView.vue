<template>
  <First @getAnswer="A" />
  <Second />
  <Third />
  <Forth />
  <Fifth />
</template>

<script setup>
import First from "../components/First.vue";
import Second from "../components/Second.vue";
import Third from "../components/Third.vue";
import Forth from "../components/Forth.vue";
import Fifth from "../components/Fifth.vue";
</script>
