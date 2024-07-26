<script>
export default {
  name: "TopBar",
  data(){
    return {
      currentIndex:0
    }
  },
  props:{
    titles:{
      type:Array,
      required:true,
      default: () => [],
    }
  },
  emits:["showChange"],
  methods:{
    changeClick(index){
      this.currentIndex = index
      this.$emit('showChange',index)
    }
  }
}
</script>

<template>
  <div class="tob-bar">
    <template v-for="(item,index) in titles" :key="index">
     <div class="tob-bar-item" :class="{active:index === currentIndex}"
      @click="changeClick(index)"
     >
       <slot :item="item" abc="abc">
         <span>{{item}}</span>
       </slot>
     </div>
    </template>
  </div>
</template>

<style scoped>
.tob-bar{
  display: flex;
  height: 44px;
  line-height: 44px;
  text-align: center;
}
.tob-bar-item{
  flex: 1;
}
.tob-bar-item.active{
  color: red;
}
.tob-bar-item.active span{
  border-bottom: 4px solid red;
}
</style>