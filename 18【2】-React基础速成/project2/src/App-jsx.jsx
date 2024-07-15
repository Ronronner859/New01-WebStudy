import logo from './logo.svg';
import './App.css';
import React from 'react';
// jsx和react是独立的  不用写jsx 也可以用react.createElement
function App() {
  console.log(<h1>jsx</h1>)
  console.log(React.createElement('h1', [], 'react'))
  // 新版本的vue3的组合式api
  // 首字母一定大写
  function Hello(){
    return <h1>Hello World</h1>
  }

  console.log(Hello())
  console.log(<Hello/>)
  let obj = Hello()
  // 老版本的vue2的选项式api
  class ClassHello extends React.Component{
    constructor(props) {
      super(props);
    }
    render() {
      return <h1>hello class</h1>
    }
  }

  /**
   * jsx的特点：
   *  直接在js中混用：React项目利用babel做了对js的编译，所以我们是可以直接在js里写jsx的
   *
   *  Jsx几乎和js一样，不同点就在于，可以更方便的写html在js里，写在is里的html最后会被编译成一个js对象，我们也可以用react自带
   * createElement创建这个对象
   */
  let arr = [123,32,31]
  /*
    渲染:数字 直接渲染
      字符串 直接
      对象  只能渲染element元素
      数组 每一项都渲染
      表达式 运行表达式
      方法 - 无法渲染
      undefined 无任何内容
   */
  return (
    <div className="App">
      {obj}
      {arr}
      <Hello/>
      <ClassHello/>
    </div>
  );
}

export default App;
