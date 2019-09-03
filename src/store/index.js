// 1 引入 store生成器
import { createStore } from "redux";
// 2 引入reducer
import reducer from "./reducer";
// 3 创建和对外暴露store
export default createStore(reducer);