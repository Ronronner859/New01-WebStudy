<script>
export default {
  name: "Home",
  props:{
    name:{
      type:String,
      default:"-"
    },
    age:{
      type:Number,
      default:0
    }
  },
  emits:['homeClick'],
  methods:{
    home(){
      this.$emit("homeClick",this.name)
    }
  }
}
</script>

<template>
  <div class="home">
    <h1>home组件 --{{name}} -- {{age}}</h1>
    <button @click="home">触发给app</button>
  </div>
</template>

<style scoped>

</style>