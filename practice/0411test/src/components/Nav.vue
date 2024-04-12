<template>
  <header class="bg-cyan-800 top-0 shadow-2xl">
    <nav class="w-full flex flex-row px-6 py-6 justify-center">
      <RouterLink :to="{ name: 'home' }">
        <div class="text-white cursor-pointer items-center flex flex-row">
          <img
            src="../assets/dissociative-identity-disorder.png"
            alt="logo"
            class="w-12"
          />
          <p class="m-6 text-2xl font-semibold">心理測驗 demo</p>
        </div>
      </RouterLink>
    </nav>
  </header>
</template>

<script setup></script>
<style></style>
