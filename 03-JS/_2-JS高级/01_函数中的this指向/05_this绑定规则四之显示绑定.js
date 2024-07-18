var obj = {
    name: "John",
}
function add() {
    console.log(this)
}

//执行函数，并且函数中的this指向obj对象
// obj.add = add
// obj.add()
// 执行函数，并且强制this就是obj对象  自己显示的明确告诉他绑定什么
add.call(obj)
add.call(412)