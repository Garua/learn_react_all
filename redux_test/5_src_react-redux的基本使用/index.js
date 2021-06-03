import App from "./App";
import React from "react";
import ReactDom from 'react-dom'
import store from "./redux/store";

ReactDom.render(<App/>,document.getElementById('root'))

//只要redux状态发生变化，App组件重新render，所有子组件重新render
//diffing算法，不会引起页面大面积更新
store.subscribe(()=>{
    ReactDom.render(<App/>,document.getElementById('root'))
})
