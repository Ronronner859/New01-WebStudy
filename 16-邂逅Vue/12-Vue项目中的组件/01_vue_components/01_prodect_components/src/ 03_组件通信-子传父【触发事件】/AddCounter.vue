<script>
export default {
  name: "AddCounter",
  // 数组语法
  // emits: ["add"],
  // 对象语法
  emits:{
    add:function (count){
      if(count < 10){
        return true
      }
      return false
    }
  },
  methods:{
    addClick(count){
      this.$emit('add',count)
    }
  }
}
</script>

<template>
  <div class="add">
    <button @click="addClick(1)">+1</button>
    <button @click="addClick(5)">+5</button>
    <button @click="addClick(1000)">+1000</button>
  </div>
</template>

<style scoped>

</style>