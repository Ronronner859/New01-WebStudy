<script>
import {onMounted, ref} from "vue";
import Home from "@/06-setup中ref引入元素/Home.vue";

export default {
  name: "App",
  components: {Home},
  mounted() {
    // console.log(this.$refs.title)
    // console.log(this.$refs.btn)
  },
  setup(){
    const titleRef  = ref()
    // console.log(titleRef.value)
    const showHome = ref()
    // mounted生命周期函数
    onMounted(()=>{
      console.log(titleRef.value)
      console.log(showHome.value)

      // 调用组件内部的方法
      showHome.value.showHomeFoo()
    })
    function getElements(){
      console.log(titleRef.value)
    }
    return {
      titleRef,
      getElements,
      showHome
    }
  }
}
</script>

<template>
<div class="app">
  <h2 ref="titleRef">我是标题</h2>
  <button ref="btn">按钮</button>
  <button @click="getElements">获取元素</button>
  <hr>
  <home ref="showHome"></home>
</div>
</template>

<style scoped>

</style>