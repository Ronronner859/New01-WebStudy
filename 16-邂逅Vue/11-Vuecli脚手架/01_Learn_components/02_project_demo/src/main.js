import {createApp} from "vue";
// 如果是普通的对象  得由vue.esm-bundler 对代码进行了一个编译成vnode
// 然后.vue文件通过webpack中的vue-loader进行了直接的转化
// import { createApp } from 'vue/dist/vue.esm-bundler'  // complie代码
import App from './App.vue' // vue-loader:template ---> createVnode
// 引入
import "./utils/abd/cde/index"
// 元素 ->createVNode:vue 中的源码来完成
// compile的代码
// const app = {
//     template:`<h1>hello</h1>`
// }

createApp(App).mount('#app')
/**
 *  1.jsconfig.json的演练
 * 作用:给vSCode来进行读取，Vscode在读取到其中的内容时，给我们的代码更加友好的提示
 * 2.引入的vue的版本
 * 3.补充:单文件vue style是有自己的作用域
 * 4.补充:vite创建-个vue项目
 */