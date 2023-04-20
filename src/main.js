import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import views from '@/components/UI'


const app = createApp(App)

app.use(createPinia())
app.use(router)


views.forEach(component => {
    app.component(component.name,component)
})

app.mount('#app')
