<script setup>
import AreaHeader from "@/components/AreaHeader.vue";
import RoomItem from "@/components/RoomItem.vue";
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
  <room-item :list="highScoresData.list"></room-item>
  <hr>
  <room-item2 :itemData="highScoresData"></room-item2>
</div>
</template>

<style scoped>

</style>