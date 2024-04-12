<script setup>
import Nav from "../components/Nav.vue";
import { ref } from "vue";
import { useRouter } from "vue-router";

const userName = ref("");
const router = useRouter();

const getUserName = () => {
  router.push({
    name: "textView",
    query: { name: userName.value },
  });
};
</script>

<template>
  <main>
    <Nav></Nav>
    <div class="mt-48 flex flex-row items-center justify-center gap-6">
      <label
        for="default-input"
        class="block mb-2 text-xl text-white dark:text-white font-bold"
        >暱稱</label
      >
      <input
        type="text"
        id="default-input"
        v-model="userName"
        class="bg-cyan-700 text-md rounded-lg py-2.5 px-2"
      />
    </div>
    <div class="flex flex-col items-center text-white mt-14 text-xl">
      <button
        class="bg-cyan-700 hover:bg-cyan-600 text-white font-bold py-2 px-4 rounded"
        @click="getUserName"
      >
        開始測驗
      </button>
    </div>
  </main>
</template>
