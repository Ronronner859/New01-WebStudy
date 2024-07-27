let a = 1
// fn 是闭包
function fn() {
    console.log(a);
}

function fn1() {
    let a = 1
    // 这里也是闭包
    return () => {
        console.log(a);
    }
}
const fn2 = fn1()
fn2()


var a = 1;
function fun1() {
    var a = 2
    function fun2() {
        var a = 3;
        console.log(a);//3
    }
}

function fun1() {
    var a = 2
    function fun2() {
        console.log(a);  //2
    }
    return fun2;
}
var result = fun1();
result();

var fun3;
function fun1() {
    var a = 2
    fun3 = function() {
        console.log(a);
    }
}
fun1();
fun3();

