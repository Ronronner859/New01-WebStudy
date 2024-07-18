
function foo() {
    console.log(this)
    this.name = 'hello world'
}
 new foo()
// foo()
/*
1.创建一个空对象
2.将this指向这个空对象
3.指向函数体中的代码
4.没有显示返回的非空对象时，默认返回这个对象
 */