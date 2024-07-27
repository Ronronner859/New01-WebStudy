
function foo(){
    let a = 1
    // console.log(a)
    return ()=>{
        console.log(a)
    }
}

foo()
let f2 =  foo()
f2()

