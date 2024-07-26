<script>
export default {
  name: "Home",
  data(){
    return {
      counter:0
    }
  },
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
    },
    addSum(){
      this.counter += 1
    }
  },
  created() {

  },
  unmounted() {
    console.log('home unmounted')
  },
  activated() {
    console.log('home activated')
  },
  deactivated() {
    console.log('home deactivated')
  },
}
</script>

<template>
  <div class="home">
    <h1>home组件 --{{name}} -- {{age}}</h1>
    <button @click="home">触发给app</button>
    <h1>{{counter}}</h1>
    <button @click="addSum">+1</button>
  </div>
</template>

<style scoped>

</style>