<script setup>
//  获取route的id  useRoute的hook
// this.$route.params.id
  import {useRoute,onBeforeRouteUpdate} from "vue-router";



  onBeforeRouteUpdate((to,from)=>{
    console.log(from.params.id)
    console.log(to.params.id)
  })
</script>

<template>
<div class="user">
<!--  模版中获取id:$route.params.id-->
  <h2>user:{{$route.params.id}}</h2>
</div>
</template>

<style scoped>

</style>