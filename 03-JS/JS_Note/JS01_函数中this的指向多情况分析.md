# JS_函数中的this的指向多情况分析

## 1.默认绑定

默认绑定this都是指向的window全局对象

JS中只要定义了一个方法，那么该方法就会有this指向，然而在不同的情况this的指向也会有所不同

情况一：函数直接调用

情况二：通过对象调用

情况三：箭头函数调用

```javascript
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
```

上面两种方式的调用this都是默认绑定，指向的window全局对象

补充：若是在严格模式"use strict"下，独立调用的函数的this指向是指向undefined

## 2.隐式绑定

隐式绑定this指向的是某个对象发起的函数调用，指向这个对象本身

```javascript
// 也就是它的调用位置中，是通过某个对象发起的函数调用
function foo() {
    console.log(this)
}
var x = {
    bar:foo
}
x.bar()
```

this指向的是x这个对象本身。

## 3.new关键字

使用new关键词时，会创建一个新的空对象，this指向这个空对象【简单解释】

```javascript

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
```

控制台打印结果为：*foo* *{}*

## 4.显式绑定apply、call、bind

### 4.1 call函数

可以执行call函数，强制this指向某一个对象，可以明确的告诉this绑定什么，直接了当

```javascript
var obj = {
    name: "John",
}
function add() {
    console.log(this)
}
// obj.add = add
// obj.add()
// 执行函数，并且强制this就是obj对象  自己显示的明确告诉他绑定什么
//执行函数，并且函数中的this指向obj对象
add.call(obj)
add.call(412)
```

### 4.2 apply函数

apply函数主要与call的区别是传入的参数格式不同，都可以明白告诉this绑定什么

```javascript
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
```

### 4.3 bind函数

bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为**新函数**的参数，供调用时进行使用

官方：Function.prototype.bind()

[`Function`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Function) 实例的 **bind()** 方法创建一个新函数，当调用该新函数时，它会调用原始函数并将其 `this` 关键字设置为给定的值，同时，还可以传入一系列指定的参数，这些参数会插入到调用新函数时传入的参数的前面。

```javascript

function foo(){
    console.log(this)
}
var obj = {name:'john'}

// 需求:调用foo时，总是绑定到obj对象身上(不希望obj对象身上有函数)
// 在 bind() 被调用时，这个新函数的 this 被指定为 bind() 的第一个参数，而其余参数将作为新函数的参数，供调用时进行使用
 var bar = foo.bind(obj);
bar()
console.log(foo)
```

经典案例：

```javascript
        const module = {
            x: 42,
            getX: function () {
                console.log('111')
                return this.x;
            },
        };

        /**
         * unboundGetX 没有绑定到 module，所以 this 指向全局对象，导致返回 undefined。
         * boundGetX 被绑定到 module，所以 this 指向 module，返回 42。
         *
         */
        const unboundGetX = module.getX;
        // 全局下调用unboundGetX是this会指向全局对象windows nodejs中指向global 全局中无x，输出undefined
        console.log(unboundGetX()); // The function gets invoked at the global scope
        // Expected output: undefined

        // bind 方法创建了一个新的函数，该函数的 this 永远指向 module。
        const boundGetX = unboundGetX.bind(module);
        console.log(boundGetX());
        // Expected output: 42
```

### 4.4 call()、apply()、bind()的区别及用法

简单用法：都是用来改变this的指向

**call、apply的一个区别：**

相同点：**都是调用一个对象的一个方法，用另一个对象替换当前对象（功能相同）**

不同点：参数格式不同

##### call()的第一个参数是this要指向的对象，后面传入的是参数列表，参数可以是任意类型，当第一个参数为null、undefined的时候，默认指向window；

##### apply()：第一个参数是this要指向的对象，第二个参数是数组[]

**call、bind的一个区别：**

相同点: 都是用来改变this的指向

不同点：call改变this的指向后会再执行函数，**bind改变this的指向后不会再执行函数，返回一个绑定新this的函数**【React有用到】

用法：call函数

1. **用来判断数据类型！**  延伸--判断数据类型的方式有哪几种？

>**在判断数据类形式使用typeof，一般不是太准确的，我们可以使用Object.prototype.toString.call()方法来判断一个数据的数据类型**

2. #### 利用call()翻转字符串

用法：apply函数

1. 进行求和计算 

### 4.5 扩展：函数绑定的新姿势 ——ES7 bind 运算符（::）

>ES7 bind 运算符是一种新的绑定语法，它使用两个冒号 (::) 表示，通常被称为 “双冒号运算符” 或者 “作用域解析运算符”。它的作用是将一个函数绑定到一个特定的上下文中。bind 运算符始终将左边的表达式作为函数的上下文（即 this），右边的表达式作为函数名，同时还会将左边表达式中的属性和方法转移到右边表达式中。
>

## 6.this绑定规则优先级

## 7.this绑定之外的规则

## 8.箭头函数的写法arrow function

## 9.箭头函数的简写arrow

## 10.箭头函数实现所有偶数平方的和

## 11.箭头函数中的this使用

## 12.箭头函数中this的应用【模拟网络请求】