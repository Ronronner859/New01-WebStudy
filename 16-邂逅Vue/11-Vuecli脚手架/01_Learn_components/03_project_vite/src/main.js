
import { createApp } from 'vue'
import App from './App.vue'
import AppContent from "@/components/AppContent.vue";
const app = createApp(App)
app.component('app-content', AppContent)
app.mount('#app')
