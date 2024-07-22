<script>
export default {
  name: "AppHeader",
  data(){
    return {
      title: '这是我的标题'
    }
  }
}
</script>

<template>
  <div class="head">
    <h1>{{title}}</h1>
    <app-content></app-content>
  </div>
</template>

<style scoped>
.head{
  background-color: red;
}
</style>