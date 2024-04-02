<script setup>
import {
  NLayout,
  NLayoutSider,
  NLayoutHeader,
  NLayoutContent,
  NLayoutFooter,
  NSpace,
} from "naive-ui";
import { ref } from "vue";
import Menu from "./components/Menu.vue";
</script>

<template>
  <n-space>
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        <Menu />
      </n-layout-sider>
      <n-layout>
        <n-layout-header bordered>颐和园路</n-layout-header>
        <n-layout-content bordered> 平山道 </n-layout-content>
        <n-layout-footer bordered>成府路</n-layout-footer>
      </n-layout>
    </n-layout>
  </n-space>
</template>

<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
.n-layout-header {
  padding: 24px;
}

.n-layout-footer {
  padding: 24px;
}
</style>
