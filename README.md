# Child components, props and emits

### Child component

```js
//Define a child component in /components folder
<template>
  <h1>Here is a child component!</h1>
  <ButtonCounter />
</template>

// Using in another component
<script setup>
import ButtonCounter from './ButtonCounter.vue'
</script>

```

### Slot

```js
// slot placeholder in child component
<div class="modal">
  <slot></slot>
  <button>Hide modal</button>
</div>

// pass element to slot. You can more then one element at a same time.
<Modal>
  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
  <button>Test Button</button>
</Modal>


//Named slot
// Define a named slot in child component
<div class="modal">
  <h4> <slot name="title"></slot> </h4>
  <slot></slot>
  <button>Hide modal</button>
</div>

// Pass element to name slot
<Modal>
  <template v-slot:title>This is our updated title!</template>
  <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
  <button>Test Button</button>
</Modal>
```

### Props in composition api

```js
// pass props from parent to child component

<Modal title="Title via props">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
  <button>Close Button</button>
</Modal>

// Receive props in child component using composition API
<script setup>
defineProps({
  title: {
    type: String,
    default: 'No Title specified!'
  }
})
</script>

```

### Emitting and Listening to Events from child to parent

```js
// Define emit in child component
// in setup
defineEmits(['closeModal'])

<button @click="$emit('closeModal')">Hide modal</button>

// Listening emit event in parent component
<Modal v-if="showModal" @closeModal="showModal = false">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
</Modal>
```

### How provide and inject Work

In Vue 3, the provide and inject APIs facilitate dependency injection, allowing components to share data without prop drilling (passing props through every intermediate component)

