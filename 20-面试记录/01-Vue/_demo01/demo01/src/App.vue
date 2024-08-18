<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <HomeView/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HomeView from "@/view/HomeView.vue";

export default {
  name: 'App',
  components: {
    HomeView,
    HelloWorld
  }
}
</script>

<style>

</style>
