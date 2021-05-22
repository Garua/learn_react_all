import React,{Component} from "react";
import './Welcome.css'
export default class Welcome extends Component{
    render() {
        //这里如果也叫title，会覆盖hello样式
        return <h2 className='title'>Hello,Welcome!</h2>
    }
}
