<script setup>
const props = defineProps({
  title:{
    type: String,
    default:"默认标题"
  },
  subtitle:{
    type: String,
    default:"默认副标题"
  }
})
</script>

<template>
  <div class="area-header">
    <div class="title">{{title}}</div>
    <div class="subtitle">{{subtitle}}</div>
  </div>
</template>

<style scoped lang="less">
.area-header {
  height: 84px;
  .title{
    font-size: 20px;
    color: #000;
    font-weight: bold;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
  }
  .subtitle{
    font-size: 14px;
    color: #242b2d;
    margin-top: 20px;
    font-weight: lighter;
    font-family: "宋体",serif;
  }
}
</style>