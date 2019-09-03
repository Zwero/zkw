import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// 1 引入 字体图标
import "./assets/fonts/iconfont.css";
import "./App.css";

// 1 引入 react-redux  负责将store和组件连接起来
import { Provider } from "react-redux";
// 1 引入 store
import store from "./store";


// 2 将App用 Provider 标签包裹起来
// 2 将store通过属性的方式传递到App组件上
ReactDOM.render(<Provider store={store} ><App /></Provider>, document.getElementById('root'));

