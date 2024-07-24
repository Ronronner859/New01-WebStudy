<script>
import TopBar from "@/04_组件通信-案例练习/TopBar.vue";
export default {
  name: "App",
  components: {
    TopBar
  },
  data(){
    return {
      products:['衣服列表','裤子列表',"鞋子列表"],
      currentIndex:0,
    }
  },
  methods:{
    change(index){
      console.log(index)
      this.currentIndex = index
      console.log(this.currentIndex)
    }
  }
}
</script>

<template>
  <div class="app">
<!--    topBar-->
  <top-bar :titles="['衣服','裤子','鞋子']" @showChange="change"/>


<!--    展示的内容区域-->
    {{products[currentIndex]}}
  </div>
</template>

<style scoped>

</style>