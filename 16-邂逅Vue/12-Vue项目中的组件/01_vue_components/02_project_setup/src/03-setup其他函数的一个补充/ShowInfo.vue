<script>
import showInfo from "@/02-setup定义数据/ShowInfo.vue";

export default {
  name: "ShowInfo",
  computed: {
    showInfo() {
      return showInfo
    }
  },
  props:{
    show:{
      type:Object,
      default:() => {}
    },
    // readonly
    roInfo:{
      type: Object,
      default:() => ({})
    }
  },
  emits:["changeInfoName","roInfoName"],
  setup(props,context){
    function showInfoBtnClick(){
      context.emit("changeInfoName",'kobe')
    }
    function btnRoinfo(){
      context.emit("roInfoName",'hello world')
    }
    return {
      showInfoBtnClick,
      btnRoinfo
    }
  }
}
</script>

<template>
<div class="showing">
  <h1>{{show}}</h1>
<!--  代码没有错误，只是违背了规范---单向数据流  如果子组件修改了name,那么父组件也会同步更新，那么
  父组件也不会知道是哪个子组件进行更新的
-->
  <button @click="show.name = 'kobe'">修改</button>

<!--  正确的做法-->
  <button @click="showInfoBtnClick">正确修改</button>

<!--  readonly的数据-->
  <h2>read:{{roInfo}}</h2>

<!--  修改失败-->
  <button @click="roInfo.name = 'chenyi'">修改</button>

<!--  正确做法-->
  <button @click="btnRoinfo">修改2</button>
</div>
</template>

<style scoped>

</style>