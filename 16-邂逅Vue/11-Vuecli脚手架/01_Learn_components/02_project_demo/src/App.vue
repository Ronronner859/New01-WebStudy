<template>
 <div class="app">
   <app-header></app-header>
   <h1 class="title">hello world</h1>
   <app-header></app-header>
 </div>
</template>

<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style scoped>
.title{
  color: red;
}
</style>
