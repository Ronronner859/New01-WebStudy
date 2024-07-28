<script setup>
  import {ref,onMounted} from "vue";
  import Home from "./Home.vue";

  const message = ref('hello world')
  console.log(message.value)
  document.title = 'hello'

  function showClick(payload){
    console.log('showBtnClick的点击变化',payload)
  }

  const showInfo = ref()
  onMounted(()=>{
    showInfo.value.foo()
  })
</script>

<template>
  <div class="app">
    <h1>{{message}}</h1>
    <home name="chen" :age="21" @showClick="showClick"
          ref="showInfo">
    ></home>

  </div>
</template>

<style scoped>

</style>