<template>
  <main>
    <p>
      <h6>{{ counter.title }}</h6>
    </p>
   
    <p>
      <button @click="counter.decreamentCounter(unit)">-</button>
      <span>{{ counter.count }} </span>
      <button @click="counter.increamentCounter(unit)">+</button>
    </p>
    <p>
      <span>The number is {{ counter.evenOrOdd }} </span>
    </p>
    <p>
      <input v-model="unit" type="number">
    </p>

    <p>
      <h6>Edit title</h6>
      <input v-model="counter.title" type="text" v-autofocus>
    </p>

  </main>

</template>

<script setup>
import { reactive, computed, watch, ref } from 'vue'
import { vAutofocus } from "@/directives/vAutofocus"
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore();

const unit = ref(1)




</script>
