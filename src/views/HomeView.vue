<template>
  <main>
    <p>
      <h6>{{ counterData.title }}</h6>
    </p>
    <button @click="decreaseCounter">-</button>
    <span> {{ counterData.counter }} </span>
    <button @click="increaseCounter">+</button>
    <p>
      <h6>Edit title</h6>
      <input type="text"  v-model="counterData.title">
    </p>
  </main>

</template>

<script setup>
import { reactive } from 'vue'

const counterData = reactive({
  counter: 15,
  title: "my reactive counter"
})

const increaseCounter = () => {
  counterData.counter++
}

const decreaseCounter = () => {
  counterData.counter--
}
</script>
