import logo from './logo.svg';
import './App.css';
import React  from 'react'
class App extends React.PureComponent {
   state = {
       a:10,
       b:1,
       c:{
           c1:12,
           c2:123
       },
       arr:[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19]
   }

    Add = () => {
        // this.state.a += 1
        // console.log(this.state.a)
        // this.setState((state)=>{
        //     return {
        //         a: ++state.a
        //     }
        // })
        //通过object.assign来合并的
        this.setState({
            a:22,
            // b:12,
            // c: {
            //     ...this.state.c,
            //     c1:112
            // }
        //     浅合并 要补全  可以通过展开运算符
        },()=>{
            // 修改是异步的 不是同步的 在这里才能获取到更新后的值
            console.log(this.state.a)
        });
        // console.log(this.state.a)
    };

   Addarr(){
        // 针对数组和对象 的操作  内存地址判断  purC..需要解除引用
       let _arr =[...this.state.arr]
        _arr.push(100)
       this.setState({
           arr:_arr
       },()=>{
           console.log(this.state.arr)
       })
       this.setState({
           c:{
               ...this.state.c,
               c2:129312
           }
       })
   }
    render() {
        console.log('render')
        return <div className="App">
            {this.state.a}
            <button onClick={this.Add}></button>
            {this.state.arr}
            <button onClick={this.Addarr.bind(this)}></button>
        </div>
    }
}

export default App;
