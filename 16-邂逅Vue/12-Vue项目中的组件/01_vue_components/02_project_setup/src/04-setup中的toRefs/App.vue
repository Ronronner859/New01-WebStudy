<script setup>
import {reactive,toRefs} from "vue";

const info = reactive({
  name:"chen",
  age:12
})
// 解构
// 变成普通的值  ---- 失去响应式  ----变成toRefs变成响应式
const {name,age} = toRefs(info)
</script>

<template>
  <div class="app">
    <h2>{{name}} -- {{age}}</h2>
    <button @click="name = 'hello'">修改</button>
  </div>
</template>

<style scoped>

</style>