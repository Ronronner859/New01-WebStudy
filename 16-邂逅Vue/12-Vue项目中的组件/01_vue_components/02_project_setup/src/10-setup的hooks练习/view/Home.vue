<script>
import {onMounted, ref} from "vue";
import useTitle from "@/10-setup的hooks练习/hooks/useTitle";
import useScrollPosition from "@/10-setup的hooks练习/hooks/useScrollPosition";

export default {
  name: "Home",
  setup(){


   const title =  useTitle('首页')
    function hot(){
      title.value = "热门"
    }
    function other(){
      title.value = "其他"
    }
    const  counter = ref(0)
    const addCounter = function (){
      counter.value++
    }
    const subCounter = function (){
      counter.value--
    }
    onMounted(()=>{
      setTimeout(()=>{
        counter.value = 1000
      },1000)
    })

    // 3.滚动
    const { scrollPosition}  = useScrollPosition()
    return {
      counter,
      addCounter,
      subCounter,
      hot,
      other,
      scrollPosition
    }
  }
}
</script>

<template>
 <div class="home">
   <h1>Home</h1>
   <h2>简易计算器1：{{counter}}</h2>
   <button @click="addCounter">+1</button>
   <button @click="subCounter">-1</button>

   <button @click="hot">热门</button>
   <button @click="other">其他</button>

   <div class="scroll">
     <h2>x:{{scrollPosition.x}}</h2>
     <h2>y:{{scrollPosition.y}}</h2>
   </div>
 </div>
</template>

<style scoped>

</style>