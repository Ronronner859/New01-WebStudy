// 1.直接调用
function foo() {
    console.log('this绑定规则一之默认绑定');
    console.log(this)
}
foo()

// 2.函数定义在对象之后，但是独立调用
var obj = {
    name: "John",
    bar:function (){
        console.log('bar',this)
    }
}
var bax =  obj.bar
bax()

// 3.高阶函数
function test(fn){
    fn()
}
test(obj.bar);
//4.严格模式下 独立调用的函数的this指向是指向undefined