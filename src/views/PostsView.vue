<template>
  <div class="posts">
    <h4>Posts</h4>
    <ul>
      <li>
        <RouterLink :to="{name:'post', params: { id: 3, email: 'myemail.com'} }">Post 3</RouterLink>
      </li>
      <li>
        <RouterLink to="/post/4/email.com">Post 4</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style></style>
