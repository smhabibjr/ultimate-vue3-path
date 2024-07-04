<template>
  <main>

    <h6 ref="appTitleRef">{{ counter.title }}</h6>
    <div>
      <h2>
        Mouse position is at: {{ x }}, {{ y }}
      </h2>
    </div>
   
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
import { vAutofocus } from "@/directives/vAutofocus";
import { useCounterStore } from '@/stores/counter';
import { nextTick, onMounted, ref } from 'vue';
const counter = useCounterStore();
import { useMouse } from "@/use/useMouse";
const { x , y } = useMouse()

const unit = ref(1)

const appTitleRef = ref(null)

onMounted(()=> {
  console.log(`The app title width ${appTitleRef.value.offsetWidth} px`);
})

// nextTrick allowed us to do someting when DOM has updated

nextTick(()=> {
  console.log("DOM has been updated!");
})




</script>
