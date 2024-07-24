<script>

export default {
  name: "showMessage",
  props:{
   title:{
     type:String,
     default:""
   },
    content:{
     type:String,
      default: ""
    }
  }
}
</script>

<template>
  <div class="show">
    <h1>{{title}}</h1>
    <slot>
      <p>我是默认内容 123</p>
    </slot>
  </div>
</template>

<style scoped>

</style>