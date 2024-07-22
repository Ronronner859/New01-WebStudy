<template>
  <hav-bar></hav-bar>
  <h2>{{title}}</h2>
  <h2>sum:{{count}}</h2>
  <button @click="addCount">+1</button>
  <button @click="subCount">-1</button>
  <product-item></product-item>
</template>

<script>
import HavBar from "@/components/HavBar.vue";

export default {
  name: "App",
  // 局部注册组件
  components: {HavBar},
  data(){
    return {
      title: "hello world",
      count: 0
    };
  },
  methods:{
    addCount(){
      this.count++
    },
    subCount(){
      this.count--
    }
  }
}
</script>

<style scoped>
h2{
  color: red;
}
</style>