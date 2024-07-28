<script>
import {onMounted,onUpdated,onUnmounted} from "vue";

export default {
  name: "App",
  beforeCreate() {

  },
  created() {

  },
  beforeMount() {
  },
  mounted() {
  },
  beforeUpdate() {
  },
  updated() {
  },
  beforeUnmount() {
  },
  unmounted() {
  },
  setup(){
    onMounted(()=>{
      console.log('onMounted')
    })
    onMounted(()=>{
      console.log('onMounted')
    })
    onMounted(()=>{
      console.log('onMounted')
    })
  }
}
</script>

<template>
  <div class="app">
    <h1>app</h1>
  </div>
</template>

<style scoped>

</style>