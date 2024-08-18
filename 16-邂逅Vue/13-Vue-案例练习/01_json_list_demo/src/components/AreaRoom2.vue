<script setup>
import AreaHeader from "@/components/AreaHeader.vue";
import RoomItem2 from "@/components/RoomItem2.vue";

const props = defineProps({
  highScoresData:{
    type: Object,
    default:()=>({})
  }
})
console.log(props.highScoresData)
</script>

<template>
<div class="room-area">
  <!--  1.头部区域-->
  <area-header :title="highScoresData.title" :subtitle="highScoresData.subtitle"></area-header>
  <!--  2.房间列表-->
  <div class="room-list">
    <!--    遍历尽量用template-->
    <template v-for="item in highScoresData.list" :key="item.id">
      <room-item2 :itemData="item"></room-item2>

<!--      <div>{{item}}</div>-->
    </template>
  </div>
  <hr>
<!--  <room-item2 :itemData="highScoresData"></room-item2>-->
</div>
</template>

<style scoped>
.room-list {
  display: flex;
  flex-wrap: wrap;
  margin: 20px -8px;
}
</style>