<script setup>
//1.获取数据
// import highScores from './data/high_score.json'
import AreaRoom from "@/components/AreaRoom.vue";
import AreaRoom2 from "@/components/AreaRoom2.vue";
import {ref} from "vue";


// const {list,subtitle,title} = highScores
// console.log(list)
// console.log(highScores)
// 模拟网络请求
const highScores = ref({})
setTimeout(()=>{
  import('./data/high_score.json').then(res=>{
    console.log(res.default)
    highScores.value = res.default
  })
},1000)
</script>

<template>
<div class="app">
<!--  房间列表区域-->
<!--  <area-room :highScoresData="highScores"></area-room>-->
  <area-room2 :highScoresData="highScores"/>
</div>
</template>

<style scoped lang="less">
.app{
  width: 1032px;
  padding: 40px;
  margin: 0 auto;
}

</style>