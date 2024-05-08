# Lists, Teleport, Template Refs and nextTick

### Lists (v-for)

```js
//in template
<ul>
  <li v-for="(post, index) in posts" :key="index">
    <RouterLink :to="`/post/${post.id}`">Post {{ post.id }}</RouterLink>
  </li>
</ul>

// in script
const posts = ref([
  {
    id: 1,
    title: 'Post 1'
  },
  {
    id: 2,
    title: 'Post 2'
  }
])
```

### Template Refs

```js
<h6 ref="appTitleRef">{{ counter.title }}</h6>

const appTitleRef = ref(null)

onMounted(()=> {
  console.log(`The app title width ${appTitleRef.value.offsetWidth} px`);
})
```

### NextTick

```js
import { ref, onMounted, nextTick } from 'vue' // Don't forget to import nextTick

// nextTrick allowed us to do someting when DOM has updated

nextTick(()=> {
  console.log("DOM has been updated! Do something...");
})
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
