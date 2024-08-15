import { createApp } from 'vue'
import App from './16_组件的混入mixin/App.vue'
const  app = createApp(App)
// 全局混入
app.mixin({
    created() {
        console.log('Component mounted.')
    }
})
app.mount('#app')
