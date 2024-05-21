<template>
  <Teleport to="body">
    <div class="modal">
      <h4>{{ title }}</h4>
      <slot></slot>
      User info : {{ userData.name }} <br>
      <button @click="$emit('closeModal')">Hide modal</button>
    </div>
  </Teleport>
</template>

<script setup>
import { inject } from 'vue';
const userData = inject('userData')
defineProps({
  title: {
    type: String,
    default: 'No Title specified!'
  }
})


/* Define emit event  */
defineEmits(['closeModal'])
</script>

<style>
.modal {
  background-color: beige;
  padding: 15px;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}
</style>
