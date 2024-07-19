function foo(){
    console.log(this)
}

foo()

foo.apply('123')

//箭头函数没this
var bar = () =>{
    console.log(this)
}
bar()

bar.apply('123')


//this的查找规则  层级往上找

// var obj = {
//     name: 'John',
//     foo: function () {
//         var demo = () => {
//             console.log('demo0', this)
//         }
//         return demo
//     }
// }
// var fn = obj.foo()
// fn.apply('123')

var obj = {
    name: 'John',
    foo: () => {
        var demo = () => {
            console.log('demo0', this)
        }
        return demo
    }
}
var fn = obj.foo()
fn.apply('123')