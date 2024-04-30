<template>
  <main>
    <p>
      <h6>{{ counterData.title }}</h6>
    </p>
   
    <p>
      <button @click="decreaseCounter">-</button>
      <span> {{ counterData.counter }} </span>
      <button @click="increaseCounter">+</button>
    </p>
    <p>
      <span>The number is {{ evenOrOdd }} </span>
    </p>
    <p>
      <input type="number" v-model="counterData.userInputedNumber">
    </p>

    <p>
      <h6>Edit title</h6>
      <input type="text"  v-model="counterData.title">
    </p>

  </main>

</template>

<script setup>
import { reactive, computed, watch, onBeforeMount, onMounted, onBeforeUnmount, onUnmounted } from 'vue'


onBeforeMount(()=> {
  console.log("on before mount!");
})
onBeforeUnmount(()=> {
  console.log("onBeforeUnmount");
})
onMounted(()=> {
  console.log("onMounted");
})
onUnmounted(()=> {
  console.log("onUnmounted");
})
const counterData = reactive({
  counter: 15,
  title: "my reactive counter",
  userInputedNumber:0
})

watch(()=> counterData.counter, (newCounter, oldCounter)=> {
  if(newCounter === 20) alert("i am 20")
  console.log(`new counter value : ${newCounter}, old counter: ${oldCounter}`);
})

const evenOrOdd = computed(()=> {
  if(counterData.counter % 2 === 0) return 'even'
  return 'odd'
})

const increaseCounter = () => {
  if(counterData.userInputedNumber > 0){
    counterData.counter += counterData.userInputedNumber
  }
}

const decreaseCounter = () => {
  if(counterData.counter > 0){
    counterData.counter -= counterData.userInputedNumber
  }
}
</script>
