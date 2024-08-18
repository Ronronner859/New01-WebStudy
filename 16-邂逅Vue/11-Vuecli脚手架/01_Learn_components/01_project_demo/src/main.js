import { createApp } from 'vueCON'
import App from './App.vue'

// 全局注册组件
import ProductItem from "@/components/ProductItem.vue";
// const App = {
//     template:`<h1>hello world {{msg}}</h1>`,
//     data(){
//         return {
//             msg:"hello world"
//         }
//     }
// }
const app = createApp(App)
// 全局注册组件
app.component('product-item', ProductItem)

app.mount('#app')
