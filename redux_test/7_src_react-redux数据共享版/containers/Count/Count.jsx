
import {createDecrementAction, createIncrementAction, createIncrementAsyncAction} from "../../redux/actions/count";
import {connect} from "react-redux";
import React, {Component} from 'react';

class Count extends Component {
    state = {carName: '大G'}
    increment = () => {
        const {value} = this.selectNum//字符串
        this.props.jia(value)
    }
    decrement = () => {
        const {value} = this.selectNum//字符串
        this.props.jian(value)
    }


    incrementIfOdd = () => {
        const {value} = this.selectNum//字符串
        console.log(this.props.count)
        if(this.props.count & 1){
            console.log('奇数')
            this.props.jia(value)
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNum//字符串
        this.props.jiaAsync(value,500)
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


//映射操作状态的方法
// const mapDispatchToProps = dispatch => ({
//     jia: value => dispatch(createIncrementAction(value)),
//     jian: value => dispatch(createDecrementAction(value)),
//     jiaAsync: value => dispatch(createIncrementAsyncAction(value, 500))
// })

// 简写1
// export default connect(
//     state => ({count: state}),
// mapDispatchToProps的一般写法
//     dispatch => ({
//         jia: value => dispatch(createIncrementAction(value)),
//         jian: value => dispatch(createDecrementAction(value)),
//         jiaAsync: value => dispatch(createIncrementAsyncAction(value, 500))
//     })
// )(CountUI)

//使用connect()()创建并暴露一个容器
export default connect(
    state => ({count: state.sum,ps:state.persons.length}),
   // mapDispatchToProps的简写，自动分发，传参
   {
        jia: createIncrementAction,
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }
)(Count)

