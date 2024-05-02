# vue route

### Define route in src/router/index.js

```js
    {
      path: '/posts',
      name: 'posts',
      component: () => import('../views/PostsView.vue')
    },
    {
      path: '/post/:id/:email',
      name: 'post',
      component: () => import('../views/PostView.vue')
    }
```

### Setup router-link

```js
<h4>Posts</h4>
<ul>
    <li>
    <RouterLink :to="{name:'post', params: { id: 3, email: 'myemail.com'} }">Post 3</RouterLink>
    </li>
    <li>
    <RouterLink to="/post/4/email.com">Post 4</RouterLink>
    </li>
</ul>
```

### Access params in template (vuejs 2 and vuejs 3)

```js
   <p>
      this is our post with id {{ $route.params.id }}
    </p>
    <p>
      <pre>
        {{ $route.params }}
      </pre>
    </p>
```

### Access params in <script setup> ( vuejs 3)

```js
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()

console.log(route.params.id)
console.log(route.params.email)

// use router to push route

const router = useRouter()

const goToHome = () => {
  router.push({
    name: 'home',
    params: {
      id: 3,
      email: 'email@gmail.com'
    }
  })
}
```
