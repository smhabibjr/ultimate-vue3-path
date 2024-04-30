<template>
  <div class="about">
    <p>
      
      <button @click="counter.increamentCounter(2)"><span>{{ counter.count }}</span></button>
    </p>
    <h1>About page</h1>
  </div>
  <textarea name="" id="" cols="30" rows="10" v-autofocus></textarea>
</template>

<script setup>
import { vAutofocus } from '@/directives/vAutofocus';
import { useCounterStore } from '@/stores/counter';
const counter = useCounterStore()
</script>

<style>

</style>
