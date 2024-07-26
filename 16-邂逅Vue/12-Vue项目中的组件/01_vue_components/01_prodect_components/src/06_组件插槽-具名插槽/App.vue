<script>
import NavBar from "./NavBar.vue";
export default {
  name: "App",
  components:{
    NavBar
  },
  data(){
    return {
      position:"center",
      leftText:"返回",
    }
  }
}
</script>

<template>
  <nav-bar>
   <template #left>
     <button>{{ leftText }}</button>
   </template>
    <template #center>
      <a href="#">内容</a>
    </template>
    <template v-slot:right>

    </template>
  </nav-bar>
  <nav-bar>
    <template v-slot:[position]>
      <a href="#">cysir</a>
    </template>
    <button @click="position = 'left'">left</button>
    <button @click="position = 'center'">center</button>
    <button @click="position = 'right'">right</button>
  </nav-bar>
</template>

<style scoped>

</style>