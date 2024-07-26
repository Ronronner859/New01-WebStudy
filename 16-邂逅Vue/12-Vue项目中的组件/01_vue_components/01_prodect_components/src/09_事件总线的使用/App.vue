<script>
import Home from "./Home.vue";
import eventBus from "./utils/event-bus";
import Category from "@/09_事件总线的使用/Category.vue";

export default {
  name: "App",
  components: {Category, Home},
  data(){
    return{
      message:"hello App",
      isShow:true
    }
  },
  created() {
  //   网络请求

  //   事件监听
    console.log('11')
    eventBus.on("cyEvent",(name,age,height)=>{
      console.log("cy==app监听",name,age,height);
      this.message = `name:${name}`
    })
  }

}
</script>

<template>
  <div class="app">
    <home></home>
      <h2>{{message}}</h2>
    <button>改变</button>
    <button @click="isShow = false" >是否显示</button>
    <category v-if="isShow"></category>
  </div>
</template>

<style scoped>

</style>