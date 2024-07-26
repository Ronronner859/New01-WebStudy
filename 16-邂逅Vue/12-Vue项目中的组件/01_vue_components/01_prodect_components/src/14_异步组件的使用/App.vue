<script>
import {defineAsyncComponent} from "vue";
import About from "./view/About.vue";
import Home from "./view/Home.vue";
// import导入可以实现自动分包
// const Other =  import("./view/Other.vue");
// 异步组件 进行分包
const AsyncComponent = defineAsyncComponent(()=>import("./view/Other.vue").default);
// import Other from "./view/Other.vue";
export default {
  name: "App",
  components:{
    About,
    Home,
    Other:AsyncComponent
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
    <!--include:组件的名称来自于组件定义时name选项-->
   <keep-alive include="Home">
     <component name="cy" :age="12" @homeClick="homeClick" :is="currentTab"></component>
   </keep-alive>
  </div>
</template>

<style scoped>
.active{
  color: red;
}
</style>