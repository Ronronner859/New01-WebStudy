setTimeout(function (){
    console.log(this)
},2000)


let names = ['ar','da']
names.forEach(function (item){
    console.log(this)
},'dad')