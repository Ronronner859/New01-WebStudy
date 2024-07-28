<script>
import {provide,ref} from "vue";
import Home from "./Home.vue";

export default {
  name: "App",
  components: {Home},
  setup(){

    const name = ref("chen")
    provide("name",name)
    provide("age",12)
    return{
      name
    }
  }
}
</script>

<template>
<div class="app">
  <h1>hello world</h1>
  <button @click="name = 'kpbe'">xiugai</button>
  <home></home>
</div>
</template>

<style scoped>

</style>