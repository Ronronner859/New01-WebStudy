<script>
import eventBus from './utils/event-bus'
export default {
  name: "Category",
  methods:{
    cyEventHandler(){
      console.log('监听')
    }
  },
  created() {
    eventBus.on('cyEvent',this.cyEventHandler);
  },
  unmounted() {
    console.log('移除')
    eventBus.off('cyEvent',this.cyEventHandler)
  }
}
</script>

<template>
  <div class="category">
    <h1>这是分类组件</h1>
  </div>
</template>

<style scoped>

</style>