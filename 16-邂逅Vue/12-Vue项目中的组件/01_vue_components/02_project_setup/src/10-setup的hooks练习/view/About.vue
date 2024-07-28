<script>
import useCounter from "../utils/useCounter";
import useTitle from "@/10-setup的hooks练习/hooks/useTitle";
import useScrollPosition from "@/10-setup的hooks练习/hooks/useScrollPosition";

export default {
  name: "About",
  setup(){
    useTitle('关于')
    // 3.滚动
    const { scrollPosition}  = useScrollPosition()
    return{
      ...useCounter(),
      scrollPosition
    }
  }
}
</script>

<template>
<div class="app">
  <h1>About</h1>
  <h2>简易计算器2：{{counter}}</h2>
  <button @click="addCounter">+1</button>
  <button @click="subCounter">-1</button>

  {{scrollPosition.x}}
  {{scrollPosition.y}}
</div>
</template>

<style scoped>

</style>