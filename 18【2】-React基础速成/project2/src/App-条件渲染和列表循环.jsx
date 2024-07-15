import logo from './logo.svg';
import './App.css';
import React  from 'react'
class App extends React.PureComponent {
    state = {
        show: true,
        arr:[1,2,3],
    }
    f(){
        if(this.state.show){
            return <h1>div</h1>
        }else {
            return ""
        }
    }
    getArr(){
        // for map
        let newArr = [];
        this.state.arr.forEach((item)=>{
            newArr.push(<div>{item}</div>)
        })
        console.log(newArr)
        return newArr

    }

    add = () => {
        let _arr = [...this.state.arr]
        _arr.push(Math.floor(Math.random()*_arr.length))
        this.setState({
            arr:_arr
        })
        return _arr
    };
    render() {
        return <div className="App">
            <div>条件渲染</div>
            {/*{this.state.show && <div>div1</div> }*/}
            {this.f()}
            <button onClick={() => {
                this.setState({
                    show: !this.state.show
                })
            }}>{this.state.show ? "show" : "hidden "}</button>

            <div>列表渲染</div>
            {/*{this.state.arr}*/}
            {/*{this.getArr()}*/}
            {this.state.arr.map((item,index)=>{
                return <div key={index}>{item}</div>
            })}

            <button onClick={this.add}>添加</button>
        </div>

    }

}

export default App;
