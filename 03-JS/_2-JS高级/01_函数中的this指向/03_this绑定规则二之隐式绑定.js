// 你不知道的JAVAs
// 也就是它的调用位置中，是通过某个对象发起的函数调用
function foo() {
    console.log(this)
}
var x = {
    bar:foo
}
x.bar()