// function foo(){
//     console.log(this)
// }

// var bar = {foo:foo}
// // 比较优先级 显的比较高
// bar.foo.apply('dad')


// var bar = foo.bind('dad2')
// var obj = {
//     name: 'John',
//     baz:bar
// }
// obj.baz()
// new 的优先级大于 隐藏
// var obj = {
//     name: 'John',
//     foo: function (){
//         console.log(this)
//         console.log(obj)
//     }
// }
// new obj.foo()

// new 和 call 、apply是不允许同时使用的

// new 高于bind
// function foo(){
//     console.log(this)
// }
// var bar = foo.bind('123')
// new bar()

// bind优先级高与call 、 apply
function foo(){
    console.log(this)
}
var bar = foo.bind('123')
bar.apply('1231')