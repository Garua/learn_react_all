// 不是引入的时候解构赋值，
import React, {Component} from 'react'
import Hello from "./components/Hello/hello";
import Welcome from "./components/Welcome/Welcome.jsx";
//创建暴露App组件

export default class App extends Component {
    render() {
        return (
            <div>
                <Hello/>
                <Welcome/>
            </div>
        )
    }
}

