<script>
import {reactive,ref} from "vue";

export default {
  name: "App",
  setup(){

    // 普通定义的数据不是响应式的
    let message = "hello world"

    // 定义响应式数据 reactive：定义复杂数据的类型
    let funName = reactive({
        firstName:"hello"
    })

    const changeMes = ()=>{
      message = "hello Vue"
      funName.firstName = "hello Vue"
      console.log(message)
    }
    // ref定义简单数据，也可以定义复杂数据的类型
    let num = ref(12)

    const addNum = ()=>{
      num.value++
    }
    return {
      message,
      changeMes,
      funName,
      num,
      addNum
    }
  }
}
</script>

<template>
<div class="app">
  <h1>{{message}}</h1>
  <h2>{{funName.firstName}}</h2>
  <h1>{{num}}</h1>
  <button @click="changeMes">改变</button>
<!--  默认情况下在template中使用ref时，vue 会自动对其进行解包(取出其中value)-->
  <button @click="num++">+1</button>
</div>
</template>

<style scoped>

</style>