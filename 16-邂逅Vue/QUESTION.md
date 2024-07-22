## v-for中的key是什么作用? 主要是diff算法
    key属性主要用在Vue的虚拟DOM算法，在新I日nodes对比时辨识VNodes
    如果不使用key，Vue会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法;
    而使用key时，它会基于key的变化重新排列元素顺序，并且会移除/销毁key不存在的元素;
    底层主要实现的是diff算法 有key或无key主要vnode是否进行复用的一个操作
    有key可以提升浏览器渲染生成真实DOM的一个性能的
## computed 和 methods的区别？
    响应式数据的复杂逻辑都用computed
    computed内部是做了性能优化的
    在上面的实现思路中，我们会发现计算属性和methods的实现看起来是差别是不大的，而且我们多次提到计算属性有缓存的。
    这是什么原因呢?
    这是因为计算属性会基于它们的依赖关系进行缓存
    在数据不发生变化时，计算属性是不需要重新计算的:
    但是如果依赖的数据发生变化，在使用时，计算属性依然会重新进行计算
## 展开运算符的用法？
## 获取Vue创建的代理的原始对象？toRaw
## watch的基本用法，以及侦听选项？
    deep
    immediate
## vue事件绑定如何传递参数?如何传递event参数?
## v-for中的key有什么作用?什么是虚拟DOM?
## 什么是计算属性?和method有什么区别?
## 如何在Vue中侦听一个数据的改变?
## v-model的原理?
    官方有说到，v-model的原理其实是背后有两个操作:
    v-bind绑定value属性的值;
    v-on绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中
## 如何手动实现v-model?
## jsconfig的作用
## vue不同版本对template的处理方式
    默认vue版本:runtime，vue-loader元成template的编译过程
    vue.esm-bundler:runtime+compile,对template进行屏译
