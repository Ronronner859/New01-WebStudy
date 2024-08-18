// React核心库，提供react的个个功能。
import React from 'react';
/*
    提供一些dom操作方法用于把react创建出来的react对象挂载到真正
    的htmldom中，或者从htmIdom中卸载。核心作用类似于vue的mount。
    将虚拟dom到真实dom之上
 */
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// main.js 把项目挂载到指定的节点dom

//  reactdom就是将把一个react组件从一个真实的dom里面卸载，或者渲染成真实的dom
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// setTimeout(()=>{
//     root.unmount()
// },2000)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
