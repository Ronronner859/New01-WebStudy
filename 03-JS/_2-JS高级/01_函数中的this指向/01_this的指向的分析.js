function foo() {
    console.log('Hello World!');
    console.log(this)
}
// 不同的方式会有不同的值
// 直接调用
// foo()

// 通过对象调用
var x = {name: "John"};
x.aaa = foo
x.aaa()