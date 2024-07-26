<script>
import TopBar from "./TopBar.vue";
export default {
  name: "App",
  components: {
    TopBar
  },
  data(){
    return {
      products:['衣服列表','裤子列表',"鞋子列表"],
      currentIndex:0,
    }
  },
  methods:{
    change(index){
      console.log(index)
      this.currentIndex = index
      console.log(this.currentIndex)
    }
  }
}
</script>

<template>
  <div class="app">
<!--    topBar-->
  <top-bar :titles="['衣服','裤子','鞋子']" @showChange="change"></top-bar>
    <!--    展示的内容区域-->
    {{products[currentIndex]}}

    <top-bar :titles="['衣服','裤子','鞋子']" @showChange="change">
      <template #default="props">
        <button>{{props.item}}</button>
      </template>
    </top-bar>

    <top-bar :titles="['衣服','裤子','鞋子']" @showChange="change" v-slot="props">
      <a href="#">{{props.item}}</a>
<!--      如果只有一个默认插槽，那么template可以省略-->
<!--      <template #default="props">-->
<!--       -->
<!--      </template>-->
     </top-bar>


  </div>
</template>

<style scoped>

</style>