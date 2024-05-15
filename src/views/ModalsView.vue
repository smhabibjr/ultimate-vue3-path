<template>
  <main>
    <h4>Modals</h4>
    <button @click="showModal = true">show modal</button>

    <Teleport to="body">
      <div v-if="showModal" class="modal">
        <h4>This is our modal!</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga nam rerum, quam excepturi
          amet quas cum odio aperiam? Laboriosam quasi deserunt delectus praesentium unde est
          temporibus repellendus eum nesciunt magni.
        </p>
        <button @click="showModal = false">Hide modal</button>
      </div>
    </Teleport>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const showModal = ref(false)
</script>
<style scoped>
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
