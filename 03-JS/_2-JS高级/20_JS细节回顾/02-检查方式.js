
// 1.typeof
console.log(typeof 2)
console.log(typeof "hello world")
console.log(typeof ['1','2']) //  []数组的数据类型在 typeof 中被解释为 object
console.log(typeof {
    name:"hello",
    age:12
})
console.log(typeof true)
console.log(typeof function (){})
console.log(typeof undefined)
console.log('111111111')
console.log(typeof null) //   null的数据类型在 typeof 中被解释为 object

// 2.instanceof instanceof 可以准确地判断复杂引用数据类型，但是不能正确判断基础数据类型；
console.log('-------------------')
console.log(2 instanceof Number)
console.log(true instanceof Boolean)
console.log([] instanceof Array)
console.log({} instanceof Object)
console.log(function () {

} instanceof Function)
// console.log(undefined instanceof Undefined);
// console.log(null instanceof Null);

var obj = {

}
console.log(obj)


// 3.constructor
console.log((2).constructor  === Number)


// 4.Object.prototype.toString
console.log(Object.prototype.toString({}))

