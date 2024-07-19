
// 网络请求的工具函数
function requset(url,callbackfn){
    var result = [1, 2, 3, 4, 5];
    callbackfn(result)
}
// 实际操作的业务
var obj = {
    name:[],
    network: function (){
        // // 早期
        // var _this = this
        // requset('http://localhost:8080', function (res) {
        //     console.log(res)
        //     console.log([].concat(res))
        //     _this.name =  [].concat(res)
        // });
        // 箭头函数  去找上层的作用域
        requset('http://localhost:8080', res => {
            console.log(res)
            console.log([].concat(res))
            this.name =  [].concat(res)
        });
    }
}
obj.network();
console.log(obj)