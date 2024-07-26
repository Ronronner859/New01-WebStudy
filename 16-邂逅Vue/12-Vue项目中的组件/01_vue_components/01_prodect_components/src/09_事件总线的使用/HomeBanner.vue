<script>
import eventBus from "./utils/event-bus";
export default {
  name: "HomeBanner",
  methods:{
    btnClick(){
      console.log('111')
      eventBus.emit("cyEvent","cy",'12',1.09)
    }
  }
}
</script>

<template>
  <div class="banner">
    <button @click="btnClick">点击</button>
  </div>
</template>

<style scoped>

</style>