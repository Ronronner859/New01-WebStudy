<script>
import {reactive,readonly} from "vue";
import ShowInfo from "./ShowInfo.vue";

export default {
  name: "App",
  components: {ShowInfo},
  setup(){
  //   本地定义多个数据，都需要传递给子组件
    const show = reactive({
      name:"chen",
      age:212
    })
    function changeInfoName(payload){
      // 规范修改
      show.name = payload
    }


    const roInfo = readonly(show)
    function roInfoName(payload){
      show.name = payload;
    }
    return {
      show,
      changeInfoName,
      roInfo,
      roInfoName
    }
  }
}
</script>

<template>
<div class="app">
  <h1>{{show}}</h1>
  <show-info :show="show" :roInfo="roInfo"
             @roInfoName="roInfoName"
             @changeInfoName="changeInfoName"/>
</div>
</template>

<style scoped>

</style>