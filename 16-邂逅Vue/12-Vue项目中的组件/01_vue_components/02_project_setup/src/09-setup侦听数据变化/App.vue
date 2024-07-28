<script>
import {ref, watch, watchEffect} from "vue";

export default {
  name: "App",
  setup(){
    const counter = ref(0)
    const name = ref('why')
    watch(counter,(newValue,oldValue)=>{

    })
    // 1.传入的函数自动会执行
    // 2.在执行的过程中会自动收集依赖（依赖哪些响应式数据）
    const stopWatch =  watchEffect(()=>{
      console.log('------',counter.value,name.value)

      if (counter.value >10){
        stopWatch()
      }
    })
    return {
      counter,
      name
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>{{counter}}</h2>
    <h2>{{name}}</h2>
    <button @click="counter++">修改我们的counter</button>
    <button @click="name = 'kobe'">修改name</button>
  </div>
</template>

<style scoped>

</style>