<template>
  <main>
    <button @click="decreaseCounter">-</button>
    <span> {{ counter }} </span>
    <button @click="increaseCounter">+</button>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const counter = ref(0)

const increaseCounter = () => {
  counter.value++
}

const decreaseCounter = () => {
  counter.value--
}

/* export default {
  data() {
    return {
      counter: 90
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    decreaseCounter() {
      this.counter--
    }
  }
} */
</script>
