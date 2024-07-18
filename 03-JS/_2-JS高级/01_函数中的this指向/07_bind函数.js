
function foo(){
    console.log(this)
}

var obj = {name:'john'}

// 需求:调用foo时，总是绑定到6bj对象身上(不希望obj对象身上有函数)
// 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时进行使用
 var bar = foo.bind(obj);

bar()

console.log(foo)