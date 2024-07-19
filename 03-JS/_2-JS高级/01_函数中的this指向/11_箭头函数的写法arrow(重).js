function foo(){}
var foo1 = function (){}


var foo2 = () => {}

var foo3 = () => {}
/*
    箭头函数不会绑定this、arguments属性
    箭头函数不能作为构造函数来使用(不能和new一起来使用，会抛出错误);
 */

var names = ['zhangsan','lisi','wangwu']
names.forEach(function(name){
    console.log(name)
})

names.forEach(item=> console.log(item))

names.forEach((item, index, array)=>{
    console.log(item, index, array);
});

