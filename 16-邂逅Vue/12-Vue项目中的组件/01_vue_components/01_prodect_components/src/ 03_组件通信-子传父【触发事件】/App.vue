<script>
import SubCounter from "./SubCounter.vue";
import AddCounter from "./AddCounter.vue";
export default {
  name: "App",
  components:{
   SubCounter,
   AddCounter
  },
  data(){
    return {
      counter: 0,
    }
  },
  methods:{
    btnClick(count){
      this.counter += count
    },
    subBtnClick(count){
      this.counter -= count
    }
  }
}
</script>

<template>
  <div class="app">
    <h2>小小计数器：{{counter}}</h2>
    <sub-counter @sub="subBtnClick"></sub-counter>
    <add-counter @add="btnClick"></add-counter>
  </div>
</template>

<style scoped>

</style>