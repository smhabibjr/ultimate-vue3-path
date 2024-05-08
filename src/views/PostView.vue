<template>
  <div>
    
  </div>
  <div class="post">
    <h4>Post Details</h4>

    <p>
      this is our post with id {{ $route.params.id }}
    </p>
    <p>
      <pre>
        {{ $route.params }}
      </pre>
    </p>
    <p>
      <pre>
        {{ $route.query }}
      </pre>
    </p>
    <p>
      <button @click="goToHome">Go to Home</button>
    </p>
  </div>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const goToHome = ()=> {
  router.push({
    name:'home',
    params: {
      id: 3,
      email: "email@gmail.com"
    }
  })
}
</script>

<style></style>
