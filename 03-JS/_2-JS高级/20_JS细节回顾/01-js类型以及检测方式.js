// // 引用类型是放在一个堆内存中进行使用
// let a = {
//     name: 'lee',
//     age: 18
// }
// let b = a;
// console.log(a.name);  //第一个console lee
// b.name = 'son'; //
// console.log(b)
// console.log(a.name);  //第二个console // son
// console.log(b.name);  //第三个console //son



let a = {
    name: 'Julia',
    age: 20
}
function change(o) {
    o.age = 24;
    o = {
        name: 'Kath',
        age: 30
    }
    return o;
}
let b = change(a);     // 注意这里没有new，后面new相关会有专门文章讲解
console.log(b.age);    // 第一个console
console.log(b)
console.log(a.age);    // 第二个console
console.log(a)
/*
30
01-js类型以及检测方式.js:29 {name: 'Kath', age: 30}age: 30name: "Kath"[[Prototype]]: Object
01-js类型以及检测方式.js:30 24
01-js类型以及检测方式.js:31 {name: 'Julia', age: 24}
 */