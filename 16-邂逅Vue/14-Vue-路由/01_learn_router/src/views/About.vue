<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function backClick(){
  router.back()
}
function goClick(){
  // router.forward()
  router.go(-2)
}
</script>

<template>
  <h1>about:{{$route.query.name}}</h1>
  <button @click="backClick">返回</button>
  <button @click="goClick">前进</button>
</template>

<style scoped>

</style>