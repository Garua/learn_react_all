import React, {Component} from 'react';
import {connect} from "react-redux";
import {createIncrementAction} from "../../redux/actions/count";

class Count_1 extends Component {
    render() {
        return (
            <div>
                <h2>当前求和为：{this.props.count}</h2>
                <button onClick={this.add}>点我加1</button>
            </div>
        );
    }
    add = ()=>{
        this.props.jia(1)
    }
}

export default connect(
    state =>({count:state}),//映射状态
    {jia:createIncrementAction}//操作状态的方法
)(Count_1)

