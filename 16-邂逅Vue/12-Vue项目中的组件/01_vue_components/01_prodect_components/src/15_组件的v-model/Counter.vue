<script>
export default {
  name: "Counter",
  props:{
    modelValue:{
      type: Number,
      default: 0
    },
    Why:{
      type: String,
      default: " 12"
    }
  },
  emits:["update:modelValue"],
  methods:{
    changeModel(e){
      console.log(e)
      this.$emit("update:modelValue",1000);
    }
  }
}
</script>

<template>
  <div class="counter">
    <h1>counter</h1>
    <h1>counter: {{modelValue}}</h1>
    <button @click="changeModel">修改</button>
    {{Why}}
  </div>
</template>

<style scoped>

</style>