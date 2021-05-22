import React,{Component} from "react";
import hello from './hello.module.css'
export default class Hello extends Component{
    render() {
        // 避免welcome中的样式覆盖它
        return <h2 className={hello.title}>Hello,React!</h2>
    }
}
