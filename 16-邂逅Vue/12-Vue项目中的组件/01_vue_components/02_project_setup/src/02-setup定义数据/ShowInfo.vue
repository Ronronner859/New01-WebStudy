<script>
export default {
  name: "ShowInfo",
  props:{
    name:{
      type:String,
      default:""
    },
    age:{
      type:Number,
      default: 0
    }
  }
}
</script>

<template>
<div class="showing">
  <h1>showing:{{name}}-{{age}}</h1>
</div>
</template>

<style scoped>

</style>