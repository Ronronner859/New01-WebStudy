<script>

import {reactive, computed, ref} from "vue";

export default {
  name: "App",
  setup(){
    const names = reactive({
      name:"chen 哈哈",
      age:12
    })
    // const fullName = computed(()=>{
    //   return names.name + " " + names.age
    // })

    const  fullName = computed({
      set:function (newValue){
        const newName = newValue.split(" ")
        names.name = newName[0]
        names.age = newName[1]
      },
      get:function (){
        return names.name + " " + names.age
      }
    })
    function setFullName(){
      fullName.value = 'coder why'
    }
    const score = ref(100)
    const scoreLevel = computed(()=>{
      return score.value > 60 ?"及格":"不及格"
    })
    return {
      names,
      fullName,
      scoreLevel,
      setFullName
    }
  }
}
</script>

<template>
  <div class="app">
    {{names.name + " " + names.age}}
    <hr>
    {{fullName}}
    <hr>
    {{scoreLevel}}
    <hr>
    <button @click="setFullName">修改</button>
  </div>
</template>

<style scoped>

</style>