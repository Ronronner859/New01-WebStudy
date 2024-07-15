import logo from './logo.svg';
import './App.css';
import React  from 'react'
import Son from "./son";
// let div1 = React.createRef()
let sonDiv = React.createRef();
class App extends React.PureComponent {

    state = {
        mes: "father"
    }
    div1 = React.createRef()
    componentDidMount() {
        // console.log(this.refs.div1)
        console.log(this.div1.current)  //获取DOM节点
        console.log(sonDiv.current.f());  //函数组件是不能获取的
    }

    render() {
        return <div className="App" ref={this.div1}>
            {this.state.mes}
            <Son ref={sonDiv}/>
        </div>
    }



}

export default App;
