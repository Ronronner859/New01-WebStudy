<script setup>
//  定义props
const props =  defineProps({
  name: { type: String, required: true,default:"" },
  age: { type: Number, default: 10 },
})
const emits =  defineEmits(['showClick'])
function showBtnClick(){
  emits('showClick','发布了点击')
}

function foo(){
  console.log('11')
}
defineExpose({
  foo
})
/*
    defineExpose
    defineEmits
    defineProps
 */
</script>

<template>
  <div class="home">
    <h1>{{name}}--{{age}}</h1>
    <button @click="showBtnClick">发出事件</button>
  </div>
</template>

<style scoped>

</style>