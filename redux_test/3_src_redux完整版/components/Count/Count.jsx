import React, {Component} from 'react';
//引入store，用于获取redux中保存的状态
import store from "../../redux/store";
//引入actionCreator,专用用于创建action对象
import {createIncrementAction,createDecrementAction} from '../../redux/count_action'
class Count extends Component {
    //可以有自己的状态，需要交给redux的才不用自己写
    state = {carName: '大G'}
    increment = () => {
        const {value} = this.selectNum//字符串
        //通知redux，改状态，但是不会引起页面更新，
        store.dispatch(createIncrementAction(value*1))
    }
    decrement = () => {
        const {value} = this.selectNum//字符串
        store.dispatch(createDecrementAction(value*1))

    }

    //
    // componentDidMount() {
    //     //监测redux状态的变化，只要变化就调render
    //     store.subscribe(() => {
    //             //this.render(),不能这样手动调用，没有效果
    //             //改状态，状态驱动页面显示
    //             this.setState({})
    //         }
    //     )
    // }

    incrementIfOdd = () => {
        const {value} = this.selectNum//字符串
        const count = store.getState()
        if (count & 1) {//当前count为奇数的时候再加
            store.dispatch(createIncrementAction(value*1))//*1会转换成数字
        }
    }
    incrementAsync = () => {
        const {value} = this.selectNum//字符串
       setTimeout(()=>{
           //接收是一个对象
           store.dispatch(createIncrementAction(value*1))
       },1000)
    }

    render() {
        return (
            <div>
                <h1>当前求和为：{store.getState()}</h1>
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

export default Count;
