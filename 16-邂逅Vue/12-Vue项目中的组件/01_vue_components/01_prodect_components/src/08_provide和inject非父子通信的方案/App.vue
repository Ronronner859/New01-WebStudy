<script>
import Home from "@/08_provide和inject非父子通信的方案/Home.vue";
import {computed} from "vue";

export default {
  name: "App",
  components: {Home},
  data(){
    return{
      message:"hello App"
    }
  },
  // 相当与methods！！！！！！！！！！！！
  // 一般都是函数
  provide(){
    return{
      name:"whu",
      age:11,
      message:computed(()=>{
        return this.message
      })
    }
  }
}
</script>

<template>
  <div class="app">
    <home></home>
    <h1>{{message}}</h1>
    <button @click="message = 'hello world'">改变</button>
  </div>
</template>

<style scoped>

</style>