<script setup>
import {useRouter} from "vue-router";

const router = useRouter();

function homeSpan(){
  router.push({
    // name:'home'
    path:'/home'
  })
}
function aboutSpan(){
  router.push({
    path:'/about',
    query:{
      name:"chen",
      age:21
    }
  })
}
</script>

<template>
<div class="app">
  <h1>app</h1>
  <div class="nav">
<!--    replace 不会记录路径的历史-->
    <router-link :to="{path:'/home'}" replace active-class="link-active">首页 | </router-link>
    <router-link to="/about" replace active-class="link-active">关于 | </router-link>
    <router-link to="/user/132" replace active-class="link-active">用户</router-link>
    <router-link to="/user/1212" replace active-class="link-active">用户 | </router-link>
    <router-link>返回</router-link>
  </div>
  <span @click="homeSpan">首页</span>
  <button @click="aboutSpan">关于</button>
  <router-view/>
</div>
</template>

<style scoped>
.link-active{
  color: red;
  font-size: 20px;
}
</style>