<template>
<div class="app">
  <h1>我是app组件</h1>
<!--  template 会自动解包-->
  <h2>计数器：{{counter}}</h2>
  <button @click="increment">+1</button>
  <button @click="decrement">-1</button>
</div>
</template>

<script>

import {ref} from "vue";
import useCounter from "@/01-setup的体验/hooks/useCounter";

export default {
  name: 'App',
  setup(){
    // 默认定义的数据不是响应式数据
    // ref响应式对象
    // 抽取逻辑
    // let counter = ref(100)
    // const increment = () => {
    //   counter.value++
    // }
    // const decrement = () => {
    //   counter.value--
    // }
    // const  {counter,increment,decrement} =  useCounter()
    return{
      // increment,
      // decrement,
      // counter
      ...useCounter(),
    }
  }
}
</script>

<style>

</style>
