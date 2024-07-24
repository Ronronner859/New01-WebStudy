<script>
export default {
  name: "ShowInfo",
  // props 接受父组件传过来的属性 数组语法
  // 弊端：1.不能对类型进行一个验证 2.没有默认值
  // props:["name","age","height"]
  // 对象语法
  // props:{
  //   name:String,
  //   age:Number,
  //   height:String
  // }

  inheritAttrs:false,
  // 必须掌握
  props:{
    name:{
      type:String,
      required:true,
      default:'hello'
    },
    age:{
      type:Number,
      default:0
    },
    height:{
      type:String,
      default:'2.00'
    },
    friend:{
      type:Object,
      default:() => ({name:"呵呵呵"})
    },
    // 数组写默认值写default的函数
    hobbies:{
      type:Array,
      default: ()=>['rap','sing']
    },
    showMessage:{
      type:String,
      default:'hello world'
    }
  }
  /**
   * props是你可以在组件上注册一些自定义的attribute
   * 子组骅通过attribute的名称获取到对应的值
   * 父组件给这些attribute赋值
   */
}
</script>

<template>
  <div class="info">
    <h2 :class="$attrs.class">{{name}}</h2>
    <h2>{{age}}</h2>
    <h3>{{height}}</h3>
    <h1>{{showMessage}}</h1>
  </div>
</template>

<style scoped>
.info{
  background-color: skyblue;
}
</style>