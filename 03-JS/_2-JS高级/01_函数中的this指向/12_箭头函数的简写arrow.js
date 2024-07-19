
var names = ['zhangsan','lisi','wangwu']
names.forEach(function(name){
    console.log(name)
})
// 1. 只有一个参数 小括号可以省略  如果函数执行体中只有一行代码，那么可以省略大括号
names.forEach(item=> console.log(item))


names.forEach((item, index, array)=>{
    console.log(item, index, array);
});

var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var newNums = nums.filter(item => item % 2 !== 0);
// 箭头函数实现所有偶数平方的和

var sum = nums.filter(item => item % 2 === 0)
            .map(item => item * item)
            .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
console.log(sum)
console.log(newNums)

//2.如果函数执行体只有返回一个对象，那么需要给这个对象加上()
//注意：react中会经常使用
var foo = () => {
    console.log('123');
};
foo()

//如果是一个对象 对象和执行体是同一个表示  js引擎不会解析
var foo2 = () => ({name: "json"});
console.log(foo2())