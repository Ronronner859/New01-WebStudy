<script>
import ShowInfo from "@/02_组件通信-父传子/ShowInfo.vue";
export default {
  name: "App",
  components:{
    ShowInfo
  }
}
</script>

<template>
<!--  展示个人信息-->
  <h2>hello</h2>
  <show-info></show-info>
  <show-info name="why" :age="12" height="1.98" class="abd" id="aaa"/>
<!--  展示kobe的个人信息-->
  <show-info name="kobe" :age="32" height="2.09" show-message="呵呵哈哈哈"></show-info>
  <show-info name="kobe" :age="32" height="2.09" showMessage="呵呵哈哈哈"></show-info>

</template>

<style scoped>

</style>