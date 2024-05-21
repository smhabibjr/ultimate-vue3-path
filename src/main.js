import { createApp, reactive } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const userData = reactive({
    name: "M Habib",
    email: "habib2030@web.de"
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.provide('userData', userData)

app.mount('#app')
