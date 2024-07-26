<script>
export default {
  name: "Counter",
  props:{
    counter:{
      type: Number,
      default: 0
    },
    cy:{
      type:String,
      default:"22"
    }
  },
  emits:["update:counter","update:cy"],
  methods:{
    changeModel(e){
      console.log(e)
      this.$emit("update:counter",1000);
    },
    changeName(){
      this.$emit("update:cy","hello cy");
    }
  }
}
</script>

<template>
  <div class="counter">
    <h1>counter</h1>
    <h1>counter: {{counter}}</h1>
    <button @click="changeModel">修改</button>
    <h2>cy------{{cy}}</h2>
    <button @click="changeName">修改</button>
  </div>
</template>

<style scoped>

</style>