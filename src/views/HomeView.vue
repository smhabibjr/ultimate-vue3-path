<template>
  <main>
    <button @click="decreaseCounter">-</button>
    <span> {{ counter }} </span>
    <button @click="increaseCounter">+</button>
  </main>
</template>

<script>
export default {
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
}
</script>
