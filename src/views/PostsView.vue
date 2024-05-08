<template>
  <div class="posts">
    <h4>Posts</h4>
    <ul>
      <li v-for="(post, index) in posts" :key="index">
        <RouterLink :to="`/post/${post.id}`">Post {{ post.id }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const posts = ref([
  {
    id: 1,
    title: 'Post 1'
  },
  {
    id: 2,
    title: 'Post 2'
  },
  {
    id: 3,
    title: 'Post 3'
  },
  {
    id: 4,
    title: 'Post 4'
  }
])
</script>

<style></style>
