<script>
import {reactive, ref, watch} from "vue";

export default {
  name: "App",
  data(){
    return {
      message:"hello"
    }
  },
  methods:{
    changeInfo(){
      this.message = 'hello Vue'
    }
  },
  watch:{
    message(newValue,oldValue){
      console.log(newValue,oldValue)
    }
  },
  setup(){
    const num = ref(21)
    const info = reactive({
      name:"chen",
      age:12,
      friend:{
        name:"kobe"
      }
    })
    watch(num,(newValue,oldValue)=>{
      console.log(newValue,oldValue)
    })
    // 侦听数据的变化
    watch(info,(newValue,oldValue)=>{
      console.log("info",newValue,oldValue)
    },{
       immediate:true
    })


    // 监听reactive 数据变化后，获取普通对象
    // 对代理对象proxy进行展开运算符，拿到里面的数据返回一个新的普通对象对象 ----浅拷贝
    watch(()=>({...info }),(newValue,oldValue)=>{
      console.log("...info",newValue,oldValue)
    },{
      immediate:true,
      // 再次修改时加上deep
      deep:true
    })

    const addNum = function (){
      num.value ++
    }
    return {
      num,
      addNum,
      info
    }
  }
}
</script>

<template>
<div class="app">
  <h2>{{message}}</h2>
  <button @click="changeInfo">改变</button>
  <hr>
  <h1>{{num}}</h1>
  <button @click="addNum">+1</button>
  <h2>{{info}}</h2>
  <button @click="info.name = 'hello world'">修改info</button>
  <button @click="info.friend.name =  'hello cy'">修改info2</button>
</div>
</template>

<style scoped>

</style>