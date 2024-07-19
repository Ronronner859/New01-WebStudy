// "use strict"; 清况一:如果在显示绑定中，我们传入一个null或者undefined，那么这个显示绑定会被忽略，使用默认规则:
function foo(){
    console.log(this)
}
foo.apply('31')
foo.apply(null)
foo.apply(undefined)
console.log('11')
//情况二:间接函数引用
var bar1 = {
    name:'john',
    foo:function (){
        console.log(this)
    }
}
var bar2 = {
    name:'john2',
};
// {}[]() 必须加分号 默认绑定还是
(bar2.foo = bar1.foo)()
