# v-for指令中key&虚拟dom&diff算法【QUESTION】
## 1.认识一下v-for的作用
    简单说，vue可以使用v-for来遍历元素
## 2.重点说一下key属性
    那么在属性中，绑定key和不绑定key的一个区别是什么？
    key属性主要用在Vue的虚拟DOM算法，在新I日nodes对比时辨识VNodes
    如果不使用key，Vue会使用一种最大限度减少动态元素并且尽可能的尝试就地修改/复用相同类型元素的算法;
    而使用key时，它会基于key的变化重新排列元素顺序，并且会移除/销毁key不存在的元素;
    底层主要实现的是diff算法 有key或无key主要vnode是否进行复用的一个操作
    有key可以提升浏览器渲染生成真实DOM的一个性能的