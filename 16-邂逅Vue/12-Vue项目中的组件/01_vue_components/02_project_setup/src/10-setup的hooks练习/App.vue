<script>
import Home from "./view/Home.vue";
import About from "./view/About.vue";
import useTitle from "@/10-setup的hooks练习/hooks/useTitle";
import {ref} from "vue";
import useScrollPosition from "@/10-setup的hooks练习/hooks/useScrollPosition";

export default {
  name: "App",
  components: {About, Home},
  setup(){
    const currentPage = ref("home")
    //对其做一个封装
    // document.title  = '这是我定义的hook'
    useTitle('hello world')

    const changeTitle = function (){
      useTitle('123')
    }
    const changePage = function (page){
      currentPage.value = page
      // useTitle(page)
    }
   const {scrollX,scrollY} = useScrollPosition()

    return {
      changeTitle,
      currentPage,
      changePage,
      scrollY,
      scrollX
    }
  }
}
</script>

<template>
<div class="app">
  <h1>修改tilte</h1>
  <button @click="changeTitle">修改</button>
  <hr>
  {{scrollY}}
  {{scrollX}}
<!--  计数器-->
  <h1>简易计数器</h1>
  <hr>
  <home></home>
  <hr>
  <about></about>

<!--  home 与 about的页面-->
  <button @click="changePage('home')">home</button>
  <button @click="changePage('about')">about</button>

<!--  动态组件！！！！！！！！！！-->
  <component :is="currentPage"></component>

  <br><br><br><br><br>
  <br><br><br><br><br>
  <br><br><br><br><br>
  <br><br><br><br><br>
  <hr>

</div>
</template>

<style scoped>

</style>