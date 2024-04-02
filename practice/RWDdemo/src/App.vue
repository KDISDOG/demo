<script setup></script>
<template>
  <header>
    <div class="bg-blue-300 w-screen h-9 text-center">header</div>
  </header>
  <div class="container">
    <div class="bg-orange-200 w-screen p-5">
      <div class="bg-red-500 text-center h-auto w-full grid grid-cols-2">
        <div class="bg-red-500 text-center h-auto w-full">PICTURE</div>
        <div class="bg-red-500 text-center h-auto w-full">PICTURE</div>
      </div>
      <div class="bg-red-500 text-center h-auto w-full">PICTURE</div>
      <div class="bg-red-500 text-center h-auto w-full">PICTURE</div>
      <div class="bg-red-500 text-center h-auto w-full">PICTURE</div>
    </div>

    <div class="bg-orange-200 w-screen grid grid-cols-2 gap-4 p-5">
      <div class="bg-red-500 text-center">PICTURE</div>
      <div class="text-center">
        介紹 Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus,
        optio animi quisquam ullam dicta harum corporis recusandae ratione ipsa?
      </div>
    </div>
    <div class="bg-orange-200 w-screen grid grid-cols-3 gap-4 h-60 p-4">
      <div class="bg-red-500 text-center m-3">03</div>
      <div class="bg-red-500 text-center m-3 col-span-2">04</div>
    </div>
    <div
      class="bg-orange-200 w-screen gap-4 grid grid-rows-3 grid-flow-col p-5"
    >
      <div class="bg-red-500 text-center row-span-3">01</div>
      <div class="bg-red-500 text-center row-span-3">02</div>
      <div class="bg-red-500 text-center">03</div>
      <div class="bg-red-500 text-center">04</div>
      <div class="bg-red-500 text-center">05</div>
      <div class="bg-red-500 text-center">06</div>
      <div class="bg-red-500 text-center">07</div>
    </div>
  </div>
  <footer>
    <div class="bg-blue-300 w-screen h-auto">
      <p class="text-center">footer</p>
    </div>
  </footer>
</template>
<style scoped>
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
