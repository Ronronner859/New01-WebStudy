import Son2 from "./Son2";
// hook说白了就是一个方法  ---- vue3中的ref和reactive
import {useState,useEffect} from "react";
function App() {
    function Son(){
        return <h1>hello world</h1>
    }
    //Son是函数还是组件的这个问题？直接调用为方法， 加上简括号为组件
    // 函数体就相当于render函数
    // state
    let [msg,setMsg]  = useState('hello world') // 返回一个值和一个方法
    useEffect(()=>{
        console.log('effect')
    },[msg])
    return <div>this is app
          {msg}
        <button onClick={()=>{
            setMsg('hello world111')
        }}></button>
        <Son/>
        <Son2 fatherMsg=" i am fa"/>
    </div>
}
export default App;
