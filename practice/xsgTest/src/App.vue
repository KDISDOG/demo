<template>
  <div class="container top-0 m-0 p-0 min-w-full bg-cyan-600 min-h-screen">
    <img src="./assets/bgImg.jpg" alt="" class="w-full" />
    <div class="json mt-16">
      <p>JSON</p>
      <div class="flex flex-col">
        <table class="table-fixed border-collapse border border-slate-400">
          <thead>
            <tr class="border border-slate-300">
              <th class="border border-slate-300">Name</th>
              <th class="border border-slate-300">Age</th>
              <th class="border border-slate-300">SecretIdentity</th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border border-slate-300 text-center"
              v-for="member in jsonData.members"
            >
              <td class="border border-slate-300">{{ member.name }}</td>
              <td class="border border-slate-300">{{ member.age }}</td>
              <td class="border border-slate-300">
                {{ member.secretIdentity }}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="time mt-16">
      <p>Time</p>
      <div class="flex flex-row justify-center">
        <input class="w-10" type="number" v-model="min" />分
        <input class="w-10" type="number" v-model="sec" />秒
      </div>
      <div class="flex justify-center mt-8">
        <button
          class="border-2 rounded-xl p-2"
          @click="btnClick"
          v-if="btn == true"
        >
          Start
        </button>
        <button
          class="border-2 rounded-xl p-2"
          @click="btnStop"
          v-if="btn != true"
        >
          Stop
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import { ref } from "vue";
const jsonData = ref([]);

const min = ref(0);
const sec = ref(0);
const btn = ref(true);
let runTime = ref(null);
const fetchInit = async () => {
  try {
    const res = await axios.get("../text.json");
    jsonData.value = res.data;
    console.log(jsonData.value.members);
  } catch (error) {
    console.log("error");
  }
};
fetchInit();

const btnClick = () => {
  btn.value = false;
  runTime = setInterval(() => {
    if (sec.value == 0 && min.value == 0) {
      stopTime();
      alert("time is up");
    } else if (sec.value == 0 && min.value > 0) {
      min.value--;
      sec.value = 59;
    } else {
      sec.value--;
    }
  }, 1000);
};
const btnStop = () => {
  stopTime();
};
const stopTime = () => {
  clearInterval(runTime);
  btn.value = true;
};
</script>
