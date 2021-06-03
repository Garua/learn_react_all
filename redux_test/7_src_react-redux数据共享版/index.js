import App from "./App";
import React from "react";
import ReactDom from 'react-dom'
import store from "./redux/store";
import {Provider} from 'react-redux'

ReactDom.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'))

//使用了react-redux后，就不用我们自己监测redux的中的状态改变，并手动render了


//只要redux状态发生变化，App组件重新render，所有子组件重新render
//diffing算法，不会引起页面大面积更新
// store.subscribe(()=>{
//     ReactDom.render(<App/>,document.getElementById('root'))
// })
