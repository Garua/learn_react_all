
import {connect} from "react-redux";
import React, {Component} from 'react';
import {increment,decrement,incrementAsync} from "../../redux/actions/count";

class Count extends Component {
    state = {carName: '大G'}
    increment = () => {
        const {value} = this.selectNum//字符串
        this.props.increment(value)
    }
    decrement = () => {
        const {value} = this.selectNum//字符串
        this.props.decrement(value)
    }


    incrementIfOdd = () => {
        const {value} = this.selectNum//字符串
        console.log(this.props.count)
        if(this.props.count & 1){
            console.log('奇数')
            this.props.increment(value)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNum//字符串
        this.props.incrementAsync(value,500)
    }

    render() {
        return (
            <div>
                <h2>我是Count组件</h2>
                <h4>当前求和为：{this.props.count},下方组件总人数为：{this.props.ps}</h4>
                {/*把当前的select节点，存储到组件实例自身的selectNum身上*/}
                <select ref={c => this.selectNum = c}>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>
                &nbsp;
                <button onClick={this.decrement}>-</button>
                &nbsp;
                <button onClick={this.incrementIfOdd}>求和为奇数在加</button>
                &nbsp;
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        );
    }
}

//映射状态
// const mapStateToProps = state => ({count: state})


//使用connect()()创建并暴露一个容器
export default connect(
    state => ({count: state.sum,ps:state.persons.length}),
   // mapDispatchToProps的简写，自动分发，传参
   {
       //这里可以触发对象的简写方式，可以省略
       increment: increment,
       decrement: decrement,
       incrementAsync: incrementAsync
    }
)(Count)

