import logo from './logo.svg';
import './App.css';
import React  from 'react';


class App extends React.Component {
    constructor(props) {
        super(props);
    }
    f = (a,b,e) => {
        console.log(a,b,e)
        // event.stopPropagation()
        // event.preventDefault()
    }
    /*
    1.不作处理的情况下，this会指向undefined
    2.给到事件绑定的一定得是一个方法，不要直接调用方法调用方法只会在页面初次渲染指向方法
     */
    render() {
        return <div className="App">
            {/*<div onClick={this.f.bind(this)}>123</div>*/}
            {/*<div onClick={()=>{console.log(this)}}>123</div>*/}
            <div onClick={this.f.bind(this,12,231)}>123</div>

        </div>
    }
}

export default App;
