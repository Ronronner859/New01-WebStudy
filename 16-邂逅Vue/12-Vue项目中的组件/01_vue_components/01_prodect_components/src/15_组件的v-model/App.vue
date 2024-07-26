<script>
import Counter from "./Counter.vue";
import Counter2 from "./Counter2.vue";
export default {
  name: "App",
  components: {Counter,Counter2},
  data(){
    return {
      msg:"hello world",
      appCounter:100,
      appWhy:"hello vue"
    }
  },
  methods:{
    changeMsg(e){
      this.msg=e.target.value
      console.log(e)
    }
  }
}
</script>

<template>
  <div class="app">
<!--    <input type="text" :value="msg" @input="changeMsg">-->
<!--    {{msg}}-->
    <input v-model="msg">
    <input :value="msg" @input="msg = $event.target.value"/>
    {{msg}}
<!--    组件的v-model-->
<!--    <counter v-model="appCounter" ></counter>-->
<!--    在子组件中通过$emit注册事件，将数据作为参数传入，在父组件中通过$event接收 -->
<!--    默认的v-model-->
    <counter v-bind:modelValue="appCounter" @update:modelValue="appCounter = $event"></counter>

<!--    自定义-->
    <h1>自定义名称</h1>
<!--    <counter2 v-bind:counter="appCounter" @update:counter="appCounter = $event"></counter2>-->
    <hr>
    <Counter2 v-model:counter="appCounter" v-model:cy="appWhy" ></Counter2>
  </div>
</template>

<style scoped>

</style>