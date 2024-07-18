/*
    调用一起函数，同时绑定一个this
 */
function foo(name,age,height){
    console.log(this)
    console.log(name,age,height)
}

foo('kobe', 12, 1.98)
/*
    第一个参数：绑定this
    第二个参数：传入额外的参数，以数组的形式
 */
foo.apply('hello world', ['kobe', 12, 1.98]);
/*
    第一个参数：绑定this
    参数列表：后续的参数是以多参数的一个形式的
 */
foo.call('call', "zhangsan", 213, 2.07);

// call 和 apply 第二个参数的传入的格式不一样