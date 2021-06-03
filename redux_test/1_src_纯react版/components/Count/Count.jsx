import React, {Component} from 'react';

class Count extends Component {
    state = {count:0}
    increment = ()=>{
        const {value} = this.selectNum//字符串
        const {count} = this.state
        this.setState({count:count+value*1})//*1会转换成数字
    }
    decrement = ()=>{
        const {value} = this.selectNum//字符串
        const {count} = this.state
        this.setState({count:count-value*1})//*1会转换成数字
    }
    incrementIfOdd = ()=>{
        const {value} = this.selectNum//字符串
        const {count} = this.state
        if(count & 1){//当前count为奇数的时候再加
            this.setState({count:count+value*1})//*1会转换成数字
        }
    }
    incrementAsync = ()=>{

    }
    render() {
        return (
            <div>
                    <h1>当前求和为：{this.state.count}</h1>
                {/*把当前的select节点，存储到组件实例自身的selectNum身上*/}
                <select ref={c =>this.selectNum = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementIfOdd}>求和为奇数在加</button>&nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}

export default Count;
