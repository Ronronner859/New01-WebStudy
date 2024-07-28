<script>
import {onMounted, reactive, ref} from "vue";
import ShowInfo from "@/02-setup定义数据/ShowInfo.vue";

export default {
  name: "App2",
  components: {ShowInfo},
  data(){
    return {
      name:"hello"
    }
  },
  setup(){

    // reactive有应用场景
    /*
    1.1 reactive 应用本地的数据
    1.2 多个数据之间是有关系的、联系的（聚合的数据，集中在一起有特定的作用）
     */

    const account = reactive({
      username:"chen",
      password:"123456"
    })
    // 2 其他场景基本上都用ref 简单数据
    // 3.定义从网络中获取的数据也是ref

    let musics =reactive([])
    let musics2 = ref([])
    onMounted(()=>{
      const arr = ['1','2']
      //错误
      musics = arr
      musics2.value = arr
      console.log(musics)
      console.log(musics2.value)
    })

    return {account,musics,musics2}


  }
}
</script>

<template>
  <div class="app">
    <h2>{{account.username}}</h2>
    <h2>{{account.password}}</h2>
    <h2>{{musics}}</h2>
    <h2>{{musics2}}</h2>
    <form>
      账号：<input type="text" v-model="account.username">
      密码：<input type="password" v-model="account.password">
    </form>
    <hr>
    <show-info name="chen" :age="121"></show-info>
  </div>
</template>

<style scoped>

</style>