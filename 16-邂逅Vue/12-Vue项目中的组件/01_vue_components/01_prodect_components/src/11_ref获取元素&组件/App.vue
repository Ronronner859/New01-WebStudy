<script>
import Banner from "./Banner.vue"
export default {
  name: "App",
  components:{
    Banner
  },
  data(){
    return {
      message:"hello world",
      textColor:'red'
    }
  },
  methods:{
    btnChange(){
      this.message="hello Vue"
      this.textColor='green'
      // 获取元素
      console.log(this.$refs.title)
      console.log(this.$refs.btn)
      //获取 组件实例
      console.log(this.$refs.banner)
      // 获取组件中的方法
      console.log(this.$refs.banner.banClick())
    // 获取组件中的元素$el 根元素 如果banner template是多个根，拿到的是第一个node节点
      console.log(this.$refs.banner.$el)

      console.log(this.$parent)
      console.log(this.$root)
    }
  }
}
</script>

<template>
  <div class="app">
    <button ref="btn" @click="btnChange">改变</button>
    <h1 ref="title" :style="{color:textColor}">{{message}}</h1>
    <banner ref="banner"></banner>
  </div>
</template>

<style scoped>

</style>