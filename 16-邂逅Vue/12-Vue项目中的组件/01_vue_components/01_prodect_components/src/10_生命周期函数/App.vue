<script>
import Home from './Home.vue'
export default {
  name: "App",
  components:{
    Home
  },
  data(){
    return {
      isShow:true
    }
  },
  methods:{

  },
  // 1.组件被创建之前
  beforeCreate(){
    console.log("beforeCreate组件被创建之前");
  },
  // 2.创建完成
  created() {
    console.log('created')
    console.log("1.发送网络请求")
    console.log("2.事件监听")
    console.log('3.监听数据$watch')
  },
  beforeMount(){
    console.log('beforeMount准备被挂载')
  },
  mounted() {
    console.log('mounted挂载完毕虚拟dom-真实dom')
    console.log('获取dom')
    console.log('使用dom')
  },
  beforeUpdate() {
    console.log('beforeUpdate准备更新页面，数据已经改变')
  },
  updated() {
    console.log('界面完成更新')
  },
  beforeUnmount() {
    console.log('卸载之前 卸载vnode')
  },
  unmounted() {
    console.log('卸载完毕')
  }
}
</script>

<template>
  <div class="app">
    <h1>app</h1>
    <button @click="isShow = false">显示home</button>
    <home v-if="isShow"></home>
  </div>
</template>

<style scoped>

</style>