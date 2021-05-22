import React, {Component} from 'react';
import {withRouter} from 'react-router-dom'

//一般组件没有路由组件上的api
class Header extends Component {
    back = ()=>{
        this.props.history.goBack()
    }
    forward = ()=>{
        this.props.history.goForward()
    }
    render() {
        // console.log('header收到的:',this.props)
        return (
            <div className="page-header">
                <h2>React Router Demo</h2>

                <button onClick={this.back}>back</button>
                <button onClick={this.forward}>forward</button>
            </div>
        );
    }
}


//withRouter加工完后的组件，具有路由组件特殊的api
//withRouter的返回值是一个新组件
export default withRouter(Header);
