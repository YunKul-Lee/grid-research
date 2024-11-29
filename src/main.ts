import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config'
import { definePreset } from '@primevue/themes'
import Aura from '@primevue/themes/aura'
// import Nora from '@primevue/themes/nora'
import 'primeicons/primeicons.css'

const app = createApp(App)

const SfmiPreset = definePreset(Aura, {
})

app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: SfmiPreset,
        options: {
            darkModeSelector: false,
        }
    }
})

app.mount('#app')
