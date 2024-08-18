# react  组件化开发
    1.react项目创建，目录介绍
    2.index.js入口文件
    3.jsx的特点
    4.函数组件和类组件
    5.不同数据类型的渲染结果
    6.通过方法和类来渲染成真实的DOM对象
    7.react的事件绑定机制 类似与原生，on+事件名，事件名首字母必须大写
    8.this指向问题：通过bind事件或者是箭头函数去处理改变this的指向
        _1:bind方法规定this
        _2:写成一个匿名的箭头函数
        _3:方法本身写成箭头函数
    9.事件绑定
        _1:传递参数  ------>借助bind方法
        _2:获取事件对象   SyntheticBaseEvent 合成对象
        _3:阻止默认行为，冒泡等
    10.react的响应式数据
        _state属性  
          _1.react不能像vue-样直接修改触发更新
          _2.react修改能改值，但无法触发更新，因为react没有像vue一样监听get和set，而是在调用setState的时候调用react的更新操作
    11.条件渲染和列表循环
        没有指令
    12.props和组件间的传值，插槽
    13.react的样式操作
    14.react的生命周期
    15.ref和context