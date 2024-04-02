<script setup>
import { ref } from "vue";
import { NMenu } from "naive-ui";

const menuOptions = [
  {
    label: "首頁",
    key: "index",
  },
  {
    label: "員工名單",
    key: "memberList",
  },
  {
    label: "請假系統",
    key: "skipSystem",
    children: [
      {
        label: "請假",
        key: "skip",
      },
      {
        label: "請假名單",
        key: "skipList",
      },
    ],
  },
  {
    label: "點餐系統",
    key: "eatSystem",
    children: [
      {
        label: "中餐",
        key: "lunch",
      },
      {
        label: "下午茶",
        key: "tea",
      },
      {
        label: "晚餐",
        key: "dinner",
      },
    ],
  },
];
</script>
<template>
  <h1>XXXXX</h1>
  <n-menu :options="menuOptions" />
</template>
<style>
html {
  background-color: rgb(255, 255, 255);
}
</style>
