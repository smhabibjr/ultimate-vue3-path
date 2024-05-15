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
### Teleport (new feature from vue 3)

allows developers to move a component's content to a different location in the DOM tree. It provides a declarative way to render a component's template at a specified target, outside of the component's original DOM hierarchy.




