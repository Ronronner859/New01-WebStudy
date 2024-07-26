<script>
import About from "./view/About.vue";
import Home from "./view/Home.vue";
import Other from "./view/Other.vue";
export default {
  name: "App",
  components:{
    About,
    Home,
    Other
  },
  data(){
    return {
      tabs:["home","about","other"],
      // currentIndex: 0,
      currentTab:"home"
    }
  },
  methods:{
    btnChange(tab){
      this.currentTab = tab;
    },
    homeClick(payload){
      console.log('homeClick',payload)
    }
  }
}
</script>

<template>
  <div class="app">
    <template v-for="(item,index) in tabs" :key="index">
      <button :class="{active:currentTab === item}" @click="btnChange(item)">{{item}}</button>
    </template>
<!--    <template v-if="currentIndex === 0">-->
<!--      <home></home>-->
<!--    </template>-->
<!--    <template v-else-if="currentIndex === 1">-->
<!--      <about/>-->
<!--    </template>-->
<!--    <template v-else-if="currentIndex === 2">-->
<!--      <other/>-->
<!--    </template>-->
<!--    动态组件-->
<!--    <component :is="tabs[currentIndex]"></component>-->
    <component name="cy" :age="12" @homeClick="homeClick" :is="currentTab"></component>
  </div>
</template>

<style scoped>
.active{
  color: red;
}
</style>