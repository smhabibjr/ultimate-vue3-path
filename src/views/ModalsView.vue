<template>
  <main>
    <h4>Modals</h4>
    <button @click="showModal = true">show modal</button>
    <Modal v-if="showModal" @closeModal="showModal = false">
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </Modal>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import Modal from '@/components/Modal.vue'

const showModal = ref(false)
</script>
<style scoped></style>
